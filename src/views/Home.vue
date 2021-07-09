<template>
  <div class="min-vh-100 d-flex">
    <div>
      <Menu/>
    </div>
    <div class="flex-grow-1" style="background:pink">
      <Map/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Map from '@/components/Map.vue';
import Menu from '@/components/Menu.vue';

export default {
  name: 'Home',
  components: {
    Map,
    Menu,
  }
}
</script>
 