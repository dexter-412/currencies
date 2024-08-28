<template>
  <CurrencyTable
    :rows="currencyStore.editedCurrenciesList"
    class="currency-table"
  />
</template>

<script setup lang="ts">
import CurrencyTable from '@/components/CurrencyTable.vue';
import useCurrencyStore from '@/stores/currency';

const currencyStore = useCurrencyStore()
</script>

<style scoped lang="scss">
.currency-table {
  max-width: 1000px;
  margin: 0 auto;
}
</style>