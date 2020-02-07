<template>
  <div class="Test">
    <vue-headful title="测试"></vue-headful>
    <!-- <div class="contact_information_img">
      <com-mymap class="mapSm"></com-mymap>
    </div>-->
    <div>
      <com-deletetest :list="list"></com-deletetest>
      <com-deletetest :list="list2"></com-deletetest>
    </div>
  </div>
</template>
<script>
import mymap from "@/views/components/mymap";
import DeleteTest from "@/views/components/DeleteTest";

export default {
  name: "Test",
  components: {
    "com-mymap": mymap,
    "com-deletetest": DeleteTest
  },
  data() {
    return {
      list2: [
        {
          id: 111,
          imgUrl: require("@/assets/pic/selected.png"),
          title: "ttt",
          tips: "xxxxxxx",
          time: "2020-02-04"
        }
      ],
      list: [
        {
          id: 1,
          imgUrl: require("@/assets/pic/selected.png"),
          title: "ttt",
          tips: "xxxxxxx",
          time: "2020-02-04"
        }
        // ,
        // {
        //   id: 2,
        //   imgUrl: require("@/assets/pic/selected.png"),
        //   title: "ttt",
        //   tips: "xxxxxxx",
        //   time: "2020-02-04"
        // },
        // {
        //   id: 3,
        //   imgUrl: require("@/assets/pic/selected.png"),
        //   title: "ttt",
        //   tips: "xxxxxxx",
        //   time: "2020-02-04"
        // },
        // {
        //   id: 4,
        //   imgUrl: require("@/assets/pic/selected.png"),
        //   title: "ttt",
        //   tips: "xxxxxxx",
        //   time: "2020-02-04"
        // }
      ]
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {}
};
</script>
<style scoped>
.Test {
}
</style>

