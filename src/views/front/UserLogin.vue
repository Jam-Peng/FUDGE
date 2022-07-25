<template>
  <!-- RWD 桌機、平板 -->
  <div class="container d-none d-md-block d-lg-block">
    <div class="row justify-content-center mt-5">
      <div class="col-md-11 col-lg-9 login_img mb-4">
        <img
          src="../../assets/img/login_bg.jpeg"
          alt=""
          class="d-block w-100"
        />
      </div>
      <!-- 會員登入 -->
      <div class="col-lg-4 col-md-6 border-end border-secondary p-5 mb-4">
        <div class="text-center mb-4 pb-2">
          <span class="px-1">Sign in 會員登入</span>
        </div>
        <ul class="ps-0 mb-3">
          <li class="mb-3">
            <input
              type="mail"
              class="col-md-12 py-1 loginInput border-bottom border-secondary"
              id="userAccount"
              placeholder="會員帳號 Account  / Email Address"
              v-model.trim="singIn.userAccount"
            />
          </li>
          <li>
            <input
              type="password"
              class="col-md-12 py-1 loginInput border-bottom border-secondary"
              id="userPassword"
              placeholder="會員密碼 Password  "
              autocomplete="off"
              v-model.trim="singIn.userPassword"
            />
          </li>
        </ul>
        <div class="px-1 mb-3 text-secondary d-flex flex-column">
          <span class="loginMissPass mb-4"> 忘記密碼 </span>
          <span class="testloginText"> 測試帳號：test_account@mail.com </span>
          <span class="testloginText"> 測試密碼：test1234 </span>
        </div>
        <button
          class="col-md-12 btn btn-secondary btn-sm px-2 mt-1"
          @click="userLogin"
        >
          SIGN IN
        </button>
      </div>

      <!-- 會員註冊 -->
      <div class="col-lg-4 col-md-6 p-5 mb-4">
        <div class="text-center mb-4 pb-2">
          <span class="px-1">Register 會員註冊</span>
        </div>
        <ul class="ps-0 mb-4">
          <li class="mb-3">
            <input
              type="text"
              class="col-md-12 py-1 loginInput border-bottom border-secondary"
              id="registerAccount"
              placeholder=" 電子信箱 Email Address"
            />
          </li>
          <li class="mb-3">
            <input
              type="password"
              class="col-md-12 py-1 loginInput border-bottom border-secondary"
              id="registerPassword"
              placeholder="會員密碼 Password (6-15碼英數字) "
              autocomplete="off"
            />
          </li>
          <li>
            <input
              type="password"
              class="col-md-12 py-1 loginInput border-bottom border-secondary"
              id="confirmPassword"
              placeholder="再次輸入密碼 "
              autocomplete="off"
            />
          </li>
        </ul>

        <button class="col-md-12 btn btn-secondary btn-sm px-2 mt-5">
          SIGN UP
        </button>
      </div>

      <!-- 回上一頁 -->
      <div class="text-center text-secondary">
        <span class="returnStore" @click="goPrePage">
          RETUTN TO STORE 回上一頁</span
        >
      </div>
    </div>
  </div>

  <!-- RWD 手機 -->
  <div class="container d-md-none d-sm-block">
    <div class="row justify-content-center mt-5">
      <div class="col-10 smlogin_img mb-4">
        <img
          src="../../assets/img/login_bg.jpeg"
          alt=""
          class="d-block w-100"
        />
      </div>
      <!-- 會員登入 -->
      <div class="col-12 p-5 pt-0">
        <div class="mb-4 pb-2">
          <span class="px-1">Sign in 會員登入</span>
        </div>
        <ul class="ps-0 mb-3">
          <li class="mb-3">
            <input
              type="mail"
              class="col-md-12 py-1 loginInput border-bottom border-secondary"
              id="smUserAccount"
              placeholder="會員帳號 Account  / Email Address"
              v-model.trim="singIn.userAccount"
            />
          </li>
          <li>
            <input
              type="password"
              class="col-md-12 py-1 loginInput border-bottom border-secondary"
              id="smUserPassword"
              placeholder="會員密碼 Password  "
              autocomplete="off"
              v-model.trim="singIn.userPassword"
            />
          </li>
        </ul>
        <div class="px-1 mb-3 text-secondary d-flex flex-column">
          <span class="loginMissPass mb-4"> 忘記密碼 </span>
          <span class="testloginText"> 測試帳號：test_account@mail.com </span>
          <span class="testloginText"> 測試密碼：test1234 </span>
        </div>
        <button
          class="col-md-12 btn btn-secondary btn-sm px-2 mt-1"
          @click="userLogin"
        >
          SIGN IN
        </button>
      </div>

      <!-- 會員註冊 -->
      <div class="col-12 p-5 pt-0">
        <div class="mb-4 pb-2">
          <span class="px-1">Register 會員註冊</span>
        </div>
        <ul class="ps-0 mb-4">
          <li class="mb-3">
            <input
              type="text"
              class="col-md-12 py-1 loginInput border-bottom border-secondary"
              id="smRegisterAccount"
              placeholder=" 電子信箱 Email Address"
            />
          </li>
          <li class="mb-3">
            <input
              type="password"
              class="col-md-12 py-1 loginInput border-bottom border-secondary"
              id="smRegisterPassword"
              placeholder="會員密碼 Password (6-15碼英數字) "
              autocomplete="off"
            />
          </li>
          <li>
            <input
              type="password"
              class="col-md-12 py-1 loginInput border-bottom border-secondary"
              id="smConfirmPassword"
              placeholder="再次輸入密碼 "
              autocomplete="off"
            />
          </li>
        </ul>

        <button class="col-md-12 btn btn-secondary btn-sm px-2 mt-1">
          SIGN UP
        </button>
      </div>

      <!-- 回上一頁 -->
      <div class="text-center text-secondary pb-4">
        <span class="returnStore" @click="goPrePage">
          RETUTN TO STORE 回上一頁</span
        >
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from '@/components/user/UserFooter.vue'

export default {
  components: { Footer },
  data() {
    return {
      testSignIn: {
        testAccount: 'test_account@mail.com',
        testPassword: 'test1234'
      },
      singIn: {
        userAccount: '',
        userPassword: ''
      }
    }
  },
  inject: ['emitter'],
  methods: {
    // 登入
    userLogin() {
      if (
        this.singIn.userAccount === this.testSignIn.testAccount &&
        this.singIn.userPassword === this.testSignIn.testPassword
      ) {
        this.emitter.emit('sendSignIn', this.testSignIn)
        this.$router.push('/')
        this.singIn.userAccount = ''
        this.singIn.userPassword = ''
      } else {
        console.log('帳號密碼錯誤')
      }
    },
    // 回上一頁
    goPrePage() {
      this.$router.go(-1)
    }
  }
}
</script>
