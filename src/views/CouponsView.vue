<template>
  <OverLoading :active="isLoading"></OverLoading>
  <div class="shadow-sm p-3 mt-2 bg-body rounded">
    <div>
      <div class="d-flex justify-content-between px-3">
        <p class="fs-3">優惠卷管理表</p>
        <span
          ><button
            class="btn btn-primary mt-1"
            type="button"
            @click="openModal(true)"
          >
            新增優惠卷
          </button></span
        >
      </div>
      <table class="table mt-2 align-middle">
        <thead>
          <tr>
            <th width="70" class="text-center">品項</th>
            <th width="200">名稱</th>
            <th>折扣百分比</th>
            <th>到期日</th>
            <th>是否啟用</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(coupon, index) in coupons" :key="index">
            <td class="text-center">{{ index + 1 }}</td>
            <td>{{ coupon.title }}</td>
            <td>{{ coupon.percent }}%</td>
            <td>{{ $filters.date(coupon.due_date) }}</td>
            <td>
              <span class="text-success" v-if="coupon.is_enabled">啟用</span>
              <span class="text-muted" v-else>不啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  @click="openModal(false, coupon)"
                >
                  編輯
                </button>
                <button class="btn btn-outline-danger btn-sm">刪除</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <CouponModal
    ref="CouponModal"
    :coupon="tempCoupon"
    @update-Coupon="updateCoupon"
  />
</template>

<script>
import CouponModal from '@/components/CouponModal.vue'

export default {
  data() {
    return {
      coupons: [],
      pagination: {},
      tempCoupon: {},
      isNew: false,
      isLoading: false
    }
  },
  components: { CouponModal },
  methods: {
    // 取得優惠卷列表
    getCoupons(page = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          // console.log(res)
          setTimeout(() => {
            this.isLoading = false
          }, 500)
          if (res.data.success) {
            this.coupons = res.data.coupons
            this.pagination = res.data.pagination
          }
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    // 打開新增或編輯 Modal
    openModal(isNew, item) {
      if (isNew) {
        this.tempCoupon = { due_date: new Date().getTime() / 1000 }
      } else {
        this.tempCoupon = { ...item }
      }
      this.isNew = isNew
      this.$refs.CouponModal.showModel()
    },
    // 新增或編輯優惠卷
    updateCoupon(data) {
      this.tempCoupon = data
      // 新增
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethod = 'post'
      // 編輯(更新)
      if (!this.isNew) {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${data.id}`
        httpMethod = 'put'
      }
      this.$http[httpMethod](url, { data: this.tempCoupon })
        .then((res) => {
          this.$refs.CouponModal.hideModal()
          if (res.data.success) {
            this.getCoupons()
          }
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  },
  created() {
    this.getCoupons()
  }
}
</script>
