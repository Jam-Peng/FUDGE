<template>
  <div class="container mt-4">
    <div class="">
      <!-- Check out步驟 -->
      <!-- 桌機、平板 -->
      <div class="row mb-2 d-none d-md-block d-lg-block">
        <ul class="d-flex justify-content-evenly px-0">
          <li
            class="col-lg-3 bg-light d-flex justify-content-star align-items-center rounded py-2"
          >
            <div class="d-flex align-self-center fs-2 fw-semibold ps-2">01</div>
            <div class="d-flex flex-column px-3">
              <span class="step_text">確認清單及付款方式</span>
              <span class="step_text">Check & Payment </span>
            </div>
          </li>

          <li
            class="col-lg-3 bg-warning d-flex justify-content-star align-items-center rounded py-2"
          >
            <div class="d-flex align-self-center fs-2 fw-semibold ps-2">02</div>
            <div class="d-flex flex-column px-3">
              <span class="step_text">填寫訂購資料</span>
              <span class="step_text">Shipping info </span>
            </div>
          </li>

          <li
            class="col-lg-3 bg-light d-flex justify-content-star align-items-center rounded"
          >
            <div class="d-flex align-self-center fs-2 fw-semibold ps-2">03</div>
            <div class="d-flex flex-column step_text px-3">
              <span>完成購物</span>
              <span>Order completed</span>
            </div>
          </li>
        </ul>
      </div>
      <!-- 手機顯示 -->
      <div class="row mb-2 d-block d-sm-none">
        <ul class="d-flex justify-content-center px-0">
          <li
            class="col-9 bg-warning d-flex justify-content-star align-items-center rounded py-2"
          >
            <div class="d-flex align-self-center fs-2 fw-semibold ps-2">02</div>
            <div class="d-flex flex-column px-3">
              <span class="step_text">填寫訂購資料</span>
              <span class="step_text">Shipping info </span>
            </div>
          </li>
        </ul>
      </div>

      <div class="row justify-content-center">
        <!-- 購物車訂單列表 -->
        <div class="col-10 col-lg-8 col-md-12 mb-3 bg-light">
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
                  <div class="col-md-6 text-end mb-1">
                    <span class="me-2 step_text">查看訂單資料</span>
                    <font-awesome-icon
                      class="icons icons-arrow order_open"
                      :icon="['fas', 'angle-down']"
                    />
                  </div>
                </div>
              </div>

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
                      <!-- 桌機、平板 -->
                      <div class="col-md-6 d-none d-md-block d-lg-block">
                        <span class="me-2">{{ item.product.title }}</span>
                        <span class="text-secondary">{{ item.size }}</span>
                      </div>
                      <!-- 手機顯示 -->
                      <div class="col-md-6 ms-2 d-block d-sm-none">
                        <span class="me-3">{{ item.product.title }}</span>
                        <span class="text-secondary">{{ item.size }}</span>
                      </div>

                      <!-- 桌機、平板 -->
                      <span
                        class="col-md-6 text-end d-none d-md-block d-lg-block"
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
                      >折扣小計 NT.{{
                        $filters.currency(item.final_total)
                      }}</span
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
                      >折扣小計 NT.{{
                        $filters.currency(item.final_total)
                      }}</span
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
              </div>
            </div>
          </div>
        </div>

        <!-- 下方表單-->
        <div class="col-10 col-lg-8 col-md-12 mb-4">
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
                  @click="sendData"
                ></v-field>
                <ErrorMessage
                  name="訂購人姓名"
                  class="invalid-feedback ms-3"
                ></ErrorMessage>
              </div>

              <div class="row">
                <div class="col-md-6 mb-3 orderItem_text">
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
                    v-model="form.user.receiverInput"
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
                    v-model="form.user.receiverInput"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    不同購買人
                  </label>
                </div>
              </div>

              <!-- 收件人表單 -->
              <div
                class="receiverForm"
                v-if="form.user.receiverInput === '不同購買人'"
              >
                <div class="col-md-12 my-3 orderItem_text">
                  <v-field
                    id="receiverName"
                    name="收件人姓名"
                    type="text"
                    class="form-control orderItem_text px-3"
                    placeholder="請輸入姓名"
                    rules="required"
                    v-model.trim="form.user.receiverName"
                    :class="{ 'is-invalid': errors['收件人姓名'] }"
                  ></v-field>
                  <ErrorMessage
                    name="收件人姓名"
                    class="invalid-feedback ms-3"
                  ></ErrorMessage>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3 orderItem_text">
                    <v-field
                      id="receiverNation"
                      name="收件人國家"
                      class="orderItem_text form-control form-select text-secondary px-3"
                      as="select"
                      rules="required"
                      v-model="form.user.receiverNation"
                      :class="{ 'is-invalid': errors['收件人國家'] }"
                    >
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
                    <v-field
                      id="receiverTel"
                      name="收件人電話"
                      type="tel"
                      class="form-control orderItem_text px-3"
                      placeholder="請輸入手機號碼"
                      :rules="isPhone"
                      v-model.trim="form.user.receiverTel"
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
                    <v-field
                      id="receiverCity"
                      name="收件人縣市"
                      class="orderItem_text form-control form-select text-secondary px-3"
                      as="select"
                      rules="required"
                      v-model="form.user.receiverCity"
                      :class="{ 'is-invalid': errors['收件人縣市'] }"
                    >
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
                    v-if="form.user.receiverCity === '台北市'"
                  >
                    <v-field
                      id="receiverTpeZipCode"
                      name="收件人地區"
                      class="orderItem_text form-control form-select text-secondary px-3 tpe-zipcode"
                      as="select"
                      rules="required"
                      v-model="form.user.receiverArea"
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
                    v-if="form.user.receiverCity === '基隆市'"
                  >
                    <v-field
                      id="receiverKelZipCode"
                      name="收件人地區"
                      class="orderItem_text form-control form-select text-secondary px-3 kel-zipcode"
                      as="select"
                      rules="required"
                      v-model="form.user.receiverArea"
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
                  <v-field
                    id="receiverAddress"
                    name="收件人地址"
                    type="text"
                    class="form-control orderItem_text px-3"
                    placeholder="請輸入地址"
                    rules="required"
                    v-model.trim="form.user.receiverAddress"
                    :class="{ 'is-invalid': errors['收件人地址'] }"
                  >
                  </v-field>
                  <ErrorMessage
                    name="收件人地址"
                    class="invalid-feedback ms-3"
                  ></ErrorMessage>
                </div>

                <div class="col-md-12 mb-3 orderItem_text">
                  <v-field
                    id="receiverEmail"
                    name="收件人 E-mail"
                    type="email"
                    class="form-control px-3 orderItem_text"
                    placeholder="請輸入 E-mail"
                    rules="email|required"
                    v-model.trim="form.user.receiverEmail"
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
                  <v-field
                    id="receiverName"
                    name="收件人姓名"
                    type="text"
                    class="form-control orderItem_text px-3"
                    placeholder="請輸入姓名"
                    rules="required"
                    v-model="form.user.receiverShopName"
                    :class="{ 'is-invalid': errors['收件人姓名'] }"
                  ></v-field>
                  <ErrorMessage
                    name="收件人姓名"
                    class="invalid-feedback ms-3"
                  ></ErrorMessage>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3 orderItem_text">
                    <v-field
                      id="receiverNation"
                      name="收件人國家"
                      class="orderItem_text form-control form-select text-secondary px-3"
                      as="select"
                      rules="required"
                      v-model="form.user.receiverShopNation"
                      :class="{ 'is-invalid': errors['收件人國家'] }"
                    >
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
                    <v-field
                      id="receiverTel"
                      name="收件人電話"
                      type="tel"
                      class="form-control orderItem_text px-3"
                      placeholder="請輸入電話"
                      :rules="isPhone"
                      v-model="form.user.receiverShopTel"
                      :class="{ 'is-invalid': errors['收件人電話'] }"
                    ></v-field>
                    <ErrorMessage
                      name="收件人電話"
                      class="invalid-feedback ms-3"
                    ></ErrorMessage>
                  </div>
                </div>
              </div>

              <div class="px-2 row orderItem_text">
                <div class="col-md-12 d-flex align-item-center">
                  <span class="me-3"
                    ><i class="bi bi-geo-fill fs-5"></i> 門市資訊：
                    {{ location.name }} - {{ location.dress }}
                  </span>
                  <button
                    class="btn btn-warning btn-sm"
                    :disabled="isFull"
                    @click="sendLocation"
                  >
                    確認門市
                  </button>
                </div>
              </div>
            </div>

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
                    v-model="form.user.deliverTime"
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
                    v-model="form.user.deliverTicket"
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
                <div v-if="form.user.deliverTicket === '電子發票'">
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
                        v-model="form.user.deliverCity"
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
                      v-if="form.user.deliverCity === '台北市'"
                    >
                      <v-field
                        id="receiverTpeZipCode"
                        name="發票寄送地區"
                        class="orderItem_text form-control form-select text-secondary px-3 tpe-zipcode"
                        as="select"
                        rules="required"
                        v-model="form.user.deliverArea"
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
                      v-if="form.user.deliverCity === '基隆市'"
                    >
                      <v-field
                        id="receiverKelZipCode"
                        name="發票寄送地區"
                        class="orderItem_text form-control form-select text-secondary px-3 kel-zipcode"
                        as="select"
                        rules="required"
                        v-model="form.user.deliverArea"
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
                      v-model="form.user.deliverAddress"
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
                <div v-if="form.user.deliverTicket === '電子發票(手機載具)'">
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
                      maxlength="8"
                      class="form-control orderItem_text px-3"
                      rules="required"
                      v-model="form.user.mobileCode"
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
                <div v-if="form.user.deliverTicket === '捐贈發票'">
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
                      v-model="form.user.invoiceDonate"
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

            <!-- 服務條款和隱私權政策 -->
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
            <!-- 桌機、平板 -->
            <div class="mb-3 d-none d-md-block d-lg-block">
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
            <!-- 手機顯示 -->
            <div class="mb-3 d-block d-sm-none">
              <div class="row justify-content-center">
                <div
                  class="col-6 d-flex justify-content-center"
                  @click="checkStepOne"
                >
                  <button class="btn btn-outline-secondary btn-sm p-1 px-3">
                    <i class="bi bi-arrow-left"></i> 修改付款
                  </button>
                </div>
                <div class="col-6 d-flex justify-content-center">
                  <button class="btn btn-secondary btn-sm p-2 px-4">
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
  <Footer />
  <NolocationModal
    ref="nolocationModal"
    :location="location"
    @confirmLocation="sendLocation"
  />
</template>

<script>
import NolocationModal from '@/components/user/NoLocationModal.vue'
import Footer from '@/components/user/UserFooter.vue'
import statusStore from '@/stores/statusStores'
import { mapActions } from 'pinia'

export default {
  components: { NolocationModal, Footer },
  inject: ['emitter'],
  data() {
    return {
      isFull: false,
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
          area: '請選擇地區',
          receiverInput: '同購買人', // 收件人是否同購買人
          receiverName: '', // 收件人資訊
          receiverEmail: '',
          receiverTel: '',
          receiverAddress: '',
          receiverNation: '台灣本島',
          receiverCity: '台北市',
          receiverArea: '請選擇地區',
          receiverShopName: '', // 超商取貨收件人
          receiverShopNation: '台灣本島',
          receiverShopTel: '',
          deliverTime: '不指定', // 配送資訊
          deliverTicket: '電子發票',
          deliverCity: '台北市',
          deliverArea: '請選擇地區',
          deliverAddress: '',
          mobileCode: '',
          invoiceDonate: '財團法人創世社會福利基金會',
          clientLocation: {}, // 門市資訊
          userPayMethod: '', // 付費方式
          userdeliverMethod: '', // 運送方式
          originalTotal: '' // 商品原價總額(因為step3訂單資料無法從API取得)
        }
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
    ...mapActions(statusStore, ['pushMessage']),
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
          // console.log(this.cart)
        })
        .catch(() => {
          this.pushMessage(false, '讀取', '發生錯誤，請重新整理頁面再試一次')
        })
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
      // 先判斷確認門市按鈕是否被執行
      if (this.isFull !== true) {
        this.$refs.nolocationModal.showModel()
      } else {
        this.$http
          .post(url, { data: order })
          .then((res) => {
            // console.log(res)
            if (res.data.success) {
              this.$router.push(`/checkout/${res.data.orderId}`)
              this.emitter.emit('delete-cart')
            }
          })
          .catch(() => {
            this.pushMessage(false, '載入', '發生錯誤，請重新整理頁面')
          })
      }
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
    // 設定手機電話的限制
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '請輸入正確的手機號碼'
    },
    // 經由訂購人觸發資料傳遞到from
    sendData() {
      if (this.isFull === true) {
        this.isFull = true
      } else if (this.deliverMethod !== '宅配') {
        this.isFull = false
      } else {
        this.isFull = !this.isFull
        this.form.user.clientLocation = this.location
        this.form.user.originalTotal = this.total // 取得商品原價總額
        this.form.user.userPayMethod = this.paymentMethod
        this.form.user.userdeliverMethod = this.deliverMethod
      }
    },
    // 經由門市確認按鈕觸發資料傳遞到from
    sendLocation() {
      this.isFull = !this.isFull
      this.form.user.clientLocation = this.location
      this.form.user.originalTotal = this.total // 取得商品原價總額
      this.form.user.userPayMethod = this.paymentMethod
      this.form.user.userdeliverMethod = this.deliverMethod
      this.$refs.nolocationModal.hideModal()
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
  cursor: default;
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
