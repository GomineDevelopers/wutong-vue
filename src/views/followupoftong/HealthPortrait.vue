<template>
  <div class="HealthPortrait">
    <vue-headful title="健康画像"></vue-headful>
    <van-row class="top_info flex flex_align_center">
      <van-row class="flex flex_1 flex_align_center">
        <img src="../../assets/pic/head2.png" />
        <van-row class="doctor_info">
          <span class="theme_color2 font_weight_500">Max Wallace</span>
          <span class="theme_color4 font_weight_500">132xxxx4323</span>
        </van-row>
      </van-row>
      <van-icon name="arrow" size="0.5rem" />
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
            <div class="E2_tIcon">
              <van-icon name="info-o" color="#bebebe" size="0.28rem" />
            </div>
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
            <div class="E2_tIcon">
              <van-icon name="info-o" color="#bebebe" size="0.28rem" />
            </div>
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
          value: 35
        },
        color: "#5CA1F8"
      },
      E3bData: {
        id: "E3b",
        data: {
          text: "  中风", //  需要名字补齐-lengend不好调
          value: 22
        },
        color: "#8DD091"
      },
      E3cData: {
        id: "E3c",
        data: {
          text: "高血压",
          value: 40
        },
        color: "#F7DA7B"
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
          backgroundColor: "#F2F2F3",
          // title: {
          //   text: "基础雷达图"
          // },
          tooltip: {},
          // legend: {
          //   data: [
          //     "预算分配（Allocated Budget）",
          //     "实际开销（Actual Spending）"
          //   ]
          // },
          radar: {
            // shape: 'circle',
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
                  color: "#81d8ce"
                }
              },
              itemStyle: {
                borderWidth: 3,
                borderColor: "rgba(88, 188, 188, 1)",
                shadowColor: "rgba(88, 188, 188, 0.5)",
                shadowBlur: 10
              },
              lineStyle: {
                color: "#81d8ce"
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
            top: "10%"
          },
          textStyle: {
            color: "#dedede"
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
                  color: "#00E5FF" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#0053DC" // 100% 处的颜色
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
              show: false,
              textStyle: {
                fontSize: "10" //设置横坐标轴文字颜大小
              }
            },
            axisTick: {
              alignWithLabel: true, //设置坐标轴刻度与坐标对齐
              show: false //设置坐标轴刻度不显示
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#ccc" //设置横坐标轴线颜色
              }
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
              show: false,
              lineStyle: {
                color: "#939393",
                opacity: 0.2
              }
            },
            axisTick: {
              show: false //设置坐标轴刻度不显示
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#202f59" //设置横坐标轴线颜色
              }
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
            top: "10%"
            // textStyle: {
            //   fontWeight: "normal",
            //   color: "#dedede",
            //   fontSize: "16"
            // }red
          },
          color: "#E8E9E9",
          series: [
            {
              name: "Line 1",
              type: "pie",
              minAngle: 15,
              clockWise: true,
              // radius: ["50%", "73%"],
              radius: ["40%", "55%"], // 大小
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
                            color: "#00E5FF" // 0% 处的颜色
                          },
                          {
                            offset: 1,
                            color: "#0053DC" // 100% 处的颜色
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
.HealthPortrait {
}
.HealthPortrait .HP_Content {
  padding: 0 0.32rem;
}

.HealthPortrait .top_info {
  height: 2.2rem;
  justify-content: space-between;
  padding-right: 0.41rem;
  box-shadow: 0px 2px 10px 0px rgba(203, 203, 203, 0.2);
}
.HealthPortrait .top_info img {
  width: 1.392rem;
  height: 1.392rem;
  margin: 0rem 0.32rem 0rem 0.5rem;
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
  color: rgba(17, 26, 52, 1);
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
  border: 0.01rem solid #f8f8f8;
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
  font-size: 0.28rem;
  color: #bebebe;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
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
  border-top: 0.01rem solid #f8f8f8;
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

