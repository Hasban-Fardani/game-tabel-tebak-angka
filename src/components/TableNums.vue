<template>
  <div class="text-white">
    <!-- <h1 class="mb-5 font-bold text-sm">Tabel {{ idx + 1 }}</h1> -->
    <h1 class="mb-10 font-bold text-sm">Apakah angka yang anda pikirkan ada di bawah ini?</h1>
    <div class="flex justify-center overflow-auto">
      <!-- <div class="grid" :class=" { [`grid-cols-${cols}`]: true }" > -->
      <div class="grid grid-cols-4" >
        <div v-for="n in data" :key="n.num" class="border p-1">
          {{ n.num }}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TableNums',
  props: {  // (parameter)
    idx: Number,
    data: Array,
    base: Number,
    allBases: Array,
    selected: Array,
  },

  mounted() {
    console.log(Math.floor( 2 ** (this.allBases.length-1) ** 0.5 ));
    console.log();
  },

  data() {
    return {
      cols: Math.floor( 2 ** (this.allBases.length-1) ** 0.5 ),
    }
  },
  methods: {
    
  }
}
</script>
