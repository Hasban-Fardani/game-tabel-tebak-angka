<!-- eslint-disable no-unused-vars -->
<template>
  <div>
    <h1>this is main page</h1>
  </div>
</template>

<script>

// const getHigherNumByChunk = (chunk) => {
//   let s = 0;
//   for (let i = 0; i <= chunk; i++) {
//     s += 2 ** i
//   }
//   return s
// };

// const getBasesOfNums = (allBases, nums) => {
//   let bases = [];
//   allBases = allBases.sort().reverse()
//   allBases.forEach(b => {
//     if (b < nums) {
//       nums -= b;
//       bases.push(b);
//     }
//   });
//   if (nums === 0) {
//     return bases;
//   } 
//   // ketika error (bukan angka yang bisa dihasilkan oleh basis pada parameter)
//   return -1
// }

// const generateBasesByNum = (chunk) => {
//   let nums = [];
//   for (let i = 0; i <= chunk; i++) {
//     nums.push(2**i);
//   }
//   return nums;
// };

// const generateAllNums = (chunk) => {
//   let nums = [];
//   const higher = getHigherNumByChunk(chunk)
//   for (let i = higher; i > 0; i--){
//     const bases = getBasesOfNums(i);
//     if (bases !== -1){
//       nums.push({num: i, bases:bases})
//     }
//   }
//   return nums;
// }

export default {
  name: 'MainPage',
}
</script>