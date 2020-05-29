<template>
  <div class="navMenu">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>项目管理</span>
            </template>
            <el-menu-item-group>
              <!-- <template slot="title">模型管理</template> -->
              <el-menu-item index="1-1">
                <router-link to="/modelManage" tag="div">模型管理</router-link>
              </el-menu-item>
              <!-- 用户分析 -->
              <el-submenu index="1-2">
                <template slot="title">用户事件分析</template>

                <el-menu-item index="1-2-1">
                  <!-- 路由用户标签跳转 -->
                  <router-link to="/userLog" tag="div">用户标签</router-link>
                </el-menu-item>
                <el-menu-item index="1-2-2">
                  <router-link to="/userGroup" tag="div">用户分群</router-link>
                </el-menu-item>
              </el-submenu>
              <!-- 取数管理 -->
              <el-submenu index="1-3">
                <template slot="title">取数管理</template>
                <el-menu-item index="1-3-1">
                  <router-link to="/numberManage" tag="div">源数据统计</router-link>
                </el-menu-item>
              </el-submenu>
              <!-- 取号管理 -->
              <el-submenu index="1-4">
                <template slot="title">取号管理</template>
                <el-menu-item index="1-4-1">
                  <router-link to="/numberRecord" tag="div">人群包管理</router-link>
                </el-menu-item>
                <el-menu-item index="1-4-1">
                  <router-link to="/peopleManage" tag="div">人群包报表</router-link>
                </el-menu-item>
                <el-menu-item index="1-4-1">
                  <router-link to="/peopleStatement" tag="div">取号记录</router-link>
                </el-menu-item>
              </el-submenu>
              <!-- 一组 -->
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>数据监控</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">数据概览</el-menu-item>
              <el-menu-item index="2-2">数据港概览</el-menu-item>
              <el-menu-item index="2-3">数据工厂概览</el-menu-item>
              <el-menu-item index="2-4">数据成果概览</el-menu-item>
              <!-- 一组 -->
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>元数据管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">元事件管理</el-menu-item>
              <el-menu-item index="4-2">关键词查询</el-menu-item>
              <!-- 一组 -->
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">系统项目管理</el-menu-item>
              <el-menu-item index="4-2">行业管理</el-menu-item>
              <el-menu-item index="4-3">签名管理</el-menu-item>
              <!-- 用户分析 -->
              <el-submenu index="4-4">
                <template slot="title">短信发送</template>
                <el-menu-item index="4-4-1">号码管理</el-menu-item>
                <el-menu-item index="4-4-2">短信发送</el-menu-item>
                <el-menu-item index="4-4-3">短信发送记录</el-menu-item>
                <el-menu-item index="4-4-4">短信通道管理</el-menu-item>
              </el-submenu>
              <el-menu-item index="4-5">加密助手</el-menu-item>
              <el-menu-item index="4-6">投放记录管理</el-menu-item>
              <el-menu-item index="4-7">渠道管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">用户管理</el-menu-item>
              <el-menu-item index="5-2">菜单管理</el-menu-item>
              <el-menu-item index="5-3">角色管理</el-menu-item>
              <el-menu-item index="5-4">部门管理</el-menu-item>
              <el-menu-item index="5-5">租户管理</el-menu-item>
              <!-- 一组 -->
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // }
  }
};
</script>