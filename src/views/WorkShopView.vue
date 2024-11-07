<script setup>
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import SideBar from '@/components/SideBar.vue'
import PageControl from '@/components/PageControl.vue'

const workShopData = [
  {
    imgUrl: 'https://bottleneko.app/images/workshop/daily.png',
    title: '每日卡',
    icon: 'fa-solid fa-book-open',
  },
  {
    imgUrl: 'https://bottleneko.app/images/workshop/official.png',
    title: '官方商品',
    icon: 'fa-solid fa-book-open',
  },
  {
    imgUrl: 'https://bottleneko.app/images/workshop/qa.png',
    title: '卡片問答集',
    icon: 'fa-solid fa-book-open',
  },
  {
    imgUrl: 'https://bottleneko.app/images/workshop/find.png',
    title: '尋找牌組',
    icon: 'fa-solid fa-cube',
  },
  {
    imgUrl: 'https://bottleneko.app/images/workshop/report.png',
    title: '匯出牌組',
    icon: 'fa-solid fa-cube',
  },
]

const workShopFooterData = [
  {
    title: '簡介',
    linkText: ['關於我們', '與我聯絡', 'Weiβ Schwarz', 'V2新版介紹'],
  },
  {
    title: '資源',
    linkText: ['Bushi DeckLog', 'Bushi DeckLog EN', '遊々亭價格', '基本規則', '禁卡表'],
  },
  {
    title: '常用連結',
    linkText: ['卡片問答集', '我的專頁', '偏好設定', '登出帳號', '英雄榜'],
  },
]
</script>

<template>
  <div class="work-shop-page-container">
    <SideBar />
    <div class="work-shop-main-content-container">
      <header class="work-shop-header">
        <PageControl />
      </header>
      <main class="work-shop-main">
        <div class="user-nav">
          <div class="user-info-box">
            <div class="user-info-box-left-icon">
              <i class="fa-regular fa-user"></i>
            </div>
            <div class="user-info-box-left-login-content">
              <div class="user-info-box-left-login-title">登入帳號</div>
              <div class="user-info-box-left-login-text">前往登入</div>
            </div>
            <div class="user-info-box-right">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div class="hero-member-box">
            <div class="hero-member-box-left-icon">
              <i class="fa-solid fa-star"></i>
            </div>
            <div class="hero-member-box-left-login-content">
              <div class="hero-member-box-left-login-title">英雄榜</div>
              <div class="hero-member-box-left-login-text">加入並成為專屬會員</div>
            </div>
            <div class="hero-member-box-right">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div class="work-shop-title">
          <h2>工作坊</h2>
          <p>找到你要的工具，發掘更多玩法。</p>
        </div>
        <div class="work-shop-group">
          <div class="work-shop-outer" v-for="i in workShopData">
            <div class="work-shop-item">
              <img :src="i.imgUrl" alt="" />
              <div class="work-shop-item-content">
                <div class="work-shop-item-content-icon">
                  <i :class="i.icon"></i>
                </div>
                <span>{{ i.title }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="banner">
          <h2>如果你有任何酷點子</h2>
          <p>歡迎來找我！工程師XX會努力實現他</p>
        </div>
      </main>
      <footer class="work-shop-footer">
        <div class="work-shop-footer-flexbox">
          <div class="work-shop-footer-flexbox-left">
            <ul class="work-shop-footer-flexbox-left-item" v-for="item in workShopFooterData">
              <li class="work-shop-footer-flexbox-left-item-title">
                {{ item.title }}
              </li>
              <li class="work-shop-footer-flexbox-left-item-link" v-for="link in item.linkText">
                <a
                  href="#"
                  :class="{
                    'work-shop-footer-flexbox-left-item-link-text': true,
                    'text-color-red': link === '登出帳號',
                  }"
                >
                  {{ link }}
                </a>
              </li>
            </ul>
          </div>
          <div class="work-shop-footer-flexbox-right">
            <div class="work-shop-footer-flexbox-right-group">
              <a class="work-shop-footer-flexbox-right-item" href="#">
                <span class="work-shop-footer-flexbox-right-item-icon">
                  <i class="fa-solid fa-gift"></i>
                </span>
                <span class="work-shop-footer-flexbox-right-item-text"
                  >用一杯咖啡讓工程師罐罐休息一下</span
                >
              </a>
              <div class="work-shop-footer-flexbox-right-icon-list">
                <a href="#">
                  <i class="fa-brands fa-google-play"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-apple"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-discord"></i>
                </a>
                <a href="#">
                  <i class="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr class="work-shop-footer-hr" />
        <div class="work-shop-footer-copyright">
          <ul class="work-shop-footer-copyright-left">
            <li class="work-shop-footer-copyright-left-item">
              <a href="#">隱私權政策 </a>
            </li>
            <li class="work-shop-footer-copyright-left-item">
              <a href="#">服務條款</a>
            </li>
            <li class="work-shop-footer-copyright-left-item">
              <a href="#">商業合作</a>
            </li>
          </ul>
          <div class="work-shop-footer-copyright-right">
            <span>卡片資料來源 Weiβ Schwarz.</span>
            <span>Copyright @ 2023 BottleNeko</span>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 0;
}

.work-shop-page-container {
  background-color: black;
  max-width: 100%;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
}

.work-shop-main-content-container {
  width: 100%;
  margin-top: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  color: white;
  border-radius: 16px;
  background-color: #121212;
  overflow: auto;
}

.work-shop-header {
  width: 100%;
  box-sizing: border-box;
}

.work-shop-main {
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
}

.user-nav {
  width: 100%;
  display: flex;
  gap: 24px;
}

.user-info-box {
  width: 280px;
  background-image: linear-gradient(to right top, #036ea4, #06b3d2);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.user-info-box-left-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #02455b;
  text-align: center;
  line-height: 80px;
  font-size: 50px;
}

.user-info-box-left-login-title {
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
}

.user-info-box-left-login-text {
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  opacity: 0.7;
}

.user-info-box-right {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #35b9d5;
  border-radius: 50%;
  font-size: 30px;
}

.hero-member-box {
  width: 328px;
  border-radius: 12px;
  padding: 16px;
  background-image: linear-gradient(to right top, #98480e, #e7af08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.hero-member-box-left-icon {
  width: 80px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  font-size: 65px;
  color: #f59e0b;
}

.hero-member-box-left-login-title {
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
}

.hero-member-box-left-login-text {
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  opacity: 0.7;
}

.hero-member-box-right {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #dfaf30;
  border-radius: 50%;
  font-size: 30px;
}

.work-shop-title {
  width: 100%;
  padding: 24px 0px 8px;
}

.work-shop-title h2 {
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
}

.work-shop-title p {
  font-size: 14px;
  line-height: 20px;
  color: #81a19c;
}

.work-shop-group {
  width: 100%;
  padding: 16px 0px 24px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
}

.work-shop-outer {
  /* max-width: 210px; */
  border-radius: 12px;
  color: #d4d4d8;
  overflow: hidden;
}

.work-shop-item {
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.2s ease-in-out;
}

.work-shop-item::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background-image: linear-gradient(to bottom, transparent, #000);
  z-index: 2;
  opacity: 0.5;
}

.work-shop-item:hover {
  cursor: pointer;
  transform: scale(1.05);
  color: white;
  transition: all 0.2s ease-in-out;
}

.work-shop-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.work-shop-item-content {
  position: absolute;
  bottom: 8px;
  left: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 2;
}

.work-shop-item-content-icon {
  width: 32px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  font-size: 20px;
}

.work-shop-item-content span {
  font-size: 20px;
  font-weight: 700;
}

.banner {
  width: 800px;
  height: 160px;
  margin: 0 auto 16px;
  border-radius: 12px;
  background-image: linear-gradient(to right top, #6366f1, #10b980);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.banner h2 {
  font-size: 36px;
  font-weight: 700;
  line-height: 40px;
}

.banner p {
  font-size: 18px;
  line-height: 28px;
  color: rgb(229, 231, 235);
}

.work-shop-footer {
  max-width: 100%;
  padding: 80px 32px 64px;
  box-sizing: border-box;
}

.work-shop-footer-flexbox {
  width: 100%;
  display: flex;
}

.work-shop-footer-flexbox-left {
  width: 100%;
  display: flex;
  gap: 1rem;
}

.work-shop-footer-flexbox-left-item {
  list-style: none;
  margin-top: 16px;
  width: 160px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.work-shop-footer-flexbox-left-item-title {
  width: 100%;
  color: white;
  line-height: 24px;
}

.work-shop-footer-flexbox-left-item-link {
  width: 100%;
  line-height: 24px;
}

.work-shop-footer-flexbox-left-item-link-text {
  display: inline-block;
  width: 100%;
  text-decoration: none;
  color: #6d6d76;
}

.work-shop-footer-flexbox-left-item-link-text:hover {
  color: white;
}

.work-shop-footer-flexbox-right {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
}

.work-shop-footer-flexbox-right-group {
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.work-shop-footer-flexbox-right-item {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  color: #d4d4d8;
  text-decoration: none;
}

.work-shop-footer-flexbox-right-item:hover span {
  cursor: pointer;
  color: white;
}

.work-shop-footer-flexbox-right-item-icon {
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  color: #d4d4d8;
  font-size: 20px;
}

.work-shop-footer-flexbox-right-item-text {
  color: #d4d4d8;
  font-size: 20px;
  line-height: 28px;
}

.work-shop-footer-flexbox-right-icon-list {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.work-shop-footer-flexbox-right-icon-list a {
  display: inline-block;
  width: 40px;
  height: 40px;
  color: white;
  font-size: 24px;
  border-radius: 50%;
  background-color: #3f3f46;
  text-align: center;
  line-height: 40px;
}

.work-shop-footer-flexbox-right-icon-list a:hover {
  background-color: #5b5b64;
}

.work-shop-footer-hr {
  border: none;
  border-top: 1px solid #3f3f46;
  margin: 16px 0px;
}

.work-shop-footer-copyright {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.work-shop-footer-copyright-left {
  display: flex;
  gap: 1rem;
  list-style: none;
}

.work-shop-footer-copyright-left-item {
  width: 100%;
  text-wrap: nowrap;
}

.work-shop-footer-copyright-left-item a {
  text-decoration: none;
  color: #6d6d76;
  width: 100%;
}

.work-shop-footer-copyright-left-item a:hover {
  color: white;
  cursor: pointer;
}

.work-shop-footer-copyright-right {
  color: #6d6d76;
  font-size: 14px;
}

.work-shop-footer-copyright-right span {
  line-height: 20px;
}

.text-color-red {
  color: #941816;
}

.text-color-red:hover {
  color: red;
}
</style>
<style src="@/assets/css/workshop-rwd.css" scoped></style>
