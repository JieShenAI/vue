<template>
  <div>
    <div>
      <p v-show="!see" @mouseover="Mouseover" @mouseleave="Mouseleave">
        <a-icon type="edit" @click="change" :style="{ visibility: visible}" />
        {{ textValue }}
      </p>
    </div>
    <a-textarea ref="atextarea" v-show="see" v-model="textValue" :auto-size="{ minRows: 3 }" @blur="show" />
  </div>
</template>

<script>
export default {
  props: ["textObj", "idx"],
  data() {
    return {
      textKey: Object.keys(this.textObj)[0],
      textValue: Object.values(this.textObj)[0],
      see: false,
      edit: false,
      visible: "hidden"
    }
  },
  methods: {
    show() {
      this.see = false;
    },
    change() {
      this.see = true;
      this.$nextTick(() => this.$refs.atextarea.focus());
    },
    Mouseover() {
      this.edit = true;
      this.visible = "visible";
    },
    Mouseleave() {
      this.edit = false;
      this.visible = "hidden";
      this.$emit("sendTxt", this.idx, {[this.textKey]:this.textValue});
    }
  },
}
</script>

<style>
</style>