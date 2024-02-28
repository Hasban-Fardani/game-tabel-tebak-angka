<template>
  <div class="overflow-x-auto">
    <NavBar @go-to="goToPage" :idx="currentPage"/>
    <RouterView/>
  </div>
</template>

<script>
import NavBar from './components/navbar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

