<template>
  <nav class="navbar navbar-expand-lg bg-light px-3">
    <div class="container">
      <a class="navbar-brand" href="#">FUDGE</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/about" class="nav-link">關於我們 </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ProductList" class="nav-link"
              >產品列表
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link">最新消息 </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">優惠卷 </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="row ms-lg-auto">
        <div
          class="col d-flex flex-column align-items-center justify-content-center"
          role="search"
        >
          <input
            class="me-0"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div class="col">
          <ul class="navbar-nav d-flex flex-row justify-content-end">
            <li class="nav-item">
              <a class="nav-link">登入</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link">最愛 </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">購物車 </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// 為了讓Bootstrap的 Navbar 可以正常收合
import 'bootstrap/dist/js/bootstrap.bundle'
export default {}
</script>
