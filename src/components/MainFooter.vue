<script setup>
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

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
  <div class="work-shop-footer">
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
  </div>
</template>

<style scoped>
.work-shop-footer {
  max-width: 100%;
  padding: 80px 32px 64px;
  box-sizing: border-box;
  background-color: #121212;
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
<style src="@/assets/css/main-footer-rwd.css" scoped>
</style>
