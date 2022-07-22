<template>
  <div class="container mt-4">
    <div class="">
      <div class="row justify-content-center">
        <!-- 訂單商品列表 -->
        <div class="col-10 col-lg-8 col-md-12 mb-3 bg-light">
          <div class="row d-flex align-items-center collapsed px-3">
            <div class="col-md-6 fs-3 fw-semibold py-3">Orders Info</div>
            <div class="col-md-6 text-end">
              <span class="me-2 step_text">訂單資訊</span>
            </div>
          </div>

          <div class="pb-2 row">
            <div
              class="d-flex justify-content-star pt-2"
              v-for="item in order.products"
              :key="item.id"
            >
              <div class="col-md-2">
                <img
                  class="img-fluid cart_img p-2 mb-2 ms-2"
                  :src="item.product.images[0]"
                  alt=""
                />
              </div>

              <div
                class="col-md-10 d-flex flex-column orderItem_text p-2 ps-0 pe-3"
              >
                <div class="row mb-3 mt-1">
                  <!-- 桌機、平板 -->
                  <div class="col-md-6 d-none d-md-block d-lg-block">
                    <span class="me-2">{{ item.product.title }}</span>
                    <span class="text-secondary">{{ item.size }}</span>
                  </div>
                  <!-- 手機顯示 -->
                  <div class="col-md-6 ms-2 d-block d-sm-none">
                    <span class="me-2">{{ item.product.title }}</span>
                    <span class="text-secondary">{{ item.size }}</span>
                  </div>
                  <!-- 桌機、平板 -->
                  <span class="col-md-6 text-end d-none d-md-block d-lg-block"
                    >數量：{{ item.qty }}
                  </span>
                  <!-- 手機顯示 -->
                  <span class="col-md-6 ms-2 d-block d-sm-none"
                    >數量：{{ item.qty }}
                  </span>
                </div>

                <!-- 桌機、平板 -->
                <span class="price_text mt-1 d-none d-md-block d-lg-block"
                  >單價 NT.{{ $filters.currency(item.product.price) }}</span
                >
                <span
                  class="price_text d-none d-md-block d-lg-block"
                  v-if="item.final_total === item.total"
                  >小計 NT.{{ $filters.currency(item.total) }}</span
                >
                <span
                  class="price_text d-none d-md-block d-lg-block"
                  v-if="item.final_total !== item.total"
                  >折扣小計 NT.{{ $filters.currency(item.final_total) }}</span
                >

                <!-- 手機顯示 -->
                <span class="price_text text-end d-block d-sm-none"
                  >單價 NT.{{ $filters.currency(item.product.price) }}</span
                >
                <span
                  class="price_text text-end d-block d-sm-none"
                  v-if="item.final_total === item.total"
                  >小計 NT.{{ $filters.currency(item.total) }}</span
                >
                <span
                  class="price_text text-end d-block d-sm-none"
                  v-if="item.final_total !== item.total"
                  >折扣小計 NT.{{ $filters.currency(item.final_total) }}</span
                >
              </div>
            </div>
            <hr class="col-11 mx-auto mt-3" />

            <!-- 總金額 -->
            <div class="p-4 py-2">
              <div class="col-lg-6 ms-auto orderItem_text text-secondary">
                <div class="row mb-1">
                  <span class="col">商品總金額</span>
                  <span class="col text-end">{{
                    $filters.currency(originalTotal)
                  }}</span>
                </div>

                <div class="row mb-1">
                  <div class="col d-flex justify-content-start">
                    <span class="col-lg-12 col-md-3 me-1">電子折價卷</span>
                  </div>

                  <span
                    class="col text-end"
                    v-if="originalTotal !== order.total"
                    >-{{ $filters.currency(originalTotal - order.total) }}</span
                  >
                  <span class="col text-end" v-else>-0</span>
                </div>

                <div class="row mb-1">
                  <span class="col">運費</span>
                  <span class="col text-end" v-if="originalTotal < 1000">{{
                    shippingFee
                  }}</span>
                  <span class="col text-end" v-else>0</span>
                  <!-- <span
                    class="col-md-4 ms-auto me-2 d-flex justify-content-center align-items-center badge text-bg-warning"
                    >活動：全館免運</span
                  > -->
                </div>

                <div class="row mb-1">
                  <span class="col">購物金</span>
                  <span class="col text-end">-0</span>
                </div>

                <div class="row mb-1">
                  <div class="text-end">
                    <span class="me-2"> 總金額:</span>

                    <span class="fs-3 text-end" v-if="originalTotal < 1000"
                      >NT.{{
                        $filters.currency(order.total + shippingFee)
                      }}</span
                    >
                    <span class="fs-3" v-else
                      >NT.{{ $filters.currency(order.total) }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- 總金額 end -->
          </div>
        </div>

        <!-- 下方表單 -->
        <div class="col-10 col-lg-8 col-md-12 mb-5">
          <div class="row">
            <!-- 訂購人資訊-->
            <div class="p-4 mb-3 bg-light">
              <div class="mb-3 px-2 orderItem_text fw-semibold">
                <span>訂購人資訊</span>
              </div>
              <div class="col-md-12 mb-2 px-2 orderItem_text">
                <span>姓名：{{ order.user.name }}</span>
              </div>

              <div class="row px-2">
                <div class="col-md-6 mb-2 orderItem_text">
                  <span>國家：{{ order.user.nation }}</span>
                </div>

                <div class="col-md-6 mb-2 orderItem_text">
                  <span>手機號碼：{{ order.user.tel }}</span>
                </div>
              </div>

              <div class="row px-2">
                <div class="col-md-6 mb-2 orderItem_text">
                  <span>居住縣市：{{ order.user.city }}</span>
                </div>

                <div class="col-md-6 mb-2 orderItem_text">
                  <span>居住地區：{{ order.user.area }}</span>
                </div>
              </div>

              <div class="col-md-12 mb-2 px-2 orderItem_text">
                <span>地址：{{ order.user.address }}</span>
              </div>

              <div class="col-md-12 mb-0 px-2 orderItem_text">
                <span>E-mail：{{ order.user.email }}</span>
              </div>
            </div>

            <!-- 收件人 不同購買人資訊 -->
            <div
              class="p-4 mb-3 bg-light"
              v-if="order.user.receiverInput === '不同購買人'"
            >
              <div class="px-2 orderItem_text row">
                <span class="col-md-8 mb-3 fw-semibold">收件人資訊</span>
              </div>

              <!-- 收件人表單 不同購買人-->
              <div class="receiverForm">
                <div class="col-md-12 mb-2 px-2 orderItem_text">
                  <span>姓名：{{ order.user.receiverName }}</span>
                </div>

                <div class="row px-2">
                  <div class="col-md-6 mb-2 orderItem_text">
                    <span>國家：{{ order.user.receiverNation }}</span>
                  </div>

                  <div class="col-md-6 mb-2 orderItem_text">
                    <span>手機號碼：{{ order.user.receiverTel }}</span>
                  </div>
                </div>

                <div class="row px-2">
                  <div class="col-md-6 mb-2 orderItem_text">
                    <span>居住縣市：{{ order.user.receiverCity }}</span>
                  </div>

                  <div class="col-md-6 mb-2 orderItem_text">
                    <span>居住地區：{{ order.user.receiverArea }}</span>
                  </div>
                </div>

                <div class="col-md-12 mb-2 px-2 orderItem_text">
                  <span>地址：{{ order.user.receiverAddress }}</span>
                </div>

                <div class="col-md-12 mb-0 px-2 orderItem_text">
                  <span>E-mail：{{ order.user.receiverEmail }}</span>
                </div>
              </div>
            </div>

            <!-- 收件人 同購買人資訊 -->
            <div
              class="p-4 mb-3 bg-light"
              v-if="
                order.user.receiverInput === '同購買人' &&
                order.user.receiverShopName === ''
              "
            >
              <div class="px-2 orderItem_text row">
                <span class="col-md-8 mb-3 fw-semibold">收件人資訊</span>
              </div>

              <!-- 收件人表單 同購買人-->
              <div class="receiverForm">
                <div class="col-md-12 mb-2 px-2 orderItem_text">
                  <span>收件人：{{ order.user.receiverInput }}</span>
                </div>
              </div>
            </div>

            <!-- 收件人 超商取貨資訊 -->
            <div
              class="p-4 mb-3 bg-light"
              v-if="order.user.receiverShopName !== ''"
            >
              <div class="px-2 orderItem_text row">
                <span class="col-md-8 mb-3 fw-semibold">收件人資訊</span>
              </div>

              <!-- 收件人表單 -->
              <div class="receiverForm">
                <div class="col-md-12 mb-2 px-2 orderItem_text">
                  <span>姓名：{{ order.user.receiverShopName }}</span>
                </div>

                <div class="row px-2">
                  <div class="col-md-6 mb-2 orderItem_text">
                    <span>國家：{{ order.user.receiverShopNation }}</span>
                  </div>

                  <div class="col-md-6 mb-2 orderItem_text">
                    <span>手機號碼：{{ order.user.receiverShopTel }}</span>
                  </div>
                </div>
                <div class="col-md-12 mb-2 px-2 orderItem_text">
                  <span>
                    取貨門市：<i class="bi bi-geo-fill"></i>
                    {{ locationName }} - {{ locationAddress }}</span
                  >
                </div>
              </div>
            </div>

            <!-- 配送資訊 -->
            <div class="p-4 mb-3 bg-light">
              <div class="row px-2 mb-3 orderItem_text">
                <span class="fw-semibold col-md-8">配送資訊</span>
              </div>

              <!-- 配送表單 -->
              <div class="receiverForm">
                <div class="col-md-12 mb-2 px-2 orderItem_text">
                  <span>配送時間：{{ order.user.deliverTime }}</span>
                </div>

                <div class="col-md-12 mb-2 px-2 orderItem_text">
                  <span>發票形式：{{ order.user.deliverTicket }}</span>
                </div>

                <!-- 電子發票需填表格 -->
                <div v-if="order.user.deliverTicket === '電子發票'">
                  <div class="row px-2 mb-1 ticket_dress">
                    <span class="col-md-12 text-secondary"
                      >中獎發票寄送地址</span
                    >
                  </div>

                  <div class="row px-2">
                    <div class="col-md-6 mb-2 orderItem_text">
                      <span>縣市：{{ order.user.deliverCity }}</span>
                    </div>

                    <div class="col-md-6 mb-2 orderItem_text">
                      <span>地區：{{ order.user.deliverArea }}</span>
                    </div>
                  </div>

                  <div class="col-md-12 mb-2 px-2 orderItem_text">
                    <span>地址：{{ order.user.deliverAddress }}</span>
                  </div>
                </div>

                <!-- 電子發票(手機載具)需填表格 -->
                <div v-if="order.user.deliverTicket === '電子發票(手機載具)'">
                  <div class="row px-2 mb-1 ticket_dress">
                    <span class="col-md-12 text-secondary">手機載具條碼</span>
                  </div>
                  <div class="col-md-5 mb-2 px-2 ms-1 orderItem_text border">
                    <span>{{ order.user.mobileCode }}</span>
                  </div>
                </div>

                <!-- 捐贈發票需填表格 -->
                <div
                  class="col-md-12 mb-2 px-2 orderItem_text"
                  v-if="order.user.deliverTicket === '捐贈發票'"
                >
                  <span>捐贈單位：{{ order.user.invoiceDonate }}</span>
                </div>
              </div>
            </div>

            <!-- 付款狀態-->
            <div class="mb-4 px-0 border border-secondary">
              <div class="p-4">
                <div class="px-2 orderItem_text row">
                  <span class="col-md-8 mb-3 fw-semibold">付款資訊</span>
                </div>

                <!-- 付款狀態資訊 -->
                <div class="receiverForm">
                  <div
                    class="col-md-12 px-2 d-flex align-item-center orderItem_text"
                  >
                    <span>付款狀態：</span>
                    <span
                      class="badge text-bg-secondary px-3"
                      v-if="!order.is_paid"
                      >尚未付款</span
                    >
                    <span class="badge text-bg-warning px-3" v-else
                      >完成付款</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- 最下方按鈕 -->
            <div class="mb-3">
              <div class="row justify-content-center">
                <div
                  class="col-md-4 d-flex justify-content-center"
                  v-if="order.is_paid === false"
                >
                  <button
                    class="btn btn-secondary btn-sm p-2 px-5"
                    @click="OrderPayment"
                  >
                    確認付款
                  </button>
                </div>
                <div
                  class="col-md-4 d-flex justify-content-center"
                  v-if="order.is_paid === true"
                >
                  <button
                    class="btn btn-secondary btn-sm p-2 px-5"
                    @click="goShopping"
                  >
                    前往賣場
                  </button>
                </div>
              </div>
            </div>
            <!-- 最下方按鈕 end -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <CompletePayModal ref="completePayModal" :orderId="completeOrderId" />
  <Footer />
</template>

<script>
import CompletePayModal from '@/components/user/CompletePayModal.vue'
import Footer from '@/components/user/UserFooter.vue'
import { mapActions } from 'pinia'
import statusStore from '@/stores/statusStores'
import userCheckOrderMethod from '@/mixins/userCheckOrderMethod'

export default {
  components: { CompletePayModal, Footer },

  methods: {
    ...mapActions(statusStore, ['pushMessage'])
  },
  mixins: [userCheckOrderMethod],
  created() {
    this.orderId = this.$route.params.checkOrderId
    this.getOrder()
  }
}
</script>

<style lang="scss">
.step_text,
.orderItem_text {
  font-size: 0.9rem;
}
.deliverTicketLink {
  font-size: 0.7rem;
  cursor: pointer;
}
.ticket_dress {
  font-size: 0.7rem;
}
.cart_img {
  max-width: 80px;
  cursor: default;
}

.serve_deed {
  cursor: pointer;
}
</style>
