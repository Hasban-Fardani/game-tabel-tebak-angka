<template>
  <NavBar @go-to="goToPage" :idx="currentPage"/>
  <main>
    <TutorialPage v-if="currentPage==0"/>
    <MainPage v-if="currentPage==1"/>
    <CommentPage v-if="currentPage==2"/>
  </main>
</template>

<script>
import NavBar from './components/navbar.vue'
import MainPage  from "./components/MainPage.vue";
import CommentPage from "./components/CommentPage.vue";
import TutorialPage from "./components/TutorialPage.vue";
// let chunk = 4;

export default {
  name: 'App',
  data() {
    return {
      // 0: tutor, 1: main, 2: comment
      currentPage: 1,
    }
  },

  methods: {
    goToPage(idx){
      // console.log(`goto ${idx} app.vue clicked`)
      this.currentPage = idx;
    }
  },
  components: {
    NavBar,
    MainPage,
    CommentPage,
    TutorialPage
  }
}
</script>

