<template>
  <nav class="navbar navbar-expand-lg bg-light p-4">
    <div class="container-fluid">
      <a
        class="navbar-brand me-0 logo_title order-2 order-sm-2 order-md-2 order-lg-0"
        href="#"
        >FUDGE</a
      >
      <button
        class="navbar-toggler order-1 order-sm-1 order-md-1 me-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- RWD-平板和手機顯示 -->
      <div
        class="d-md-block d-sm-block d-lg-none order-3 order-sm-3 order-md-3"
      >
        <ul class="navbar-nav d-flex flex-row justify-content-start">
          <li class="nav-item ps-3">
            <a class="nav-link p-0"
              ><font-awesome-icon
                class="icons icons_user"
                :icon="['fas', 'user']"
              />
            </a>
          </li>
          <li class="nav-item ps-3 d-md-block d-none">
            <a class="nav-link p-0"
              ><font-awesome-icon
                class="icons icons_star"
                :icon="['far', 'star']"
              />
            </a>
          </li>
          <li class="nav-item ps-3">
            <a class="nav-link p-0"
              ><font-awesome-icon
                class="icons icons_cart"
                :icon="['fas', 'cart-shopping']"
                @click="toCheckOut"
              />
            </a>
          </li>
        </ul>
      </div>

      <div
        class="collapse navbar-collapse order-4 order-md-4 order-lg-1 ms-lg-5 justify-content-between"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/about" class="nav-link">關於我們 </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/productList" class="nav-link"
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
        <div class="me-2">
          <div class="d-flex align-items-center">
            <div
              class="d-flex flex-column align-items-center position-relative d-md-block d-none"
              role="search"
            >
              <label for="search">
                <input
                  class="search me-0 ps-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  id="search"
                  @keyup.enter="searchKeyword($event)"
                  :value="keyword"
                />

                <font-awesome-icon
                  class="icons icons-search position-absolute"
                  :icon="['fas', 'magnifying-glass']"
                />
              </label>
            </div>
            <div class="d-none d-lg-block">
              <ul class="navbar-nav d-flex flex-row justify-content-start">
                <li class="nav-item ps-3">
                  <a class="nav-link p-0"
                    ><font-awesome-icon
                      class="icons icons_user"
                      :icon="['fas', 'user']"
                    />
                  </a>
                </li>
                <li class="nav-item ps-3">
                  <a class="nav-link p-0"
                    ><font-awesome-icon
                      class="icons icons_star"
                      :icon="['far', 'star']"
                    />
                  </a>
                </li>
                <li class="nav-item ps-3">
                  <a class="nav-link p-0"
                    ><font-awesome-icon
                      class="icons icons_cart"
                      :icon="['fas', 'cart-shopping']"
                      @click="toCheckOut"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!-- RWD 手機顯示 -->
  <div
    class="col d-sm-flex flex-column align-items-center position-relative d-md-none d-sm-block px-4 pt-3"
    role="search"
  >
    <label for="search">
      <input
        class="search me-0 ps-4"
        type="search"
        placeholder="Search"
        aria-label="Search"
        size="30"
        id="search"
        @keyup.enter="searchKeyword($event)"
        :value="keyword"
      />

      <font-awesome-icon
        class="icons icons_sm_search position-absolute"
        :icon="['fas', 'magnifying-glass']"
      />
    </label>
  </div>
</template>

<script>
// 為了讓Bootstrap的 Navbar 可以正常收合
import 'bootstrap/dist/js/bootstrap.bundle'
export default {
  data() {
    return {
      keyword: ''
    }
  },

  methods: {
    searchKeyword(e) {
      this.keyword = e.target.value
      this.$router.replace({
        name: this.$route.name,
        query: { keyword: e.target.value },
        path: '/search'
      })
      e.target.value = ''
      console.log(this.$route)
    },
    toCheckOut() {
      this.$router.push('/checkout')
    }
  }
}
</script>

<style lang="scss">
// ul li {
//   cursor: pointer;
// }
.logo_title {
  font-size: 1.7rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
}

.icons_user,
.icons_star,
.icons_cart {
  font-size: 1.1rem;
}
.icons-search {
  top: 25%;
  right: 3%;
  cursor: pointer;
  color: #6f7479;
  background: rgb(255, 255, 255);
}
.icons_sm_search {
  top: 50%;
  left: 8%;
  cursor: pointer;
  color: #6f7479;
  background: rgb(255, 255, 255);
}
.icon-trash-can {
  font-size: 1rem;
}
.search {
  outline: none;
}
</style>
