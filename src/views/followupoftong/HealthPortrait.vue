<template>
  <div class="HealthPortrait">
    <vue-headful title="健康画像"></vue-headful>
    <van-row class="top_info flex flex_align_center">
      <van-row class="flex flex_1 flex_align_center flex_direction">
        <img src="../../assets/pic/head2.png" />
        <span class="user_name">Max Wallace</span>
      </van-row>
    </van-row>

    <div class="HP_Content">
      <div class="E1">
        <div :style="{height: '0.26rem'}"></div>
        <p class="RQ_title">健康趋势</p>
        <div :style="{height: '0.18rem'}"></div>
        <div class="EChartsP">
          <div class="EChartsC" :id="RadarData.id"></div>
        </div>
      </div>
      <div :style="{height: '0.1rem'}"></div>
      <div class="E2">
        <div class="E2_child">
          <div class="E2_top">
            <div class="E2_tFont">血糖血脂</div>
          </div>
          <div class="E2_bottom">
            <div class="EChartsP2">
              <div class="EChartsC2" :id="E2aData.id"></div>
            </div>
          </div>
        </div>
        <div class="E2_child2"></div>
        <div class="E2_child">
          <div class="E2_top">
            <div class="E2_tFont">健康评分</div>
          </div>
          <div class="E2_bottom">
            <div class="EChartsP2">
              <div class="EChartsC2" :id="E2bData.id"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="E3">
        <div :style="{height: '0.26rem'}"></div>
        <p class="RQ_title">发病率</p>
        <div :style="{height: '0.18rem'}"></div>
        <div class="E3_child">
          <div class="E3_echart">
            <E-circle :chartData="E3aData"></E-circle>
          </div>
          <div class="E3_echart">
            <E-circle :chartData="E3bData"></E-circle>
          </div>
          <div class="E3_echart">
            <E-circle :chartData="E3cData"></E-circle>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import Ecircle from "./Ecom/Ecircle";

export default {
  name: "HealthPortrait",
  components: {
    "E-circle": Ecircle
  },

  data() {
    return {
      RadarData: {
        id: "RadarEcharts",
        dataMax: [
          { name: "血糖", max: 1000 },
          { name: "疾病控制情况", max: 1000 },
          { name: "血脂", max: 1000 },
          { name: "生活习惯", max: 1000 },
          { name: "血压", max: 1000 }
        ],
        data: [
          {
            value: [430, 430, 250, 900, 760],
            name: "健康趋势"
          }
          // {
          //   value: [5000, 14000, 28000, 31000, 42000, 21000],
          //   name: "备用"
          // }
        ]
      },
      E2aData: {
        id: "RadarEcharts2",
        value: 6560,
        data: [
          ["product", "血糖血脂"],
          ["2020-01-01", 9500],
          ["2020-01-02", 8300],
          ["2020-01-03", 5600],
          ["2020-01-04", 7200],
          ["2020-01-05", 3500],
          ["2020-01-06", 6500],
          ["2020-01-07", 5600],
          ["2020-01-08", 7200],
          ["2020-01-09", 3500],
          ["2020-01-10", 6500],
          ["2020-01-11", 5500],
          ["2020-01-12", 6500],
          ["2020-01-13", 7500],
          ["2020-01-14", 6100]
        ]
      },
      E2bData: {
        id: "RadarEcharts3",
        dataMax: [
          { name: "疾病控制情况", max: 6500 },
          { name: "血糖管理", max: 16000 },
          { name: "血压", max: 30000 },
          { name: "生活习惯", max: 38000 },
          { name: "血脂", max: 52000 }
        ],
        data: [
          {
            value: [4300, 10000, 28000, 35000, 50000],
            name: "预算分配（Allocated Budget）"
          }
        ]
      },
      E3aData: {
        id: "E3a",
        data: {
          text: "糖尿病",
          value: 78
        },
        color: "#5FDAFF"
      },
      E3bData: {
        id: "E3b",
        data: {
          text: "  中风", //  需要名字补齐-lengend不好调
          value: 60
        },
        color: "#99FEFA"
      },
      E3cData: {
        id: "E3c",
        data: {
          text: "高血压",
          value: 72
        },
        color: "#009EFF"
      }
    };
  },
  mounted() {
    let vm = this;
    setTimeout(function() {
      vm.setEChart();
      vm.setEChart2();
      vm.setEChart3();
    }, 1000);
  },
  methods: {
    setEChart() {
      try {
        var Echarts = echarts.init(document.getElementById(this.RadarData.id));
        let seriesData = [];

        var option = {
          //   backgroundColor: "rgba(14, 21, 40, 0.3)",
          // title: {
          //   text: "基础雷达图"
          // },
          tooltip: {},
          radar: {
            // shape: 'circle',
            name: {
              formatter: "{value}",
              textStyle: {
                color: "#fff"
              }
            },
            splitLine: {
              lineStyle: {
                color: "rgba(233, 233, 233, 0.7)"
              }
            },
            splitArea: {
              show: false
            },
            indicator: this.RadarData.dataMax,
            center: ["50%", "55%"]
          },

          series: [
            {
              name: "健康趋势",
              type: "radar",
              // areaStyle: {normal: {}},
              data: this.RadarData.data,
              areaStyle: {
                normal: {
                  color: "rgba(85, 235, 162, 0.6)"
                }
              },
              itemStyle: {
                borderWidth: 3,
                borderColor: "#fff",
                shadowColor: "#55EBA2",
                shadowBlur: 10
              },
              lineStyle: {
                color: "#55EBA2"
              }
            }
          ]
        };
        Echarts.clear();
        Echarts.setOption(option);
        window.addEventListener("resize", () => {
          Echarts.resize();
        });
      } catch (error) {
        console.log(error);
      }
    },
    setEChart2() {
      try {
        var Echarts = echarts.init(document.getElementById(this.E2aData.id));
        var option = {
          title: {
            text: this.E2aData.value,
            left: "-3.8%",
            top: "10%",
            textStyle: {
              color: "#fff",
              fontSize: "20"
            }
          },

          grid: {
            top: "50%",
            left: "0%",
            right: "4%",
            bottom: "15%",
            containLabel: true
          },
          color: [
            {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#99FEFA" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#00DBCC" // 100% 处的颜色
                }
              ]
            }
          ],
          tooltip: {
            trigger: "item",
            position: "top"
          },
          // legend: {
          //   itemWidth: 6,
          //   itemHeight: 3,
          //   textStyle: {
          //     color: "#dedede"
          //   }
          // },

          dataset: {
            source: this.E2aData.data
          },
          xAxis: {
            type: "category",
            axisLabel: {
              //横坐标类目文字
              show: false
            },
            axisTick: {
              show: false //设置坐标轴刻度不显示
            },
            axisLine: {
              show: false
            }
          },
          yAxis: {
            axisLabel: {
              //横坐标类目文字
              //rotate: 30,
              show: false
            },
            // 刻度线的设置
            splitLine: {
              show: false
            },
            axisTick: {
              show: false //设置坐标轴刻度不显示
            },
            axisLine: {
              show: false
            }
          },
          series: [
            {
              type: "bar",
              barWidth: 6 //柱子宽度
            }
          ]
        };
        Echarts.clear();
        Echarts.setOption(option);
        window.addEventListener("resize", () => {
          Echarts.resize();
        });
      } catch (error) {
        console.log(error);
      }
    },
    setEChart3() {
      try {
        var Echarts = echarts.init(document.getElementById(this.E2bData.id));
        let seriesData = [];

        var option = {
          title: {
            // text: String(80) + "%",
            text: String(78),
            left: "-3.8%",
            top: "10%",
            textStyle: {
              fontWeight: "normal",
              color: "#fff",
              fontSize: "20"
            }
          },
          color: "#1D2437",
          series: [
            {
              name: "Line 1",
              type: "pie",
              minAngle: 15,
              clockWise: true,
              // radius: ["50%", "73%"],
              //   radius: ["40%", "55%"], // 大小
              center: ["70%", "55%"], // 位置
              itemStyle: {
                normal: {
                  borderWidth: 2, //设置border的宽度有多大
                  // borderColor: "#061b4f",
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false, //鼠标放上不放大
              data: [
                {
                  value: 78,
                  name: "健康评分",
                  itemStyle: {
                    normal: {
                      color: {
                        // 完成的圆环的颜色
                        colorStops: [
                          {
                            offset: 0,
                            color: "#03D7FF" // 0% 处的颜色
                          },
                          {
                            offset: 1,
                            color: "#1DB4FF" // 100% 处的颜色
                          }
                        ]
                      },
                      label: {
                        show: false
                      },
                      labelLine: {
                        show: false
                      }
                    }
                  }
                },
                {
                  name: "健康评分",
                  value: 22
                }
              ]
            }
          ]
        };
        Echarts.clear();
        Echarts.setOption(option);
        window.addEventListener("resize", () => {
          Echarts.resize();
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style >
.HealthPortrait .van-icon {
  margin-top: 0.03rem;
  margin-left: 1.3rem;
}
</style>
<style scoped>
.HealthPortrait .HP_Content {
  padding: 0 0.32rem;
}

.HealthPortrait .top_info {
  height: 2.2rem;
  justify-content: space-between;
  padding-top: 0.56rem;
}
.HealthPortrait .top_info img {
  width: 1.392rem;
  height: 1.392rem;
  margin: 0rem 0.32rem 0rem 0.5rem;
}
.HealthPortrait .top_info .user_name {
  font-size: 0.4rem;
  color: #fff;
  margin-top: 0.4rem;
}

.HealthPortrait .doctor_info span:nth-child(1) {
  font-size: 0.4rem;
  display: block;
}
.HealthPortrait .doctor_info span:nth-child(2) {
  font-size: 0.28rem;
  display: block;
  margin-top: 0.1rem;
}
.HealthPortrait .RQ_title {
  margin: 0;
  height: 0.4rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 600;
  color: #fff;
  line-height: 0.4rem;
  letter-spacing: 0.01px;
}
.HealthPortrait .EChartsP {
  height: 4rem;
  width: 100%;
  text-align: center;
}
.HealthPortrait .EChartsC {
  height: 4rem;
  width: 100%;
}

.HealthPortrait .E2 {
  height: 2rem;
  width: 100%;
}
.HealthPortrait .E2_child {
  height: 1.6rem;
  width: 42%;
  padding: 0.2rem 3%;
  display: inline-block;
  vertical-align: top;
}
.HealthPortrait .E2_child2 {
  height: 2rem;
  width: 3%;
  display: inline-block;
  vertical-align: top;
}
.HealthPortrait .E2_top {
  height: 0.32rem;
  line-height: 0.32rem;
}
.HealthPortrait .E2_tFont {
  font-size: 0.24rem;
  color: #858b9c;
  display: inline-block;
  vertical-align: top;
}
.HealthPortrait .E2_tIcon {
  display: inline-block;
  vertical-align: top;
  font-size: 0;
}

.HealthPortrait .EChartsP2 {
  height: 1.5rem;
  width: 100%;
  text-align: center;
}
.HealthPortrait .EChartsC2 {
  height: 1.5rem;
  width: 100%;
}

.HealthPortrait .E3 {
  width: 100%;
}

.HealthPortrait .E3_child {
  height: 1.8rem;
  width: 100%;
  font-size: 0;
}
.HealthPortrait .E3_echart {
  width: 33%;
  height: 1.8rem;
  display: inline-block;
  vertical-align: top;
  /* background-color: red; */
}
</style>

