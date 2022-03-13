<template>
  <!-- begin:: Aside -->
  <div
    ref="kt_aside"
    id="kt_aside"
    class="aside aside-left aside-fixed d-flex flex-column flex-row-auto"
  >
    <!-- begin:: Aside -->
    <brand />
    <!-- end:: Aside -->

    <!-- begin:: Aside Menu -->
    <div
      id="kt_aside_menu_wrapper"
      class="aside-menu-wrapper flex-column-fluid d-flex flex-wrap align-items-baseline"
    >
      <div
        ref="kt_aside_menu"
        id="kt_aside_menu"
        class="aside-menu my-4 w-100"
        data-menu-dropdown-timeout="500"
        data-menu-vertical="1"
      >
        <!-- example static menu here -->
        <perfect-scrollbar class="aside-menu scroll" style="max-height: 90vh; position: relative">
          <nip-menu />
        </perfect-scrollbar>
      </div>

      <div class="py-3 w-100 align-self-end user">
        <div :class="[!hasAvatar && 'bg-red']" class="avatar">
          <img v-if="hasAvatar" alt="avatar" class="img-fluid" src="/media/users/300_21.jpg" />

          <span v-else class="name">ка</span>
        </div>

        <div class="sign">
          <p class="user-name">Сергеев И. В.</p>

          <span class="logout-user cursor-pointer">Выйти</span>
        </div>
      </div>
    </div>
  </div>
  <!-- end:: Aside -->
</template>

<script>
import KTLayoutAside from 'assets/js/layout/base/aside.js';
import KTLayoutAsideMenu from 'assets/js/layout/base/aside-menu.js';
import Brand from '@/components/navbar/aside/brand/Brand.vue';
import NipMenu from '@/components/navbar/aside/Menu.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'NipAside',
  components: {
    Brand,
    NipMenu,
  },
  data: () => ({
    hasAvatar: true,
  }),
  mounted() {
    this.$nextTick(() => {
      const asideRef = this.$refs.kt_aside;

      // Init Aside
      KTLayoutAside.init(asideRef);

      asideRef.querySelectorAll("a[class='menu-link']").forEach(item => {
        item.addEventListener('click', () => {
          KTLayoutAside.getOffcanvas().hide();
        });
      });

      // Init Aside Menu
      KTLayoutAsideMenu.init(this.$refs.kt_aside_menu);
    });
  },
};
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  align-items: center;
  padding: 12px 0 12px 24px;
  background: #232f3e;

  .logout-user {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.07875px;
    color: #adafb3;
  }

  .user-name {
    margin-bottom: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.07875px;
    color: #ffffff;
  }

  .avatar {
    display: flex;
    margin-right: 8px;
    overflow: hidden;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;

    &.bg-red {
      background: #f44336;
    }

    .name {
      width: 100%;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      text-align: center;
      letter-spacing: 0.07px;
      color: #ffffff;
    }
  }
}
</style>
