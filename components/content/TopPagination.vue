<template>
  <div
    id="pagination"
    class="d-flex align-items-center justify-content-lg-between justify-content-center w-100 mb-10 flex-wrap"
  >
    <div class="page-title">
      <h1 class="mb-10">{{ current.name }}</h1>

      <b-breadcrumb :items="items" class="p-0" />
    </div>

    <slot />
  </div>
</template>

<script>
import breadcrumbs from '~/services/breadcrumbs.service';

export default {
  name: 'TopPagination',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    items: [],
    current: {},
  }),
  mounted() {
    const id = this.$route?.params?.id || null;
    const path = this.$route.path.split('/') || [];

    if (id) {
      path.splice(-1);
    }

    const currentPath = path?.[path.length - 1] || '';

    this.current = breadcrumbs?.[currentPath];

    if (this.item && this.item?.name) {
      this.current.name = this.item.name;
    }

    this.items = path.map(item => ({
      text: breadcrumbs?.[item]?.name || this.item?.name || '',
      to: breadcrumbs?.[item]?.url || '',
    }));
  },
};
</script>

<style scoped>
.page-title {
  font-size: 24px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #000;
}

.breadcrumb-item {
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.1px;
  color: #366fcf;
}

.breadcrumb-item.active {
  color: #636465;
}

.breadcrumb {
  background: transparent;
  margin: 0 !important;
}
</style>
