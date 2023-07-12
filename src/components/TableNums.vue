<template>
  <div class="text-white">
    <!-- <h1 class="mb-5 font-bold text-sm">Tabel {{ idx + 1 }}</h1> -->
    <h1 class="mb-10 font-bold text-sm">Apakah angka yang anda pikirkan ada di bawah ini?</h1>
    <div class="flex justify-center">
      <div class="grid grid-cols-4">
        <div v-for="n in data" :key="n.num" class="border p-3">
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

  methods: {
    getPercentOpacity(allBase, selected) {
      return allBase.length / selected.length 
    } 
  }
}
</script>
