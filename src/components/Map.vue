<template>
  <div class="home-map">
    <transition name="fade">
      <LoadingScreen v-if="!showMap"/>
    </transition>
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle" @load="onMapLoad" :zoom.sync="$store.state.mapState.zoom" :pitch.sync="$store.state.mapState.pitch" :center.sync="$store.state.mapState.center" :bearing.sync="$store.state.mapState.bearing" class="home-map">
    <!-- use our custom bike markers on the map -->
    <MglMarker v-for="marker in mapMarker" :key="marker.ts" :coordinates="[marker.long, marker.lat]" @click="$store.state.selectedMarker = marker.deviceId">
      <div slot="marker">
        <img v-if="$store.state.selectedMarker !== marker.deviceId" src="@/assets/button.svg" class="marker" alt="" srcset="">
        <img v-if="$store.state.selectedMarker === marker.deviceId" src="@/assets/buttonActive.svg" class="marker" alt="" srcset="">
      </div>
    </MglMarker>
    
    <MglGeolocateControl v-if="showControls" />
    <MglNavigationControl v-if="showControls" />
  </MglMap>
  <!--MenuButton v-if="showControls"/-->
  </div>
</template>

<script>
  import Mapbox from "mapbox-gl";
  import LoadingScreen from '../components/LoadingScreen.vue';
  // import uiBlock from '../components/uiBlock.vue';
  // import MenuButton from '../components/MenuButton';

  import {
    MglMap,
    MglMarker,
    MglGeolocateControl,
    MglNavigationControl,
  } from "vue-mapbox";
  export default {
    name: 'MapComponent',
    components: {
      LoadingScreen,
      // MenuButton,
      MglMap,
      MglMarker,
      MglGeolocateControl,
      MglNavigationControl,
    },
    data() {
      return {
        accessToken: 'pk.eyJ1IjoiaW90c3RldmUiLCJhIjoiY2trNWc3M2p6MGIzejJ4bzc5ZjdiZ2pjcCJ9.oy1EEiHX-y4g2Bh7bQlRuQ',
        mapStyle: 'mapbox://styles/iotsteve/ckqtttjv1071c18nzf68i81sz',
        showMap: false,
        showControls: false,
        showTreePopup: false,
        zoom: undefined,
      }
    },
    methods: {
      async onMapLoad(/*event*/) {
        // const asyncActions = event.component.actions
        if (this.$store.state.mapLoaded) {
          this.showControls = true;
          setTimeout(() => this.showMap = true, 250);
        } else {
          this.showMap = true;
          /*await asyncActions.flyTo({
            center: [13.4546841, 52.5142626],
            zoom: 14,
            speed: 0.5
          })
          .then(() => setTimeout(() => this.showControls = true, 500));
          */
          setTimeout(() => this.showControls = true, 500);
          this.$store.state.mapLoaded = true;
        }
      },
    },
    computed: {
      mapMarker() {
        return this.$store.state.deviceData;
      }
    },
    created() {
      this.mapbox = Mapbox;
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .home-map {
    width: 100%;
    height: 100%;
    /*
    position: fixed;
    width: 100vw;
    height: 100vh;
    */
  }
  .fade-leave-active {
  transition: opacity .5s;
}
  .fade-leave-to {
    opacity: 0;
  }
  .popup-body {
    margin: .5rem;
    margin-right: 1rem;
  }
  .popup-text {
    color: var(--background-color)
  }
  .marker {
    cursor: pointer;
  }
</style>