<template>
  <ul class="navi navi-hover py-4">
    <template v-for="(item, i) in languages">
      <li :key="i" :class="{ 'navi-item-active': activeLang }" class="navi-item">
        <a :data-lang="item.lang" class="navi-link" href="#">
          <span class="symbol symbol-20 mr-3">
            <img :src="item.flag" alt="" />
          </span>

          <span class="navi-text">{{ item.name }}</span>
        </a>
      </li>
    </template>
  </ul>
</template>

<script>
import i18nService from '@/services/i18n.service.js';

export default {
  name: 'DropdownLanguage',
  data() {
    return {
      languages: i18nService.languages,
      activeLang: false,
    };
  },
};
</script>
