<template>
  <div class="search-page">
    <AppDate
      :model-value="date"
      @update:model-value="handleUpdateParams"
    />

    <CurrencyTable
      :rows="currencyStore.currenciesTableRows"
      :loading="isLoading"
      class="currency-table"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import useLoading from '@/composables/useLoading';

import CurrencyClient from '@/application/api/resources/CurrencyClient';
import { toPickerFormat, toRequestFormat } from '@/application/helpers/dateFormat';
import { RouteName } from '@/application/types/app/enums';
import CurrencyTable from '@/components/CurrencyTable.vue';
import AppDate from '@/components/form/AppDate.vue';
import useCurrencyStore from '@/stores/currency';

const route = useRoute()
const router = useRouter()

const date = computed<string>(() => route.query.date || toPickerFormat(new Date()))

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
  const requestParams = {
    date: toRequestFormat(date.value),
  }

  currencyClient.fetchList(requestParams)
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

function handleUpdateParams(value: string) {
  router.push({
    name: RouteName.Search,
    query: {
      ...route.query,
      date: toPickerFormat(value),
    },
  })
}

watch(
  date,
  () => {
    fetchCurrenciesList()
  },
  { immediate: true })
</script>

<style scoped lang="scss">
.search-page {
  display: flex;
  justify-content: center;
  gap: 18px;
}
</style>