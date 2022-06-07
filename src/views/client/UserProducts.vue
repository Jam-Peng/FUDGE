<template>
  <div class="container-fluid">
    <div class="row">
      <NavBar />
    </div>
  </div>

  <div class="container-fluid mt-4 position-relative px-4">
    <div class="row ms-auto">
      <!-- breadcrumb麵包屑 -->
      <div class="container">
        <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/" class="link-dark">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/ProductList" class="link-dark"
                >產品列表</router-link
              >
            </li>
            <li class="breadcrumb-item active" aria-current="page">類別</li>
            <li class="breadcrumb-item active" aria-current="page">
              指定商品細節
            </li>
          </ol>
        </nav>
      </div>
      <!-- 左邊 -->
      <div class="col-lg-8 mb-3">
        <div>
          <img src="" class="img-fluid mb-3" alt="..." />
        </div>
      </div>
      <!-- 右邊 -->
      <div class="col-lg-4">
        <div class="container">
          <div class="row">
            <div class="col">
              <article>
                <div class="mb-4 d-flex">
                  <p class="card-title mb-1">商品名稱</p>
                  <span class="icon-star ms-auto"
                    ><font-awesome-icon class="icons" :icon="['far', 'star']"
                  /></span>
                </div>
                <div class="d-flex align-items-baseline">
                  <p
                    class="card-text text-secondary text-decoration-line-through mb-0 me-4"
                  >
                    NT.原價1000
                  </p>
                  <p class="card-text text-danger">NT.現價500</p>
                </div>
              </article>
              <hr />
              <!-- 尺寸與數量 -->
              <div>
                <div class="row px-2">
                  <div class="col-6 px-0">
                    <select class="form-select form-select-sm text-center">
                      <option selected disabled value="">SIZE</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                    </select>
                  </div>
                  <div
                    class="col-6 countSelector rounded-1 d-flex align-items-center w-50"
                  >
                    <div
                      class="col d-flex align-items-center justify-content-between"
                    >
                      <font-awesome-icon
                        class="icons icons-minus"
                        :icon="['fas', 'minus']"
                      />
                      <span class="count">0</span>
                      <font-awesome-icon
                        class="icons icons-plus"
                        :icon="['fas', 'plus']"
                      />
                    </div>
                  </div>
                  <div class="px-0 my-4">
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm col-12"
                    >
                      加到購物車
                    </button>
                  </div>
                </div>
              </div>
              <!-- 商品資訊 -->
              <div>
                <ProductScript />
              </div>
              <!-- 商品資訊 end -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid">
    <div class="row justify-content-center"></div>
  </div>
</template>

<script>
import NavBar from '@/components/user/UserNavBar.vue'
import ProductScript from '@/components/user/ProductScript.vue'

export default {
  components: { NavBar, ProductScript }
}
</script>

<style lang="scss">
.countSelector {
  border: 1px solid #ced4da;
}

.icons-minus,
.icons-plus,
.skills__header {
  font-size: 1rem;
  cursor: pointer;
}
.icon-star {
  cursor: pointer;
  color: #6f7479;
  :hover {
    color: #ffc107;
  }
}
.icons_arrow {
  transition: 0.4s;
  font-size: 0.9rem;
  cursor: pointer;
}
.descript_title,
.wash_title {
  font-size: 0.9rem;
}
// 商品描述
.descript_close .descript_list {
  height: 0;
  overflow: hidden;
}
.descript_open .descript_list {
  height: max-content;
}
.sdescript_open .icons_arrow {
  transform: rotate(0deg);
}
.descript_close .icons_arrow {
  transform: rotate(-180deg);
}
// 洗滌方式
.wash_close .wash_list {
  height: 0;
  overflow: hidden;
}
.wash_open .wash_list {
  height: max-content;
}
.wash_open .icons_arrow {
  transform: rotate(0deg);
}
.wash_close .icons_arrow {
  transform: rotate(-180deg);
}
</style>
