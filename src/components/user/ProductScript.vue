<template>
  <section>
    <div class="productsDescript_container">
      <!--================ 商品資訊 =================-->
      <div class="descript_content descript_close" @click="toggleDescript">
        <div class="d-flex align-items-center">
          <span class="descript_title my-2"> 商品資訊</span>

          <font-awesome-icon
            class="icons icons_arrow ms-auto"
            :icon="['fas', 'angle-down']"
          />
        </div>

        <div class="descript_list border-bottom border-muted">
          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">HTML</h3>
              <span class="skills__number">85%</span>
            </div>
          </div>
        </div>
      </div>
      <!--================ 商品資訊 2 =================-->
      <div class="wash_content wash_close" @click="toggleWash">
        <div class="d-flex align-items-center">
          <span class="wash_title my-2">洗滌方式</span>

          <font-awesome-icon
            class="icons icons_arrow ms-auto"
            :icon="['fas', 'angle-down']"
          />
        </div>

        <div class="wash_list border-bottom border-muted">
          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">Scss</h3>
              <span class="skills__number">85%</span>
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
  methods: {
    toggleDescript() {
      const descriptContent = document.querySelector('.descript_content')
      // console.log(descriptContent.className)
      descriptContent.classList.remove('descript_open')
      descriptContent.classList.toggle('descript_close')
    },
    toggleWash() {
      const washContent = document.querySelector('.wash_content')
      // console.log(washContent.className)
      washContent.classList.remove('wash_open')
      washContent.classList.toggle('wash_close')
    }
  }
}
</script>
