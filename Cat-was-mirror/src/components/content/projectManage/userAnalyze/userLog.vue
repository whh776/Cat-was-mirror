<template>
  <div class="modelManage">
    <div class="modelManageTop">
      <label for>签名:</label>
      <el-input v-model="input" placeholder="请输入内容" class="el-input1"></el-input>
      <el-checkbox v-model="checked" class="el-checkbox1">简单分析</el-checkbox>
      <span>
        <i>*</i>事件发生时间
      </span>
      <div class="block">
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          class="el-input2"
        ></el-date-picker>
      </div>
    </div>

    <h1>这里是用户标签</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      input: "",
      value1: "",
      value2: "",
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
    };
  }
};
</script>
<style lang="less" scoped>
@import "../../../../style/index.less";
.modelManage {
  .modelManageTop {
    .el-input1 {
      margin-left: 10px;
      width: 200px;
      // height: 40px;
    }
    .el-checkbox {
      margin-left: 10px;
    }
    span {
      i {
        padding-right: 6px;
        color: red;
        margin-left: 10px;
      }
    }
    .block {
      width: 250px;
      .el-input2 {
        width: 250px;
        margin-left: 10px;
      }
    }
  }
}
</style>