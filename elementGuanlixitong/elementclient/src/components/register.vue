<template>
  <div class="login">
    <div class="center">
      <h1>米修在线后台管理系统</h1>

      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input v-model="ruleForm.rePassword" type="password"></el-input>
        </el-form-item>

        <el-form-item label="选择身份" prop="identity">
          <el-select v-model="ruleForm.identity" placeholder="请选择身份类型">
            <el-option label="管理员" value="管理"></el-option>
            <el-option label="员工" value="普通员工"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {Message} from 'element-ui';

export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        email: "",
        password: "",
        // rePassword: "",
        identity: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 3 到 12 个字符", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            type: "email",
            required: true,
            message: "邮箱格式不正确",
            trigger: "change"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 3 到 12 个字符", trigger: "blur" }
        ],
        rePassword: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 3,
            max: 12,
            message: "长度在 3 到 12 个字符",
            trigger: "blur"
          },
          { validator: validatePass, trigger: "blur" }
        ],
        identity: [{ required: true, message: "请选择活动区域", trigger: "change" }]
      }
    };
  },
  mounted(){
       console.log("注册")
       this.$axios.get("/api/users/test")
                  .then(res=>{
                    console.log(res)
                  })
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");

          //提交数据
          this.$axios
                .post("/api/users/register", this.ruleForm)
                .then(res=>{
                  console.log(res);
                   Message({
                     message:"提交成功",
                     type:'success'
                   });
                })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang='less' scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: url("../assets/bg.jpg") no-repeat;
  background-size: 100% 100%;
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
      color: white;
      text-align: center;
      margin-bottom: 20px;
    }

    .el-form {
      background-color: white;
      padding: 23px 30px;
      border-radius: 5px;
      width: 310px;
      // height: 210px;

      & /deep/ .el-button--primary {
        width: 100%;
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        margin-top: 25px;
      }

      .el-form-item /deep/ .el-form-item__label {
        width: 80px !important;
        // color:red;
      }

      .el-form-item /deep/ .el-form-item__content {
        margin-left: 80px !important;
      }

      p {
        text-align: right;
        a {
          color: #409eff;
          text-decoration: none;
        }
      }
    }
  }
}
</style>