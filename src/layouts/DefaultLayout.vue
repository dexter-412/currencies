<template>
  <NavBar />

  <RouterView #default="{ Component }">
    <template v-if="Component">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </template>
  </RouterView>
</template>

<script setup lang="ts">

import NavBar from '@/components/NavBar.vue';
</script>

<style scoped>

</style>