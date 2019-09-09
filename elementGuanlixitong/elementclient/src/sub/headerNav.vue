<template>
  <div class="container">
    <el-row class="row">
      <el-col :span="12" class="col1">
        <div class="grid-content bg-purple logo">
          <img src="../assets/logo.png" alt />
          <span>米修在线后台管理系统</span>
        </div>
      </el-col>

      <el-col :span="12" class="col2">
        <div class="userShow">
          <!-- 头像 -->
          <img src="http://publicblogsource.gjxbewater.cn/%E9%82%93%E4%B8%BD%E5%90%9B.jpg" alt />

          <!-- 欢迎 -->
          <div class="nameAndWellCome">
            <span class="wellCome">欢迎</span>
            <span class="name">xiaoguan</span>
          </div>

          <!-- 下拉  -->
          <el-row class="block-col-2 dropDown">
            <el-col :span="12">
              <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>

                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="showList">个人信息</el-dropdown-item>

                  <el-dropdown-item command="layOut">退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  methods: {
    handleCommand(cmdItem) {
      console.log(cmdItem);
      //  (!cmdItem)?:Message.error('属性command不存在'):Message('欢迎')
      if (!cmdItem) {
        Message.error("属性command不存在");
        return;
      }
      switch (cmdItem) {
        case "showList":
          this.$router.push("/userInfo");
          break;
        case "layOut":
          this.layout();
      }
    },
    //退出登录
    layout() {
      //清除localStorage
      localStorage.removeItem("eleToken");
      //清除Vuex中的信息
      this.$store.dispatch("clearState", false);
      //返回Login页面
      this.$router.push("/login");
    }
  }
};
</script>


<style lang='less' scoped>
.container {
  background-color: #324057;
  padding: 5px;
  border: 1px solid #324057;
  height: 72px;
  width: 100%;
  box-sizing: border-box;
  .row {
    height: 100%;
    .col1 {
      height: 100%;
      .logo {
        height: 100%;
        display: flex;
        align-items: center;
        img {
          display: inline-block;
          width: 52px;
          height: 52px;
        }
        span {
          margin-left: 5px;
          color: white;
          font-weight: 200;
          font-size: 23px;
        }
      }
    }
    .col2 {
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .userShow {
        display: flex;
        width: 133px;
        // position: relative;
        img {
          height: 41px;
          width: 41px;
          border-radius: 50%;
        }
        .nameAndWellCome {
          margin-left: 5px;
          margin-right: 12px;
          text-align: center;
          .wellCome {
            color: white;
            font-size: 14px;
          }
          .name {
            font-size: 14px;
            color: #4092d3;
          }
        }

        .dropDown {
          // position: absolute;
          position: relative;
          top: 10px;
        }
      }
    }
  }
}

.el-popper[x-placement^="bottom"] {
  margin-top: 38px;
}

.el-col /deep/ .el-dropdown {
  color: white;
}
</style>