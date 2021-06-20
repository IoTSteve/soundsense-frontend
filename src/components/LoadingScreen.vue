<template>
  <div class="loadingScreenWrapper">
    <div class="loadingScreenContent">
      <h1 style="margin: 0px;">Soundsense</h1>
      <div class="d-flex justify-content-center mb-3" style="margin-top: 10px;">
        <b-spinner label="Loading..."></b-spinner>
      </div>
    </div>

    <div v-if="false" class="loadingScreenStatusWrapper" @click="openStatus">
      <b-icon icon="globe" class="loadingScreenStatusContent"/>
      <span style="margin-left: 5px;" class="loadingScreenStatusContent">System-Status</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoadingScreen',
  methods: {
    openStatus() {
      window.open('http://status.itmr-dev.de/');
    }
  },
}
</script>

<style scoped>
.loadingScreenWrapper {
  text-align: center;
  position: absolute;
  background-color: var(--background-color);
  width: 100vw;
  height: 100vh;
  z-index: 99;
}
.loadingScreenContent {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.loadingScreenStatusWrapper {
  position: absolute;
  left: 50%;
  bottom: 0px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  cursor: pointer;
  font-size: 0.8rem;
}
.loadingScreenStatusWrapper:hover {
  color: var(--interaction-color);
}
</style>