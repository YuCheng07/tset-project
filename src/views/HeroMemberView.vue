<script setup>
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import SideBar from '@/components/SideBar.vue'
import PageControl from '@/components/PageControl.vue'
import MainFooter from '@/components/MainFooter.vue'
import { ref, onMounted, watch } from 'vue'

const scrollPosition = ref(0)
const mainContainer = ref(null)
const mainSection = ref(null)

onMounted(() => {
  getMainContainer()
  getMainSection()
})

const getMainContainer = () => {
  mainContainer.value = document.querySelector('.hero-member-main-content-container')
  mainContainer.value.addEventListener('scroll', handleScroll)
}

const getMainSection = () => {
  mainSection.value = document.querySelector('.hero-member-main')
}

const handleScroll = (e) => {
  mainContainer.value = e.target.scrollTop
  // console.log('Scroll position:', scrollPosition.value)
  if (mainContainer.value > 80) {
    mainSection.value.classList.add('hero-member-main-animation')
  }else{
    mainSection.value.classList.remove('hero-member-main-animation')
  }
  
}


watch(scrollPosition, (newValue, oldValue) => {
  console.log('Scroll position changed:', newValue)
})
</script>

<template>
  <div class="hero-member-page-container">
    <SideBar />
    <div class="hero-member-main-content-container">
      <header class="work-shop-header">
        <PageControl />
      </header>
      <main class="hero-member-main hero-member-main-animation">
        <section class="hero-member-main-section">
          <div class="hero-member-main-section-bg-img"></div>
        </section>
      </main>
      <footer class="hero-member-footer">
        <MainFooter />
        <MainFooter />
        <MainFooter />
        <MainFooter />
      </footer>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 0;
}

.hero-member-page-container {
  background-color: black;
  max-width: 100%;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
}

.hero-member-main-content-container {
  width: 100%;
  margin-top: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  color: white;
  border-radius: 16px;
  background-color: #121212;
  overflow: auto;
}

.hero-member-header {
  width: 100%;
  box-sizing: border-box;
}

.hero-member-main {
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  transition: padding 0.2s linear;
}

.hero-member-main-animation {
  padding: 0 24px;
  transition: padding 0.2s linear;
}

.hero-member-main-section {
  margin: -64px 0px 0px 0px;
  width: 100%;
  position: relative;
}


.hero-member-main-section-bg-img {
  width: 100%;
  height: 550px;
  background-image: url('@/assets/img/hero.png');
  background-size: cover;
  border-radius: 12px;
}

.hero-member-footer {
  width: 100%;
  box-sizing: border-box;
}

@media screen and (width <= 1200px) {
  .hero-member-main-content-container {
    margin: 0px;
  }
}
</style>
