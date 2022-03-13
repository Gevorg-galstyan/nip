<template>
  <div class="topbar v-application bg-transparent">
    <b-dropdown
      no-caret
      no-flip
      right
      size="sm"
      toggle-class="topbar-item text-decoration-none"
      variant="link"
    >
      <template #button-content>
        <div class="btn btn-icon btn-clean btn-dropdown btn-lg mr-1 pulse pulse-primary">
          <v-badge color="#1976D2" content="5" overlap>
            <v-icon class="fz-25" color="#9E9E9E">mdi-bell-outline</v-icon>
          </v-badge>
        </div>
      </template>

      <b-dropdown-text class="min-w-md-350px" tag="div">
        <dropdown-notification />
      </b-dropdown-text>
    </b-dropdown>

    <quick-user />

    <div class="topbar-item">
      <b-dropdown
        no-caret
        no-flip
        right
        size="sm"
        toggle-class="btn btn-icon btn-clean btn-dropdown btn-lg mr-1 text-decoration-none"
        variant="link"
      >
        <template #button-content>
          <b-img
            alt="Circle image"
            class="h-20px w-20px rounded"
            rounded="circle"
            src="/media/svg/flags/108-armenia.svg"
          />
        </template>

        <b-dropdown-text class="min-w-md-175px" tag="div">
          <dropdown-language />
        </b-dropdown-text>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
import DropdownNotification from '@/components/extras/dropdown/DropdownNotification.vue';
import DropdownLanguage from '@/components/extras/dropdown/DropdownLanguage.vue';
import QuickUser from '@/components/extras/offcanvas/QuickUser.vue';

export default {
  name: 'TopBar',
  components: {
    DropdownNotification,
    DropdownLanguage,
    QuickUser,
  },
  data: () => ({}),
};
</script>

<style lang="scss">
.topbar {
  .dropdown-toggle {
    padding: 0;

    &:hover {
      text-decoration: none;
    }

    &.dropdown-toggle-no-caret {
      &:after {
        content: none;
      }
    }
  }

  .dropdown-menu {
    margin: 0;
    padding: 0;
    outline: none;

    .b-dropdown-text {
      padding: 0;
    }
  }
}
</style>
