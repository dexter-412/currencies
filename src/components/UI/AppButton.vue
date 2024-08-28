<template>
  <QBtn
    color="primary"
    v-bind="$attrs"
  >
    <template
      v-for="(slot, index) of Object.keys($slots)"
      :key="index"
      #[slot]
    >
      <slot :name="slot"></slot>
    </template>
  </QBtn>
</template>