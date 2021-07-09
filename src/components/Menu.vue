<template>
  <div class="menuWrapper text">
    <div class="menuHeader">
      {{date}} {{time}} <img src="https://image.freepik.com/vektoren-kostenlos/geschaeftsmann-charakter-avatar-isoliert_24877-60111.jpg" class="avatar">
    </div>
    <div class="menuTableWrapper">
      <table>
        <tr>
          <th>Lautstärke</th>
          <th>Sensor</th>
          <th>ID</th>
          <th>?</th>
        </tr>
        <tr v-for="d in soundData" :key="d._id" :class="{ selected: $store.state.selectedMarker === d._id}">
          <td>{{d.db}} <span :class="{ dotGreen: true, dotYellow: d.db > 50, dotRed: d.db > 65 }"></span></td>
          <td>{{getAdress(d._id)}}</td>
          <td>{{d._id}}</td>
          <td>X</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      soundData: null,
      deviceData: null,
    };
  },
  mounted() {
    this.getData();
    setInterval(() => {
      this.getData();
    }, 10000);
  },
  methods: {
    getData() {
      this.axios.get('/getDevice').then((res) => {
        console.log(res.data);
        this.deviceData = res.data;
      });
      this.axios.get('/getSoundData').then((res) => {
        this.soundData = res.data;
        console.log(res.data);
        this.soundData = this.soundData.sort((a,b) => a._id < b._id);
        // this.soundData = this.soundData.sort((a,b) => this.getAdress(a._id) < this.getAdress(b._id));
      });
    },
    getAdress(deviceID) {
      if (!this.deviceData) return 0;
      const dev = this.deviceData.find((e) => e.deviceId === deviceID);
      if (!dev || !dev.adress) return 'Keine Adresse';
      return dev.adress;
    },
  },
  computed: {
    date() { 
      const now = new Date();
      return now.toLocaleDateString();
    },
    time() {
      const now = new Date();
      return now.toLocaleTimeString();
    },
  }
}
</script>

<style scoped>
.menuWrapper {
  padding: 2rem;
  height: 100%;
  background: var(--menu-color);
}

.menuHeader {
}
.avatar {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}

.menuTableWrapper {
  height: 20rem;
  overflow-y: auto;
}
.selected {
  background-color: #d59a0587
}

table {
}

tr {
}

th{
}

td {
}
</style>