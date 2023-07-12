<template>
  <div class="flex justify-center gap-4 text-center p-3 text-white">
    <button class="p-2 rounded-lg" :class="{active: idx==0}" @click="$emit('go-to', 0)">How it works?</button>
    <button class="p-2 rounded-lg" :class="{active: idx==1}" @click="$emit('go-to', 1)">Main</button>
    <button class="p-2 rounded-lg" :class="{active: idx==2}" @click="$emit('go-to', 2)">Comment</button>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    idx: Number,
  },
  data(){
    return {
      current: this.idx,
    }
  }
}
</script>

<style> 
.active {
  background-color: rgb(151, 150, 150);
}
</style>