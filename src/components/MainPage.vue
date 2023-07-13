<!-- eslint-disable no-unused-vars -->
<template>
  <div class="flex flex-col items-center justify-center h-[calc(100vh-5rem)] text-white font-mono">
    <div class="mb-1 w-1/2 sm:w-2/3 flex-wrap text-center">
      <div v-if="step == 0">
        <p class="border p-3">
          Pikirkan dalam kepala anda sebuah angka dari 1 sampai {{ getHigherNumByChunk(chunk) }}
        </p>
        <div class="flex justify-center gap-24 text-lg" >
          <button class="hover:bg-gray-500 p-2 m-1" :class="{ hidden: hidden_btn.left }" @click="backStep"> &lt; </button>
          <button class="hover:bg-gray-500 p-2 m-1" :class="{ hidden: hidden_btn.right }" @click="nextStep"> > </button>
        </div>
      </div>
      <div v-else-if="step < chunk + 2" class="">        
      <!-- <div v-else-if="step < chunk+1">         -->
        <TableNums :idx="step-1" :data="dataTable" :base="allBasesR[step-1]" :all-bases="allBases" :selected="bases"/>
        <div class="flex justify-center gap-24 text-lg">
          <button @click="nextStep(allBasesR[step-1])" class="my-5 p-2"> Ada </button>
          <button @click="nextStep(null)" class="my-5 p-2"> Tidak </button>
        </div>
      </div>
      <div v-else>
        <h1>Angka yang anda pikirkan adalah:</h1>
        {{ result }}
      </div>  
    </div>
  </div>
</template>

<script>
import TableNums from './TableNums.vue';

export default {
  name: 'MainPage',

  components: {
    TableNums,
  },

  data() {
    return {
      chunk: 5,
      bases: [],
      allBases: [],
      allBasesR: [],
      allNums: [],
      result: 0,

      step: 0,
      mx_step: 0,

      hidden_btn: {
        left: true,
        right: false,
      }
    }
  },

  mounted() {
    this.mx_step = this.chunk + 2;

    this.allBases = this.generateBasesByChunk(this.chunk)
      .reverse();
    this.allBasesR = this.generateBasesByChunk(this.chunk)
      .sort((x, y) => x - y);
    this.allNums = this.generateAllNums();
  },
  
  // 
  computed: {
    dataTable(){
      return this.allNums.filter((n) => n.bases.includes(this.allBasesR[this.step-1]))
    },
    
  },

  methods: {
    getHigherNumByChunk(chunk) {
      let s = 0;
      for (let i = 0; i <= chunk; i++) {
        s += 2 ** i
      }
      return s
    },

    generateBasesByChunk(chunk) {
      let nums = [];
      for (let i = 0; i <= chunk; i++) {
        nums.push(2 ** i);
      }
      return nums;
    },

    getBasesOfNums(nums) {
      let bases = [];
      this.allBases
        .forEach(b => {
          if (b <= nums) {
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

    generateAllNums() {
      let nums = [];
      const higher = this.getHigherNumByChunk(this.chunk)
      for (let i = higher; i > 0; i--) {
        const bases = this.getBasesOfNums(i);
        if (bases !== -1) {
          nums.push({ num: i, bases: bases })
        }
      }
      return nums;
    },
    
    nextStep(data) {
      if (data !== null && typeof data === 'number'){
        this.bases.push(data);
      }

      this.hidden_btn.left = false;

      const mx = this.chunk+2;

      this.step += this.step < mx ? 1 : 0;
      if (this.step >= mx) {
        this.hidden_btn.right = true;
        this.result = this.getNum();
      } else {
        this.hidden_btn.right = false;
      }
      
    },

    backStep() {
      this.hidden_btn.right = false;

      this.step -= this.step > 0 ? 1 : 0;
      if (this.step == 0) {
        this.hidden_btn.left = true;
      } else {
        this.hidden_btn.left = false;
      }
    },

    getNum(){
      let hasil = 0;
      this.bases.forEach((b) => {
        hasil+=b;
      });
      return hasil;
    }
  }
}
</script>