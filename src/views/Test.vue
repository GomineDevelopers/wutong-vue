<template>
  <div class="Test">
    <vue-headful title="测试"></vue-headful>
    <div class="contact_information_img">
      <com-mymap class="mapSm"></com-mymap>
    </div>
  </div>
</template>
<script>
import mymap from "@/views/components/mymap"

export default {
  name: "Test",
  components: {
    "com-mymap": mymap
  },
  data() {
    return {};
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

