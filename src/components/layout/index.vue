<template>
  <div class="layout">
    <el-container>
      <!-- 头部 -->
      <el-header style="background:#409EFF">
        <!-- <img src="./天机镜.jpg" alt=""> -->
        天机镜后台管理项目</el-header>
      <el-container>
        
          <!-- 侧边栏 -->
        <el-aside width="400px">
          <!-- 侧边栏导航菜单 -->
          <navMenu></navMenu>
        </el-aside>
        
          <!-- 中间内容 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

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