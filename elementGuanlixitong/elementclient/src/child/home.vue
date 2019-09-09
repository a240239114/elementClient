<template>
  <div class="home">
    <div class="zhezhao">
      <div class="desc">
        <h1>米修在线</h1>
        <p>专注线上教育,用心做课程</p>
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped>
.home {
  width: 100%;
  height: 100%;
  background: url("../assets/showcase.png") no-repeat;
  background-size: 100% 100%;
  position: relative;

  .zhezhao {
    width: 100%;
    height: 870px;
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
    .desc {
      width: 400px;
      height: 100px;
      margin: 100px auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      h1 {
        color: white;
      }
      p {
        color: white;
        font-size: 20px;
      }
    }
  }
}
</style>