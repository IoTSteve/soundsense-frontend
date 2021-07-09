<template>
  <div id="app">
      <router-view name="header"></router-view>
      <main>
        <router-view style="min-height: 90vh;"/>
      </main>
      <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.axios.get('/getSoundData').then((res) => {
      this.$store.state.soundData = res.data;
    });
    this.axios.get('/getDevice').then((res) => {
      this.$store.state.deviceData = res.data;
    });
    
  },
}
</script>

<style>

:root {
  --interaction-color: #ff9950;
  --danger-color: #ee684f;
  --warning-color: #ffc700;
  --okay-color: #44af4d;
  --text-icon-color: #00000;
  --notclickable-color: #cec6c6;
  --background-color: #bbbbbb;
  --menu-color: #2F2F2F;
  --secondary-text-icon-color: #a8a8a8;
  --visual-information-color: #346957;
  --disabled-color: #f4f4f4;
  --white-color: #ffffff;
}
h1 {
  font-size: 2.25rem;
  color: var(--text-icon-color);
  margin-top: 4.25rem;
}
h2 {
  font-size: 1.625rem;
  color: var(--text-icon-color);
  margin-top: 4.25rem;
  word-wrap: break-word;
}
h3 {
  font-size: 1.25rem;
  color: var(--text-icon-color);
}
h4 {
  font-size: 1.063rem;
  color: var(--text-icon-color);
}
body {
  font-size: 1rem;
  color: var(--text-icon-color);
  background-color: var(--background-color);
}
p {
  font-size: 0.875rem;
  color: var(--text-icon-color);
  hyphens: auto;
}
*:focus {
  outline: 0;
}

.text {
  color: var(--white-color)
}

.dotGreen:before {
  content: ' \25CF';
  margin-right: 0.5rem;
  color: var(--okay-color);
}
.dotYellow:before {
  content: ' \25CF';
  margin-right: 0.5rem;
  color: var(--warning-color);
}
.dotRed:before {
  content: ' \25CF';
  margin-right: 0.5rem;
  color: var(--danger-color);
}
</style>
