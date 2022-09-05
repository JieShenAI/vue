<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <!-- <div class="logo"><p>文字</p></div> -->
      <div class="logo">
        <div class="logoTxt">产业规划</div>
      </div>
      <a-menu theme="dark" mode="horizontal" :default-selected-keys="['2']" :style="{ lineHeight: '64px' }">
        <a-button-group>
          <div>
            <!-- <a-button type="primary" icon="cloud-upload" style="height: 80%" @click="savePaper"></a-button> -->
            <!-- <a-button
              type="primary"
              icon="cloud-download"
              style="height: 80%"
              @click="getData"
            ></a-button> -->
          </div>

          <div>
            <!-- <a href="http://127.0.0.1/paper/downword" style="height: 80%">导出</a> -->
            <a-button type="primary" @click="goPage('print')">导出</a-button>
          </div>
        </a-button-group>
        <!-- <a-menu-item key="3"> nav 3 </a-menu-item> -->
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="250px" style="background: #fff">
        <div style="margin-top: 10px">
          <a-switch :default-checked="false" @change="changeMode" /> 排列
          <span className="ant-divider" style="margin: 0 1em" />
          <a-switch :default-checked="false" @change="changeTheme" /> 主题
        </div>
        <br />
        <a-menu style="width: 256x" :default-selected-keys="['1']" :default-open-keys="['sub1']" :mode="mode"
          :theme="theme">
          <a-sub-menu key="ch1">
            <span slot="title" @click="goPage('ch1-1')">
              <span>规划编制背景</span>
            </span>
          </a-sub-menu>

          <a-sub-menu key="ch2">
            <span slot="title">
              <span>发展现状分析</span>
            </span>
            <a-menu-item key="ch2-1" @click="goPage('ch2-1')">产业发展成就</a-menu-item>
            <a-menu-item key="ch2-2" @click="goPage('ch2-2')">现存发展问题</a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="ch3">
            <span slot="title">
              <span>发展条件与环境</span>
            </span>
            <a-menu-item key="3" @click="goPage('xxx')">地区要素条件分析</a-menu-item>
            <a-menu-item key="4" @click="goPage('xxx')">地区发展环境分析</a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="ch4">
            <span slot="title">
              <span>总体要求</span>
            </span>
            <a-menu-item key="ch4-1">（一）指导思想</a-menu-item>
            <a-menu-item key="ch4-2">（二）基本原则</a-menu-item>
            <a-menu-item key="ch4-3"> （三）发展思路</a-menu-item>
            <a-menu-item key="ch4-4"> （四）发展目标</a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="ch5">
            <span slot="title">
              <span>地区产业体系</span>
            </span>
            <a-menu-item key="ch5-1">（一）重点产业类型</a-menu-item>
            <a-menu-item key="ch5-2">（二）地区产业体系</a-menu-item>
            <a-menu-item key="ch5-3"> （三）产业发展策略</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>

      <a-layout style="padding: 0 24px 24px">
        <!-- <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb> -->
        <a-layout-content :style="{
          background: '#fff',
          padding: '24px',
          margin: 0,
          minHeight: '600px',
        }">
          <!-- 修改注销minHeight 备份 -->
          <!-- <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        > -->

          <!-- <keep-alive>
            <router-view></router-view>
          </keep-alive> -->
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>


<style>
#components-layout-demo-top-side-2 .logo {
  position: relative;
  width: 120px;
  height: 31px;
  /* background: rgba(255, 255, 255, 0.2); */
  /* background: url("https://www.pkuplanning.com/upload/img/20200411234857.png"); */
  margin: 16px 28px 16px 0;
  float: left;
  /* border: 2px red solid; */
}

.logo .logoTxt {
  position: absolute;
  color: aliceblue;
  margin: 0 auto;
  line-height: 31px;
  font-size: 16px;
}

p {
  /* text-indent: 2em; */
  text-align: left;
  font-size: 17px;
}

h2,
h3,
h4 {
  text-align: left;
}

h1 {
  font-size: 25px;
  margin-left: 5px;
}

h2 {
  font-size: 23px;
  margin-left: 10px;
}

h3 {
  font-size: 20px;
  margin-left: 15px;
}

h4 {
  font-size: 18px;
  margin-left: 20px;
}


.right {
  float: right;
}
</style>


<script>
export default {
  name: "ShowPaper",
  components: {},
  data() {
    return {
      // collapsed: false,
      mode: "inline",
      theme: "light",
    };
  },
  mounted() { },
  methods: {
    changeMode(checked) {
      this.mode = checked ? "vertical" : "inline";
    },
    changeTheme(checked) {
      this.theme = checked ? "dark" : "light";
    },
    goPage(name) {
      this.$router.push({
        name: name,
      });
    },
    savePaper() {
      let url = "http://localhost:8080/jango/paper/upjson";
      this.postData(url, this.$paper);
      alert("上传完成");
    },
    /*
    getData() {
      let obj = this.queryJson("save");
      // this.$paper = obj;
      console.log("obj", obj);
    },*/
  },
};
</script>