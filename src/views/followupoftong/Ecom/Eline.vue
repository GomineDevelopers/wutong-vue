<template>
  <div class="Eline">
    <div class="ElineC height_auto" :id="chartData.id"></div>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
import echarts from "echarts";

export default {
  name: "Eline",
  props: {
    chartData: {
      type: Object
    }
  },
  //   watch: {
  //     chartData(newValue, oldValue) {
  //       let vm = this;
  //       setTimeout(function() {
  //         vm.drawLine();
  //       }, 1000);
  //     }
  //   },

  data() {
    return {};
  },
  mounted() {
    let vm = this;
    // setTimeout(function() {
    vm.drawLine();
    // }, 2000);
  },
  methods: {
    drawLine() {
      try {
        let vm = this;
        var Eline = echarts.init(document.getElementById(this.chartData.id));
        Eline.clear();
        let seriesData = [];
        //设置series数据条数
        for (let i = 1; i <= this.chartData.data.length - 1; i++) {
          seriesData.push({
            type: "line",
            seriesLayoutBy: "row",
            symbol: "circle"
          });
        }
        var option = {
          color: this.chartData.color,
          textStyle: {
            color: "rgba(0, 0, 0, 0.65)"
          },
          title: {
            text: this.chartData.title,
            x: "2%",
            y: "0%",
            textStyle: {
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "14",
              color: "#fff"
            }
          },
          legend: {
            icon: "circle",
            top: "10%",
            itemWidth: 6, // 设置宽度
            itemHeight: 6, // 设置高度
            itemGap: 20, // 设置间距
            textStyle: {
              fontSize: 14,
              color: "#fff"
            }
          },
          grid: {
            containLabel: true,
            top: "30%",
            left: "25",
            right: "20",
            bottom: "10"
          },
          tooltip: {
            trigger: "axis",
            // axisPointer: {
            //   type: "cross",
            //   label: {
            //     backgroundColor: "#6a7985"
            //   }
            // },
            textStyle: {
              align: "left"
            }
          },
          //图表自带工具
          //   toolbox: {
          //     show: true,
          //     top: "10%",
          //     right: "6%",
          //     feature: {
          //       saveAsImage: {}
          //     }
          //   },
          dataset: {
            source: this.chartData.data
          },
          xAxis: {
            type: "category",
            boundaryGap: false, //设置数据开始显示的起点在Y轴上
            axisLabel: {
              color: "rgba(255,255,255,0.8)"
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,0.2)" //设置横坐标轴线颜色
              }
            },
            axisTick: {
              alignWithLabel: true //设置坐标轴刻度与坐标对齐
            }
          },
          yAxis: {
            gridIndex: 0,
            axisLabel: {
              color: "rgba(255,255,255,0.8)"
            },
            axisTick: {
              show: false //设置坐标轴刻度不显示
            },
            axisLine: {
              color: "rgba(255,255,255,0.8)",
                show: false
            //   lineStyle: {
            //     color: "rgba(255,255,255,0.2)" //设置横坐标轴线颜色
            //   }
            },
            // 刻度线的设置
            splitLine: {
              show: true,
              lineStyle: {
                color: "#abe8ca",
                type: "dotted",
                opacity: 0.2
              }
            }
          },
          series: seriesData
        };
        Eline.clear();
        Eline.setOption(option);
        window.addEventListener("resize", () => {
          Eline.resize();
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.Eline {
  height: 100%;
  width: 100%;
  text-align: center;
}
.Eline .ElineC {
  width: 100%;
}
</style>