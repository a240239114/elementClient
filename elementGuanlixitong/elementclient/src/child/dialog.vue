<template>
  <div>
    <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

    <el-dialog title="添加资金流水" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item label="收支类型" :label-width="formLabelWidth" prop="type">
          <el-select v-model="form.type" placeholder="请选择活动区域">
            <el-option label="体现" value="tixian"></el-option>
            <el-option label="体现手续费" value="tixianshouxufei"></el-option>
            <el-option label="充值" value="chongzhi"></el-option>
            <el-option label="优惠卷" value="youhuijuan"></el-option>
            <el-option label="充值礼劵" value="chongzhilijuan"></el-option>
            <el-option label="转账" value="zhuanzhang"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="收入描述" :label-width="formLabelWidth" prop="describe">
          <el-input v-model="form.describe" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="收入" :label-width="formLabelWidth" prop="income">
          <el-input v-model="form.income" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="支出" :label-width="formLabelWidth" prop="expend">
          <el-input v-model="form.expend" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="账户现金" :label-width="formLabelWidth" prop="cash">
          <el-input v-model="form.cash" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input v-model="form.remark" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
export default {
  data() {
    return {
      //控制显示和隐藏
      dialogFormVisible: false,

      form: {
        type: "",
        describe: "",
        income: "",
        expend: "",
        cash: "",
        remark: "",
        id: ""
      },

      //验证规则
      rules: {
        describe: { required: true, message: "请输入收入m描述", trigger: "blur" },
        income: { required: true, message: "请输入收入", trigger: "blur" },
        expend: { required: true, message: "请输入收入", trigger: "blur" },
        cash:{ required: true, message: "请输入收入", trigger: "blur" }
      },

      formLabelWidth: "120px"
    };
  }
};
</script>

<style lang='less' scoped>
</style>