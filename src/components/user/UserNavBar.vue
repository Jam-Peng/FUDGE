<template>
  <nav class="navbar navbar-expand-lg bg-light px-4">
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
          class="col d-flex flex-column align-items-center justify-content-center position-relative"
          role="search"
        >
          <input
            class="search me-0"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <font-awesome-icon
            class="icons icon-search position-absolute"
            :icon="['fas', 'magnifying-glass']"
          />
        </div>
        <div class="col">
          <ul class="navbar-nav d-flex flex-row justify-content-end">
            <li class="nav-item">
              <a class="nav-link"
                ><font-awesome-icon class="icons" :icon="['fas', 'user']" />
              </a>
            </li>
            <li class="nav-item mx-1">
              <a class="nav-link"
                ><font-awesome-icon class="icons" :icon="['far', 'star']" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link"
                ><font-awesome-icon
                  class="icons"
                  :icon="['fas', 'cart-shopping']"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
ul li {
  cursor: pointer;
}
.icons {
  font-size: 1.2rem;
}
.icon-search {
  right: 11%;
  cursor: pointer;
  color: #6f7479;
}
.icon-trash-can {
  font-size: 1rem;
}
.search {
  outline: none;
}
</style>

<script>
// 為了讓Bootstrap的 Navbar 可以正常收合
import 'bootstrap/dist/js/bootstrap.bundle'
export default {}
</script>
