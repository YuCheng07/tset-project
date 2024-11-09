<script setup>
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import SideBar from '@/components/SideBar.vue'
import PageControl from '@/components/PageControl.vue'
import MainFooter from '@/components/MainFooter.vue'
import { ref, onMounted, watch } from 'vue'

const functionSectionLeftBtn = ref('')

onMounted(() => {})

const changeFunctionSectionRightMove = (e) => {
  if (e) {
    const functionSectionContent = document.querySelector(
      '.hero-member-main-function-section-content',
    )
    e.target.addEventListener('click', () => {
      console.log(e)
      console.log(functionSectionContent)
    })
  }
}
</script>

<template>
  <div class="hero-member-page-container">
    <SideBar />
    <div class="hero-member-main-content-container">
      <header class="hero-member-header">
        <PageControl :style="{ backgroundColor: 'black' }" />
      </header>
      <main class="hero-member-main">
        <section class="hero-member-main-start-section">
          <div class="hero-member-main-start-section-bg-img"></div>
          <div class="hero-member-main-start-section-content">
            <div class="hero-member-main-start-section-content-icon">
              <i class="fa-solid fa-star"></i>
            </div>
            <h1 class="hero-member-main-start-section-content-title">英雄榜</h1>
            <p class="hero-member-main-start-section-content-text">成為專屬會員，解鎖更多功能</p>
            <button class="hero-member-main-start-section-content-btn">立即成為英雄</button>
          </div>
        </section>
        <section class="hero-member-main-function-section">
          <div class="hero-member-main-function-section-controlbar">
            <h2 class="hero-member-main-function-section-controlbar-title">專屬您的功能</h2>
            <button class="hero-member-main-function-section-controlbar-left-btn">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button
              class="hero-member-main-function-section-controlbar-right-btn"
              @click="changeFunctionSectionRightMove"
            >
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
          <div class="hero-member-main-function-section-content">
            <div class="hero-member-main-function-section-content-item">
              <img src="@/assets/img/hero-member/card-price.png" alt="" />
              <div class="hero-member-main-function-section-content-item-content">
                <p>洞見漲跌</p>
                <h3 class="hero-member-main-function-section-content-item-title">卡片價格趨勢</h3>
              </div>
              <button class="hero-member-main-function-section-content-item-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div class="hero-member-main-function-section-content-item">
              <img src="@/assets/img/hero-member/card-cover.png" alt="" />
              <div class="hero-member-main-function-section-content-item-content">
                <p>精美亮麗</p>
                <h3 class="hero-member-main-function-section-content-item-title">卡片圖片特效</h3>
              </div>
              <button class="hero-member-main-function-section-content-item-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div class="hero-member-main-function-section-content-item">
              <img src="@/assets/img/hero-member/deck-chart.png" alt="" />
              <div class="hero-member-main-function-section-content-item-content">
                <p>分析，一目瞭然</p>
                <h3 class="hero-member-main-function-section-content-item-title">排組分佈圖</h3>
              </div>
              <button class="hero-member-main-function-section-content-item-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div class="hero-member-main-function-section-content-item">
              <img src="@/assets/img/hero-member/switch-version.png" alt="" />
              <div class="hero-member-main-function-section-content-item-content">
                <p>一鍵更新、快速好用</p>
                <h3 class="hero-member-main-function-section-content-item-title">切換卡片版本</h3>
              </div>
              <button class="hero-member-main-function-section-content-item-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div class="hero-member-main-function-section-content-item">
              <img src="@/assets/img/hero-member/quick-note.png" alt="" />
              <div class="hero-member-main-function-section-content-item-content">
                <p>大小事不遺忘</p>
                <h3 class="hero-member-main-function-section-content-item-title">快速筆記</h3>
              </div>
              <button class="hero-member-main-function-section-content-item-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div class="hero-member-main-function-section-content-item">
              <img src="@/assets/img/hero-member/price-top10.png" alt="" />
              <div class="hero-member-main-function-section-content-item-content">
                <p>掌握最新價格變動</p>
                <h3 class="hero-member-main-function-section-content-item-title">卡價指標</h3>
              </div>
              <button class="hero-member-main-function-section-content-item-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div class="hero-member-main-function-section-content-last-item">
              <img src="@/assets/img/hero-member/update.png" alt="" />
              <div class="hero-member-main-function-section-content-last-item-content">
                <p>持續變好</p>
                <h3 class="hero-member-main-function-section-content-last-item-title">
                  更多功能持續更新
                </h3>
              </div>
              <button class="hero-member-main-function-section-content-last-item-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        </section>
        <section class="hero-member-main-member-type-section">
          <div class="hero-member-main-member-type-section-topbar">
            <h2 class="hero-member-main-member-type-section-topbar-title">探索適合您的用戶</h2>
          </div>
          <div class="hero-member-main-member-type-section-content">
            <div class="hero-member-main-member-type-section-content-item-outer">
              <div class="hero-member-main-member-type-section-content-item">
                <h3 class="hero-member-main-member-type-section-content-item-title">
                  英雄會員(新開幕)
                </h3>
                <p>$12 USD/月</p>
                <div class="hero-member-main-member-type-section-content-item-line"></div>
                <ul class="hero-member-main-member-type-section-content-item-list">
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <sapn>包含登入會員所有功能</sapn>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <sapn>無廣告</sapn>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <sapn>我的牌組 (無限制)</sapn>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <sapn>專屬進階功能</sapn>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <sapn>最新更新資訊</sapn>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <sapn>最新更新資訊</sapn>
                  </li>
                </ul>
                <div class="hero-member-main-member-type-section-content-item-btn">
                  <button>立即前往 Patreon</button>
                </div>
              </div>
            </div>
            <div class="hero-member-main-member-type-section-content-item-outer">
              <div class="hero-member-main-member-type-section-content-item">
                <h3 class="hero-member-main-member-type-section-content-item-title">
                  英雄會員(新開幕)
                </h3>
                <p>$12 USD/月</p>
                <div class="hero-member-main-member-type-section-content-item-line"></div>
                <ul class="hero-member-main-member-type-section-content-item-list">
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <sapn>包含登入會員所有功能</sapn>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <sapn>無廣告</sapn>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <sapn>我的牌組 (無限制)</sapn>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <sapn>專屬進階功能</sapn>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <sapn>最新更新資訊</sapn>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <sapn>最新更新資訊</sapn>
                  </li>
                </ul>
                <div class="hero-member-main-member-type-section-content-item-btn">
                  <button>立即前往 Patreon</button>
                </div>
              </div>
            </div>
            <div class="hero-member-main-member-type-section-content-item-outer">
              <div class="hero-member-main-member-type-section-content-item">
                <h3 class="hero-member-main-member-type-section-content-item-title">
                  英雄會員(新開幕)
                </h3>
                <p>$12 USD/月</p>
                <div class="hero-member-main-member-type-section-content-item-line"></div>
                <ul class="hero-member-main-member-type-section-content-item-list">
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <sapn>包含登入會員所有功能</sapn>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <sapn>無廣告</sapn>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <sapn>我的牌組 (無限制)</sapn>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <sapn>專屬進階功能</sapn>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <sapn>最新更新資訊</sapn>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <sapn>最新更新資訊</sapn>
                  </li>
                </ul>
                <div class="hero-member-main-member-type-section-content-item-btn">
                  <button>立即前往 Patreon</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="hero-member-footer">
        <MainFooter />
      </footer>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 0;
  height: 0;
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
  position: relative;
}

.hero-member-main {
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  transition: padding 0.2s linear;
}

.hero-member-main-start-section {
  margin: -64px 0px 0px 0px;
  max-width: 100%;
  position: relative;
}

/* .hero-member-main-start-section-animation {
  padding: 0 24px;
  transition: padding 0.2s linear;
} */

.hero-member-main-start-section-bg-img {
  width: 100%;
  height: 550px;
  background-image: url('@/assets/img/hero.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
}

.hero-member-main-start-section-content {
  width: 100%;
  text-align: center;
}

.hero-member-main-start-section-content-icon {
  margin: 16px auto;
  width: 80px;
  height: 80px;
  font-size: 66px;
  line-height: 80px;
  color: #f59e0b;
  transform: scale(0);
  /* transition: all 0.2s linear; */
}

/* .hero-member-main-start-section-content-icon-animation {
  transform: scale(0);
  transition: all 0.2s linear;
} */

.hero-member-main-start-section-content-title {
  font-size: 48px;
  font-weight: 700;
}

.hero-member-main-start-section-content-text {
  font-size: 16px;
  line-height: 24px;
  margin-top: 16px;
}

.hero-member-main-start-section-content-btn {
  margin-top: 16px;
  border-radius: 12px;
  color: white;
  background-color: #ec4899;
  padding: 8px;
  border: none;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
}

.hero-member-main-start-section-content-btn:hover {
  background-color: #db2777;
  cursor: pointer;
}

.hero-member-main-function-section {
  width: 100%;
}

.hero-member-main-function-section-controlbar {
  width: 100%;
  display: flex;
  gap: 16px;
  padding: 0 24px;
  margin: 128px 0px 48px 0px;
}

.hero-member-main-function-section-controlbar-title {
  font-size: 36px;
}

.hero-member-main-function-section-controlbar-left-btn {
  width: 32px;
  height: 32px;
  padding: 4px;
  border-radius: 50%;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}

.hero-member-main-function-section-controlbar-left-btn:hover {
  cursor: pointer;
  background-color: #d0d0d0;
}

.hero-member-main-function-section-controlbar-right-btn {
  width: 32px;
  height: 32px;
  padding: 4px;
  border-radius: 50%;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}

.hero-member-main-function-section-controlbar-right-btn:hover {
  cursor: pointer;
  background-color: #d0d0d0;
}

.hero-member-main-function-section-content {
  width: 100%;
  overflow: scroll;
  display: flex;
  gap: 16px;
}

.hero-member-main-function-section-content-item {
  min-width: 432px;
  height: 720px;
  border-radius: 16px;
  /* background-color: white; */
  overflow: hidden;
  position: relative;
  transition: transform 0.2s ease-in-out;
}

.hero-member-main-function-section-content-item:hover {
  cursor: pointer;
}

.hero-member-main-function-section-content-item:hover > img {
  transform: scale(1.05);
  transition: transform 0.2s ease-in-out;
}

.hero-member-main-function-section-content-item:nth-child(1) {
  margin-left: 24px;
}

.hero-member-main-function-section-content-item:nth-child(even) {
  color: #3c3f39;
}

.hero-member-main-function-section-content-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;
}

.hero-member-main-function-section-content-item:nth-child(odd) button {
  color: #e5e7eb;
  background-color: rgb(0, 0, 0, 0.5);
}

.hero-member-main-function-section-content-item:nth-child(odd) button:hover {
  color: #e5e7eb;
  background-color: black;
  cursor: pointer;
}

.hero-member-main-function-section-content-item:nth-child(even) button {
  color: #e5e7eb;
  background-color: #71727e;
}

.hero-member-main-function-section-content-item:nth-child(even) button:hover {
  color: #e5e7eb;
  background-color: #000000;
  cursor: pointer;
}

.hero-member-main-function-section-content-item-content {
  position: absolute;
  top: 16px;
  left: 16px;
}

.hero-member-main-function-section-content-item-content p {
  margin-bottom: 8px;
  opacity: 0.8;
  font-weight: 700;
}

.hero-member-main-function-section-content-item-content h3 {
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
}

.hero-member-main-function-section-content-item-btn {
  position: absolute;
  top: 16px;
  right: 16px;

  width: 32px;
  height: 32px;
  padding: 4px;
  border-radius: 50%;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}

.hero-member-main-function-section-content-last-item {
  min-width: 432px;
  height: 720px;
  border-radius: 16px;
  background-color: white;
  overflow: hidden;
  position: relative;
}

.hero-member-main-function-section-content-last-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-member-main-function-section-content-last-item-content {
  position: absolute;
  top: 16px;
  left: 16px;
}

.hero-member-main-member-type-section {
  width: 100%;
}

.hero-member-main-member-type-section-topbar {
  width: 100%;
  display: flex;
  gap: 16px;
  padding: 0 24px;
  margin: 128px 0px 48px 0px;
}

.hero-member-main-member-type-section-topbar-title {
  font-size: 36px;
}

.hero-member-main-member-type-section-content {
  width: 100%;
  overflow: scroll;
  display: flex;
  gap: 16px;
}

.hero-member-main-member-type-section-content-item-outer {
  min-width: 424px;
  height: 568px;
  padding: 4px;
  border-radius: 16px;
  background-color: lightskyblue;
}

.hero-member-main-member-type-section-content-item {
  width: 100%;
  background-color: black;
}

.hero-member-main-member-type-section-content-item:nth-child(1) {
  margin-left: 24px;
}

.hero-member-footer {
  width: 100%;
  box-sizing: border-box;
}

@media screen and (width < 1200px) {
  .hero-member-main-content-container {
    margin: 0px;
  }
}
</style>
