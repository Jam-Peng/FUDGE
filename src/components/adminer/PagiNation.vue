<template>
  <nav aria-label="Page navigation example ">
    <ul class="pagination justify-content-center mt-4">
      <li class="page-item" :class="{ disabled: pages.has_pre === false }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="prePage(pages.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in pages.total_pages"
        :key="page"
        :class="{ active: page === pages.current_page }"
      >
        <a class="page-link" href="#" @click.prevent="updatePage(page)">
          {{ page }}
        </a>
      </li>
      <li class="page-item" :class="{ disabled: pages.has_next === false }">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="nextPage(pages.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
  emits: ['emitPage', 'emitPre', 'emitNext'],
  methods: {
    updatePage(page) {
      this.$emit('emitPage', page)
    },
    prePage(Previous) {
      this.$emit('emitPre', Previous)
    },
    nextPage(Next) {
      this.$emit('emitNext', Next)
    }
  }
}
</script>
