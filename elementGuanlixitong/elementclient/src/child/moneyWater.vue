<template>
  <div class="main">
    <!-- 筛选 -->

    <div class="head">
      <div class="left">
        <div class="block">
          <span class="demonstration">投标时间筛选:&nbsp;&nbsp;</span>

          <el-date-picker
            align="right"
            placeholder="选择日期时间"
            type="datetime"
            v-model="value1"
          ></el-date-picker>
        </div>

        <div class="block">
          <span class="demonstration">&nbsp;--&nbsp;</span>

          <el-date-picker
            align="right"
            placeholder="选择日期时间"
            type="datetime"
            v-model="value2"
          ></el-date-picker>
        </div>

        <el-button
          @click="filterByTime"
          class="saixuan"
          size="small"
          type="primary"
        >筛选</el-button>
      </div>

      <el-button
        @click="handleAdd"
        class="tianjia"
        size="small"
        type="primary"
      >添加</el-button>
    </div>

    <!-- table  -->
    <div
      class="center"
      v-if="tableData"
    >
      <el-table
        :data="tableData"
        border
        max-height="450"
        style="width: 100%"
      >
        <el-table-column
          align="center"
          label="创建时间"
          prop="date"
          sortable
          width="250"
        >
          <template slot-scope="scope">
            <i class="el-icon-time"></i>

            <span style="margin-left: 10px">{{ scope.row.date}}</span>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          label="收支类型"
          width="150"
        >
          <template slot-scope="scope">
            <p size="medium">{{ scope.row.type }}</p>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          label="收入描述"
          width="150"
        >
          <template slot-scope="scope">
            <p>{{ scope.row.describe }}</p>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          label="收入"
          width="150"
        >
          <template slot-scope="scope">
            <p style="color:#44bd32">{{ scope.row.income }}</p>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          label="支出"
          width="150"
        >
          <template slot-scope="scope">
            <p
              size="medium"
              style="color:#f56767"
            >{{ scope.row.expend }}</p>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          label="账户现金"
          width="150"
        >
          <template slot-scope="scope">
            <p
              size="medium"
              style="color:#4db3ff"
            >{{ scope.row.cash }}</p>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          label="备注"
          width="220"
        >
          <template slot-scope="scope">
            <p size="medium">{{ scope.row.remark }}</p>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          label="操作"
          width="330"
        >
          <template slot-scope="scope">
            <el-button
              @click="handleEdit(scope.$index, scope.row)"
              size="mini"
            >编辑</el-button>

            <el-button
              @click="handleDelete(scope.$index, scope.row)"
              size="mini"
              type="danger"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- pagination -->
    <div class="Block">
      <el-pagination
        :current-page="paginationAttr.currentpage"
        :page-size="paginationAttr.pagesize"
        :page-sizes="paginationAttr.pagesizes"
        :total="paginationAttr.total"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        layout="total, sizes, prev, pager, next, jumper"
      ></el-pagination>
    </div>

    <!-- dialog  -->
    <Dialog
      :dialog="dialog"
      :form="form"
      @func="getProfiles"
    ></Dialog>
  </div>
</template>


<script>
import Dialog from "./dialog.vue";
import { Message } from "element-ui";

export default {
  mounted() {
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
      allTableData: [],

      //筛选的数据
      filterData: [],

      //提交的数据
      form: {
        type: "",
        describe: "",
        income: "",
        expend: "",
        cash: "",
        remark: "",
        id: ""
      },

      // 分页器
      paginationAttr: {
        currentpage: 1, //当前页
        pagesizes: [5, 10, 15, 20], //每页最多显示的条数的参数
        pagesize: 5, //每页显示条目个数
        layout: "total, sizes, prev, pager, next, jumper",
        total: 1 //总共的页数
      },

      //dialog的显示和隐藏
      dialog: {
        tittle: "添加资金流水",
        isShow: false,
        formLabelWidth: "120px"
      }
    };
  },

  methods: {
    //根据pagesize过滤
    filterByPagesize(count) {
      this.paginationAttr.pagesize = count;
      this.tableData = this.allTableData.filter((item, index) => {
        return 0 <= index && index < this.paginationAttr.pagesize;
      });
    },

    //获取表单数据
    getProfiles() {
      this.$axios.get("/api/profiles").then(res => {
        //  console.log(res);
        this.allTableData = res.data;
        this.tableData = res.data;

        this.paginationAttr.total = this.allTableData.length;
        this.filterByPagesize(this.paginationAttr.pagesize);
      });
    },

    //编辑
    handleEdit(index, row) {
      //注意id一定是row._id,不能是index
      this.form = {
        type: row.type,
        describe: row.describe,
        income: row.income,
        expend: row.expend,
        cash: row.cash,
        remark: row.remark,
        id: row._id
      };

      this.dialog.isShow = true;
      this.dialog.tittle = "编辑资金流水";
    },

    //添加
    handleAdd() {
      this.form = {
        type: "",
        describe: "",
        income: "",
        expend: "",
        cash: "",
        remark: ""
      };
      this.dialog.isShow = true;
      this.dialog.tittle = "添加资金流水";
    },

    //删除
    handleDelete(index, row) {
      const id = row._id;

      //删除数据
      this.$axios.delete(`api/profiles/delete/${id}`).then(res => {
        Message.success("删除成功");
      });

      //展示数据
      this.getProfiles();
    },

    //pagination size变化的钩子
    handleSizeChange(val) {
      /*
         paginationAttr: {
           currentpage: 2, //当前页
           pagesizes: [5, 10, 15, 20], //每页最多显示的条数的参数
           pagesize: 5, //每页显示条目个数
           layout: "total, sizes, prev, pager, next, jumper",
           total: 20 //总共的页数
         }
      */

      this.filterByPagesize(val);
    },

    //当前页的变化
    handleCurrentChange(val) {
      const size = this.paginationAttr.pagesize;
      this.tableData = this.allTableData.filter((item, index) => {
        const min = (val - 1) * size;
        const max = val * size;

        return index >= min && index < max;
      });
    },

    //日期筛选
    filterByTime() {
      const startTime = this.value1.getTime();
      const endTime = this.value2.getTime();
      this.tableData = this.allTableData.filter((item, index) => {
        const itmeTime = new Date(item.date).getTime();
        return itmeTime > startTime && itmeTime < endTime;
      });
    }
  },
  components: {
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
  .center {
    margin-top: 10px;
  }
  .Block {
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
  }
}
</style>