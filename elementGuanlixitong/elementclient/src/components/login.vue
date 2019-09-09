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
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" type="password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>

          <p>
            您注册账号了吗?
            <router-link to="/register" tag="a">注册</router-link>
          </p>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";

export default {
  data() {
    return {
      ruleForm: {
        email: "",
        password: ""
      },
      rules: {
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
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      //提交数据
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
          //登录代码
          this.$axios.post("/api/users/login", this.ruleForm).then(res => {
            const eleToken = res.data.token;
            //把token存在localStorage
            localStorage.setItem("eleToken", JSON.stringify(eleToken));

            //解码token
            const user = jwt_decode(eleToken);
            console.log(user);
            // Object.keys(value)

            //同步到store的state中
            this.$store.dispatch("SET_IS_AUTHORIZATION", this.isEmpty(user));
            this.$store.dispatch("SET_USER", user);

            //跳转到index页面
            this.$router.push("/home");
          });
        } else {
          console.log("请重新登录!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    isEmpty(value) {
      return (
        value === null ||
        value === undefined ||
        (typeof value === "object" && Object.keys(value).length !== 0) ||
        (typeof value === "string" && value.trim().length !== 0)
      );
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
      padding: 23px 30px 0 30px;
      border-radius: 5px;
      width: 310px;
      // height: 210px;

      & /deep/ .el-button--primary {
        width: 100%;
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        // margin-top: 25px;
      }

      .el-form-item /deep/ .el-form-item__label {
        width: 50px !important;
        // color:red;
      }

      .el-form-item /deep/ .el-form-item__content {
        margin-left: 50px !important;
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