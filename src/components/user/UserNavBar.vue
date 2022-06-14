/* eslint-disable prefer-const */
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
      </div>
    </div>

    <div class="container">
      <div class="row ms-lg-auto">
        <div
          class="col d-flex flex-column align-items-center justify-content-center position-relative"
          role="search"
        >
          <label for="search">
            <!-- <input
              class="search me-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
              :value="search"
              @keyup.enter="$emit('update:search', $event.target.value)"
              @change="valueSearch"
              ref="searchValue"
              id="search"
            /> -->
            <!-- <input
              class="search me-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
              @keyup.enter="searchKeyword(keyword)"
              id="search"
              v-model="keyword"
            /> -->
            <input
              class="search me-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
              id="search"
              @keyup.enter="searchKeyword($event)"
              :value="keyword"
            />
            <!-- :value="$route.query.keyword" -->
            <font-awesome-icon
              class="icons icons-search position-absolute"
              :icon="['fas', 'magnifying-glass']"
            />
          </label>
        </div>
        <div class="col">
          <ul class="navbar-nav d-flex flex-row justify-content-end">
            <li class="nav-item">
              <a class="nav-link"
                ><font-awesome-icon
                  class="icons icons_user"
                  :icon="['fas', 'user']"
                />
              </a>
            </li>
            <li class="nav-item mx-1">
              <a class="nav-link"
                ><font-awesome-icon
                  class="icons icons_star"
                  :icon="['far', 'star']"
                />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link"
                ><font-awesome-icon
                  class="icons icons_art"
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
    // searchKeyword(keyword) {
    //   this.$router.replace(`/search?Keyword=${keyword}`)
    //   // this.keyword = ''
    // }
    // searchKeyword(e) {
    //   this.$router.replace({
    //     query: {
    //       ...this.$route.query,
    //       keyword: e.target.value
    //     },
    //     path: '/search'
    //   })
    //   // e.target.value = ''
    //   console.log(this.$route)
    // }
    searchKeyword(e) {
      this.keyword = e.target.value
      this.$router.replace({
        name: this.$route.name,
        query: { keyword: e.target.value },
        path: '/search'
      })
      e.target.value = ''
      console.log(this.$route)
    }
  }
}
</script>

<style lang="scss">
// ul li {
//   cursor: pointer;
// }
.icons_user,
.icons_star,
.icons_cart {
  font-size: 1.2rem;
}
.icons-search {
  top: 30%;
  right: 9%;
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
