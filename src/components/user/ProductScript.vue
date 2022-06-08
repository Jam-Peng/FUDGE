<template>
  <section>
    <div class="productsDescript_container" id="accordionFlushExample">
      <!--================ 商品資訊 =================-->
      <div class="border-bottom border-muted" @click="toggleDescript">
        <div
          class="d-flex align-items-center collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#descriptProduct"
          aria-expanded="false"
          aria-controls="descriptProduct"
        >
          <span class="descript_title my-2"> 商品資訊</span>

          <font-awesome-icon
            class="icons icons-arrow ms-auto descript_open"
            :icon="['fas', 'angle-down']"
          />
        </div>

        <div
          class="accordion-collapse collapse pb-2"
          id="descriptProduct"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="skills__data">
            <div class="row">
              <span class="descript_title pb-3">{{ descript }} </span>

              <span
                class="descript_title pb-1"
                v-for="item in descripts"
                :key="item"
                >{{ item }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <!--================ 洗滌方式 =================-->

      <div class="border-bottom border-muted" @click="toggleWash">
        <div
          class="d-flex align-items-center collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#descriptWash"
          aria-expanded="false"
          aria-controls="descriptWash"
        >
          <span class="wash_title my-2">洗滌方式</span>

          <font-awesome-icon
            class="icons icons-arrow ms-auto wash_open"
            :icon="['fas', 'angle-down']"
          />
        </div>

        <div
          class="accordion-collapse collapse pb-2"
          id="descriptWash"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="">
            <div class="row">
              <ol>
                <li
                  class="wash_title pb-1"
                  v-for="washContent in washContents"
                  :key="washContent"
                >
                  {{ washContent }}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--  -->
</template>

<script>
export default {
  data() {
    return {
      descript: '', // 商品資訊第一個欄位
      descripts: [], // 刪除第一個的其他商品資訊
      washContents: []
    }
  },
  props: ['product'],
  watch: {
    product() {
      // 將字串轉為陣列使用在template排版上
      // 商品資訊 取出第一個和其他分開
      this.descripts = this.product.description.split(',')
      this.descript = this.descripts[0]
      this.descripts.shift()
      // console.log(this.descripts)
      // 洗滌方式
      this.washContents = this.product.content.split(',')
    }
  },
  methods: {
    // 商品描述的icon旋轉
    toggleDescript() {
      const descriptOpen = document.querySelector('.descript_open')
      const washOopen = document.querySelector('.wash_open')
      // console.log(descriptOpen.className)
      // console.log(washOopen.className.baseVal)
      if (
        washOopen.className.baseVal ===
        'svg-inline--fa fa-angle-down icons icons-arrow ms-auto wash_open wash_close'
      ) {
        descriptOpen.classList.toggle('descript_close')
        washOopen.classList.remove('wash_close')
      } else {
        descriptOpen.classList.toggle('descript_close')
      }
    },
    // 洗滌方式的icon旋轉
    toggleWash() {
      const washOopen = document.querySelector('.wash_open')
      const descriptOpen = document.querySelector('.descript_open')
      // console.log(washOopen.className)
      // console.log(descriptOpen.className.baseVal)
      if (
        descriptOpen.className.baseVal ===
        'svg-inline--fa fa-angle-down icons icons-arrow ms-auto descript_open descript_close'
      ) {
        washOopen.classList.toggle('wash_close')
        descriptOpen.classList.remove('descript_close')
      } else {
        washOopen.classList.toggle('wash_close')
      }
    }
  }
}
</script>

<style lang="scss">
.icons-arrow {
  transition: 0.4s;
  font-size: 0.9rem;
  cursor: pointer;
}
.descript_title,
.wash_title {
  font-size: 0.9rem;
}
.descript_open {
  transform: rotate(0deg);
}
.descript_close {
  transform: rotate(-180deg);
}
.wash_open {
  transform: rotate(0deg);
}
.wash_close {
  transform: rotate(-180deg);
}
</style>
