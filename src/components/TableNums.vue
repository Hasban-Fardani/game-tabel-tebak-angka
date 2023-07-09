<template>
  <div class="container text-white bg-gray-800">
    <!-- {{ data.filter((n)=>n.bases.includes(base)) }} -->
    <h1 class="mb-5 font-bold text-xl">Tabel {{ idx + 1 }}</h1>
    <div class="flex justify-center">
      <div class="flex flex-wrap justify-center mb-10 w-3/4 max-h-[70%]">
        <div v-for="n in data" :key="n.num" class="border p-7">
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
    data: Array,  // (nama: tipeData)
    base: Number,
    idx: Number,
  },
}
</script>
