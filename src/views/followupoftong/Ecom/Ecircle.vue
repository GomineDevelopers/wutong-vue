<template>
  <div class="Ecircle">
    <div class="EcircleC height_auto" :id="chartData.id"></div>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
import echarts from "echarts";

export default {
  name: "Ecircle",
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
        var Ecircle = echarts.init(document.getElementById(this.chartData.id));
        Ecircle.clear();
        var option = {
          title: {
            // text: "68%",
            text: this.chartData.data.text,
            subtext: String(this.chartData.data.value) + "%",
            x: "center",
            y: "30%",
            textStyle: {
              fontWeight: "normal",
              color: "#ccc",
              fontSize: 11
            },
            subtextStyle: {
              color: "rgba(255,255,255,.45)",
              fontSize: 15,
              color: "#fff",
              fontWeight: "normal"
            }
          },
          //   legend: {
          //     data: [this.chartData.data.text],
          //     icon: "none",
          //     left: "5%",
          //     // left: "auto",
          //     // right:"35%",
          //     right: "auto",
          //     top: "25%",
          //     // align: "auto",
          //     // backgroundColor: "red",
          //     textStyle: {
          //       fontWeight: "normal",
          //       color: "#AFAFAF",
          //       fontSize: "10"
          //       //   backgroundColor: "red",
          //       //   width: "0%",
          //       //   padding:[0,5]
          //     }
          //   },
          color: "#1D2437",
          series: [
            {
              name: "Line 1",
              type: "pie",
              minAngle: 15,
              clockWise: true,
              radius: ["70%", "90%"], // 大小
              center: ["50%", "50%"], // 位置
              itemStyle: {
                normal: {
                  borderWidth: 2, //设置border的宽度有多大
                  //   borderColor: "#061b4f",
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
                  value: this.chartData.data.value,
                  name: this.chartData.data.text,
                  itemStyle: {
                    normal: {
                      color: {
                        // 完成的圆环的颜色
                        colorStops: [
                          {
                            offset: 0,
                            color: this.chartData.color // 0% 处的颜色
                          },
                          {
                            offset: 1,
                            color: this.chartData.color // 100% 处的颜色
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
                  name: "未订购用户数",
                  value: 100 - this.chartData.data.value
                }
              ]
            }
          ]
        };
        Ecircle.clear();
        Ecircle.setOption(option);
        window.addEventListener("resize", () => {
          Ecircle.resize();
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.Ecircle {
  height: 100%;
  width: 100%;
  text-align: center;
}
.Ecircle .EcircleC {
  width: 100%;
}
</style>