<template>
  <div class="container-fluid">
    <div class="row">
      <NavBar />
    </div>
  </div>
  <div class="container mt-4">
    <div class="row">
      <!-- Check out步驟 -->
      <div class="col-lg-12 mb-2">
        <ul class="row row-cols-md-4 justify-content-center step_text">
          <li
            class="col bg-light d-flex justify-content-star align-items-center rounded py-2"
          >
            <div class="d-flex align-self-center fs-2 fw-semibold ps-2">01</div>
            <div class="d-flex flex-column px-3">
              <span>確認清單及付款方式</span>
              <span>Check & Payment </span>
            </div>
          </li>
          <li
            class="col bg-warning d-flex justify-content-star align-items-center rounded mx-4"
          >
            <div class="d-flex align-self-center fs-2 fw-semibold ps-2">02</div>
            <div class="d-flex flex-column px-3">
              <span>填寫訂購資料</span>
              <span>Shipping info</span>
            </div>
          </li>
          <li
            class="col bg-light d-flex justify-content-star align-items-center rounded"
          >
            <div class="d-flex align-self-center fs-2 fw-semibold ps-2">03</div>
            <div class="d-flex flex-column px-3">
              <span>完成購物</span>
              <span>Order completed</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="row justify-content-center">
        <!-- 購物車訂單列表 -->
        <div class="col-md-7 mb-3 bg-light">
          <div class="checkOutOrder_container" id="accordionFlushExample">
            <div class="" @click="toggleOrder">
              <div class="">
                <div
                  class="row d-flex align-items-center collapsed px-3"
                  data-bs-toggle="collapse"
                  data-bs-target="#checkOutOrder"
                  aria-expanded="false"
                  aria-controls="checkOutOrder"
                >
                  <div class="col-md-6 fs-3 fw-semibold py-3">
                    Shopping Info
                  </div>
                  <div class="col-md-6 text-end">
                    <span class="me-2 step_text">查看訂單資料</span>
                    <font-awesome-icon
                      class="icons icons-arrow order_open"
                      :icon="['fas', 'angle-down']"
                    />
                  </div>
                </div>
              </div>
              <!-- border-bottom -->
              <div
                class="accordion-collapse collapse pb-2 row"
                id="checkOutOrder"
                data-bs-parent="#accordionFlushExample"
              >
                <div
                  class="d-flex justify-content-star pt-2"
                  v-for="item in cart.carts"
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
                      <div class="col-md-6">
                        <span class="me-2">{{ item.product.title }}</span>
                        <span class="text-secondary">{{ item.size }}</span>
                      </div>

                      <span class="col-md-6 text-end"
                        >數量：{{ item.qty }}
                      </span>
                    </div>
                    <span class="price_text mt-1"
                      >單價 NT.{{ $filters.currency(item.product.price) }}</span
                    >
                    <span class="price_text"
                      >小計 NT.{{ $filters.currency(item.total) }}</span
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
                        $filters.currency(cart.total)
                      }}</span>
                    </div>

                    <div class="row mb-1">
                      <div class="col d-flex justify-content-start">
                        <span class="col-lg-12 col-md-3 me-1">電子折價卷</span>
                        <!-- <span
                          class="col-4 badge text-bg-success d-flex justify-content-center align-items-center"
                          v-if="cart.final_total !== cart.total"
                          >使用中</span
                        > -->
                      </div>

                      <span
                        class="col text-end"
                        v-if="cart.final_total !== cart.total"
                        >-{{
                          $filters.currency(cart.total - cart.final_total)
                        }}</span
                      >
                      <span class="col text-end" v-else>-0</span>
                    </div>

                    <div class="row mb-1">
                      <span class="col">運費</span>
                      <!-- 這裡只是顯示價錢，要在刪除一筆商品後重新取得購物車列表時重新判斷運費 -->
                      <span class="col text-end" v-if="total < 1000">{{
                        shippingFee
                      }}</span>
                      <span class="col text-end" v-else>0</span>
                    </div>

                    <div class="row mb-1">
                      <span class="col">購物金</span>
                      <span class="col text-end">-0</span>
                    </div>

                    <div class="row mb-1">
                      <span class="col"> 總金額:</span>

                      <span
                        class="col text-end"
                        v-if="cart.final_total !== cart.total"
                        >NT.{{
                          $filters.currency(cart.final_total + shippingFee)
                        }}</span
                      >
                      <span class="col text-end" v-else
                        >NT.{{ $filters.currency(finalPayTotal) }}</span
                      >
                    </div>
                  </div>
                </div>
                <!-- 總金額 end -->
              </div>
            </div>
          </div>
        </div>

        <!-- 下方表單-->
        <div class="col-md-7 mb-4">
          <v-form class="row" v-slot="{ errors }" @submit="createOrder">
            <!-- 訂購人資訊-->
            <div class="p-4 mb-3 bg-light">
              <div class="mb-3 px-2 orderItem_text fw-semibold">
                <span>訂購人資訊</span>
              </div>
              <div class="col-md-12 mb-3 orderItem_text">
                <!-- <label for="name" class="form-label">收件人姓名</label> -->
                <v-field
                  id="name"
                  name="訂購人姓名"
                  type="text"
                  class="form-control orderItem_text px-3"
                  placeholder="請輸入姓名"
                  rules="required"
                  v-model.trim="form.user.name"
                  :class="{ 'is-invalid': errors['訂購人姓名'] }"
                ></v-field>
                <ErrorMessage
                  name="訂購人姓名"
                  class="invalid-feedback ms-3"
                ></ErrorMessage>
              </div>

              <div class="row">
                <div class="col-md-6 mb-3 orderItem_text">
                  <!-- <label for="nation" class="form-label">地區</label> -->
                  <v-field
                    id="nation"
                    name="訂購人國家"
                    class="orderItem_text form-control form-select text-secondary px-3"
                    as="select"
                    rules="required"
                    v-model="form.user.nation"
                    :class="{ 'is-invalid': errors['訂購人國家'] }"
                  >
                    <!-- <option value="" disabled selected>請選擇國家</option> -->
                    <option value="台灣本島">台灣本島</option>
                    <option value="澎湖">澎湖</option>
                    <option value="金門">金門</option>
                    <option value="馬祖">馬祖</option>
                  </v-field>

                  <ErrorMessage
                    class="invalid-feedback ms-3"
                    name="訂購人國家"
                  ></ErrorMessage>
                </div>

                <div class="col-md-6 mb-3 orderItem_text">
                  <!-- <label for="tel" class="form-label">收件人電話</label> -->
                  <v-field
                    id="tel"
                    name="訂購人電話"
                    type="tel"
                    class="form-control orderItem_text px-3"
                    placeholder="請輸入手機號碼"
                    :rules="isPhone"
                    v-model.trim="form.user.tel"
                    :class="{ 'is-invalid': errors['訂購人電話'] }"
                  ></v-field>
                  <ErrorMessage
                    name="訂購人電話"
                    class="invalid-feedback ms-3"
                  ></ErrorMessage>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-3 orderItem_text">
                  <!-- <label for="city" class="form-label">縣市</label> -->
                  <v-field
                    id="city"
                    name="訂購人縣市"
                    class="orderItem_text form-control form-select text-secondary px-3"
                    as="select"
                    rules="required"
                    v-model="form.user.city"
                    :class="{ 'is-invalid': errors['訂購人縣市'] }"
                  >
                    <!-- <option value="" disabled selected>請選擇縣市</option> -->
                    <option value="台北市">台北市</option>
                    <option value="基隆市">基隆市</option>
                  </v-field>

                  <ErrorMessage
                    class="invalid-feedback ms-3"
                    name="訂購人縣市"
                  ></ErrorMessage>
                </div>

                <div
                  class="col-md-6 mb-3 orderItem_text"
                  v-if="form.user.city === '台北市'"
                >
                  <!-- <label for="tpeZipCode" class="form-label">地區</label> -->
                  <v-field
                    id="tpeZipCode"
                    name="訂購人地區"
                    class="orderItem_text form-control form-select text-secondary px-3 tpe-zipcode"
                    as="select"
                    rules="required"
                    v-model="form.user.area"
                    :class="{ 'is-invalid': errors['訂購人地區'] }"
                  >
                    <option value="請選擇地區" disabled selected>
                      請選擇地區
                    </option>
                    <option value="100 中正區">100 中正區</option>
                    <option value="103 大同區">103 大同區</option>
                    <option value="104 中山區">104 中山區</option>
                    <option value="105 松山區">105 松山區</option>
                    <option value="106 大安區">106 大安區</option>
                    <option value="108 萬華區">108 萬華區</option>
                    <option value="110 信義區">110 信義區</option>
                    <option value="111 士林區">111 士林區</option>
                    <option value="112 北投區">112 北投區</option>
                    <option value="114 內湖區">114 內湖區</option>
                    <option value="115 南港區">115 南港區</option>
                    <option value="116 文山區">116 文山區</option>
                  </v-field>

                  <ErrorMessage
                    class="invalid-feedback ms-3"
                    name="訂購人地區"
                  ></ErrorMessage>
                </div>

                <div
                  class="col-md-6 mb-3 orderItem_text"
                  v-if="form.user.city === '基隆市'"
                >
                  <!-- <label for="kelZipCode" class="form-label">地區</label> -->
                  <v-field
                    id="kelZipCode"
                    name="訂購人地區"
                    class="orderItem_text form-control form-select text-secondary px-3 kel-zipcode"
                    as="select"
                    rules="required"
                    v-model="form.user.area"
                    :class="{ 'is-invalid': errors['訂購人地區'] }"
                  >
                    <option value="請選擇地區" disabled selected>
                      請選擇地區
                    </option>
                    <option value="200 仁愛區">200 仁愛區</option>
                    <option value="201 信義區">201 信義區</option>
                    <option value="202 中正區">202 中正區</option>
                    <option value="203 中山區">203 中山區</option>
                    <option value="204 安樂區">204 安樂區</option>
                    <option value="205 暖暖區">205 暖暖區</option>
                    <option value="206 七堵區">206 七堵區</option>
                  </v-field>

                  <ErrorMessage
                    class="invalid-feedback ms-3"
                    name="訂購人地區"
                  ></ErrorMessage>
                </div>
              </div>

              <div class="col-md-12 mb-3 orderItem_text">
                <!-- <label for="address" class="form-label">收件人地址</label> -->
                <v-field
                  id="address"
                  name="訂購人地址"
                  type="text"
                  class="form-control orderItem_text px-3"
                  placeholder="請輸入地址"
                  rules="required"
                  v-model.trim="form.user.address"
                  :class="{ 'is-invalid': errors['訂購人地址'] }"
                >
                </v-field>
                <ErrorMessage
                  name="訂購人地址"
                  class="invalid-feedback ms-3"
                ></ErrorMessage>
              </div>

              <div class="col-md-12 mb-3 orderItem_text">
                <!-- <label for="email" class="form-label">Email</label> -->
                <v-field
                  id="email"
                  name="訂購人 E-mail"
                  type="email"
                  class="form-control px-3 orderItem_text"
                  placeholder="請輸入 E-mail"
                  rules="email|required"
                  v-model.trim="form.user.email"
                  :class="{ 'is-invalid': errors['訂購人 E-mail'] }"
                >
                </v-field>
                <ErrorMessage
                  name="訂購人 E-mail"
                  class="invalid-feedback ms-3"
                ></ErrorMessage>
              </div>
            </div>
            <!-- 訂購人資訊 end-->

            <!-- 收件人資訊 -->
            <div class="p-4 mb-3 bg-light" v-if="deliverMethod === '宅配'">
              <div class="px-2 orderItem_text row">
                <span class="fw-semibold col-md-8">收件人資訊</span>
                <div class="form-check col-md-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value="同購買人"
                    v-model="form.receiverInput"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    同購買人
                  </label>
                </div>
                <div class="form-check col-md-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="不同購買人"
                    v-model="form.receiverInput"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    不同購買人
                  </label>
                </div>
              </div>

              <!-- 收件人表單 -->
              <div
                class="receiverForm"
                v-if="form.receiverInput === '不同購買人'"
              >
                <div class="col-md-12 my-3 orderItem_text">
                  <!-- <label for="name" class="form-label">收件人姓名</label> -->
                  <v-field
                    id="receiverName"
                    name="收件人姓名"
                    type="text"
                    class="form-control orderItem_text px-3"
                    placeholder="請輸入姓名"
                    rules="required"
                    v-model.trim="form.receiverUser.receiverName"
                    :class="{ 'is-invalid': errors['收件人姓名'] }"
                  ></v-field>
                  <ErrorMessage
                    name="收件人姓名"
                    class="invalid-feedback ms-3"
                  ></ErrorMessage>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3 orderItem_text">
                    <!-- <label for="nation" class="form-label">地區</label> -->
                    <v-field
                      id="receiverNation"
                      name="收件人國家"
                      class="orderItem_text form-control form-select text-secondary px-3"
                      as="select"
                      rules="required"
                      v-model="form.receiverUser.receiverNation"
                      :class="{ 'is-invalid': errors['收件人國家'] }"
                    >
                      <!-- <option value="" disabled selected>請選擇國家</option> -->
                      <option value="台灣本島">台灣本島</option>
                      <option value="澎湖">澎湖</option>
                      <option value="金門">金門</option>
                      <option value="馬祖">馬祖</option>
                    </v-field>

                    <ErrorMessage
                      class="invalid-feedback ms-3"
                      name="收件人國家"
                    ></ErrorMessage>
                  </div>

                  <div class="col-md-6 mb-3 orderItem_text">
                    <!-- <label for="tel" class="form-label">收件人電話</label> -->
                    <v-field
                      id="receiverTel"
                      name="收件人電話"
                      type="tel"
                      class="form-control orderItem_text px-3"
                      placeholder="請輸入手機號碼"
                      :rules="isPhone"
                      v-model.trim="form.receiverUser.receiverTel"
                      :class="{ 'is-invalid': errors['收件人電話'] }"
                    ></v-field>
                    <ErrorMessage
                      name="收件人電話"
                      class="invalid-feedback ms-3"
                    ></ErrorMessage>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3 orderItem_text">
                    <!-- <label for="city" class="form-label">縣市</label> -->
                    <v-field
                      id="receiverCity"
                      name="收件人縣市"
                      class="orderItem_text form-control form-select text-secondary px-3"
                      as="select"
                      rules="required"
                      v-model="form.receiverUser.receiverCity"
                      :class="{ 'is-invalid': errors['收件人縣市'] }"
                    >
                      <!-- <option value="" disabled selected>請選擇縣市</option> -->
                      <option value="台北市">台北市</option>
                      <option value="基隆市">基隆市</option>
                    </v-field>

                    <ErrorMessage
                      class="invalid-feedback ms-3"
                      name="收件人縣市"
                    ></ErrorMessage>
                  </div>

                  <div
                    class="col-md-6 mb-3 orderItem_text"
                    v-if="form.receiverUser.receiverCity === '台北市'"
                  >
                    <!-- <label for="tpeZipCode" class="form-label">地區</label> -->
                    <v-field
                      id="receiverTpeZipCode"
                      name="收件人地區"
                      class="orderItem_text form-control form-select text-secondary px-3 tpe-zipcode"
                      as="select"
                      rules="required"
                      v-model="form.receiverUser.receiverArea"
                      :class="{ 'is-invalid': errors['收件人地區'] }"
                    >
                      <option value="請選擇地區" disabled selected>
                        請選擇地區
                      </option>
                      <option value="100 中正區">100 中正區</option>
                      <option value="103 大同區">103 大同區</option>
                      <option value="104 中山區">104 中山區</option>
                      <option value="105 松山區">105 松山區</option>
                      <option value="106 大安區">106 大安區</option>
                      <option value="108 萬華區">108 萬華區</option>
                      <option value="110 信義區">110 信義區</option>
                      <option value="111 士林區">111 士林區</option>
                      <option value="112 北投區">112 北投區</option>
                      <option value="114 內湖區">114 內湖區</option>
                      <option value="115 南港區">115 南港區</option>
                      <option value="116 文山區">116 文山區</option>
                    </v-field>

                    <ErrorMessage
                      class="invalid-feedback ms-3"
                      name="收件人地區"
                    ></ErrorMessage>
                  </div>

                  <div
                    class="col-md-6 mb-3 orderItem_text"
                    v-if="form.receiverUser.receiverCity === '基隆市'"
                  >
                    <!-- <label for="kelZipCode" class="form-label">地區</label> -->
                    <v-field
                      id="receiverKelZipCode"
                      name="收件人地區"
                      class="orderItem_text form-control form-select text-secondary px-3 kel-zipcode"
                      as="select"
                      rules="required"
                      v-model="form.receiverUser.receiverArea"
                      :class="{ 'is-invalid': errors['收件人地區'] }"
                    >
                      <option value="請選擇地區" disabled selected>
                        請選擇地區
                      </option>
                      <option value="200 仁愛區">200 仁愛區</option>
                      <option value="201 信義區">201 信義區</option>
                      <option value="202 中正區">202 中正區</option>
                      <option value="203 中山區">203 中山區</option>
                      <option value="204 安樂區">204 安樂區</option>
                      <option value="205 暖暖區">205 暖暖區</option>
                      <option value="206 七堵區">206 七堵區</option>
                    </v-field>

                    <ErrorMessage
                      class="invalid-feedback ms-3"
                      name="收件人地區"
                    ></ErrorMessage>
                  </div>
                </div>

                <div class="col-md-12 mb-3 orderItem_text">
                  <!-- <label for="address" class="form-label">收件人地址</label> -->
                  <v-field
                    id="receiverAddress"
                    name="收件人地址"
                    type="text"
                    class="form-control orderItem_text px-3"
                    placeholder="請輸入地址"
                    rules="required"
                    v-model.trim="form.receiverUser.receiverAddress"
                    :class="{ 'is-invalid': errors['收件人地址'] }"
                  >
                  </v-field>
                  <ErrorMessage
                    name="收件人地址"
                    class="invalid-feedback ms-3"
                  ></ErrorMessage>
                </div>

                <div class="col-md-12 mb-3 orderItem_text">
                  <!-- <label for="email" class="form-label">Email</label> -->
                  <v-field
                    id="receiverEmail"
                    name="收件人 E-mail"
                    type="email"
                    class="form-control px-3 orderItem_text"
                    placeholder="請輸入 E-mail"
                    rules="email|required"
                    v-model.trim="form.receiverUser.receiverEmail"
                    :class="{ 'is-invalid': errors['收件人 E-mail'] }"
                  >
                  </v-field>
                  <ErrorMessage
                    name="收件人 E-mail"
                    class="invalid-feedback ms-3"
                  ></ErrorMessage>
                </div>
              </div>
            </div>
            <!-- 收件人資訊 end -->

            <!-- 超商取貨收件人資訊 -->
            <div
              class="p-4 mb-3 bg-light"
              v-if="
                deliverMethod === '7-11超商取貨' ||
                deliverMethod === '全家超商取貨'
              "
            >
              <div class="px-2 orderItem_text row">
                <span class="fw-semibold col-md-12">收件人資訊</span>
              </div>

              <!-- 收件人表單 -->
              <div class="receiverForm">
                <div class="col-md-12 my-3 orderItem_text">
                  <!-- <label for="name" class="form-label">收件人姓名</label> -->
                  <v-field
                    id="receiverName"
                    name="收件人姓名"
                    type="text"
                    class="form-control orderItem_text px-3"
                    placeholder="請輸入姓名"
                    rules="required"
                    v-model="form.receiverShop.receiverShopName"
                    :class="{ 'is-invalid': errors['收件人姓名'] }"
                  ></v-field>
                  <ErrorMessage
                    name="收件人姓名"
                    class="invalid-feedback ms-3"
                  ></ErrorMessage>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3 orderItem_text">
                    <!-- <label for="nation" class="form-label">地區</label> -->
                    <v-field
                      id="receiverNation"
                      name="收件人國家"
                      class="orderItem_text form-control form-select text-secondary px-3"
                      as="select"
                      rules="required"
                      v-model="form.receiverShop.receiverShopNation"
                      :class="{ 'is-invalid': errors['收件人國家'] }"
                    >
                      <!-- <option value="" disabled selected>請選擇國家</option> -->
                      <option value="台灣本島">台灣本島</option>
                      <option value="澎湖">澎湖</option>
                      <option value="金門">金門</option>
                      <option value="馬祖">馬祖</option>
                    </v-field>

                    <ErrorMessage
                      class="invalid-feedback ms-3"
                      name="收件人國家"
                    ></ErrorMessage>
                  </div>

                  <div class="col-md-6 mb-3 orderItem_text">
                    <!-- <label for="tel" class="form-label">收件人電話</label> -->
                    <v-field
                      id="receiverTel"
                      name="收件人電話"
                      type="tel"
                      class="form-control orderItem_text px-3"
                      placeholder="請輸入電話"
                      :rules="isPhone"
                      v-model="form.receiverShop.receiverShopTel"
                      :class="{ 'is-invalid': errors['收件人電話'] }"
                    ></v-field>
                    <ErrorMessage
                      name="收件人電話"
                      class="invalid-feedback ms-3"
                    ></ErrorMessage>
                  </div>
                </div>
              </div>

              <div class="px-2 row">
                <span class="col-md-12"
                  >{{ location.name }} : {{ location.dress }}</span
                >
              </div>
            </div>
            <!-- 超商取貨收件人資訊 end -->

            <!-- 配送資訊 -->
            <div class="p-4 mb-5 bg-light">
              <div class="row px-2 mb-3 orderItem_text">
                <span class="fw-semibold col-md-8">配送資訊</span>
              </div>

              <!-- 配送表單 -->
              <div class="receiverForm">
                <div class="col-md-12 mb-4 orderItem_text">
                  <v-field
                    id="receiverNation"
                    name="配送時間"
                    class="orderItem_text form-control form-select text-secondary px-3"
                    as="select"
                    rules="required"
                    v-model="form.deliverInfo.deliverTime"
                    :class="{ 'is-invalid': errors['配送時間'] }"
                  >
                    <option value="不指定">不指定</option>
                    <option value="8~13時">8~13時</option>
                    <option value="14~18時">14~18時</option>
                  </v-field>

                  <ErrorMessage
                    class="invalid-feedback ms-3"
                    name="配送時間"
                  ></ErrorMessage>
                </div>

                <div class="col-md-12 mb-1 orderItem_text">
                  <v-field
                    id="receiverNation"
                    name="電子發票"
                    class="orderItem_text form-control form-select text-secondary px-3"
                    as="select"
                    rules="required"
                    v-model="form.deliverInfo.deliverTicket"
                    :class="{ 'is-invalid': errors['電子發票'] }"
                  >
                    <option value="電子發票">電子發票</option>
                    <option value="電子發票(手機載具)">
                      電子發票(手機載具)
                    </option>
                    <option value="捐贈發票">捐贈發票</option>
                  </v-field>

                  <ErrorMessage
                    class="invalid-feedback ms-3"
                    name="電子發票"
                  ></ErrorMessage>
                </div>

                <!-- 電子發票需填表格 -->
                <div v-if="form.deliverInfo.deliverTicket === '電子發票'">
                  <div class="row px-2 mb-3 deliverTicketLink">
                    <a class="col-md-12 ms-2 text-secondary">會員載具歸戶</a>
                  </div>

                  <div class="row px-2 mb-1 ticket_dress">
                    <span class="col-md-12 ms-2 text-secondary"
                      >中獎發票寄送地址</span
                    >
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-3 orderItem_text">
                      <v-field
                        id="receiverCity"
                        name="發票寄送縣市"
                        class="orderItem_text form-control form-select text-secondary px-3"
                        as="select"
                        rules="required"
                        v-model="form.deliverInfo.deliverCity"
                        :class="{ 'is-invalid': errors['發票寄送縣市'] }"
                      >
                        <option value="台北市">台北市</option>
                        <option value="基隆市">基隆市</option>
                      </v-field>

                      <ErrorMessage
                        class="invalid-feedback ms-3"
                        name="發票寄送縣市"
                      ></ErrorMessage>
                    </div>

                    <div
                      class="col-md-6 mb-3 orderItem_text"
                      v-if="form.deliverInfo.deliverCity === '台北市'"
                    >
                      <v-field
                        id="receiverTpeZipCode"
                        name="發票寄送地區"
                        class="orderItem_text form-control form-select text-secondary px-3 tpe-zipcode"
                        as="select"
                        rules="required"
                        v-model="form.deliverInfo.deliverArea"
                        :class="{ 'is-invalid': errors['發票寄送地區'] }"
                      >
                        <option value="請選擇地區" disabled selected>
                          請選擇地區
                        </option>
                        <option value="100 中正區">100 中正區</option>
                        <option value="103 大同區">103 大同區</option>
                        <option value="104 中山區">104 中山區</option>
                        <option value="105 松山區">105 松山區</option>
                        <option value="106 大安區">106 大安區</option>
                        <option value="108 萬華區">108 萬華區</option>
                        <option value="110 信義區">110 信義區</option>
                        <option value="111 士林區">111 士林區</option>
                        <option value="112 北投區">112 北投區</option>
                        <option value="114 內湖區">114 內湖區</option>
                        <option value="115 南港區">115 南港區</option>
                        <option value="116 文山區">116 文山區</option>
                      </v-field>

                      <ErrorMessage
                        class="invalid-feedback ms-3"
                        name="發票寄送地區"
                      ></ErrorMessage>
                    </div>

                    <div
                      class="col-md-6 mb-3 orderItem_text"
                      v-if="form.deliverInfo.deliverCity === '基隆市'"
                    >
                      <v-field
                        id="receiverKelZipCode"
                        name="發票寄送地區"
                        class="orderItem_text form-control form-select text-secondary px-3 kel-zipcode"
                        as="select"
                        rules="required"
                        v-model="form.deliverInfo.deliverArea"
                        :class="{ 'is-invalid': errors['發票寄送地區'] }"
                      >
                        <option value="請選擇地區" disabled selected>
                          請選擇地區
                        </option>
                        <option value="200 仁愛區">200 仁愛區</option>
                        <option value="201 信義區">201 信義區</option>
                        <option value="202 中正區">202 中正區</option>
                        <option value="203 中山區">203 中山區</option>
                        <option value="204 安樂區">204 安樂區</option>
                        <option value="205 暖暖區">205 暖暖區</option>
                        <option value="206 七堵區">206 七堵區</option>
                      </v-field>

                      <ErrorMessage
                        class="invalid-feedback ms-3"
                        name="發票寄送地區"
                      ></ErrorMessage>
                    </div>
                  </div>

                  <div class="col-md-12 mb-3 orderItem_text">
                    <v-field
                      id="receiverAddress"
                      name="發票寄送地址"
                      type="text"
                      class="form-control orderItem_text px-3"
                      placeholder="請輸入地址"
                      rules="required"
                      v-model="form.deliverInfo.deliverAddress"
                      :class="{ 'is-invalid': errors['發票寄送地址'] }"
                    >
                    </v-field>
                    <ErrorMessage
                      name="發票寄送地址"
                      class="invalid-feedback ms-3"
                    ></ErrorMessage>
                  </div>
                </div>

                <!-- 電子發票(手機載具)需填表格 -->
                <div
                  v-if="form.deliverInfo.deliverTicket === '電子發票(手機載具)'"
                >
                  <div
                    class="col-md-12 mb-3 mt-4 orderItem_text position-relative"
                  >
                    <span
                      class="position-absolute mobile_title text-secondary ms-2 px-2 bg-white"
                      >手機載具條碼</span
                    >
                    <v-field
                      id="receiverAddress"
                      name="手機載具條碼"
                      type="text"
                      class="form-control orderItem_text px-3"
                      rules="required"
                      v-model="form.deliverInfo.mobileCode"
                      :class="{ 'is-invalid': errors['手機載具條碼'] }"
                    >
                    </v-field>
                    <ErrorMessage
                      name="手機載具條碼"
                      class="invalid-feedback ms-3"
                    ></ErrorMessage>
                  </div>
                </div>

                <!-- 捐贈發票需填表格 -->
                <div v-if="form.deliverInfo.deliverTicket === '捐贈發票'">
                  <div
                    class="col-md-12 mb-3 mt-4 orderItem_text position-relative"
                  >
                    <span
                      class="position-absolute mobile_title text-secondary ms-2 px-2 bg-white"
                      >捐贈單位</span
                    >
                    <v-field
                      id="receiverNation"
                      name="電子發票捐贈單位"
                      class="orderItem_text form-control form-select text-secondary px-3"
                      as="select"
                      rules="required"
                      v-model="form.deliverInfo.invoiceDonate"
                      :class="{ 'is-invalid': errors['電子發票捐贈單位'] }"
                    >
                      <option value="財團法人創世社會福利基金會">
                        財團法人創世社會福利基金會
                      </option>
                      <option value="財團法人癌症關懷基金會">
                        財團法人癌症關懷基金會
                      </option>
                      <option value="財團法人台灣兒童暨家庭扶助基金會">
                        財團法人台灣兒童暨家庭扶助基金會
                      </option>
                      <option value="財團法人天主教失智老人社會福利基金會">
                        財團法人天主教失智老人社會福利基金會
                      </option>
                    </v-field>

                    <ErrorMessage
                      class="invalid-feedback ms-3"
                      name="電子發票捐贈單位"
                    ></ErrorMessage>
                  </div>
                </div>
              </div>
              <!-- 統一發票使用辦法規定 -->
              <div class="row px-2 mt-4 ticket_dress">
                <span class="col-md-12 text-secondary"
                  >※
                  依統一發票使用辦法規定：發票一經開立不得任意更改或改開發票。</span
                >
              </div>
            </div>
            <!-- 配送資訊  end -->

            <div class="p-4 mb-4 border border-secondary">
              <div class="row px-2 orderItem_text">
                <span class="col-md-12 text-secondary mb-1"
                  >※下單前請再次確認您的購買明細及配送資訊，訂單成立後無法異動訂單內容
                </span>
                <div class="form-check ms-2 ps-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    我同意接受
                    <span class="text-decoration-underline serve_deed"
                      >服務條款 </span
                    >和
                    <span class="text-decoration-underline serve_deed"
                      >隱私權政策</span
                    >
                  </label>
                </div>
              </div>
            </div>

            <!-- 最下方按鈕 -->
            <div class="mb-3">
              <div class="row justify-content-center">
                <div
                  class="col-md-4 d-flex justify-content-center"
                  @click="checkStepOne"
                >
                  <button class="btn btn-outline-secondary btn-sm p-2 px-4">
                    <i class="bi bi-arrow-left"></i> 修改付款方式
                  </button>
                </div>
                <div class="col-md-4 d-flex justify-content-center">
                  <button class="btn btn-secondary btn-sm p-2 px-5">
                    完成訂購
                  </button>
                </div>
              </div>
            </div>
            <!-- 最下方按鈕 end -->
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/user/UserNavBar.vue'

export default {
  components: { NavBar },
  data() {
    return {
      cart: {},
      total: 0,
      paymentMethod: '', // 付費方式
      deliverMethod: '', // 運送方式
      location: {}, // 門市
      shippingFee: 80, // 預設運費
      finalPayTotal: '', // 最後應付金額
      // form表單資料
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
          nation: '台灣本島',
          city: '台北市',
          area: '請選擇地區'
        },
        receiverUser: {
          receiverName: '',
          receiverEmail: '',
          receiverTel: '',
          receiverAddress: '',
          receiverNation: '台灣本島',
          receiverCity: '台北市',
          receiverArea: '請選擇地區'
        },
        receiverShop: {
          receiverShopName: '',
          receiverShopNation: '台灣本島',
          receiverShopTel: ''
        },
        deliverInfo: {
          deliverTime: '不指定',
          deliverTicket: '電子發票',
          deliverCity: '台北市',
          deliverArea: '請選擇地區',
          deliverAddress: '',
          mobileCode: '',
          invoiceDonate: '財團法人創世社會福利基金會'
        },
        receiverInput: ''
      }
    }
  },
  watch: {
    total() {
      if (this.total >= 1000) {
        this.shippingFee = 0
        this.finalPayTotal = this.total
      }
      this.finalPayTotal = this.total + this.shippingFee
    }
  },
  methods: {
    // 取得購物車列表
    getCheckOut() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.cart = res.data.data
            this.total = this.cart.total
            // 判斷運費的計算
            if (this.total < 1000) {
              this.shippingFee = 80
            }
            this.deliverMethod = this.cart.carts[0].deliverMethod
            this.paymentMethod = this.cart.carts[0].paymentMethod
            this.location = this.cart.carts[0].location
          }
          console.log(this.cart)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    // 購物車訂單資料收合功能
    toggleOrder() {
      const orderOpen = document.querySelector('.order_open')
      // console.dir(orderOpen.className)
      if (
        orderOpen.className.baseVal ===
        'svg-inline--fa fa-angle-down icons icons-arrow ms-auto order_open'
      ) {
        orderOpen.classList.toggle('order_close')
      } else {
        orderOpen.classList.toggle('order_close')
      }
    },

    // 轉跳CheckOut第一步驟
    checkStepOne() {
      this.deliverMethod = ''
      this.paymentMethod = ''
      this.location = {}
      this.$router.push('/checkout')
    },
    // 完成訂單
    createOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http
        .post(url, { data: order })
        .then((res) => {
          console.log(res)
          // this.form.user.name = ''
          // this.form.user.email = ''
          // this.form.user.tel = ''
          // this.form.user.address = ''
          // this.form.user.nation = '台灣本島'
          // this.form.user.city = '台北市'
          // this.form.user.area = '請選擇地區'
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    // 設定手機電話的限制
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '請輸入正確的手機號碼'
    },
    onSubmit(values, { resetForm }) {
      console.log(values) // 送給 API 的資料值
      resetForm() // 把表單重置成預設值
    }
  },

  created() {
    this.getCheckOut()
  }
}
</script>

<style lang="scss">
.icons-arrow {
  transition: 0.4s;
  font-size: 0.9rem;
  cursor: pointer;
}
.order_open {
  transform: rotate(0deg);
}
.order_close {
  transform: rotate(-180deg);
}
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
}
.mobile_title {
  font-size: 0.7rem;
  position: absolute;
  top: -10px;
}
.serve_deed {
  cursor: pointer;
}
</style>
