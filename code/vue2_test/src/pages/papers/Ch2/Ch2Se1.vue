<template>
  <div>
    <div v-show="false" ref="content">
      <h1>发展现状分析</h1>
      <h2>产业发展成就</h2>
      <h3>（一）基本经济指标</h3>
      <h4>1. 地区生产总值</h4>
      <p>
        2021年恩施实现地区生产总值￥{{ gdp }}亿元，按可比价格计算，比上年增长{{
          gdpIncrease
        }}%（名义增速16.5%），
        经济总量和增速在湖北省地级行政区位居第11位和第5位，高于同年{{
          provinceGdpIncrease
        }}%的全省平均增速；
        在全国地级行政区中位居第___位，高于同年8.1%的全国平均增速。全州人均地区生产总值38011（37642）元，
        在湖北省地级行政区位居第13位，低于同年全省86600的平均水平，在全国地级行政区中位居第___位，
        低于同年全国81000元的平均水平。
        总体来看，恩施州目前经济发展水平相对落后。
      </p>
      <p>
        从过去十年的地区生产总值来看，恩施州经济总量规模持续扩大，
        （排除2020年受疫情因素影响的情况下）地区生产总值和人均地区生产总值均表现出逐年上升的增长趋势。
        从增速来来看，地区生产总值的增速高于全省/全国平均水平，并保持稳定在高增长水平（但呈现出小幅度波动）；
        人均地区生产总值的增速高于同样全省/全国平均水平，并保持稳定在高增长水平（但呈现出小幅度波动）。
      </p>
      <img :src="serverStaticPath('/img/ch2-1.png')" alt="" />
      <h4>2. 地区财政水平</h4>
      <p>
        2021年，恩施全州地方财政总收入168.75亿元，比上年增长17.8%。其中，地方一般公共预算收入75.51亿元，增长31.0%。
        税收收入56.91亿元，增长29.6%。
        全年一般公共预算支出376.49亿元，下降19.9%。财政自给率（一般公共预算收入/一般公共预算支出）为20.05%，
        财政自给率在湖北省地级行政区位居第___，低于/高于全省平均水平。
      </p>
      <h4>3. 地区资产规模</h4>
      <p>
        2020年，恩施全州新增固定资产247164万元，比上年增长 %。固定资产积累达到
        亿元； 规模以上固定资产原价为
        万元。全年固定资产投资比上年增长23.3%。分产业看，第一产业投资增长69.0%；
        第二产业投资增长15.6%；第三产业投资增长24.0%。实际利用外资
        万美元，比上年增长 %。
      </p>
      <h4>4.地区消费市场</h4>
      <p>
        2020年，社会消费品零售总额为5625925万元，居民消费水平为19710元，农村居民为13525元，城市居民为26909元，
        比上年分别增长 %、 %、
        %。进出口总额为9435.70万美元，其中出口9375.5万美元，进60.2万美元，
        比上年分别增长 %、 %、
        %。城镇常住居民人均可支配收入为30930元，生活消费支出为21898万元；
        农村常住居民人均可支配收入11887元，生活消费支出10061元，比上年分别增长
        %、 %、 %。
      </p>

      <h3>（二）产业结构变化</h3>
      <p>
        2021年，恩施州第一产业增加值224.51亿元，同比增长12.4%；第二产业增加值299.26亿元，同比增长13.1%；
        第三产业增加值778.60亿元，同比增长11.0%。三次产业结构比17.2:23.0:59.8。
        结合过去十年的产业结构变化情况来看，恩施州第二产业在经济中的占比较低，
        工业化进程滞后于湖北省和全国平均水平（第二产业比重低于全省/全国平均比重）。
      </p>
      <p>
        全年规模以上工业中，农副食品加工业增加值比上年增长28.9%，酒、饮料和精制茶制造业增长13.0%，
        医药制造业增长87.6%，非金属矿物制品业增长22.0%，计算机、通信和其他电子设备制造业增长46.7%，
        电力、热力生产和供应业增长5.2%。
      </p>
      <p>
        全年批发和零售业增加值89.38亿元，比上年增长12.1%；交通运输、仓储和邮政业增加值39.64亿元，增长15.5%；
        住宿和餐饮业增加值40.41亿元，增长23.0%；金融业增加值69.06亿元，增长3.0%；房地产业增加值138.17亿元，
        增长8.6%；信息传输、软件和信息技术服务业增加值32.05亿元，增长23.0%。
      </p>
      <h3>（三）重点产业平台</h3>
      <h4>1.恩施高新区技术产业园区</h4>
      <p>
        发展历程：2017年10月18日，省人民政府批复同意设立恩施州高新技术产业园区，享受省级高新技术产业园区的相关政策。
        2018年1月18日，高新区与恩施市人民政府签订托管协议，正式托管六角亭街道办事处全境，面积约81.77平方公里；
        舞阳坝街道办事处金子坝村11.66平方公里维持原托管方式。
        2018年1月21日，中共恩施州高新技术产业园区工作委员会、恩施州高新技术产业园区管理委员会正式挂牌。
      </p>
      <p>
        发展定位：高新区将坚持生态发展、特色开发、绿色繁荣发展，着力推进国家高新区的战略引领和创新示范作用，
        打造具有国际影响力的“恩施·中国硒谷”，建设“生态型、科技型、创新型”产业园区。建设中国富硒产业发展引领区，
        立足恩施富硒资源优势和技术积累，在富硒食品、绿色用品等方面加快新技术、新产品研制开发，构建完整的富硒产业链，
        打造具有国际影响力的中国富硒产业发展引领区。
      </p>
      <p>
        发展目标与主导产业：按照州委、州政府确定的“一年打牢基础，两年出形象，
        三年建成国家级高新区”总体目标，
        着力打造硒食品精深加工、生物医药、电子信息和现代物流四大产业集群。
      </p>
      <p>
        空间布局：目前，恩施州高新技术产业园区按照“一城一心、两区四园六廊”
        （一城，即施州古城；一心，即月亮岩科技研发中心；两区，即望城坡－高桥坝生态康养区、谭家坝科教区；
        四园，即生物医药产业园、硒产业园、电子信息产业园、高新南综合产业园；
        六廊，即高旗大道生态廊道、高桥河生态廊道、月亮岩生态廊道、四道河－安来高速生态廊道、巴公溪生态廊道、
        清江生态廊道）的功能分区进行规划结构布局。
      </p>
      <h4>2.恩施大峡谷景区</h4>
      <p>
        恩施大峡谷是国家AAAAA级旅游景区、国家地质公园，拥有“世界地质奇观－东方科罗拉多”之美誉。
        景区位于湖北省恩施市境内，距恩施市区49千米，距利川市区39千米，高速、国道、铁路（动车）、
        航空、水运通达市区，交通便捷。恩施大峡谷，不偏不倚落脚于神秘的“北纬30度”，是全球最长、最美丽的大峡谷之一，
        峡谷全长108公里，总面积达300余平方公里。
      </p>
      <p>
        2020年恩施全州旅游接待人数34992361人次，累计旅游综合收入达到2021600万元。全州共有旅行社133家，
        三星级以上饭店46各，4A级以上景区20个。
      </p>
      <h3>（四）重点企业发展情况</h3>
      <p>
        一是总量增加。“十三五”末，全州全口径工业总产值突破600亿元，规模以上工业企业达到293家，
        2020年规上工业增加值增速9.7%。
      </p>
      <p>
        二是质效提升。2020年规上工业企业实现利润22.2亿元，实现税收7.7亿元。
        规上工业企业户均产值由“十二五”末的2300万元提升到5573万元，年产值亿元以上企业达到38家。
        其中，建材行业规上企业达到49家，水泥产能达到560万吨。食品规上企业达到107家，鑫农等茶企成长为亿元企业，
        “恩施玉露”“利川红”成为武汉东湖国事活动茶叙用茶和第七届世界军运会用茶。
      </p>
      <p>
        三是新兴产业发展迅猛。武汉国家生物产业基地恩施生物医药产业园落户恩施高新区，人福医药物流园基地开工建设，
        国家中药材质量监督检验中心启动建设，生物医药产业规上企业达到11家。全州新增39家高新技术企业，总数达到62家，
        其中规上企业中高新技术企业达到33家，占比由“十二五”末的4.42%提高到11.3%，高新企业增加值占GDP比重
        由1.44%提高到2.65%。鼓励企业走专特新精之路，3家企业被认定为省专精特新“小巨人”企业。
        18家企业被认定为湖北省支柱产业细分领域科技小巨人或隐形冠军培育企业。
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
// import axios from "axios";
import { obj, findIdx } from "../data";
import TxtEdit from "@/components/TxtEdit.vue";
import { nanoid } from "nanoid";
import { reqAreaInfo } from "@/api";
import { serverStaticPath } from "@/utils/staticSrc";
var curKey = "2-1";
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
  created() {
    // 若this.arr未从内存读取到数据，才会向API获取数据
    if (this.arr == false) {
      this.getData();
    }
  },
  mounted() {},
  methods: {
    serverStaticPath,
    async getData() {
      // let url = "http://localhost:80/api/jsons/query?year=2021&cityID=422801";
      let data = { year: 2021, cityID: 422801 };
      let res = await reqAreaInfo(data);
      if (res.code == 200) {
        this.init(res.data);
        setTimeout(() => {
          this.fillParagraphText();
        });
      } else {
        console.log("请求失败了");
      }
      // axios.get(url).then(
      //   (response) => {
      //     console.log("请求成功了", response.data);
      //     this.init(response.data);

      //     setTimeout(() => {
      //       this.fillParagraphText();
      //     });
      //   },
      //   (error) => {
      //     console.log("请求失败了", error.message);
      //   }
      // );
    },
    init(obj) {
      this.avgGdp = obj.avgGdp;
      this.avgProvinceGdp = obj.avgProvinceGdp;
      this.cityID = obj.cityID;
      this.countryGdp = obj.countryGdp;
      this.countryGdpIncrease = obj.countryGdpIncrease;
      this.gdp = obj.gdp;
      this.gdpIncrease = obj.gdpIncrease;
      this.provinceGdp = obj.provinceGdp;
      this.provinceGdpIncrease = obj.provinceGdpIncrease;
      this.year = obj.year;
    },
    fillParagraphText() {
      // 后续使用push，防止this.arr原先有值
      this.arr = [];
      // 将获取了数据库数据的页面上的文本添加到arr数组中
      let nodes = this.$refs.content.childNodes;
      for (let node of nodes) {
        if (node.tagName == "IMG") {
          this.arr.push({
            [node.tagName]: node.src,
            id: nanoid(),
          });
        } else {
          this.arr.push({
            [node.tagName]: node.innerText,
            id: nanoid(),
          });
        }
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
