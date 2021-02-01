<template>
  <div id="app">
    <el-row type="flex" justify="center">
      <el-col :span="16" :xs="24" :sm="18" :md="14" :lg="12" :xl="12">
        <el-container>
          <el-header class="m-header">
            <!-- //头部 -->
            <h1 style="text-align: center;">微笑28预测</h1>
            <p>各类预测网页定制请加QQ：1444428281</p>
            <p>
              凌枫28全新网址：<el-link
                type="primary"
                href="https://www.lingfeng28.com/"
                >www.lingfeng28.com</el-link
              >
            </p>
            <p>
              <el-link type="primary" href="http://i.28yc.cn"
                >加拿大28算法免费发布平台</el-link
              >
            </p>
            <p>
              <el-link
                type="primary"
                href="https://www-p28.com/register?2054637"
                ><img
                  style="width:100%"
                  src="https://cdn.my9b.com/assets/img/0618df.gif"
              /></el-link>
            </p>
            <p>
              <strong
                ><el-link
                  type="primary"
                  href="https://pc333c.com/register?5249561"
                  >【辉煌PC333.COM】花样玩法-PC蛋蛋典范-业界公认-信誉平台-每日回水29%
                  ——【详情点我注册】</el-link
                ></strong
              >
            </p>
            <p>
              <strong
                ><el-link
                  type="primary"
                  href="https://www-pc44.com/regPage.xhtml?id=997451319"
                  >【主流28D.COM】单点999倍-PC信誉平台-组合连中送大奖
                  美女空投送到家——【详情点我注册】</el-link
                ></strong
              >
            </p>
          </el-header>
          <el-main class="m-main">
            <!-- 主体 -->
            <el-tabs type="border-card">
              <el-tab-pane label="在线预测">
                <el-menu
                  :default-active="formulaS.toString()"
                  class="el-menu-demo"
                  mode="horizontal"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b"
                  @select="handleSelect"
                  v-if="allTm.length > 0"
                  
                >
                  <el-menu-item
                    v-for="(item, i) in Call.formulaData"
                    :key="i"
                    :index="i.toString()"
                  >
                    <el-badge
                      :value="probability(allTm[i].data.lz)"
                      class="badge_item"
                    >
                      {{ item.title }}
                    </el-badge>
                  </el-menu-item>

                  <el-menu-item>
                    <el-badge value="荐" index='9999' class="badge_item"
                      ><el-link type="primary" href="https://www.dabai28.com/"
                        >大白预测</el-link
                      ></el-badge
                    ></el-menu-item
                  >
                </el-menu>
                <table v-if="randdata.length > 0" border="0">
                  <tr>
                    <th>期号</th>
                    <th>开奖</th>

                    <th>预测</th>
                    <th>对错</th>
                  </tr>
                  <tbody>
                    <tr>
                      <td>{{ issueS }}</td>
                      <td>{{ timespan }}</td>

                      <td>
                        <el-tag type="danger" effect="dark"
                          >{{ Call.getDX(tm[0]) }}
                        </el-tag>

                        <el-tag type="danger" effect="dark">{{
                          Call.getDS(tm[0])
                        }}</el-tag>
                      </td>
                      <td></td>
                    </tr>
                    <tr v-for="(item, index) in randdata" :key="item.issue">
                      <td>{{ item.issue }}</td>
                      <td v-if="item.issue">
                        {{ item.c1 }} + {{ item.c2 }} + {{ item.c3 }} =
                        {{ item.c4 }}
                      </td>

                      <td>
                        <el-tag :type="ycdc[index].dx.type" effect="dark">{{
                          Call.getDX(tm[index + 1])
                        }}</el-tag>
                        <el-tag :type="ycdc[index].ds.type" effect="dark">{{
                          Call.getDS(tm[index + 1])
                        }}</el-tag>
                      </td>

                      <td>
                        <el-tag :type="ycdc[index].type" effect="dark">{{
                          ycdc[index].msg
                        }}</el-tag>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </el-tab-pane>
              <el-tab-pane label="开奖走势">
                <table v-if="kjzsData.length > 0" border="0">
                  <thead>
                    <tr>
                      <th>期号</th>
                      <th>开奖</th>
                      <th>大</th>
                      <th>小</th>
                      <th>单</th>
                      <th>双</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in kjzsData" :key="index">
                      <td>{{ item.issue }}</td>
                      <td>{{ item.c4 }}</td>
                      <td>
                        <el-tag
                          type="danger"
                          effect="dark"
                          v-if="Call.getDX(item.c4) == '大'"
                          >大</el-tag
                        >
                      </td>
                      <td>
                        <el-tag
                          type=""
                          effect="dark"
                          v-if="Call.getDX(item.c4) == '小'"
                          >小</el-tag
                        >
                      </td>
                      <td>
                        <el-tag
                          type="danger"
                          effect="dark"
                          v-if="Call.getDS(item.c4) == '单'"
                          >单</el-tag
                        >
                      </td>
                      <td>
                        <el-tag
                          type=""
                          effect="dark"
                          v-if="Call.getDS(item.c4) == '双'"
                          >双</el-tag
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </el-tab-pane>
              <el-tab-pane label="数据分析">
                <table border="0" v-if="kjdata.math">
                  <thead>
                    <tr>
                      <th>类型</th>
                      <th>间隔</th>
                      <th>类型</th>
                      <th>间隔</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="index in 14" :key="index">
                      <td>
                        <el-tag type="danger" effect="dark">{{
                          Call.addZero(Object.keys(kjdata.math)[index - 1])
                        }}</el-tag>
                      </td>
                      <td>
                        <span v-if="kjdata.math[index - 1] <= 30">{{
                          kjdata.math[index - 1]
                        }}</span
                        ><span class="isActive" v-else>{{
                          kjdata.math[index - 1]
                        }}</span>
                      </td>
                      <td>
                        <el-tag type="danger" effect="dark">{{
                          Object.keys(kjdata.math)[index + 13]
                        }}</el-tag>
                      </td>
                      <td>
                        <span v-if="kjdata.math[index + 13] <= 30">{{
                          kjdata.math[index + 13]
                        }}</span
                        ><span class="isActive" v-else>{{
                          kjdata.math[index + 13]
                        }}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </el-tab-pane>
            </el-tabs>
          </el-main>
          <el-footer class="m-footer">
            <!-- 底部 -->

            <p style="text-align:center;font-size:14px;">
              提供PC28预测-加拿大28预测
            </p>
            <p style="text-align:center;font-size:14px;">
              9伴科技工作室-微笑预测
            </p>
            <p style="text-align:center;font-size:14px;"></p>
          </el-footer>
        </el-container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Call from "./sta/call";
import Moment from "moment";
export default {
  name: "App",
  data() {
    return {
      kjdata: [], //获取的数据
      kjzsData: [], //开奖走势的数据
      randdata: [], //渲染的数据
      Call: {},
      newDate: Moment(),
      timespan: "", //时间
      tm: [], //预测
      allTm: [], //所有的算法预测
      formulaS: 0, //算法标。默认为1
      ycdc: [], //预测的对错
      num: 21, //预测的期数

      // type: 1, //预测类型
    };
  },
  beforeCreate() {
    //组建创建完成，dom还未生成
  },
  watch: {
    //监听算法的改变
    formulaS() {
      // this.gsAnalysis(this.formulaS);
      this.randFormula(this.formulaS);
      this.open1();
    },
    //监听是否开奖
    timespan: function(newV, oldV) {
      // console.log(oldV);
      // console.log(newV);
      if (oldV === "开奖中...") {
        this.remind();
      }
    },
  },
  computed: {
    //监听数据
    //过滤或排序后的计算属性函数放这里
    issueS() {
      return Number(this.randdata[0].issue) + 1;
    },
  },
  created() {
    //组建创建后
    this.Call = Call;
    this.getJnd();
  },
  mounted() {
    const script = document.createElement("script");
    script.src =
      "https://s13.cnzz.com/z_stat.php?id=1270181835&web_id=1270181835";
    script.language = "JavaScript";
    document.body.appendChild(script);
    //渲染后
    setInterval(() => {
      this.newDate = Moment();
      let time = parseInt(
        (Moment(this.kjdata.nowDate).valueOf() +
          240000 -
          this.newDate.valueOf()) /
          1000
      );
      if (time > 0) {
        this.timespan = time + "s";
      } else {
        if (Math.abs(time) % 5 === 0) this.getJnd();
        this.timespan = "开奖中...";
      }
    }, 1000);
  },

  methods: {
    //函数、方法
    handleSelect(key) {
      this.formulaS = key;
    },
    probability(str) {
      if (str >= 6) {
        return "荐";
      } else {
        return "";
      }
    },
    //获取数据
    getJnd() {
      let that = this;
      this.axios
        .get("http://127.0.0.1:8080/getdata?date" + Moment().format())
        .then((res) => {
          that.kjdata = Object.assign({}, res.data);
          let len = Object.assign({}, that.kjdata);
          let kjzs = Object.assign({}, that.kjdata);
          len.length = 20;
          kjzs.length = 400;
          that.kjzsData = Array.from(kjzs);
          that.randdata = Array.from(len);
          that.allGs();
          that.randFormula(that.formulaS);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //算法渲染
    randFormula(nn) {
      [...this.tm] = [...this.allTm[nn]];
      [...this.ycdc] = [...this.allTm[nn].ycdc];
    },
    //公式
    gsAnalysis(nn) {
      let gs = this.Call.formulaData[nn];
      let numberArr = [];
      let num1 = 0;
      let result = [];
      for (let index = 0; index < gs.gs.length; index++) {
        numberArr[index] = this.getYc(gs.gs[index]);
      }

      if (gs.isqw) {
        for (let index = 0; index < this.num; index++) {
          num1 = 0;
          for (let i = 0; i < numberArr.length; i++) {
            num1 = num1 + this.Call.getTail(parseInt(numberArr[i][index]));
          }
          result[index] = this.Call.addZero(num1);
        }
      } else {
        [...result] = [...numberArr[0]];
      }

      return result;
    },
    //获取所有公式的结果
    allGs() {
      for (let index = 0; index < this.Call.formulaData.length; index++) {
        this.allTm[index] = this.gsAnalysis(index);
        this.allTm[index].ycdc = this.getRightOrNot(
          this.randdata,
          this.allTm[index]
        );
        this.allTm[index].data = this.getProbability(this.allTm[index].ycdc);
      }
    },
    //解析公式的连胜率
    getProbability(arr) {
      //arr type => Array
      let num = 0;
      let result = {};
      //胜率%
      for (let index = 0; index < arr.length; index++) {
        if (arr[index].code > 0) {
          num = num + 1;
        }
      }
      //连中
      result.lz = arr.findIndex((item) => item.code === 0);
      result.probability = (num / (this.num - 1)).toFixed(2);
      return result;
    },
    //提醒用户某算法正在lz
    async remind() {
      for (let index = 0; index < this.allTm.length; index++) {
        if (this.allTm[index].data.lz > 10) {
          await this.open(
            this.Call.formulaData[index].title + "正在超神,点我去围观!",
            index
          );
        } else if (this.allTm[index].data.lz >= 7) {
          await this.open(
            this.Call.formulaData[index].title + "正在‘大杀特杀’,点我去围观!",
            index
          );
        } else if (this.allTm[index].data.lz >= 5) {
          await this.open(
            this.Call.formulaData[index].title + "正在接近暴走,点我去围观!",
            index
          );
        }
      }
    },
    async open(Str, index) {
      let that = this;
      const h = this.$createElement;
      await this.$notify({
        title: "提醒",
        message: h("i", { style: "color: teal" }, Str),
        duration: 5000,
        onClick() {
          that.formulaS = index;
        },
        customClass: "notify",
      });
    },
    async open1() {
      const h = this.$createElement;
      this.$message({
        message: h("p", null, [
          h("i", { style: "color: teal" }, "算法切换成功！"),
        ]),
        showClose: true,
        duration: 1000,
        type: "success",
      });
    },
    //算法解析
    getYc(gs) {
      let str = gs;
      let strarr = str.split("+");
      let ycjg = 0;
      let yctm = [];
      for (let i = 0; i < this.num; i++) {
        ycjg = 0;
        for (let index = 0; index < strarr.length; index++) {
          let num = parseInt(strarr[index]) + i * 4;
          ycjg = ycjg + parseInt(this.conversion(num));
        }
        yctm[i] = this.Call.addZero(ycjg);
      }
      return yctm;
    },
    getRightOrNot(yy, nn) {
      return this.Call.Contrast(yy, nn);
    },
    //数值转化
    conversion(num) {
      num = parseInt(num);
      let row = num % 4;
      if (row === 0) {
        row = 4;
      }
      let col = parseInt(num / 4);
      if (col === 0) {
        col = 0;
      }
      let str = "c" + row;
      return this.kjdata[col][str];
    },
  },
};
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
}
table {
  text-align: center;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  text-indent: initial;
  margin-top: 20px;
}
table tr {
  border-bottom: 1px solid #eee;
}
table td,
th {
  padding: 0.3rem 0.1rem;
}
table tr:nth-of-type(even) {
  background-color: #eee;
}
table td span {
  margin: 0.1rem 0.1rem;
  padding: 0 0.5rem;
}
table th {
  background-color: #409eff;
  color: #fff;
}
.m-header {
  height: auto !important;
  padding: 0;
}
.m-main {
  padding-right: 0;
  padding-left: 0;
}
.badge_item sup {
  top: 10px !important;
}
tbody tr:hover {
  cursor: pointer;
}
p {
  text-align: center;
}
span.isActive {
  color: red;
}
.notify {
  cursor: pointer;
}
</style>
