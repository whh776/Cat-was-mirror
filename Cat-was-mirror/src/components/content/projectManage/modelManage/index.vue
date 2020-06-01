<template>
  <div class="modelManage">
    <h1>这里是模型管理</h1>
    <template>
      <!-- table区域 -->
      <el-button type="primary" icon="el-icon-plus" class="el-button-hearder">增加</el-button>
      <el-table :data="tableData" style="width: 100%" class="el-table">
        <el-table-column prop="ModelName" label="模型名称" class="el-table-title" align="center"></el-table-column>
        <el-table-column prop="patternNumber" label="模型编号" align="center"></el-table-column>
        <el-table-column prop="type" label="类型" align="center"></el-table-column>
        <el-table-column prop="dateUpdated" label="更新日期" width="250" align="center"></el-table-column>
        <el-table-column prop="version" label="版本号" align="center"></el-table-column>
        <el-table-column prop="operation" label="操作" align="center" class="el-table-column">
          <span class="el-icon-edit">编辑</span>
          <span class="el-icon-delete">删除</span>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[20, 40, 60, 80]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="1"
        ></el-pagination>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          ModelName: "金融ETL",
          patternNumber: "financeETL",
          type: "ETL模型",
          dateUpdated: "2019-09-17 04:38:28",
          version: "V 1"
          //   operation: "编辑和删除 "
        },
        {
          ModelName: "金融ETL",
          patternNumber: "financeETL",
          type: "ETL模型",
          dateUpdated: "2019-09-17 04:38:28",
          version: "V 1"
          //   operation: "编辑和删除"
        },
        {
          ModelName: "金融ETL",
          patternNumber: "financeETL",
          type: "ETL模型",
          dateUpdated: "2019-09-17 04:38:28",
          version: "V 1"
          //   operation: "编辑和删除"
        },
        {
          ModelName: "金融ETL",
          patternNumber: "financeETL",
          type: "ETL模型",
          dateUpdated: "2019-09-17 04:38:28",
          version: "V 1"
          //   operation: "编辑和删除"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
@import "../../../../style/index.less";
.el-button-hearder {
  margin: 25px 0;
}
.el-icon-edit,.el-icon-delete{
    margin-left: 10px;
    color:#3C9DFF;
    font-size:13px;
}
.block {
  margin-top: 25px;
  float: right;
}
</style>