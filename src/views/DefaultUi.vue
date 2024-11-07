<script setup>
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import SideBar from '@/components/SideBar.vue'
import PageControl from '@/components/PageControl.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>

<template>
  <div class="default-page-container">
    <SideBar />
    <div class="default-main-content-container">
      <header class="work-shop-header">
        <PageControl />
      </header>
      <main class="default-main"></main>
      <footer class="default-footer">
        <MainFooter />
      </footer>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 0;
}

.default-page-container {
  background-color: black;
  max-width: 100%;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
}

.default-main-content-container {
  width: 100%;
  margin-top: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  color: white;
  border-radius: 16px;
  background-color: #121212;
  overflow: auto;
}

.default-header {
  width: 100%;
  box-sizing: border-box;
}

.default-main {
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
}

.default-footer {
  width: 100%;
  box-sizing: border-box;
}
</style>
