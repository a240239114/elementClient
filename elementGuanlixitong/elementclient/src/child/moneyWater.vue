<template>
  <div class="main">
    <!-- 筛选 -->
    <div class="head">
      <div class="left">
        <div class="block">
          <span class="demonstration">投标时间筛选:&nbsp;&nbsp;</span>
          <el-date-picker
            v-model="value2"
            type="datetime"
            placeholder="选择日期时间"
            align="right"
           
          ></el-date-picker>
        </div>

        <div class="block">
          <span class="demonstration">&nbsp;--&nbsp;</span>
          <el-date-picker
            v-model="value2"
            type="datetime"
            placeholder="选择日期时间"
            align="right"
            
          ></el-date-picker>
        </div>

        <el-button type="primary" size="small" class="saixuan">筛选</el-button>
      </div>

      <el-button type="primary" size="small" class="tianjia">添加</el-button>
    </div>

    <!-- table  -->
    <div class="center">
      <el-table :data="tableData" style="width: 100%" border max-height="450">
        <el-table-column label="序号" width="70" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>

        <el-table-column label="创建时间" width="250" sortable align="center">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>

        <el-table-column label="收支类型" width="150" align="center">
          <template slot-scope="scope">
            <p size="medium">{{ scope.row.type }}</p>
          </template>
        </el-table-column>

        <el-table-column label="收入描述" width="150" align="center">
          <template slot-scope="scope">
            <p>{{ scope.row.describe }}</p>
          </template>
        </el-table-column>

        <el-table-column label="收入" width="150" align="center">
          <template slot-scope="scope">
            <p style="color:#f56767">{{ scope.row.income }}</p>
          </template>
        </el-table-column>

        <el-table-column label="支出" width="150" align="center">
          <template slot-scope="scope">
            <p size="medium" style="color:#f56767">{{ scope.row.expend }}</p>
          </template>
        </el-table-column>

        <el-table-column label="账户现金" width="150" align="center">
          <template slot-scope="scope">
            <p size="medium" style="color:#4db3ff">{{ scope.row.cash }}</p>
          </template>
        </el-table-column>

        <el-table-column label="备注" width="220" align="center">
          <template slot-scope="scope">
            <p size="medium">{{ scope.row.remark }}</p>
          </template>
        </el-table-column>

        <el-table-column label="操作" width="330" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- pagination -->
    <div class="Block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="2"
        layout="total, sizes, prev, pager, next, jumper"
        :total="1"
      ></el-pagination>
    </div>


    <!-- dialog  -->
    <Dialog></Dialog>
  </div>
</template>


<script>
import  Dialog  from "./dialog.vue";

export default {
  mounted(){
      this.getProfiles();

  },

  data() {
    return {
      //日期选择器
      value1: "",
      value2: "",

      // 展示的数据
      tableData: [],


      //所有的数据
      allTableData:[],

      //筛选的数据
      filterData: [],

      //分页数据
      paginationData: [],

      //提交的数据
      form: {
        type: "xx",
        describe: "xx",
        income: "xx",
        expend: "xx",
        cash: "xx",
        remark: "xx",
        id: "01"
      },

      // 分页器
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  methods: {
    //编辑
    handleEdit(index, row) {
      console.log(index, row);
    },
    //删除
    handleDelete(index, row) {
      console.log(index, row);
    },

    //pagination size变化的钩子
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },

    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },


    //获取表单数据
    getProfiles(){ 
      this.$axios.get('/api/profiles')
                 .then(res=>{
                  //  console.log(res);

                   this.allTableData = res.data; 
                   this.tableData = res.data; 
                 }) 
    }
  },
  components:{
    Dialog
  }
};
</script>

<style lang='less' scoped>
.main {
  width: 100%;
  height: 100%;
  padding: 15px 18px;
  background-color: white;
  .head {
    width: 100%;
    height: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      align-items: center;
      .block {
        font-size: 15px;
      }

      .saixuan {
        margin-left: 5px;
      }
    }

    .tianjia {
      // align-self: flex-end;
    }
  }

  .center{
    margin-top:10px;
  }

  .Block {
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
  }
}
</style>