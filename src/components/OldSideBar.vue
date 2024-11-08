<script setup></script>

<template>
  <div class="sidebar">
    <div class="logo">
      <img src="https://bottleneko.app/icon.png" alt="" />
      <h1>貓X子</h1>
    </div>
    <ul class="menu">
      <li class="menu-item">
        <a href="#">
          <span>
            <i class="fa-solid fa-house"></i>
          </span>
          <p>首頁</p>
        </a>
      </li>
      <li class="menu-item">
        <a href="#">
          <span>
            <i class="fa-regular fa-clone"></i>
          </span>
          <p>系列卡表</p>
        </a>
      </li>
      <li class="menu-item">
        <a href="#">
          <span>
            <i class="fa-regular fa-bookmark"></i>
          </span>
          <p>我的牌組</p>
        </a>
      </li>
      <li class="menu-item">
        <a href="#">
          <span>
            <i class="fa-solid fa-earth-asia"></i>
          </span>
          <p>社群</p>
        </a>
      </li>
      <li class="menu-item">
        <a href="#">
          <span>
            <i class="fa-solid fa-cube"></i>
          </span>
          <p>工作坊</p>
        </a>
      </li>
      <li class="menu-item">
        <a href="#">
          <span>
            <i class="fa-regular fa-bell"></i>
          </span>
          <p>通知</p>
        </a>
      </li>
      <li class="menu-item">
        <a href="#">
          <span>
            <i class="fa-regular fa-user"></i>
          </span>
          <p>登入</p>
        </a>
      </li>
    </ul>
    <button class="translate-btn">
      <span>
        <i class="fa-solid fa-language"></i>
      </span>
      <p>原文翻譯</p>
    </button>
    <hr class="sidebar-hr" />
  </div>
</template>

<style>
.sidebar {
  min-width: 238px;
  padding: 16px 16px 0 16px;
  background-color: black;
}

.logo {
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logo img {
  max-width: 40px;
  max-height: 40px;
  object-fit: cover;
  margin-right: 10px;
}

.logo h1 {
  color: white;
  font-size: 26px;
  font-weight: 700;
}

.menu {
  width: 100%;
  margin-top: 16px;
  list-style: none;
}

.menu-item {
  width: 100%;
  height: 40px;
}

.menu-item:nth-child(5) {
  display: block;
}

.menu-item:nth-child(6) {
  display: none;
}

.menu-item:nth-child(7) {
  display: none;
}

.menu-item a {
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #a1a1aa;
  display: flex;
  align-items: center;
  gap: 16px;
}

.menu-item a:hover {
  color: white;
}

.menu-item a span {
  width: 28px;
  height: 28px;
  text-align: center;
  line-height: 28px;
  font-size: 24px;
}

.menu-item a p {
  font-size: 14px;
  font-weight: 700;
  font-family:
    Roboto,
    Noto Sans TC,
    sans-serif;
}

.translate-btn {
  width: calc(100% + 8px);
  height: 40px;
  font-size: 14px;
  display: flex;
  align-items: center;
  line-height: 40px;
  gap: 16px;
  border: none;
  background-color: black;
  color: #a1a1aa;
  font-weight: 700;
  padding: 0px 0px 0px 8px;
  margin: 16px 0px 0px -8px;
  border-radius: 8px;
  background-image: linear-gradient(to right, #a955f6, #ec499a);
  color: white;
}

.translate-btn:hover {
  color: white;
  cursor: pointer;
  /* background-image: linear-gradient(to right, #a955f6, #ec499a); */
}

.translate-btn span {
  width: 28px;
  height: 28px;
  text-align: center;
  line-height: 28px;
  font-size: 24px;
}

.sidebar-hr {
  border: none;
  border-top: 1px solid #3f3f46;
}
</style>
<style src="@/assets/css/sidebar-rwd.css" scoped></style>