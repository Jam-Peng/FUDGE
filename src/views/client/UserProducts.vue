<template>
  <div class="container-fluid">
    <div class="row">
      <NavBar />
    </div>
  </div>

  <div class="container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a>購物車</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">商品名稱</li>
      </ol>
    </nav>
    <div class="row justify-content-center">
      <article class="col-8">
        <h2>商品名稱</h2>
        <div>商品內容</div>
        <div>商品內容</div>
        <img src="" alt="" class="img-fluid mb-3" />
      </article>
      <div class="col-4">
        <div class="h5">商品金額 元</div>
        <del class="h6">原價 $1000 元</del>
        <div class="h5">現在只要 $500 元</div>
        <hr />
        <button type="button" class="btn btn-outline-danger">加到購物車</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/user/UserNavBar.vue'

export default {
  components: { NavBar }
}
</script>
