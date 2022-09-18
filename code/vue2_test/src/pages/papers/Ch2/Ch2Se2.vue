<template>
  <div>
    <div v-show="false" ref="content">
      <h2>现存发展问题</h2>
      <h3>（一）总量规模不大</h3>
      <p>
        一是总量小。全州规上企业数仅占全省的2%，产值仅占全省的0.5%。
        二是规模小。规上企业户均产值仅为全省企业平均水平的三分之一。三是增速低。受煤炭去产能、
        统计口径调整、退规企业较多、新冠疫情等多重因素影响，规上工业增长波动起伏较大。
      </p>
      <h3>（二）产业结构不优</h3>
      <p>
        一是水电、建材产业占比过重。能源、建材行业规上工业产值占比分别达到25.9%、22.2%，
        全州规上工业增加值增速受自然降雨量、传统基建项目、房地产市场影响波动较大。
        二是食品、医药产业层次偏低。绝大多数农副食品和药材生产企业仍处在低附加值的初加工阶段。
        食品生产企业产能利用率仅为20%左右，户均产值不到5000万元。三是招商质量有待提高。
        重点工业项目落地少，除电子信息产业外，其他产业特别是先进制造业招商引资成效尚不明显。
        四是产业内部组织结构不优。
        主导产业目前没有按照专业化分工形成完整的产业链，实现集群式发展、链式发展。
      </p>
      <h3>（三）要素保障不够</h3>
      <p>
        一是土地供应紧张。全州新增建设用地十分有限，新增工业供地更加紧张，
        加之高压电网迁移、居民拆迁成本等因素制约，恩施高新区、各县市园区未来供地空间有限。
        二是土地集约节约程度低。投资强度、产出密度处于较低水平。部分土地出让后企业破产、项目停滞，
        占用的工业用地长期不能发挥效益，个别县市情况比较严重。三是企业生产成本较高。
        用电成本、物流成本等与周边省市相比不占优势。四是发展支撑不够。特别是电子信息、
        生物医药等新兴产业的科技创新平台、专业研发人才、市场营销人才、技术工人严重不足，
        企业用人缺口和稳岗问题比较突出。
      </p>
      <h3>（四）发展能力不足</h3>
      <p>
        一是行业管理机制不顺。部分行业管理部门省、州、县上下不对应，衔接不顺畅严重影响工作效率；部分行业管理职责不够明确。二是引领行业发展不够。重企业轻产业，对产业发展的总体谋划、发展定位、路径研究、问题解析、运行调度不够。恩施玉露、利川红等品牌价值未充分发挥，硒食品、药材等优质资源精深加工方向不够明确，龙头企业培育效果不佳，建材特别是商砼产能过剩等行业突出问题未能有效解决。三是行业管理能力不强。各行业管理部门普遍存在行业管理人员力量不足、业务素质不强、系统培训不多的短板。
      </p>
    </div>
    <div v-for="data in arr" :key="data.id">
      <TxtEdit
        :textObj="data"
        @editText="editText"
        @addText="addText"
        @deleteText="deleteText"
        :id="data.id"
      />
    </div>
  </div>
</template>

<script>
import { obj, findIdx } from "../data";
import TxtEdit from "@/components/TxtEdit.vue";
import { nanoid } from "nanoid";
var curKey = "2-2";
export default {
  props: ["papers"],
  components: {
    TxtEdit,
  },
  data() {
    return {
      ...obj(), // 初始化赋值为0
      arr: this.papers[curKey] || [],
    };
  },
  created() {},
  mounted() {
    if (this.arr == false) {
      this.fillParcagraphText();
    }
  },
  methods: {
    init() {
      // 可参考ch2se1的初始化
    },
    fillParagraphText() {
      // 将获取了数据库数据的页面上的文本添加到arr数组中
      let nodes = this.$refs.content.childNodes;
      for (let node of nodes) {
        this.arr.push({
          [node.tagName]: node.innerText,
          id: nanoid(),
        });
      }
    },
    editText(id, obj) {
      this.arr[findIdx(this.arr, id)] = obj;
      this.save();
    },
    deleteText(id) {
      this.arr.splice(findIdx(this.arr, id), 1);
      this.save();
    },
    addText(id, textValue) {
      this.arr.splice(findIdx(this.arr, id) + 1, 0, {
        P: textValue,
        id: nanoid(),
      });
      this.save();
    },
    save() {
      this.$bus.$emit("updatePapers", curKey, this.arr);
    },
  },
  beforeDestroy() {
    this.save();
  },
};
</script>

<style></style>
