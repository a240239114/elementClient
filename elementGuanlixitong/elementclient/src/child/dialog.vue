<template>
  <div>
    <el-dialog
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :title="dialog.tittle"
      :visible.sync="dialog.isShow"
    >
      <el-form
        :model="form"
        :rules="rules"
        class="demo-ruleForm"
        ref="ruleForm"
      >
        <el-form-item
          :label-width="dialog.formLabelWidth"
          label="收支类型"
          prop="type"
        >
          <el-select
            placeholder="请选择活动区域"
            v-model="form.type"
          >
            <el-option
              label="体现"
              value="tixian"
            ></el-option>
            <el-option
              label="体现手续费"
              value="tixianshouxufei"
            ></el-option>
            <el-option
              label="充值"
              value="chongzhi"
            ></el-option>
            <el-option
              label="优惠卷"
              value="youhuijuan"
            ></el-option>
            <el-option
              label="充值礼劵"
              value="chongzhilijuan"
            ></el-option>
            <el-option
              label="转账"
              value="zhuanzhang"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item
          :label-width="dialog.formLabelWidth"
          label="收入描述"
          prop="describe"
        >
          <el-input
            auto-complete="off"
            v-model="form.describe"
          ></el-input>
        </el-form-item>

        <el-form-item
          :label-width="dialog.formLabelWidth"
          label="收入"
          prop="income"
        >
          <el-input
            auto-complete="off"
            v-model="form.income"
          ></el-input>
        </el-form-item>

        <el-form-item
          :label-width="dialog.formLabelWidth"
          label="支出"
          prop="expend"
        >
          <el-input
            auto-complete="off"
            v-model="form.expend"
          ></el-input>
        </el-form-item>

        <el-form-item
          :label-width="dialog.formLabelWidth"
          label="账户现金"
          prop="cash"
        >
          <el-input
            auto-complete="off"
            v-model="form.cash"
          ></el-input>
        </el-form-item>

        <el-form-item
          :label-width="dialog.formLabelWidth"
          label="备注"
        >
          <el-input
            auto-complete="off"
            v-model="form.remark"
          ></el-input>
        </el-form-item>
      </el-form>

      <div
        class="dialog-footer"
        slot="footer"
      >
        <el-button @click="dialog.isShow = false">取 消</el-button>
        <el-button
          @click="submitData('ruleForm')"
          type="primary"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
import { Message } from "element-ui";

export default {
  data() {
    return {
      //验证规则
      rules: {
        describe: {
          required: true,
          message: "请输入收入描述",
          trigger: "blur"
        },
        income: { required: true, message: "请输入收入", trigger: "blur" },
        expend: { required: true, message: "请输入收入", trigger: "blur" },
        cash: { required: true, message: "请输入收入", trigger: "blur" }
      }
    };
  },
  methods: {
    //提交数据
    submitData(formName) {
      //验证
      this.$refs[formName].validate(valid => {
        if (valid) {
          const url =
            this.dialog.tittle == "添加资金流水"
              ? "add"
              : `edit/${this.form.id}`;

          this.$axios.post(`/api/profiles/${url}`, this.form).then(res => {
            Message({
              message: "保存成功",
              type: "success"
            });

            //父组件刷新 重新获取数据
            this.$emit("func");
            this.dialog.isShow = false;
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });

      
    },


    sxxx(){
      asdkljasdkljasldk


      asd
      a
      sd
      asd

      asd

      asd

      asd
      asd

      asd
      a
      sdasdasdasdasd
      asdasdasdasdasdas
      
    }
  },
  props: {
    dialog: Object,
    form: Object
  }
};
</script>

<style lang='less' scoped>
</style>