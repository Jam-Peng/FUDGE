<template>
  <ul class="list-group">
    <router-link
      to="/productList"
      class="list-group-item list-group-item-action list-group-item-light"
      @click.prevent="$emit('emit-All', $event)"
      :class="{ active: breadcrumb === '全部商品' }"
      >全部商品</router-link
    >
    <!-- :class="{ active: $route.query.category === '上身類' }" -->
    <a
      href="#"
      class="list-group-item list-group-item-action list-group-item-light"
      @click.prevent="$emit('emit-Clothes', $event)"
      :class="{
        active: breadcrumb === '上身類' || $route.query.category === '上身類'
      }"
    >
      上身類
    </a>
    <a
      href="#"
      class="list-group-item list-group-item-action list-group-item-light"
      :class="{
        active: breadcrumb === '下身類' || $route.query.category === '下身類'
      }"
      @click.prevent="$emit('emit-Pants', $event)"
    >
      下身類
    </a>
    <a
      href="#"
      class="list-group-item list-group-item-action list-group-item-light"
      :class="{
        active: breadcrumb === '帽子' || $route.query.category === '帽子'
      }"
      @click.prevent="$emit('emit-Hats', $event)"
    >
      帽子
    </a>
    <a
      href="#"
      class="list-group-item list-group-item-action list-group-item-light"
      :class="{
        active: breadcrumb === '包包' || $route.query.category === '包包'
      }"
      @click.prevent="$emit('emit-Pack', $event)"
    >
      包包
    </a>
    <a
      href="#"
      class="list-group-item list-group-item-action list-group-item-light"
      :class="{
        active: breadcrumb === '鞋子' || $route.query.category === '鞋子'
      }"
      @click.prevent="$emit('emit-Shoes', $event)"
    >
      鞋子
    </a>
  </ul>
</template>

<script>
export default {
  props: ['breadcrumb', 'category']
}
</script>
