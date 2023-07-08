<!-- eslint-disable no-unused-vars -->
<template>
  <div class="flex flex-col items-center justify-center h-[calc(100vh-5rem)] bg-gray-800 text-white font-mono">
    <div class="mb-1 w-1/2 flex-wrap text-center border p-3">
      <p class="">
        Pikirkan dalam kepala anda sebuah angka dari 1 sampai {{ getHigherNumByChunk() }}
      </p>
    </div>
    <div class="flex gap-24 text-lg">
      <button class="hover:bg-gray-500 p-2 m-1" :class="{ hidden: hidden_btn.left }"> &lt; </button>
      <button class="hover:bg-gray-500 p-2 m-1" :class="{ hidden: hidden_btn.right }"> > </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      chunk: 5,
      hidden_btn: {
        left: true,
        right: false,
      }
    }
  },

  methods: {
    getHigherNumByChunk() {
      let s = 0;
      for (let i = 0; i <= this.chunk; i++) {
        s += 2 ** i
      }
      return s
    },

    generateBasesByNum(chunk) {
      let nums = [];
      for (let i = 0; i <= chunk; i++) {
        nums.push(2 ** i);
      }
      return nums;
    },

    getBasesOfNums(allBases, nums) {
      let bases = [];
      allBases = allBases.sort().reverse()
      allBases.forEach(b => {
        if (b < nums) {
          nums -= b;
          bases.push(b);
        }
      });
      if (nums === 0) {
        return bases;
      }
      // ketika error (bukan angka yang bisa dihasilkan oleh basis pada parameter)
      return -1
    },

    generateAllNums(chunk) {
      let nums = [];
      const higher = this.getHigherNumByChunk(chunk)
      for (let i = higher; i > 0; i--) {
        const bases = this.getBasesOfNums(i);
        if (bases !== -1) {
          nums.push({ num: i, bases: bases })
        }
      }
      return nums;
    },
  }
}
</script>