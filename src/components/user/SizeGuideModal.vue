<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <!-- 桌機 -->
    <div
      class="modal-dialog modal-lg p-2 d-none d-lg-block d-xl-block"
      role="document"
    >
      <div class="modal-content border-0 p-4">
        <div class="row modal_header position-relative">
          <button
            type="button"
            class="btn btn-outline-danger d-flex justify-content-center align-items-center sizeClose_Modal"
            @click="hideModal"
          >
            <i class="bi bi-x-lg"></i>
          </button>
        </div>

        <div class="modal-body px-0">
          <div class="sizeModal_title">
            <div
              class="row d-flex justify-content-start align-items-center mb-2"
            >
              <span class="">SIZE GUIDE</span>
            </div>
          </div>

          <!-- 下方 collapse -->
          <div class="productsSize_container">
            <!--================ 尺寸指南 =================-->
            <div class="border-bottom border-muted" @click="toggleSizeChart">
              <div
                class="d-flex align-items-center"
                data-bs-toggle="collapse"
                data-bs-target="#sizeGuideChart"
                aria-expanded="true"
                aria-controls="sizeGuideChart"
              >
                <i class="bi bi-plus size_plus"></i>
                <i class="bi bi-dash size_dash"></i>

                <span class="sizeGuide_title my-2 ms-1">
                  Size Chart 產品尺寸</span
                >
              </div>

              <div
                class="accordion-collapse collapse show pb-2"
                id="sizeGuideChart"
                data-bs-parent="#accordionSizeExample"
              >
                <div class="">
                  <!-- 上衣尺寸指南 -->
                  <div class="row px-3" v-if="product.category === '上身類'">
                    <table
                      class="table mt-2 align-middle table-bordered sizeGuide_contain"
                    >
                      <tbody>
                        <tr>
                          <td class="text-center">尺碼</td>
                          <td class="text-center">肩寬</td>
                          <td class="text-center">胸寬</td>
                          <td class="text-center">下擺寬</td>
                          <td class="text-center">衣長</td>
                          <td class="text-center">袖長</td>
                          <td class="text-center">袖口寬</td>
                          <td class="text-center">重量</td>
                          <td class="text-center" rowspan="4">
                            <img
                              :src="sizeGuideImage"
                              alt=""
                              width="142"
                              height="186"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="text-center"
                            v-for="(item, index) in clotheSGuide"
                            :key="index"
                          >
                            {{ item }}
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="text-center"
                            v-for="(item, index) in clotheMGuide"
                            :key="index"
                          >
                            {{ item }}
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="text-center"
                            v-for="(item, index) in clotheLGuide"
                            :key="index"
                          >
                            {{ item }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- 下半身尺寸指南 -->
                  <div class="row px-3" v-if="product.category === '下身類'">
                    <table
                      class="table mt-2 align-middle table-bordered sizeGuide_contain"
                    >
                      <tbody>
                        <tr>
                          <td class="text-center">尺碼</td>
                          <td class="text-center">腰圍</td>
                          <td class="text-center">臀圍</td>
                          <td class="text-center">前褲檔</td>
                          <td class="text-center">後褲檔</td>
                          <td class="text-center">褲長</td>
                          <td class="text-center">褲口寬</td>
                          <td class="text-center">重量</td>
                          <td class="text-center" rowspan="4">
                            <img
                              :src="sizeGuideImage"
                              alt=""
                              width="142"
                              height="186"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="text-center"
                            v-for="(item, index) in clotheSGuide"
                            :key="index"
                          >
                            {{ item }}
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="text-center"
                            v-for="(item, index) in clotheMGuide"
                            :key="index"
                          >
                            {{ item }}
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="text-center"
                            v-for="(item, index) in clotheLGuide"
                            :key="index"
                          >
                            {{ item }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- 包包尺寸指南 -->
                  <div class="row px-3" v-if="product.category === '包包'">
                    <table
                      class="table mt-2 align-middle table-bordered sizeGuide_contain"
                    >
                      <tbody>
                        <tr>
                          <td class="text-center">尺碼</td>
                          <td class="text-center">高度</td>
                          <td class="text-center">寬度</td>
                          <td class="text-center">底寬厚度</td>
                          <td class="text-center">背帶總長</td>
                          <td class="text-center">背帶寬度</td>
                          <td class="text-center">重量</td>

                          <td
                            class="text-center"
                            rowspan="4"
                            v-if="sizeGuideImage !== ''"
                          >
                            <img
                              :src="sizeGuideImage"
                              alt=""
                              width="142"
                              height="186"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="text-center"
                            v-for="(item, index) in clotheSGuide"
                            :key="index"
                          >
                            {{ item }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- 帽子尺寸指南 -->
                  <div class="row px-3" v-if="product.category === '帽子'">
                    <table
                      class="table mt-2 align-middle table-bordered sizeGuide_contain"
                    >
                      <tbody>
                        <tr>
                          <td class="text-center">尺碼</td>
                          <td class="text-center">頭圍</td>
                          <td class="text-center">帽簷長</td>
                          <td class="text-center">高度</td>
                          <td class="text-center">寬度</td>
                          <td class="text-center">長度</td>
                          <td class="text-center">重量</td>

                          <td
                            class="text-center"
                            rowspan="4"
                            v-if="sizeGuideImage !== ''"
                          >
                            <img
                              :src="sizeGuideImage"
                              alt=""
                              width="142"
                              height="186"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="text-center"
                            v-for="(item, index) in clotheSGuide"
                            :key="index"
                          >
                            {{ item }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- 鞋子尺寸指南 -->
                  <div class="row px-3" v-if="product.category === '鞋子'">
                    <table
                      class="table mt-2 align-middle table-bordered sizeGuide_contain"
                    >
                      <tbody>
                        <tr>
                          <td class="text-center">尺碼</td>
                          <td class="text-center" colspan="5">尺寸</td>
                        </tr>
                        <tr>
                          <td
                            class="text-center"
                            v-for="(item, index) in clotheSGuide"
                            :key="index"
                          >
                            {{ item }}
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="text-center"
                            v-for="(item, index) in clotheMGuide"
                            :key="index"
                          >
                            {{ item }}
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="text-center"
                            v-for="(item, index) in clotheLGuide"
                            :key="index"
                          >
                            {{ item }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <!-- 上身、下身尺寸描述 -->
                  <div
                    class="row sizeGuide_contain px-2"
                    v-if="
                      product.category === '上身類' ||
                      product.category === '下身類'
                    "
                  >
                    <span class="col-sm-12"
                      >※本尺寸表皆為水平測量，會因布料彈性、水洗處理、測量起訖點等因素，</span
                    >
                    <span class="col-sm-12 py-1"
                      >與實際商品尺寸略有誤差，誤差尺寸±2cm，</span
                    >
                    <span class="col-sm-12"
                      >在國際驗貨標準範圍都是屬於可接受範圍，並不屬於瑕疵。</span
                    >
                  </div>
                  <!-- 包包、帽子、鞋子尺寸描述 -->
                  <div
                    class="row sizeGuide_contain px-2"
                    v-if="
                      product.category === '包包' ||
                      product.category === '帽子' ||
                      product.category === '鞋子'
                    "
                  >
                    <span class="col-sm-12"
                      >手工測量會有些許誤差，實際長度以實物為準</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!--================ 試穿報告 =================-->
            <div class="border-bottom border-muted" @click="toggleFitting">
              <div
                class="d-flex align-items-center"
                data-bs-toggle="collapse"
                data-bs-target="#FittingReport"
                aria-expanded="false"
                aria-controls="FittingReport"
              >
                <i class="bi bi-plus fitting_plus"></i>
                <i class="bi bi-dash fitting_dash"></i>

                <span class="sizeGuide_title my-2 ms-1"
                  >Fitting Report 試穿報告</span
                >
              </div>

              <div
                class="accordion-collapse collapse pb-2"
                id="FittingReport"
                data-bs-parent="#accordionSizeExample"
              >
                <div class="">
                  <div class="row px-3">
                    <table
                      class="table mt-0 align-middle table-bordered sizeGuide_contain"
                    >
                      <div class="sizeGuide_contain col-sm-12 text-end">
                        測量單位：公分(cm)
                      </div>
                      <tbody>
                        <tr>
                          <td class="text-center">試穿人員</td>
                          <td class="text-center">身高</td>
                          <td class="text-center">體重</td>
                          <td class="text-center">身型</td>
                          <td class="text-center">肩寬</td>
                          <td class="text-center">上胸圍</td>
                          <td class="text-center">下胸圍</td>
                          <td class="text-center">腰圍</td>
                          <td class="text-center">下腰圍</td>
                          <td class="text-center">臀圍</td>
                          <td class="text-center">內衣罩杯</td>
                          <td class="text-center">建議尺寸</td>
                        </tr>
                        <tr>
                          <td class="text-center">A</td>
                          <td class="text-center">156</td>
                          <td class="text-center">44</td>
                          <td class="text-center">
                            <div>纖細身材</div>
                            <div>體型扁身</div>
                          </td>
                          <td class="text-center">34</td>
                          <td class="text-center">80</td>
                          <td class="text-center">67</td>
                          <td class="text-center">62</td>
                          <td class="text-center">72</td>
                          <td class="text-center">84</td>
                          <td class="text-center">70B</td>
                          <td class="text-center">S</td>
                        </tr>
                        <tr>
                          <td class="text-center">B</td>
                          <td class="text-center">160</td>
                          <td class="text-center">62</td>
                          <td class="text-center">
                            <div>體型結實</div>
                            <div>臀圍較大</div>
                            <div>大腿略粗</div>
                          </td>
                          <td class="text-center">36.5</td>
                          <td class="text-center">89</td>
                          <td class="text-center">74</td>
                          <td class="text-center">69</td>
                          <td class="text-center">84</td>
                          <td class="text-center">98</td>
                          <td class="text-center">75C</td>
                          <td class="text-center">L</td>
                        </tr>
                        <tr>
                          <td class="text-center">C</td>
                          <td class="text-center">163</td>
                          <td class="text-center">58</td>
                          <td class="text-center">
                            <div>上身略扁身</div>
                            <div>下身較圓潤</div>
                          </td>
                          <td class="text-center">35.5</td>
                          <td class="text-center">87</td>
                          <td class="text-center">74</td>
                          <td class="text-center">71</td>
                          <td class="text-center">88</td>
                          <td class="text-center">98</td>
                          <td class="text-center">75B</td>
                          <td class="text-center">M</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="row sizeGuide_contain px-2">
                    <span class="col-sm-12"
                      >每個人身高體重和商品尺寸不盡相同，身高155cm豐腴與180cm纖細的女孩有可能選擇同樣尺寸的商品</span
                    >
                    <span class="col-sm-12 py-1"
                      >胸圍尺寸的大小會影響選擇尺寸的關鍵，建議您可以參考試穿人員的胸圍做商品購買的選擇</span
                    >
                    <span class="col-sm-12"
                      >如果肩膀是屬於較寬的人，建議先參考商品的胸圍尺寸後再對照肩寬的尺寸測量</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 平板、手機 -->
    <div
      class="modal-dialog modal-fullscreen p-2 d-block d-sm-block d-md-block d-lg-none"
      role="document"
    >
      <div class="modal-content border-0 p-4">
        <div class="row modal_header position-relative">
          <button
            type="button"
            class="btn btn-outline-danger d-flex justify-content-center align-items-center sizeClose_Modal"
            @click="hideModal"
          >
            <i class="bi bi-x-lg"></i>
          </button>
        </div>

        <div class="modal-body px-0">
          <div class="sizeModal_title">
            <div
              class="row d-flex justify-content-start align-items-center mb-2"
            >
              <span class="">SIZE GUIDE</span>
            </div>
          </div>

          <!-- 下方 collapse -->
          <div class="productsSize_container">
            <!--================ 尺寸指南 =================-->
            <div class="border-bottom border-muted" @click="toggleSizeChart">
              <div
                class="d-flex align-items-center"
                data-bs-toggle="collapse"
                data-bs-target="#sizeGuideChart"
                aria-expanded="true"
                aria-controls="sizeGuideChart"
              >
                <i class="bi bi-plus size_plus"></i>
                <i class="bi bi-dash size_dash"></i>

                <span class="sizeGuide_title my-2 ms-1">
                  Size Chart 產品尺寸</span
                >
              </div>

              <div
                class="accordion-collapse collapse show pb-2"
                id="sizeGuideChart"
                data-bs-parent="#accordionSizeExample"
              >
                <div class="">
                  <!-- 上衣尺寸指南 -->
                  <div class="row px-3" v-if="product.category === '上身類'">
                    <table
                      class="table mt-2 align-middle table-bordered sizeGuide_contain"
                    >
                      <tbody>
                        <tr>
                          <td class="text-center">尺碼</td>
                          <td class="text-center">肩寬</td>
                          <td class="text-center">胸寬</td>
                          <td class="text-center">下擺寬</td>
                          <td class="text-center">衣長</td>
                          <td class="text-center">袖長</td>
                          <td class="text-center">袖口寬</td>
                          <td class="text-center">重量</td>
                          <td class="text-center" rowspan="4">
                            <img
                              :src="sizeGuideImage"
                              alt=""
                              width="142"
                              height="186"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="text-center"
                            v-for="(item, index) in clotheSGuide"
                            :key="index"
                          >
                            {{ item }}
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="text-center"
                            v-for="(item, index) in clotheMGuide"
                            :key="index"
                          >
                            {{ item }}
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="text-center"
                            v-for="(item, index) in clotheLGuide"
                            :key="index"
                          >
                            {{ item }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- 下半身尺寸指南 -->
                  <div class="row px-3" v-if="product.category === '下身類'">
                    <table
                      class="table mt-2 align-middle table-bordered sizeGuide_contain"
                    >
                      <tbody>
                        <tr>
                          <td class="text-center">尺碼</td>
                          <td class="text-center">腰圍</td>
                          <td class="text-center">臀圍</td>
                          <td class="text-center">前褲檔</td>
                          <td class="text-center">後褲檔</td>
                          <td class="text-center">褲長</td>
                          <td class="text-center">褲口寬</td>
                          <td class="text-center">重量</td>
                          <td class="text-center" rowspan="4">
                            <img
                              :src="sizeGuideImage"
                              alt=""
                              width="142"
                              height="186"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="text-center"
                            v-for="(item, index) in clotheSGuide"
                            :key="index"
                          >
                            {{ item }}
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="text-center"
                            v-for="(item, index) in clotheMGuide"
                            :key="index"
                          >
                            {{ item }}
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="text-center"
                            v-for="(item, index) in clotheLGuide"
                            :key="index"
                          >
                            {{ item }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- 包包尺寸指南 -->
                  <div class="row px-3" v-if="product.category === '包包'">
                    <table
                      class="table mt-2 align-middle table-bordered sizeGuide_contain"
                    >
                      <tbody>
                        <tr>
                          <td class="text-center">尺碼</td>
                          <td class="text-center">高度</td>
                          <td class="text-center">寬度</td>
                          <td class="text-center">底寬厚度</td>
                          <td class="text-center">背帶總長</td>
                          <td class="text-center">背帶寬度</td>
                          <td class="text-center">重量</td>

                          <td
                            class="text-center"
                            rowspan="4"
                            v-if="sizeGuideImage !== ''"
                          >
                            <img
                              :src="sizeGuideImage"
                              alt=""
                              width="142"
                              height="186"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="text-center"
                            v-for="(item, index) in clotheSGuide"
                            :key="index"
                          >
                            {{ item }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- 帽子尺寸指南 -->
                  <div class="row px-3" v-if="product.category === '帽子'">
                    <table
                      class="table mt-2 align-middle table-bordered sizeGuide_contain"
                    >
                      <tbody>
                        <tr>
                          <td class="text-center">尺碼</td>
                          <td class="text-center">頭圍</td>
                          <td class="text-center">帽簷長</td>
                          <td class="text-center">高度</td>
                          <td class="text-center">寬度</td>
                          <td class="text-center">長度</td>
                          <td class="text-center">重量</td>

                          <td
                            class="text-center"
                            rowspan="4"
                            v-if="sizeGuideImage !== ''"
                          >
                            <img
                              :src="sizeGuideImage"
                              alt=""
                              width="142"
                              height="186"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="text-center"
                            v-for="(item, index) in clotheSGuide"
                            :key="index"
                          >
                            {{ item }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- 鞋子尺寸指南 -->
                  <div class="row px-3" v-if="product.category === '鞋子'">
                    <table
                      class="table mt-2 align-middle table-bordered sizeGuide_contain"
                    >
                      <tbody>
                        <tr>
                          <td class="text-center">尺碼</td>
                          <td class="text-center" colspan="5">尺寸</td>
                        </tr>
                        <tr>
                          <td
                            class="text-center"
                            v-for="(item, index) in clotheSGuide"
                            :key="index"
                          >
                            {{ item }}
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="text-center"
                            v-for="(item, index) in clotheMGuide"
                            :key="index"
                          >
                            {{ item }}
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="text-center"
                            v-for="(item, index) in clotheLGuide"
                            :key="index"
                          >
                            {{ item }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <!-- 上身、下身尺寸描述 -->
                  <div
                    class="row sizeGuide_contain px-2"
                    v-if="
                      product.category === '上身類' ||
                      product.category === '下身類'
                    "
                  >
                    <span class="col-sm-12"
                      >※本尺寸表皆為水平測量，會因布料彈性、水洗處理、測量起訖點等因素，</span
                    >
                    <span class="col-sm-12 py-1"
                      >與實際商品尺寸略有誤差，誤差尺寸±2cm，</span
                    >
                    <span class="col-sm-12"
                      >在國際驗貨標準範圍都是屬於可接受範圍，並不屬於瑕疵。</span
                    >
                  </div>
                  <!-- 包包、帽子、鞋子尺寸描述 -->
                  <div
                    class="row sizeGuide_contain px-2"
                    v-if="
                      product.category === '包包' ||
                      product.category === '帽子' ||
                      product.category === '鞋子'
                    "
                  >
                    <span class="col-sm-12"
                      >手工測量會有些許誤差，實際長度以實物為準</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!--================ 試穿報告 =================-->
            <div class="border-bottom border-muted" @click="toggleFitting">
              <div
                class="d-flex align-items-center"
                data-bs-toggle="collapse"
                data-bs-target="#FittingReport"
                aria-expanded="false"
                aria-controls="FittingReport"
              >
                <i class="bi bi-plus fitting_plus"></i>
                <i class="bi bi-dash fitting_dash"></i>

                <span class="sizeGuide_title my-2 ms-1"
                  >Fitting Report 試穿報告</span
                >
              </div>

              <div
                class="accordion-collapse collapse pb-2"
                id="FittingReport"
                data-bs-parent="#accordionSizeExample"
              >
                <div class="">
                  <div class="row px-3">
                    <table
                      class="table mt-0 align-middle table-bordered sizeGuide_contain"
                    >
                      <div class="sizeGuide_contain col-sm-12 text-end">
                        測量單位：公分(cm)
                      </div>
                      <tbody>
                        <tr>
                          <td class="text-center">試穿人員</td>
                          <td class="text-center">身高</td>
                          <td class="text-center">體重</td>
                          <td class="text-center">身型</td>
                          <td class="text-center">肩寬</td>
                          <td class="text-center">上胸圍</td>
                          <td class="text-center">下胸圍</td>
                          <td class="text-center">腰圍</td>
                          <td class="text-center">下腰圍</td>
                          <td class="text-center">臀圍</td>
                          <td class="text-center">內衣罩杯</td>
                          <td class="text-center">建議尺寸</td>
                        </tr>
                        <tr>
                          <td class="text-center">A</td>
                          <td class="text-center">156</td>
                          <td class="text-center">44</td>
                          <td class="text-center">
                            <div>纖細身材</div>
                            <div>體型扁身</div>
                          </td>
                          <td class="text-center">34</td>
                          <td class="text-center">80</td>
                          <td class="text-center">67</td>
                          <td class="text-center">62</td>
                          <td class="text-center">72</td>
                          <td class="text-center">84</td>
                          <td class="text-center">70B</td>
                          <td class="text-center">S</td>
                        </tr>
                        <tr>
                          <td class="text-center">B</td>
                          <td class="text-center">160</td>
                          <td class="text-center">62</td>
                          <td class="text-center">
                            <div>體型結實</div>
                            <div>臀圍較大</div>
                            <div>大腿略粗</div>
                          </td>
                          <td class="text-center">36.5</td>
                          <td class="text-center">89</td>
                          <td class="text-center">74</td>
                          <td class="text-center">69</td>
                          <td class="text-center">84</td>
                          <td class="text-center">98</td>
                          <td class="text-center">75C</td>
                          <td class="text-center">L</td>
                        </tr>
                        <tr>
                          <td class="text-center">C</td>
                          <td class="text-center">163</td>
                          <td class="text-center">58</td>
                          <td class="text-center">
                            <div>上身略扁身</div>
                            <div>下身較圓潤</div>
                          </td>
                          <td class="text-center">35.5</td>
                          <td class="text-center">87</td>
                          <td class="text-center">74</td>
                          <td class="text-center">71</td>
                          <td class="text-center">88</td>
                          <td class="text-center">98</td>
                          <td class="text-center">75B</td>
                          <td class="text-center">M</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="row sizeGuide_contain px-2">
                    <span class="col-sm-12"
                      >每個人身高體重和商品尺寸不盡相同，身高155cm豐腴與180cm纖細的女孩有可能選擇同樣尺寸的商品</span
                    >
                    <span class="col-sm-12 py-1"
                      >胸圍尺寸的大小會影響選擇尺寸的關鍵，建議您可以參考試穿人員的胸圍做商品購買的選擇</span
                    >
                    <span class="col-sm-12"
                      >如果肩膀是屬於較寬的人，建議先參考商品的胸圍尺寸後再對照肩寬的尺寸測量</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      product: {},
      clotheSGuide: [],
      clotheMGuide: [],
      clotheLGuide: [],
      sizeGuideImage: '' // 尺寸指南參考圖
    }
  },
  props: ['assignProduct', 'sizeguideImg'],
  watch: {
    assignProduct() {
      this.product = { ...this.assignProduct }
      // console.log(this.product)
      // 尺寸指南-上半身
      this.clotheSGuide.push(...this.product.smallGuide.split(','))
      this.clotheMGuide.push(...this.product.middleGuide.split(','))
      this.clotheLGuide.push(...this.product.largeGuide.split(','))
    },
    sizeguideImg() {
      // 尺寸指南參考圖
      this.sizeGuideImage = this.sizeguideImg
    }
  },
  methods: {
    // 尺寸表
    toggleSizeChart() {
      const sizePlus = document.querySelector('.size_plus')
      const sizeDash = document.querySelector('.size_dash')

      if (sizePlus.className === 'bi bi-plus size_plus') {
        sizePlus.classList.add('size_plusBlock')
        sizeDash.classList.add('size_dashNone')
      } else if (sizePlus.className === 'bi bi-plus size_plus size_plusBlock') {
        sizePlus.classList.remove('size_plusBlock')
        sizeDash.classList.remove('size_dashNone')
        sizeDash.classList.add('size_dashBlock')
      }
    },
    // 試穿報告
    toggleFitting() {
      const fittingPlus = document.querySelector('.fitting_plus')
      const fittingDash = document.querySelector('.fitting_dash')

      if (fittingPlus.className === 'bi bi-plus fitting_plus') {
        fittingPlus.classList.add('fitting_plusNone')
        fittingDash.classList.toggle('fitting_dashBlock')
      } else if (
        fittingPlus.className === 'bi bi-plus fitting_plus fitting_plusNone'
      ) {
        fittingPlus.classList.remove('fitting_plusNone')
        fittingDash.classList.remove('fitting_dashBlock')
        fittingPlus.classList.add('fitting_plusBlock')
      } else if (
        fittingPlus.className === 'bi bi-plus fitting_plus fitting_plusBlock'
      ) {
        fittingPlus.classList.add('fitting_plusNone')
        fittingDash.classList.toggle('fitting_dashBlock')
        fittingPlus.classList.remove('fitting_plusBlock')
      }
    }
  },
  mixins: [modalMixin]
}
</script>

//
<style lang="scss">
// .sizeClose_Modal {
//   height: 25px;
//   width: 25px;
//   position: absolute;
//   right: 0;
//   top: -12px;
// }
// .sizeGuide_title,
// .sizeGuide_contain {
//   font-size: 0.8rem;
//   cursor: pointer;
// }
// .sizeModal_title,
// .fiting_contain,
// .model_contain {
//   font-size: 0.9rem;
// }
// // icon 旋轉功能
// .size_dashNone,
// .size_plus,
// .fitting_plusNone,
// .fitting_dash,
// .model_plusNone,
// .model_dash {
//   display: none;
// }
// .size_plusBlock {
//   display: block;
//   animation: rotateAdd 0.5s;
// }
// .fitting_dashBlock,
// .model_dashBlock {
//   animation: rotateDash 0.5s;
//   display: block;
// }
// .size_dashBlock {
//   animation: rotateDash 0.5s;
// }
// .fitting_plusBlock,
// .model_plusBlock {
//   animation: rotateAdd 0.5s;
// }
// @keyframes rotateDash {
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(-180deg);
//   }
// }
// @keyframes rotateAdd {
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(-90deg);
//   }
// }
//
</style>
