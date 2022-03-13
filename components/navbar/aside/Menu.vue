<template>
  <ul class="menu-nav">
    <li
      aria-haspopup="true"
      class="menu-item menu-item-submenu menu-item-open"
      data-menu-toggle="hover"
    >
      <a class="menu-link menu-toggle" href="#">
        <img alt="icon" class="menu-icon" src="/media/icons/sliders.svg" width="24px" />

        <span class="menu-text">Управление</span>

        <i class="menu-arrow"></i>
      </a>

      <div class="menu-submenu menu-submenu-classic menu-submenu-right">
        <ul class="menu-subnav">
          <nuxt-link v-slot="{ href, navigate, isActive, isExactActive }" to="/projects">
            <li
              :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
              aria-haspopup="true"
              class="menu-item"
              data-menu-toggle="hover"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <span class="menu-text">Проекты</span>
              </a>
            </li>
          </nuxt-link>

          <nuxt-link v-slot="{ href, navigate, isActive, isExactActive }" to="/profile/profile-2">
            <li
              :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
              aria-haspopup="true"
              class="menu-item"
              data-menu-toggle="hover"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <span class="menu-text">Сервисы</span>
              </a>
            </li>
          </nuxt-link>

          <nuxt-link v-slot="{ href, navigate, isActive, isExactActive }" to="/organizations">
            <li
              :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
              aria-haspopup="true"
              class="menu-item"
              data-menu-toggle="hover"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <span class="menu-text">Организации</span>
              </a>
            </li>
          </nuxt-link>

          <nuxt-link v-slot="{ href, navigate, isActive, isExactActive }" to="/settings/admin">
            <li
              :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
              aria-haspopup="true"
              class="menu-item"
              data-menu-toggle="hover"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <span class="menu-text">Настройки</span>
              </a>
            </li>
          </nuxt-link>
        </ul>
      </div>
    </li>

    <nuxt-link v-slot="{ href, navigate, isActive, isExactActive }" to="/dashboard">
      <li
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
        aria-haspopup="true"
        class="menu-item"
        data-menu-toggle="hover"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <img alt="icon" class="menu-icon" src="/media/icons/market.svg" width="24px" />

          <span class="menu-text">Маркетплейс</span>
        </a>
      </li>
    </nuxt-link>

    <nuxt-link v-slot="{ href, navigate, isActive, isExactActive }" to="/notify-task">
      <li
        :class="[isActive && 'menu-item-active', isExactActive && 'menu-item-active']"
        aria-haspopup="true"
        class="menu-item"
        data-menu-toggle="hover"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <img alt="icon" class="menu-icon" src="/media/icons/settings.svg" width="24px" />

          <span class="menu-text">Задачи и уведомления </span>
        </a>
      </li>
    </nuxt-link>
  </ul>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'NipMenu',
};
</script>

<style scoped>
img {
  max-width: 24px !important;
  max-height: 24px !important;
}

.menu-text {
  margin-left: 10px;
  font-size: 14px;
  color: #fff !important;
}

.menu-link {
  padding: 9px 20px !important;
}
</style>
