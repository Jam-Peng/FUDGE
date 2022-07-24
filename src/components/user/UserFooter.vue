<template>
  <!-- 桌機、平板 -->
  <div
    class="container-fluid bg-light p-5 mt-4 footer_text d-none d-md-block d-lg-block"
  >
    <div class="row px-4">
      <div class="col-md-12 d-flex pb-3">
        <router-link to="/zh-tw" class="link-secondary pe-3">
          <font-awesome-icon
            class="icons icons_fb"
            :icon="['fab', 'facebook-f']"
          />
        </router-link>
        <router-link to="/zh-tw" class="link-secondary pe-3">
          <font-awesome-icon
            class="icons icons_ig"
            :icon="['fab', 'instagram']"
          />
        </router-link>
        <router-link to="/zh-tw" class="link-secondary pe-3">
          <font-awesome-icon class="icons icons_line" :icon="['fab', 'line']" />
        </router-link>
        <router-link to="/zh-tw" class="link-secondary pe-3">
          <font-awesome-icon
            class="icons icons_yt"
            :icon="['fab', 'youtube']"
          />
        </router-link>
      </div>

      <div class="col-12 col-md-6 d-flex">
        <div class="col pe-3">
          <router-link
            to="/zh-tw"
            class="link-dark d-flex justify-content-between"
          >
            <span>最新消息</span>
            <i class="bi bi-plus"></i>
          </router-link>
        </div>
        <div class="col pe-3">
          <router-link
            to="/zh-tw"
            class="link-dark d-flex justify-content-between"
          >
            <span>售後服務</span>
            <i class="bi bi-plus"></i>
          </router-link>
        </div>
        <div class="col pe-3">
          <router-link
            to="/dashboard/products"
            class="link-dark d-flex justify-content-between"
          >
            <span>後台管理</span>
            <i class="bi bi-plus"></i>
          </router-link>
        </div>
      </div>
      <div class="col-12 col-md-6 d-flex flex-column ps-4">
        <span class="pb-2">SERVICE</span>
        <span>MON.-FRI. 09:00-12:00 / 13:00-18:00</span>
        <span> service@fudge.com.tw</span>
      </div>
      <div class="col-md-12 d-flex flex-column pt-2">
        <span class="pb-2">&copy; FUDGE All Rights Reserved.</span>
        <span>本網頁僅供學習使用 無任何商業用途</span>
      </div>
    </div>
  </div>
  <!-- 手機顯示 -->
  <div class="container-fluid bg-light p-4 mt-4 footer_text d-block d-sm-none">
    <div class="row justify-content-center">
      <div class="col-10 pb-3 d-flex justify-content-evenly">
        <router-link to="/zh-tw" class="link-secondary">
          <font-awesome-icon
            class="icons icons_fb"
            :icon="['fab', 'facebook-f']"
          />
        </router-link>
        <router-link to="/zh-tw" class="link-secondary">
          <font-awesome-icon
            class="icons icons_ig"
            :icon="['fab', 'instagram']"
          />
        </router-link>
        <router-link to="/zh-tw" class="link-secondary">
          <font-awesome-icon class="icons icons_line" :icon="['fab', 'line']" />
        </router-link>
        <router-link to="/zh-tw" class="link-secondary">
          <font-awesome-icon
            class="icons icons_yt"
            :icon="['fab', 'youtube']"
          />
        </router-link>
      </div>

      <div class="row d-flex pb-3">
        <div class="col-12 pe-3 pb-1">
          <router-link
            to="/zh-tw"
            class="link-dark d-flex justify-content-between"
          >
            <span>最新消息</span>
            <i class="bi bi-plus"></i>
          </router-link>
        </div>
        <div class="col-12 pe-3 pb-1">
          <router-link
            to="/zh-tw"
            class="link-dark d-flex justify-content-between"
          >
            <span>售後服務</span>
            <i class="bi bi-plus"></i>
          </router-link>
        </div>
        <div class="col-12 pe-3 pb-1">
          <router-link
            to="/dashboard/products"
            class="link-dark d-flex justify-content-between"
          >
            <span>後台管理</span>
            <i class="bi bi-plus"></i>
          </router-link>
        </div>
      </div>
      <div class="row d-flex flex-column pb-2">
        <!-- <span class="col-12">SERVICE</span> -->
        <span class="col-12">MON.-FRI. 09:00-12:00 / 13:00-18:00</span>
        <span class="col-12"> service@fudge.com.tw</span>
      </div>
      <div class="row d-flex flex-column pt-2">
        <span class="col-12">&copy; FUDGE All Rights Reserved.</span>
        <span class="col-12">本網頁僅供學習使用 無任何商業用途</span>
      </div>
    </div>
  </div>
</template>
