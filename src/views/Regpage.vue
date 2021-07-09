<template>
  <div class="about">
    <h1>This is the regpage</h1><br><br>


  <label for="fname">MAC Adresse:</label>
  <input type="text" v-model="macadress" name="mac"><br><br>


  <label for="long">Latitude:</label>
  <input type="text" v-model="lat" name="latitude"><br><br>


  <label for="lname">Longitude:</label>
  <input type="text" v-model="long" name="longitude"><br><br>

  
  <label for="adress">Adress:</label>
  <input type="text" v-model="adress" name="adress"><br><br>

  <button @click="getVal">Submit</button>

  <p>
    {{macadress}}
    {{long}}
    {{lat}}
    {{adress}}
  </p>

  </div>

  
  
</template>

<script>
export default {
  name: 'Regpage',
  data() {
    return {
      macadress: null,
      lat: null,
      long: null,
      adress: null,
    };
  },
  methods: {
    getVal() {
      console.log(this.macadress, this.long, this.lat);
      this.axios.post('/addSensor', {
        deviceId: this.macadress,
        long: this.long,
        lat: this.lat,
        adress: this.adress,
      });
    },
  }
}
</script>

<style>

</style>