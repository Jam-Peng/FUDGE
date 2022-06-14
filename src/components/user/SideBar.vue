<template>
  <ul class="list-group">
    <a
      href="#"
      class="list-group-item list-group-item-action list-group-item-light"
      @click.prevent="$emit('emit-All', $event)"
      :class="{
        active: breadcrumb === '全部商品'
      }"
      >全部商品</a
    >

    <a
      href="#"
      class="list-group-item list-group-item-action list-group-item-light"
      @click.prevent="$emit('emit-Clothes', $event)"
      :class="{
        active: $route.query.category === '上身類' || breadcrumb === '上身類'
      }"
    >
      上身類
    </a>

    <a
      href="#"
      class="list-group-item list-group-item-action list-group-item-light"
      :class="{
        active: $route.query.category === '下身類' || breadcrumb === '下身類'
      }"
      @click.prevent="$emit('emit-Pants', $event)"
    >
      下身類
    </a>
    <a
      href="#"
      class="list-group-item list-group-item-action list-group-item-light"
      :class="{
        active: $route.query.category === '帽子' || breadcrumb === '帽子'
      }"
      @click.prevent="$emit('emit-Hats', $event)"
    >
      帽子
    </a>
    <a
      href="#"
      class="list-group-item list-group-item-action list-group-item-light"
      :class="{
        active: $route.query.category === '包包' || breadcrumb === '包包'
      }"
      @click.prevent="$emit('emit-Pack', $event)"
    >
      包包
    </a>
    <a
      href="#"
      class="list-group-item list-group-item-action list-group-item-light"
      :class="{
        active: $route.query.category === '鞋子' || breadcrumb === '鞋子'
      }"
      @click.prevent="$emit('emit-Shoes', $event)"
    >
      鞋子
    </a>
  </ul>
</template>

<script>
export default {
  props: ['breadcrumb'],
  emits: [
    'emit-All',
    'emit-Clothes',
    'emit-Pants',
    'emit-Hats',
    'emit-Pack',
    'emit-Shoes'
  ]
}
</script>
