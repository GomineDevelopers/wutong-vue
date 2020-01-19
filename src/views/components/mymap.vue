<template>
  <baidu-map
    @moveend="moveendMap"
    @ready="readyMap"
    class="bm-view"
    :center="center"
    ak="AAaf5f551c698000158e2252e357525a"
    :zoom="zoom"
  >
    <!-- 标记点 -->
    <bm-marker
      :position=" { lng: 106.64882, lat: 26.61719 }"
      :dragging="true"
      animation="BMAP_ANIMATION_BOUNCE"
    ></bm-marker>
  </baidu-map>
</template>


<script>
import {
  BaiduMap,
  BmLabel,
  BmGeolocation,
  BmOverlay,
  BmInfoWindow,
  BmMarker
} from "vue-baidu-map";

export default {
  data: () => ({
    center: { lng: 106.64882, lat: 26.61719 },
    zoom: 17,
    point: (106.64882, 26.61719),
    winHeight: 400,
    param: {
      lonMin: 0,
      lonMax: 0,
      latMin: 0,
      latMax: 0
    },
    infoWindow: {
      show: true,
      contents: ""
    },
    decShopPointerList: [],
    windowLabelPoint: {
      lng: 0,
      lat: 0
    },
    eventListen: false, // 地图初始完成之后才可监听移动、放大等事件
    map: {},
    shopBaseinfo: {},
    curIndex: -1,
    labelShow: true,
    labelStyles: {
      color: "#fff",
      fontSize: "12px",
      background: "#f56666",
      padding: "6px",
      border: "none",
      borderRadius: "4px"
    },
    labelCurStyles: {
      color: "#fff",
      fontSize: "12px",
      background: "#1894ea",
      padding: "6px",
      border: "none",
      borderRadius: "4px"
    }
  }),

  mounted() {
    if (window.innerHeight) {
      this.winHeight = window.innerHeight;
    } else if (document.body && document.body.clientHeight) {
      this.winHeight = document.body.clientHeight;
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lng: position.coords.longitude,
          lat: position.coords.latitude
        };
      });
    }
    this.zoom = 17;
  },
  methods: {
    moveendMap() {
      if (this.eventListen) {
      }
    },
    infoWindowClose(e) {
      this.curIndex = -1;
      this.infoWindow.show = false;
    },
    infoWindowOpen(e) {
      this.infoWindow.show = true;
    },
    readyMap({ BMap, map }) {
      this.BMap = BMap;
      this.map = map;
      this.Geo = new BMap.Geocoder();
      this.eventListen = true;
    }
  },
  components: {
    BaiduMap,
    BmLabel,
    BmInfoWindow,
    BmMarker
  }
};
</script>


<style>
@media screen and (max-width: 767px) {
  .bm-view,
  .aboutus .contact_information_img .el-image {
    height: 100vh;
    width: 100vw;
  }
}
</style>
