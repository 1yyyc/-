<template>
  <div>
    <el-container :gutter="10">
      <!--侧边栏-->
      <el-aside width="220px" :gutter="1">
        <div class="sidebar">
          <el-menu @open="" @close="" :collapse="isCollapse" background-color="#FFFFFF"
                   text-color="#000000" active-text-color="#1E90FF" style="height: 875px" class="el-menu-vertical-demo"
                   unique-opened router collapse-transition>
            <img src="../plug-in/img/u60.png" alt="" class="sidebar-logo" />
            <template v-for="item in items" v-cloak>
              <template v-if="item.subset.length !== 0">
                <el-submenu :index="item.url" :key="item.url">
                  <div slot="title">
                    <i class="el-icon-s-order"></i>
                    <span slot="title">{{ item.name }}</span>
                  </div>
                  <el-menu-item v-for="(subItem, i) in item.subset" :key="i" :index="subItem.url">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{ subItem.name }}</span>
                  </el-menu-item>
                </el-submenu>
              </template>
              <template v-else>
                <el-menu-item :index="item.url" :key="item.url">
                  <i class="el-icon-setting"></i>
                  <span slot="title">{{ item.name }}</span>
                </el-menu-item>
              </template>
            </template>
          </el-menu>
        </div>
      </el-aside>
      <el-container :gutter="9">
        <!-- 标题栏 -->
        <el-header class="navbar">
          <div>
            <div class="left-menu">
              <i style="color:blue" class="el-icon-first-aid-kit"></i>
              <span>Medical Examination Center</span>
            </div>
<!--            <div class="right-menu">-->
<!--              <el-dropdown class="avatar-container right-menu-item hover-effect" trigger=""-->
<!--                           @command="">-->
<!--                <span class="el-dropdown-link">-->
<!--                  <i class="el-icon-user">：</i>-->
<!--                  {{ user.name }}<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
<!--                </span>-->
<!--                <el-dropdown-menu slot="dropdown">-->
<!--                  <el-dropdown-item command="">科室：{{ user.department }}</el-dropdown-item>-->
<!--                  <el-dropdown-item command="userinfo">个人中心</el-dropdown-item>-->
<!--                  <el-dropdown-item command="setting">设置</el-dropdown-item>-->
<!--                  <el-dropdown-item command="logout">注销</el-dropdown-item>-->
<!--                </el-dropdown-menu>-->
<!--              </el-dropdown>-->
<!--            </div>-->
          </div>
        </el-header>
        <!--主内容区-->
        <el-main>
          <div class="content">
            <!--这里的router-view用来渲染子页面-->
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: JSON.parse(window.sessionStorage.getItem("user")),
      isCollapse: false,
      items: [
        {
          name: "基本信息管理",
          url: "login",
          subset: [
            {name: "医生信息管理", url: "/", subset: []},
            {name: "患者信息管理", url: "/GPU", subset: []},
          ],
        },
        {
          name: "查体项目管理",
          url: "GPU",
          subset: [
            {name: "疾病所属项目", url: "/GPU", subset: []},
            {name: "体检项目管理", url: "/GPU", subset: []},
          ],
        },
        {
          name: "体检信息管理",
          url: "ModelTrain",
          subset: [
            {name: "体检队列编外人员", url: "/GPU", subset: []},
            {name: "当前体检队列人员", url: "/GPU", subset: []},
          ],
        },
        {name: "体检项目推荐", url: "/GPU", subset: []},
        {name: "请联系管理员", url: "/GPU", subset: []},
        {name: "调查问卷", url: "/GPU", subset: []},
        {name: "大屏展示", url: "/GPU", subset: []},
      ],
    };
  },
  computed: {
    onRoutes() {
      //当前激活菜单的 index
      return this.$route.path.replace("/", "");
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    commandHandler(common) {
      if (common == "logout") {
        this.$confirm("此操作将注销登录, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
            .then(() => {
              //注销登录
              this.postRequest("/loginSign/logout");
              //清空用户信息
              window.sessionStorage.removeItem("tokenStr");
              window.sessionStorage.removeItem("user");
              //跳转到登录页面
              this.$router.replace("/");
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "已取消注销",
              });
            });
      }
    },
  },
}
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  /* width: 100%; */
  min-height: 400px;
}

.homeHeader {
  display: flex;
  background-color: #545c64;
  align-content: center;
  justify-content: space-between;
  padding-left: 15px;
  box-sizing: border-box;
}

.homeHeader .title {
  font-size: 38px;
  font-family: 华文楷体;
  color: white;
}

.navbar {
  /* height: 65px; */
  overflow: hidden;
  position: relative;
  background: rgb(255, 255, 255);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.hamburger-container {
  line-height: 46px;
  height: 100%;
  float: left;
  cursor: pointer;
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent;
}

.hover {
  background: rgba(0, 0, 0, 0.025);
}

.iconClass {
  position: relative;

}

.breadcrumb-container {
  float: left;
}

.sidebar-logo {
  width: 220px;
  height: 100px;
  vertical-align: middle;
  /* margin-right: 12px; */
}

.topmenu-container {
  position: absolute;
  left: 50px;
}

.errLog-container {
  display: inline-block;
  vertical-align: top;
}

.right-menu {
  float: right;
  height: 100%;
  line-height: 50px;
}

.left-menu {
  float: left;
  padding: 5px 8px;
  height: 100%;
  line-height: 50px;
  font-weight: bold;
  font-size: 25px;
}

:focus {
  outline: none;
}

.right-menu-item {
  display: inline-block;
  padding: 5px 8px;
  height: 100%;
  font-size: 18px;
  color: #5a5e66;
  vertical-align: text-bottom;
}

.hover-effect {
  cursor: pointer;
  transition: background 0.3s;
}

/* :hover {
  background: rgba(0, 0, 0, 0.025);
} */

.avatar-container {
  margin-right: 30px;
}

.avatar-wrapper {
  margin-top: 5px;
  position: relative;
}

.user-avatar {
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 10px;
}

.el-icon-caret-bottom {
  cursor: pointer;
  position: absolute;
  right: -20px;
  top: 25px;
  font-size: 12px;
}
</style>
