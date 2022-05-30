<template>
  <div class="shadow-sm p-3 mt-2 bg-body rounded">
    <div class="d-flex justify-content-between px-3">
      <p class="fs-3">訂單管理表</p>
    </div>

    <table class="table mt-2 align-middle">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th width="150">購買款項</th>
          <th class="text-center">應付金額</th>
          <th width="120" class="text-center">是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01月31日</td>
          <td><span>little-ming@gmail.com</span></td>
          <td>
            <ul class="list-unstyled d-flex flex-column justify-content-center">
              <li>商品名稱</li>
              <li>數量：1 個</li>
            </ul>
          </td>
          <td class="text-center">1000</td>
          <td>
            <div class="form-check form-switch ps-5">
              <input class="form-check-input" type="checkbox" id="paidSwitch" />
              <label class="form-check-label" for="paidSwitch">
                <span>已付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm">檢視</button>
              <button class="btn btn-outline-danger btn-sm">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=:page`
      this.$http
        .get(url)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  }
}
</script>
