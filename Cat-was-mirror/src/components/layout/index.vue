<template>
  <div class="layout">
    <el-container >
      <!-- 头部 -->
      <el-header style="background:#409EFF">
        <img src="https://worker.guodingdata.com/img/home-title.png" alt />
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width=240px style="height:660px">
          <!-- 侧边栏导航菜单 -->
          <navMenu></navMenu>
          <!--  -->
        </el-aside>

        <!-- 中间内容 -->
        <el-main >
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import navMenu from "../navMenu";
export default {
  components: {
    navMenu
  },
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>

<style lang="less">
@import "Style/index.less";
.el-container {
  // width: 100%;
  // height: 100%;
  // background:red;
  .el-header {
    width: 100%;
  // height: 100%;
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
    img {
      width: 105px;
      height: 46px;
      margin-left: 40px;
    }
    
  }
  .el-aside {
  height: 100%;
  }
  .el-aside {
    color: #333;
  }
}
</style>