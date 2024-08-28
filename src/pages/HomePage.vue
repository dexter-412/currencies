<template>
  <CurrencyTable
    :rows="currencyStore.currenciesTableRows"
    :loading="isLoading"
    class="currency-table"
  />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import useLoading from '@/composables/useLoading';

import CurrencyClient from '@/application/api/resources/CurrencyClient';
import CurrencyTable from '@/components/CurrencyTable.vue';
import useCurrencyStore from '@/stores/currency';

const currencyClient = new CurrencyClient()

const currencyStore = useCurrencyStore()

const {
  isLoading,
  loadingSucceed,
  loadingFailed,
  loadingBegan,
  resetLoadingStatus,
} = useLoading()

function fetchCurrenciesList() {
  loadingBegan()
  currencyClient.fetchList()
    .then((res) => {
      loadingSucceed()
      currencyStore.currenciesList = res.data;
    })
    .catch((error) => {
      loadingFailed()

      console.error(error)
    })
    .finally(resetLoadingStatus)
}

onMounted(fetchCurrenciesList)
</script>

<style scoped lang="scss">
.currency-table {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
