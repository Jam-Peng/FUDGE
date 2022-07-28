<template>
  <div class="container-fluid mt-4">
    <div class="pb-2">
      <swiper
        :slides-per-view="1"
        :space-between="50"
        :autoplay="{ delay: 4000 }"
        :effect="'fade'"
        :loop="true"
        :pagination="{ clickable: true, dynamicBullets: true }"
        class="col-lg-12"
      >
        <swiper-slide>
          <router-link to="/productList">
            <div>
              <img src="../../assets/img/banner1.jpeg" class="w-100" />
            </div>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/productList">
            <div>
              <img src="../../assets/img/banner2.jpeg" class="w-100" alt="" />
            </div>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/productList">
            <div>
              <img src="../../assets/img/banner3.jpeg" class="w-100" alt="" />
            </div>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/productList">
            <div>
              <img src="../../assets/img/banner4.jpeg" class="w-100" alt="" />
            </div>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/productList">
            <div>
              <img src="../../assets/img/banner5.jpeg" class="w-100" alt="" />
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>

    <!-- 桌機 -NEW ARRIVALS -->
    <div class="products_slider col-lg-12 pt-4 d-none d-lg-block">
      <!-- <swiper
        :slides-per-view="2"
        :space-between="10"
        :loop="true"
        :breakpoints="{ 768: { slidesPerView: 4, spaceBetween: 25 } }"
        :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
        class="text-center col-lg-10 col-md-10"
        grab-cursor
      > -->
      <div class="col-lg-12 text-center fs-4 px-4 pb-4">NEW ARRIVALS</div>
      <swiper
        :slides-per-view="2"
        :space-between="10"
        :loop="true"
        :breakpoints="{
          320: { slidesPerView: 2, spaceBetween: 20 },
          480: { slidesPerView: 3, spaceBetween: 30 },
          640: { slidesPerView: 4, spaceBetween: 40 }
        }"
        :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
        class="col-lg-10"
        grab-cursor
      >
        <swiper-slide class="px-3" v-for="item in productsItem" :key="item.id">
          <router-link :to="`/productList/${item.id}`">
            <img
              :src="item.images[0]"
              alt=""
              class="img-fluid pb-2 indexPdList_img"
            />
          </router-link>
          <div class="index_text">
            <p class="mb-1">{{ item.title }}</p>
            <div class="">
              <span
                class="text-secondary text-decoration-line-through me-2"
                v-if="item.origin_price !== item.price"
                >NT.{{ $filters.currency(item.origin_price) }}</span
              >
              <span class="text-danger"
                >NT.{{ $filters.currency(item.price) }}</span
              >
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <div
        class="col-lg-12 d-flex justify-content-between products_slider_navigation"
      >
        <div class="nav_indicator prevArrow">
          <i class="bi bi-chevron-compact-left"></i>
        </div>
        <div class="nav_indicator nextArrow">
          <i class="bi bi-chevron-compact-right"></i>
        </div>
      </div>
    </div>
    <!-- 平板 -NEW ARRIVALS -->
    <div class="mdproducts_slider col-md-12 pt-4 d-none d-md-block d-lg-none">
      <div class="col-md-12 text-center fs-4 pb-3">NEW ARRIVALS</div>
      <swiper
        :slides-per-view="2"
        :space-between="10"
        :loop="true"
        :breakpoints="{
          320: { slidesPerView: 2, spaceBetween: 20 },
          480: { slidesPerView: 3, spaceBetween: 30 }
        }"
        :navigation="{ nextEl: '.mdnextArrow', prevEl: '.mdprevArrow' }"
        class="col-md-10"
      >
        <swiper-slide class="px-1" v-for="item in productsItem" :key="item.id">
          <router-link :to="`/productList/${item.id}`">
            <img
              :src="item.images[0]"
              alt=""
              class="img-fluid pb-2 indexPdList_img"
            />
          </router-link>
          <div class="mdIndex_text">
            <p class="mb-1">{{ item.title }}</p>
            <div class="">
              <span
                class="text-secondary text-decoration-line-through me-2"
                v-if="item.origin_price !== item.price"
                >NT.{{ $filters.currency(item.origin_price) }}</span
              >
              <span class="text-danger"
                >NT.{{ $filters.currency(item.price) }}</span
              >
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <div
        class="col-md-12 d-flex justify-content-between mdproducts_slider_navigation"
      >
        <div class="mdNav_indicator mdprevArrow">
          <i class="bi bi-chevron-compact-left"></i>
        </div>
        <div class="mdNav_indicator mdnextArrow">
          <i class="bi bi-chevron-compact-right"></i>
        </div>
      </div>
    </div>
    <!-- 手機 -NEW ARRIVALS -->
    <div class="smproducts_slider col-12 pt-4 d-block d-sm-none">
      <div class="col-12 text-center fs-6 pb-2">NEW ARRIVALS</div>
      <swiper
        :slides-per-view="2"
        :space-between="10"
        :loop="true"
        :breakpoints="{
          320: { slidesPerView: 2, spaceBetween: 10 },
          480: { slidesPerView: 3, spaceBetween: 30 }
        }"
        :navigation="{ nextEl: '.smnextArrow', prevEl: '.smprevArrow' }"
        class="col-10"
      >
        <swiper-slide class="px-2" v-for="item in productsItem" :key="item.id">
          <router-link :to="`/productList/${item.id}`">
            <img
              :src="item.images[0]"
              alt=""
              class="img-fluid pb-2 indexPdList_img"
            />
          </router-link>
          <div class="smIndex_text">
            <p class="mb-1">{{ item.title }}</p>
            <div class="">
              <span
                class="text-secondary text-decoration-line-through me-2"
                v-if="item.origin_price !== item.price"
                >NT.{{ $filters.currency(item.origin_price) }}</span
              >
              <span class="text-danger"
                >NT.{{ $filters.currency(item.price) }}</span
              >
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <div
        class="col-12 d-flex justify-content-between smproducts_slider_navigation"
      >
        <div class="smNav_indicator smprevArrow">
          <i class="bi bi-chevron-compact-left"></i>
        </div>
        <div class="smNav_indicator smnextArrow">
          <i class="bi bi-chevron-compact-right"></i>
        </div>
      </div>
    </div>

    <div class="pt-2 px-2">
      <router-link to="/productList">
        <img
          src="../../assets/img/accessories.jpeg"
          alt=""
          class="d-block w-100"
        />
      </router-link>
    </div>

    <!-- Instagram -->
    <!-- 桌機、平板 -->
    <div class="col-lg-12 d-none d-md-block d-lg-block">
      <div class="col-lg-12 text-center fs-4 pb-3">INSTAGAM</div>
      <router-link to="/zh-tw">
        <div class="col-12 d-flex px-4">
          <div class="col-lg-2 p-1">
            <img src="../../assets/img/ig-01.jpg" alt="" class="img-fluid" />
          </div>
          <div class="col-lg-2 p-1">
            <img src="../../assets/img/ig-02.jpg" alt="" class="img-fluid" />
          </div>
          <div class="col-lg-2 p-1">
            <img src="../../assets/img/ig-03.jpg" alt="" class="img-fluid" />
          </div>
          <div class="col-lg-2 p-1">
            <img src="../../assets/img/ig-04.jpg" alt="" class="img-fluid" />
          </div>
          <div class="col-lg-2 p-1">
            <img src="../../assets/img/ig-05.jpg" alt="" class="img-fluid" />
          </div>
          <div class="col-lg-2 p-1">
            <img src="../../assets/img/ig-06.jpg" alt="" class="img-fluid" />
          </div>
        </div>
        <div class="d-flex px-4">
          <div class="col-lg-2 p-1">
            <img src="../../assets/img/ig-07.jpg" alt="" class="img-fluid" />
          </div>
          <div class="col-lg-2 p-1">
            <img src="../../assets/img/ig-08.jpg" alt="" class="img-fluid" />
          </div>
          <div class="col-lg-2 p-1">
            <img src="../../assets/img/ig-09.jpg" alt="" class="img-fluid" />
          </div>
          <div class="col-lg-2 p-1">
            <img src="../../assets/img/ig-10.jpg" alt="" class="img-fluid" />
          </div>
          <div class="col-lg-2 p-1">
            <img src="../../assets/img/ig-11.jpg" alt="" class="img-fluid" />
          </div>
          <div class="col-lg-2 p-1">
            <img src="../../assets/img/ig-12.jpg" alt="" class="img-fluid" />
          </div>
        </div>
      </router-link>
    </div>
    <!-- 手機顯示 -->
    <div class="col-12 d-block d-sm-none">
      <div class="col-12 text-center fs-6 pb-1">INSTAGAM</div>
      <router-link to="/zh-tw">
        <div class="col-12 d-flex px-2">
          <div class="col-3 p-1">
            <img src="../../assets/img/ig-01.jpg" alt="" class="img-fluid" />
          </div>
          <div class="col-3 p-1">
            <img src="../../assets/img/ig-02.jpg" alt="" class="img-fluid" />
          </div>
          <div class="col-3 p-1">
            <img src="../../assets/img/ig-03.jpg" alt="" class="img-fluid" />
          </div>
          <div class="col-3 p-1">
            <img src="../../assets/img/ig-05.jpg" alt="" class="img-fluid" />
          </div>
        </div>
        <div class="d-flex px-2">
          <div class="col-3 p-1">
            <img src="../../assets/img/ig-07.jpg" alt="" class="img-fluid" />
          </div>
          <div class="col-3 p-1">
            <img src="../../assets/img/ig-08.jpg" alt="" class="img-fluid" />
          </div>
          <div class="col-3 p-1">
            <img src="../../assets/img/ig-10.jpg" alt="" class="img-fluid" />
          </div>
          <div class="col-3 p-1">
            <img src="../../assets/img/ig-12.jpg" alt="" class="img-fluid" />
          </div>
        </div>
      </router-link>
    </div>
  </div>
  <Footer />
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Virtual // 滑鼠抓取照片移動效果
} from 'swiper'

import 'swiper/css'
import 'swiper/css/bundle'
import Footer from '@/components/user/UserFooter.vue'
import statusStore from '@/stores/statusStores'
import { mapActions } from 'pinia'

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade, Virtual])

export default {
  components: {
    Swiper,
    SwiperSlide,
    Footer
  },
  data() {
    return {
      products: [],
      productsItem: []
    }
  },
  watch: {
    products() {
      this.products.slice(0, 10).forEach((item) => {
        this.productsItem.push(item)
      })
    }
  },
  methods: {
    ...mapActions(statusStore, ['pushMessage']),
    // 取得商品列表
    getProduct() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            // console.log(res.data)
            this.products = res.data.products
          }
        })
        .catch(() => {
          this.pushMessage(false, '讀取', '發生錯誤，請重新整理頁面再試一次')
        })
    }
  },
  created() {
    this.getProduct()
  }
}
</script>
