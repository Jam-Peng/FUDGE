<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>訂單資料</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-4">
          <div class="row">
            <div class="col-md-4">
              <!-- 訂購人 -->
              <div class="mb-2">
                <span class="fw-semibold">訂購人</span>
                <table class="table mb-4">
                  <tbody class="orderModal_contain">
                    <tr>
                      <td style="width: 90px">姓名</td>
                      <td>{{ tempOrder.user.name }}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{{ tempOrder.user.email }}</td>
                    </tr>
                    <tr>
                      <td>電話</td>
                      <td>{{ tempOrder.user.tel }}</td>
                    </tr>
                    <tr>
                      <td>國家</td>
                      <td>{{ tempOrder.user.nation }}</td>
                    </tr>
                    <tr>
                      <td>地址</td>
                      <td>
                        {{ tempOrder.user.city }} {{ tempOrder.user.area
                        }}{{ tempOrder.user.address }}
                      </td>
                    </tr>
                    <tr>
                      <td>配送方式</td>
                      <td>{{ tempOrder.user.userdeliverMethod }}</td>
                    </tr>
                    <tr>
                      <td>配送時間</td>
                      <td>{{ tempOrder.user.deliverTime }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- 宅配 -->
              <div
                class="mb-2"
                v-if="tempOrder.user.userdeliverMethod === '宅配'"
              >
                <span class="fw-semibold">收件人</span>
                <span
                  class="ms-3"
                  v-if="tempOrder.user.receiverInput === '同購買人'"
                  >{{ tempOrder.user.receiverInput }}</span
                >
                <table
                  class="table mb-4"
                  v-if="tempOrder.user.receiverInput === '不同購買人'"
                >
                  <tbody class="orderModal_contain">
                    <tr>
                      <td style="width: 90px">姓名</td>
                      <td>{{ tempOrder.user.receiverName }}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{{ tempOrder.user.receiverEmail }}</td>
                    </tr>
                    <tr>
                      <td>電話</td>
                      <td>{{ tempOrder.user.receiverTel }}</td>
                    </tr>
                    <tr>
                      <td>國家</td>
                      <td>{{ tempOrder.user.receiverNation }}</td>
                    </tr>
                    <tr>
                      <td>地址</td>
                      <td>
                        {{ tempOrder.user.receiverCity }}
                        {{ tempOrder.user.receiverArea
                        }}{{ tempOrder.user.receiverAddress }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- 門市取貨 -->
              <div
                class="mb-2"
                v-if="
                  tempOrder.user.userdeliverMethod === '7-11超商取貨' ||
                  tempOrder.user.userdeliverMethod === '全家超商取貨'
                "
              >
                <span class="fw-semibold">超商取貨</span>
                <table class="table mb-4">
                  <tbody class="orderModal_contain">
                    <tr>
                      <td style="width: 90px">姓名</td>
                      <td>{{ tempOrder.user.receiverShopName }}</td>
                    </tr>
                    <tr>
                      <td>電話</td>
                      <td>{{ tempOrder.user.receiverShopTel }}</td>
                    </tr>
                    <tr>
                      <td>國家</td>
                      <td>{{ tempOrder.user.receiverShopNation }}</td>
                    </tr>
                    <tr>
                      <td>門市資訊</td>
                      <td>
                        {{ tempOrder.user.clientLocation.name }}
                        {{ tempOrder.user.clientLocation.dress }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="col-md-8">
              <span class="fw-semibold">訂單付款資訊</span>
              <table class="table mb-4">
                <tbody class="orderModal_contain">
                  <tr>
                    <td style="width: 100px">訂單編號</td>
                    <td>{{ tempOrder.id }}</td>
                  </tr>
                  <tr>
                    <td>下單時間</td>
                    <td>{{ $filters.date(tempOrder.create_at) }}</td>
                  </tr>
                  <tr>
                    <td>付款方式</td>
                    <td>{{ tempOrder.user.userPayMethod }}</td>
                  </tr>
                  <tr>
                    <td>發票形式</td>
                    <td>{{ tempOrder.user.deliverTicket }}</td>
                  </tr>
                  <tr v-if="tempOrder.user.deliverTicket === '電子發票'">
                    <td>發票寄送地</td>
                    <td>
                      {{ tempOrder.user.deliverCity }}
                      {{ tempOrder.user.deliverArea
                      }}{{ tempOrder.user.deliverAddress }}
                    </td>
                  </tr>

                  <tr
                    v-if="tempOrder.user.deliverTicket === '電子發票(手機載具)'"
                  >
                    <td>載具條碼</td>
                    <td>{{ tempOrder.user.mobileCode }}</td>
                  </tr>

                  <tr v-if="tempOrder.user.deliverTicket === '捐贈發票'">
                    <td>捐贈單位</td>
                    <td>{{ tempOrder.user.invoiceDonate }}</td>
                  </tr>

                  <tr>
                    <td>付款時間</td>
                    <td>
                      <span class="me-2" v-if="tempOrder.paid_date">
                        {{ $filters.date(tempOrder.paid_date) }}
                      </span>

                      <strong
                        class="text-success"
                        v-if="tempOrder.is_paid && !tempOrder.paid_date"
                        >人工確認付款</strong
                      >
                      <span
                        class="text-danger"
                        v-if="!tempOrder.paid_date && !tempOrder.is_paid"
                        >尚未付款</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>付款狀態</td>
                    <td>
                      <strong class="text-success" v-if="tempOrder.is_paid"
                        >已付款</strong
                      >
                      <span class="text-danger" v-else>尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <td>總金額</td>
                    <td v-if="tempOrder.user.originalTotal < 1000">
                      {{ $filters.currency(tempOrder.total + shippingFee) }}
                    </td>
                    <td v-else>{{ $filters.currency(tempOrder.total) }}</td>
                  </tr>
                </tbody>
              </table>

              <span class="fw-semibold">訂購商品</span>
              <table class="table mb-4">
                <tbody class="orderModal_contain">
                  <tr v-for="item in tempOrder.products" :key="item.id">
                    <td>
                      {{ item.product.title }}
                    </td>
                    <td>
                      <span>尺寸：{{ item.size }}</span>
                      <span class="ms-4">數量：{{ item.qty }}</span>
                    </td>
                    <td class="text-end">
                      NT.{{ $filters.currency(item.final_total) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="hideModal">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'

export default {
  data() {
    return {
      modal: {},
      tempOrder: {
        products: {},
        user: {
          clientLocation: {}
        }
      },
      shippingFee: 80 // 運費
    }
  },
  props: {
    order: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  watch: {
    order() {
      this.tempOrder = this.order
      this.tempOrder.user = this.order.user
      // console.log(this.tempOrder)
    }
  },
  mixins: [modalMixin]
}
</script>

//
<style lang="scss">
// .orderModal_contain {
//   font-size: 0.9rem;
// }
//
</style>
