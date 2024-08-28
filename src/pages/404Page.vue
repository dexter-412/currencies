<template>
  <div class="page-404">
    <h1 class="page-404__title">
      Page not found 404
    </h1>

    <AppButton
      :to="{name: RouteName.Home}"
      label="Повернутись на головну"
      class="page-404__back-link"
    />
  </div>
</template>

<script setup lang="ts">
import { RouteName } from '@/application/types/app/enums';
import AppButton from '@/components/ui/AppButton.vue';
</script>

<style scoped lang="scss">
.page-404 {
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
}
</style>
