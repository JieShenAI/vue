<template>
  <div>
    <div>
      <p v-show="!see" @mouseover="Mouseover" @mouseleave="Mouseleave">
        {{ textValue }}
        <a-icon
          type="edit"
          @click="change"
          :style="{ visibility: visible, marginLeft: 5 + 'px' }"
        />
        <a-icon
          type="plus-circle"
          @click="addT"
          :style="{ visibility: visible, marginLeft: 5 + 'px' }"
        />
        <!-- <a-icon
          type="delete"
          @click="deleteT"
          :style="{ visibility: visible, marginLeft: 5 + 'px' }"
        /> -->

        <a-popconfirm
          title="确定删除?"
          ok-text="确定"
          cancel-text="取消"
          @confirm="deleteT"
        >
          <a href="#">
            <a-icon
              type="delete"
              :style="{ visibility: visible, marginLeft: 5 + 'px' }"
            />
          </a>
        </a-popconfirm>
      </p>
    </div>
    <a-textarea
      ref="atextarea"
      v-show="see"
      v-model="textValue"
      :auto-size="{ minRows: 3 }"
      @blur="editT"
    />
  </div>
</template>

<script>
export default {
  props: ["textObj", "id"],
  data() {
    return {
      textKey: Object.keys(this.textObj)[0],
      textValue: Object.values(this.textObj)[0],
      see: false,
      edit: false,
      visible: "hidden",
      preValue: Object.values(this.textObj)[0],
    };
  },
  methods: {
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
    },
    // 编辑框失去焦点,保存文本框内的修改
    editT() {
      this.see = false;
      // 只有文本被修改了,才会触发事件
      if (this.textValue !== this.preValue) {
        console.log("修改后的值: ", this.textValue);
        this.$emit("sendTxt", this.id, {
          [this.textKey]: this.textValue,
          id: this.id,
        });
        this.preValue = this.textValue;
      }
    },
    addT() {
      this.$emit("addText", this.id, "新文本");
    },
    deleteT() {
      this.$emit("deleteText", this.id);
    },
  },
};
</script>

<style></style>
