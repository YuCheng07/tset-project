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
        <PageControl />
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
              <div class="hero-member-main-function-section-content-item-info">
                <p>洞見漲跌</p>
                <h3 class="hero-member-main-function-section-content-item-title">卡片價格趨勢</h3>
              </div>
              <button class="hero-member-main-function-section-content-item-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
              <div class="hero-member-main-function-section-content-item-descri"></div>
            </div>
            <div class="hero-member-main-function-section-content-item">
              <img src="@/assets/img/hero-member/card-cover.png" alt="" />
              <div class="hero-member-main-function-section-content-item-info">
                <p>精美亮麗</p>
                <h3 class="hero-member-main-function-section-content-item-title">卡片圖片特效</h3>
              </div>
              <button class="hero-member-main-function-section-content-item-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div class="hero-member-main-function-section-content-item">
              <img src="@/assets/img/hero-member/deck-chart.png" alt="" />
              <div class="hero-member-main-function-section-content-item-info">
                <p>分析，一目瞭然</p>
                <h3 class="hero-member-main-function-section-content-item-title">排組分佈圖</h3>
              </div>
              <button class="hero-member-main-function-section-content-item-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div class="hero-member-main-function-section-content-item">
              <img src="@/assets/img/hero-member/switch-version.png" alt="" />
              <div class="hero-member-main-function-section-content-item-info">
                <p>一鍵更新、快速好用</p>
                <h3 class="hero-member-main-function-section-content-item-title">切換卡片版本</h3>
              </div>
              <button class="hero-member-main-function-section-content-item-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div class="hero-member-main-function-section-content-item">
              <img src="@/assets/img/hero-member/quick-note.png" alt="" />
              <div class="hero-member-main-function-section-content-item-info">
                <p>大小事不遺忘</p>
                <h3 class="hero-member-main-function-section-content-item-title">快速筆記</h3>
              </div>
              <button class="hero-member-main-function-section-content-item-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div class="hero-member-main-function-section-content-item">
              <img src="@/assets/img/hero-member/price-top10.png" alt="" />
              <div class="hero-member-main-function-section-content-item-info">
                <p>掌握最新價格變動</p>
                <h3 class="hero-member-main-function-section-content-item-title">卡價指標</h3>
              </div>
              <button class="hero-member-main-function-section-content-item-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div class="hero-member-main-function-section-content-last-item">
              <img src="@/assets/img/hero-member/update.png" alt="" />
              <div class="hero-member-main-function-section-content-last-item-info">
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
            <a href="#" class="hero-member-main-member-type-section-content-item-outer">
              <div class="hero-member-main-member-type-section-content-item">
                <h3 class="hero-member-main-member-type-section-content-item-title">
                  英雄會員(新開幕)
                </h3>
                <p class="hero-member-main-member-type-section-content-item-description">$12 USD/月</p>
                <hr class="hero-member-main-member-type-section-content-item-line"></hr>
                <ul class="hero-member-main-member-type-section-content-item-list">
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <span>包含登入會員所有功能</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <span>無廣告</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <span>我的牌組 (無限制)</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <span>專屬進階功能</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <span>最新更新資訊</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <span>最新更新資訊</span>
                  </li>
                </ul>
                <div class="hero-member-main-member-type-section-content-item-btn">
                  <button>立即前往 Patreon</button>
                </div>
              </div>
            </a>
            <a href="#" class="hero-member-main-member-type-section-content-item-outer">
              <div class="hero-member-main-member-type-section-content-item">
                <h3 class="hero-member-main-member-type-section-content-item-title">
                  登入會員
                </h3>
                <p class="hero-member-main-member-type-section-content-item-description">已登入帳號</p>
                <div class="hero-member-main-member-type-section-content-item-line"></div>
                <ul class="hero-member-main-member-type-section-content-item-list">
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <span>檢索卡片</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <span>編輯牌組</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <span>我的牌組 (50副限制)</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <span>發布文章</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <span>社群</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <span>工作坊</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <span>我的頁面</span>
                  </li>
                </ul>
                <div class="hero-member-main-member-type-section-content-item-btn">
                  <button>前往註冊帳號</button>
                </div>
              </div>
            </a>
            <div class="hero-member-main-member-type-section-content-item-outer">
              <div class="hero-member-main-member-type-section-content-item">
                <h3 class="hero-member-main-member-type-section-content-item-title">
                  一般用戶
                </h3>
                <p class="hero-member-main-member-type-section-content-item-description">尚未登入</p>
                <div class="hero-member-main-member-type-section-content-item-line"></div>
                <ul class="hero-member-main-member-type-section-content-item-list">
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <span>檢索卡片</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <span>社群瀏覽</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-check"></i>
                    <span>工作坊</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section class="hero-member-main-ad-artist-section">
          <div class="hero-member-main-ad-artist-section-bg-img"></div>
          <div class="hero-member-main-ad-artist-section-content">
            <div class="hero-member-main-ad-artist-section-content-icon">
              <i class="fa-solid fa-star"></i>
            </div>
            <h1 class="hero-member-main-ad-artist-section-content-title">廣告與創作者</h1>
            <p class="hero-member-main-ad-artist-section-content-text">投放您的內容，展現您的創意</p>
          </div>
        </section>
        <section class="hero-member-main-sponsors-creators-section">
          <div class="hero-member-main-sponsors-creators-section-controlbar">
            <h2 class="hero-member-main-sponsors-creators-section-controlbar-title">散播你的內容</h2>
            <button class="hero-member-main-sponsors-creators-section-controlbar-left-btn">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button
              class="hero-member-main-sponsors-creators-section-controlbar-right-btn"
              @click="changeFunctionSectionRightMove"
            >
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
          <div class="hero-member-main-sponsors-creators-section-content">
            <div class="hero-member-main-sponsors-creators-section-content-item">
              <img src="@/assets/img/hero-member/social-ad.png" alt="" />
              <div class="hero-member-main-sponsors-creators-section-content-item-info">
                <p>每一頁都有您的內容</p>
                <h3 class="hero-member-main-sponsors-creators-section-content-item-title">社群廣告文章</h3>
              </div>
              <button class="hero-member-main-sponsors-creators-section-content-item-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div class="hero-member-main-sponsors-creators-section-content-item">
              <img src="@/assets/img/hero-member/home-ad.png" alt="" />
              <div class="hero-member-main-sponsors-creators-section-content-item-info">
                <p>第一眼就是你</p>
                <h3 class="hero-member-main-sponsors-creators-section-content-item-title">首頁廣告區塊</h3>
              </div>
              <button class="hero-member-main-sponsors-creators-section-content-item-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div class="hero-member-main-sponsors-creators-section-content-item">
              <img src="@/assets/img/hero-member/creator-page.png" alt="" />
              <div class="hero-member-main-sponsors-creators-section-content-item-info">
                <p>經營自己、展現價值</p>
                <h3 class="hero-member-main-sponsors-creators-section-content-item-title">創作者專頁</h3>
              </div>
              <button class="hero-member-main-sponsors-creators-section-content-item-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div class="hero-member-main-sponsors-creators-section-content-item">
              <img src="@/assets/img/hero-member/home-topic.png" alt="" />
              <div class="hero-member-main-sponsors-creators-section-content-item-info">
                <p>活動開跑！快來參加</p>
                <h3 class="hero-member-main-sponsors-creators-section-content-item-title">首頁主題投放</h3>
              </div>
              <button class="hero-member-main-sponsors-creators-section-content-item-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div class="hero-member-main-sponsors-creators-section-content-item">
              <img src="@/assets/img/hero-member/hot-video.png" alt="" />
              <div class="hero-member-main-sponsors-creators-section-content-item-info">
                <p>YouTube 頻道推廣</p>
                <h3 class="hero-member-main-sponsors-creators-section-content-item-title">發燒影片</h3>
              </div>
              <button class="hero-member-main-sponsors-creators-section-content-item-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        </section>
        <section class="hero-member-main-fanpage-section">
          <div class="hero-member-main-fanpage-section-topbar">
            <h2 class="hero-member-main-fanpage-section-topbar-title">與我聯繫</h2>
          </div>
          <div class="hero-member-main-fanpage-section-content">
            <i class="fa-regular fa-bell"></i>
            <span>功能實踐中！先行搶先體驗，歡迎與我聯繫！</span>
            <a href="#">前往貓罐子粉專</a h>
          </div>
        </section>
        <section class="hero-member-main-stores-partners-section">
          <div class="hero-member-main-stores-partners-section-bg-img"></div>
          <div class="hero-member-main-stores-partners-section-content">
            <div class="hero-member-main-stores-partners-section-content-icon">
              <i class="fa-solid fa-star"></i>
            </div>
            <h1 class="hero-member-main-stores-partners-section-content-title">廣告與創作者</h1>
            <p class="hero-member-main-stores-partners-section-content-text">投放您的內容，展現您的創意</p>
          </div>
        </section>
        <section class="hero-member-main-stores-about-section">
          <div class="hero-member-main-stores-about-section-controlbar">
            <h2 class="hero-member-main-stores-about-section-controlbar-title">店家功能</h2>
            <button class="hero-member-main-stores-about-section-controlbar-left-btn">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button
              class="hero-member-main-stores-about-section-controlbar-right-btn"
              @click="changestores-aboutSectionRightMove"
            >
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
          <div class="hero-member-main-stores-about-section-content">
            <div class="hero-member-main-stores-about-section-content-item">
              <img src="@/assets/img/hero-member/ready.png" alt="" />
              <div class="hero-member-main-stores-about-section-content-item-info">
                <p>您的附近有店家</p>
                <h3 class="hero-member-main-stores-about-section-content-item-title">連結店家</h3>
              </div>
              <button class="hero-member-main-stores-about-section-content-item-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div class="hero-member-main-stores-about-section-content-item">
              <img src="@/assets/img/hero-member/ready.png" alt="" />
              <div class="hero-member-main-stores-about-section-content-item-info">
                <p>注意！賽事即將開始</p>
                <h3 class="hero-member-main-stores-about-section-content-item-title">賽事資訊</h3>
              </div>
              <button class="hero-member-main-stores-about-section-content-item-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div class="hero-member-main-stores-about-section-content-item">
              <img src="@/assets/img/hero-member/ready.png" alt="" />
              <div class="hero-member-main-stores-about-section-content-item-info">
                <p>看到直接買</p>
                <h3 class="hero-member-main-stores-about-section-content-item-title">購買連結</h3>
              </div>
              <button class="hero-member-main-stores-about-section-content-item-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div class="hero-member-main-stores-about-section-content-item">
              <img src="@/assets/img/hero-member/ready.png" alt="" />
              <div class="hero-member-main-stores-about-section-content-item-info">
                <p>B2B 與我商談</p>
                <h3 class="hero-member-main-stores-about-section-content-item-title">與我聯絡</h3>
              </div>
              <button class="hero-member-main-stores-about-section-content-item-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
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
  max-width: 100%;
  display: flex;
  gap: 16px;
  padding: 0 24px;
  margin: 128px 0px 48px 0px;
}

.hero-member-main-function-section-controlbar-title {
  font-size: 36px;
  font-weight: 700;
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
  overflow: auto;
  display: flex;
}

.hero-member-main-function-section-content-item {
  min-width: 432px;
  height: 720px;
  border-radius: 16px;
  /* background-color: white; */
  overflow: hidden;
  position: relative;
  transition: transform 0.2s ease-in-out;
  margin-right: 20px;
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

.hero-member-main-function-section-content-item-info {
  position: absolute;
  top: 16px;
  left: 16px;
}

.hero-member-main-function-section-content-item-info p {
  margin-bottom: 8px;
  opacity: 0.8;
  font-weight: 700;
}

.hero-member-main-function-section-content-item-info h3 {
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
  aspect-ratio: 3 / 5;
  border-radius: 16px;
  background-color: white;
  overflow: hidden;
  position: relative;
  margin-right: 24px;
}

.hero-member-main-function-section-content-last-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-member-main-function-section-content-last-item-info {
  position: absolute;
  top: 16px;
  left: 16px;
}

.hero-member-main-member-type-section {
  width: 100%;
}

.hero-member-main-member-type-section-topbar {
  max-width: 100%;
  display: flex;
  gap: 16px;
  padding: 0 24px;
  margin: 128px 0px 48px 0px;
}

.hero-member-main-member-type-section-topbar-title {
  font-size: 36px;
  font-weight: 700;
}

.hero-member-main-member-type-section-content {
  width: 100%;
  overflow: hidden;
  display: flex;
}

.hero-member-main-member-type-section-content-item-outer {
  min-width: 432px;
  aspect-ratio: 3 / 4;
  padding: 4px;
  border-radius: 16px;
  box-sizing: border-box;
  text-decoration: none;
  color: white;
  margin-left: 24px;
}

.hero-member-main-member-type-section-content-item-outer:nth-child(1) {
  background-image: linear-gradient(to bottom right, #8D5CF4, #0BA8C4);
}

.hero-member-main-member-type-section-content-item-outer:nth-child(2) {
  background-image: linear-gradient(to bottom right, #07b5d3, #0E7591);
}

.hero-member-main-member-type-section-content-item-outer:nth-child(3) {
  background-color: rgb(113, 113, 122);
}

.hero-member-main-member-type-section-content-item {
  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.hero-member-main-member-type-section-content-item-outer:nth-child(1) .hero-member-main-member-type-section-content-item {
  background-image: linear-gradient(to bottom right, #18181b, black);
}

.hero-member-main-member-type-section-content-item-title {
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
}

.hero-member-main-member-type-section-content-item-description {
  line-height: 32px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
}

.hero-member-main-member-type-section-content-item-line {
  width: 100%;
  margin: 16px 0px;
  border: none;
  border-top: 1px solid white;
}

.hero-member-main-member-type-section-content-item-list {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;
}

.hero-member-main-member-type-section-content-item-list li {
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.hero-member-main-member-type-section-content-item-list li svg {
  display: inline-block;
  width: 20px;
  height: 20px;
}

.hero-member-main-member-type-section-content-item-list span {
  font-weight: 700;
}

.hero-member-main-member-type-section-content-item-btn {
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.hero-member-main-member-type-section-content-item-btn button{
  width: 100%;
  max-height: 40px;
  padding: 8px 0px;
  border-radius: 12px;
  border: none;
  line-height: 24px;
  font-size: 16px;
  font-weight: 700;
  color: white;
  cursor: pointer;
}

.hero-member-main-member-type-section-content-item-outer:nth-child(1) .hero-member-main-member-type-section-content-item-btn button {
  background-color: #EC4899;
}
.hero-member-main-member-type-section-content-item-outer:nth-child(2) .hero-member-main-member-type-section-content-item-btn button{
  background-color: #18181B;
}

.hero-member-main-ad-artist-section {
  margin: 128px 0px 0px;
  max-width: 100%;
  position: relative;
}

/* .hero-member-main-ad-artist-section-animation {
  padding: 0 24px;
  transition: padding 0.2s linear;
} */

.hero-member-main-ad-artist-section-bg-img {
  width: 100%;
  height: 550px;
  background-image: url('@/assets/img/hero-member/creator.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
}

.hero-member-main-ad-artist-section-content {
  width: 100%;
  text-align: center;
}

.hero-member-main-ad-artist-section-content-icon {
  margin: 16px auto;
  width: 80px;
  height: 80px;
  font-size: 66px;
  line-height: 80px;
  color: #f59e0b;
  /* transform: scale(0); */
  /* transition: all 0.2s linear; */
}

/* .hero-member-main-ad-artist-section-content-icon-animation {
  transform: scale(0);
  transition: all 0.2s linear;
} */

.hero-member-main-ad-artist-section-content-title {
  font-size: 48px;
  font-weight: 700;
}

.hero-member-main-ad-artist-section-content-text {
  font-size: 16px;
  line-height: 24px;
  margin-top: 16px;
}

.hero-member-main-sponsors-creators-section {
  width: 100%;
}

.hero-member-main-sponsors-creators-section-controlbar {
  max-width: 100%;
  display: flex;
  gap: 16px;
  padding: 0 24px;
  margin: 128px 0px 48px 0px;
}

.hero-member-main-sponsors-creators-section-controlbar-title {
  font-size: 36px;
  font-weight: 700;
}

.hero-member-main-sponsors-creators-section-controlbar-left-btn {
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

.hero-member-main-sponsors-creators-section-controlbar-left-btn:hover {
  cursor: pointer;
  background-color: #d0d0d0;
}

.hero-member-main-sponsors-creators-section-controlbar-right-btn {
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

.hero-member-main-sponsors-creators-section-controlbar-right-btn:hover {
  cursor: pointer;
  background-color: #d0d0d0;
}

.hero-member-main-sponsors-creators-section-content {
  width: 100%;
  overflow: auto;
  display: flex;
}

.hero-member-main-sponsors-creators-section-content-item {
  min-width: 432px;
  height: 720px;
  border-radius: 16px;
  /* background-color: white; */
  overflow: hidden;
  position: relative;
  transition: transform 0.2s ease-in-out;
  margin-right: 20px;
}

.hero-member-main-sponsors-creators-section-content-item:hover {
  cursor: pointer;
}

.hero-member-main-sponsors-creators-section-content-item:hover > img {
  transform: scale(1.05);
  transition: transform 0.2s ease-in-out;
}

.hero-member-main-sponsors-creators-section-content-item:nth-child(1) {
  margin-left: 24px;
}

.hero-member-main-sponsors-creators-section-content-item:nth-child(even) {
  color: #3c3f39;
}

.hero-member-main-sponsors-creators-section-content-item:last-child {
  margin-right: 24px;
}

.hero-member-main-sponsors-creators-section-content-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;
}

.hero-member-main-sponsors-creators-section-content-item-info {
  position: absolute;
  top: 16px;
  left: 16px;
}

.hero-member-main-sponsors-creators-section-content-item-info p {
  margin-bottom: 8px;
  opacity: 0.8;
  font-weight: 700;
}

.hero-member-main-sponsors-creators-section-content-item-info h3 {
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
}

.hero-member-main-sponsors-creators-section-content-last-item {
  min-width: 432px;
  aspect-ratio: 3 / 5;
  border-radius: 16px;
  background-color: white;
  overflow: hidden;
  position: relative;
}

.hero-member-main-sponsors-creators-section-content-last-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-member-main-sponsors-creators-section-content-last-item-info {
  position: absolute;
  top: 16px;
  left: 16px;
}

.hero-member-main-stores-partners-section {
  margin: 128px 0px 0px;
  max-width: 100%;
  position: relative;
}

/* .hero-member-main-stores-partners-section-animation {
  padding: 0 24px;
  transition: padding 0.2s linear;
} */

.hero-member-main-stores-partners-section-bg-img {
  width: 100%;
  height: 550px;
  background-image: url('@/assets/img/hero-member/store.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
}

.hero-member-main-stores-partners-section-content {
  width: 100%;
  text-align: center;
}

.hero-member-main-stores-partners-section-content-icon {
  margin: 16px auto;
  width: 80px;
  height: 80px;
  font-size: 66px;
  line-height: 80px;
  color: #f59e0b;
  /* transform: scale(0); */
  /* transition: all 0.2s linear; */
}

/* .hero-member-main-stores-partners-section-content-icon-animation {
  transform: scale(0);
  transition: all 0.2s linear;
} */

.hero-member-main-stores-partners-section-content-title {
  font-size: 48px;
  font-weight: 700;
}

.hero-member-main-stores-partners-section-content-text {
  font-size: 16px;
  line-height: 24px;
  margin-top: 16px;
}

.hero-member-main-fanpage-section {
  width: 100%;
}

.hero-member-main-fanpage-section-topbar {
  max-width: 100%;
  display: flex;
  gap: 16px;
  padding: 0 24px;
  margin: 128px 0px 48px 0px;
}

.hero-member-main-fanpage-section-topbar-title {
  font-size: 36px;
  font-weight: 700;
}

.hero-member-main-fanpage-section-content {
  max-width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background-color: rgb(14,14,14);
  margin: 0 24px;
  border-radius: 12px;
}

.hero-member-main-fanpage-section-content a {
  border-radius: 12px;
  color: white;
  background-color: rgb(190, 24, 93);
  padding: 8px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  line-height: 24px;
}

.hero-member-main-fanpage-section-content a:hover {
  background-color: #ec4899;
  cursor: pointer;
}

.hero-member-main-stores-about-section {
  width: 100%;
}

.hero-member-main-stores-about-section-controlbar {
  max-width: 100%;
  display: flex;
  gap: 16px;
  padding: 0 24px;
  margin: 128px 0px 48px 0px;
}

.hero-member-main-stores-about-section-controlbar-title {
  font-size: 36px;
  font-weight: 700;
}

.hero-member-main-stores-about-section-controlbar-left-btn {
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

.hero-member-main-stores-about-section-controlbar-left-btn:hover {
  cursor: pointer;
  background-color: #d0d0d0;
}

.hero-member-main-stores-about-section-controlbar-right-btn {
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

.hero-member-main-stores-about-section-controlbar-right-btn:hover {
  cursor: pointer;
  background-color: #d0d0d0;
}

.hero-member-main-stores-about-section-content {
  width: 100%;
  overflow: auto;
  display: flex;
}

.hero-member-main-stores-about-section-content-item {
  min-width: 432px;
  height: 720px;
  border-radius: 16px;
  /* background-color: white; */
  overflow: hidden;
  position: relative;
  transition: transform 0.2s ease-in-out;
  margin-right: 20px;
}

.hero-member-main-stores-about-section-content-item:hover {
  cursor: pointer;
}

.hero-member-main-stores-about-section-content-item:hover > img {
  transform: scale(1.05);
  transition: transform 0.2s ease-in-out;
}

.hero-member-main-stores-about-section-content-item:nth-child(1) {
  margin-left: 24px;
}

.hero-member-main-stores-about-section-content-item:last-child {
  margin-right: 24px;
}

.hero-member-main-stores-about-section-content-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease-in-out;
}

.hero-member-main-stores-about-section-content-item-info {
  position: absolute;
  top: 16px;
  left: 16px;
}

.hero-member-main-stores-about-section-content-item-info p {
  margin-bottom: 8px;
  opacity: 0.8;
  font-weight: 700;
}

.hero-member-main-stores-about-section-content-item-info h3 {
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
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
