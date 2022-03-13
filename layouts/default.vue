<template>
  <div class="d-flex flex-column flex-root">
    <!-- begin:: Header Mobile -->
    <header-mobile />
    <!-- end:: Header Mobile -->

    <loader v-if="loading" logo="/loader.svg" />

    <!-- begin::Body -->
    <div class="d-flex flex-row flex-column-fluid page">
      <!-- begin:: Aside Left -->
      <nip-aside />
      <!-- end:: Aside Left -->

      <div id="kt_wrapper" class="kt-wrapper d-flex flex-column flex-row-fluid wrapper">
        <!-- begin:: Header -->
        <nip-header />
        <!-- end:: Header -->

        <!-- begin:: Content -->
        <div id="kt_content" class="content d-flex flex-column flex-column-fluid p-0">
          <div class="d-flex flex-column-fluid">
            <div class="container-fluid px-15">
              <transition name="fade-in">
                <Nuxt />
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ui-snackbar />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NipAside from '@/components/navbar/aside/Aside.vue';
import NipHeader from '@/components/navbar/header/Header.vue';
import HeaderMobile from '@/components/navbar/header/HeaderMobile.vue';
import Loader from '@/components/Loader.vue';
import HtmlClass from '@/services/htmlclass.service';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Layout',
  components: {
    NipAside,
    NipHeader,
    HeaderMobile,
    Loader,
  },
  data: vm => ({
    loading: false,
    route: vm.$route.name,
  }),
  computed: {
    ...mapGetters('props', ['getRouteName']),
  },
  watch: {
    getRouteName: 'setDashboardHeight',
  },
  beforeMount() {
    this.loading = true;

    // initialize html element classes
    HtmlClass.init();
  },
  updated() {
    this.setDashboardHeight();
  },
  mounted() {
    // check if current user is authenticated
    // if (!this.isAuthenticated) {
    //   this.$router.push("auth/login");
    // }

    this.$nuxt.$on('update-dashboard', this.setDashboardHeight);

    setTimeout(() => {
      this.loading = false;
    }, 2000);

    this.setDashboardHeight();
  },
  methods: {
    setDashboardHeight() {
      this.$nextTick(() => {
        const header = document.getElementById('kt_header');
        const dashboard = document.getElementsByClassName('dashboard')[0];
        const pagination = document.getElementById('pagination');

        const isDesktop = window.innerWidth >= 992;

        if (dashboard && header && isDesktop) {
          document.getElementsByClassName(
            'dashboard',
          )[0].style.height = `calc(100vh - ${header.offsetHeight}px - 150px)`;

          if (pagination) {
            document.getElementsByClassName(
              'dashboard',
            )[0].style.height = `calc(100vh - ${header.offsetHeight}px - ${pagination.offsetHeight}px  - 150px)`;
          }
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
@import '../node_modules/perfect-scrollbar/css/perfect-scrollbar.css';
@import '../node_modules/socicon/css/socicon.css';
@import 'node_modules/animate.css';
@import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
@import '../node_modules/line-awesome/dist/line-awesome/css/line-awesome.css';
@import '~assets/plugins/flaticon/flaticon.css';
@import '~assets/plugins/flaticon2/flaticon.css';
@import '~assets/plugins/keenthemes-icons/font/ki.css';

@import '~assets/sass/style.vue.scss';

.kt-wrapper {
  padding-top: 90px !important;
}

.wrapper {
  max-width: 100% !important;
}
</style>
