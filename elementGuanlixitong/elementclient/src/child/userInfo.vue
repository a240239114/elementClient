<template>
  <div class="main">
    <div class="avater">
      <img
        alt
        :src="user.avatar"
      />
    </div>

    <div class="nameAndIndentyfy">
      <div class="center">
        <div class="name">
          <i class="el-icon-service"></i>
          <span>{{user.name}}</span>
        </div>

        <div class="indentify">
          <i class="el-icon-setting"></i>
          <span>{{user.identity}}</span>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { mapState } from "vuex";
export default {
    computed:{
        ...mapState(['user'])
    }
};
</script>  

<style lang='less' scoped>
.main {
  width: 100%;
  display: flex;
  background-color: aliceblue;
  .avater {
    flex: 1;
    img {
      display: block;
      margin: 300px auto;
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
  }

  .nameAndIndentyfy {
    flex: 2;
    background-color: #eeeeee;
    .center {
      width: 145px;
      height: 120px;
      margin-left: 25px;
      margin-top: 330px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: black;
      .name {
        font-size: 25px;
        font-weight: 300;
        span {
        }
      }

      .indentify {
        font-size: 25px;
        span {
        }
      }
    }
  }
}
</style>