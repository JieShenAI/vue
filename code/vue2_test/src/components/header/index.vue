<template>
  <div>
    <header class="header">
      <!-- 头部的第一行 -->
      <div class="top">
        <div class="container">
          <div class="loginList">
            <a href="/" title="首页">
              <a-icon type="home" />
            </a>
            <p>欢迎您！</p>
            <!-- 没有登录：显示登录与注册 -->
            <p v-if="!$store.state.user.nickName">
              <span>请</span>
              <!-- <a href="###">登录</a> -->
              <!-- 
                声明式导航,当然你也可以使用编程式导航,因为不管是那个导航，都可以实现路由跳转，
                但是最后为什么选择声明式导航，没有任何业务、逻辑
               -->
              <router-link to="/login">登录</router-link>
              <router-link class="register" to="/register">注册</router-link>
            </p>
            <!-- 如果登录显示的是用户名字与退出登录 -->
            <p v-else>
              <a>{{ $store.state.user.nickName }}</a>
              <a class="register" @click="logout">退出登录</a>
            </p>
          </div>
          <div class="typeList">
            <router-link to="/paper">文档编写</router-link>
            <router-link to="/paperHome">文档中心</router-link>
            <a :href="caigou">采购公告</a>
            <a href="###">关于我们</a>
            <a href="###">联系我们</a>
          </div>
        </div>
      </div>
      <!--头部第二行 搜索区域-->
      <!-- <div class="bottom">
        <h1 class="logoArea">
          <router-link class="logo" to="/home">
            <img src="./images/logo.png" alt="" />
          </router-link>
        </h1>
        <div class="searchArea">
          <form action="###" class="searchForm">
            <input
              type="text"
              id="autocomplete"
              class="input-error input-xxlarge"
              v-model="keyword"
            />
            <button
              class="sui-btn btn-xlarge btn-danger"
              type="button"
              @click="goSearch"
            >
              搜索
            </button>
          </form>
        </div>
      </div> -->
    </header>
  </div>
</template>

<script>
import { serverLink } from "@/utils/staticSrc";
export default {
  //给组件起一个名字,开发者工具中显示这个组件的时候，显示的就是这个名字
  name: "Header",
  data() {
    return {
      //收集用户输入的关键字
      keyword: "",
      caigou: serverLink('/ccgp/list/')
    };
  },
  methods: {
    //搜索按钮的回调
    goSearch() {
      //路由的跳转,采用的是编程式导航.
      //路由传递参数

      //第一种传递query参数
      // this.$router.push({path:'/search',query:{keyword:this.keyword}});

      //第二种传递params参数 [一定要注意,面试的时候经常问]
      // this.$router.push({name:'search',params:{keyword:this.keyword}})

      //第三种传递query+params
      // this.$router.push({
      //   name: "search",
      //   params: { keyword: this.keyword },
      //   query: { keyword: "ABC" },
      // });

      //验证Vue-Router引入Promise技术,最笨的方法,给push传递第二个、第三个参数【回调函数】
      //下面这种写法：治标不治本！！！！
      // let result = this.$router.push({name: "search",params: { keyword: this.keyword|| undefined}},()=>{},()=>{});

      //问题1:push方法,里面this是谁? vueRouter类的实例
      // this.$router.push({name:'search',params:{keyword:this.keyword}});
      //问题2:push方法里面的this是谁?windows
      // let result = this.$router.push;
      // result({name:'search',params:{keyword:this.keyword}})

      //点击搜索按钮之前,如果路径当中有query参数,需要携带给search
      let locations = {
        name: "search",
        params: { keyword: this.keyword || undefined },
      };
      //确定路径当中有query参数
      if (this.$route.query.categoryName) {
        locations.query = this.$route.query;
      }

      this.$router.push(locations);
    },
    //退出登录的按钮的回调
    logout() {
      //派遣action退出登录
      this.$store.dispatch("user/logout");
    },
  },
  mounted() {
    //清除关键字
    // this.$bus.$on("clearKeyword", () => {
    //   console.log(123);
    //   this.keyword = "";
    // });
  },
};
</script>

<style scoped lang="less">
.header {
  &>.top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          &+a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  &>.bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;
      background-color: rgb(168, 67, 67);

      .logo {
        img {
          width: 109px;
          height: 48px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>

<!-- "less": "^4.1.3",
"less-loader": "^5.0.0", -->
