<template>
  <QToolbar class="q-mb-md bg-primary text-white">
    <QList
      padding
      class="menu flex align-items-center"
    >
      <QItem
        v-for="menuItem in menuList"
        :key="menuItem.label"
        clickable
        :to="menuItem.routeName"
        class="menu__item"
        dense
      >
        <QItemLabel>{{ menuItem.label }}</QItemLabel>
      </QItem>
    </QList>
  </QToolbar>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { RouteLocationNamedRaw } from 'vue-router';

import { RouteName } from '@/application/types/app/enums';

interface MenuItem {
  label: string,
  routeName: RouteLocationNamedRaw,
}

const menuList = computed<MenuItem[]>(() => {
  return [
    {
      label: 'Головна',
      routeName: { name: RouteName.Home },
    },
    {
      label: 'Змінені курси',
      routeName: { name: RouteName.Edited },
    },
    {
      label: ' Пошук курсу',
      routeName: { name: RouteName.Search },
    },
  ]
})
</script>

<style scoped lang="scss">
.menu {
  gap: 8px;

  &__item {
    align-items: center;

    &.q-router-link--active {
      color: var(--color-accent);
      background: var(--menu-active-bg);
    }
  }
}
</style>