<template>
  <div class="flex justify-center gap-4 text-center p-3 text-white">
    <RouterLink to="/" class="py-2 px-4" :class="{ 'bg-gray-500': $route.path === '/' }">Main</RouterLink>
    <RouterLink to="/how" class="py-2 px-4" :class="{ 'bg-gray-500': $route.path === '/how' }">How it works?</RouterLink>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>