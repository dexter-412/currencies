<template>
  <CurrencyForm
    :initial-values="editedCurrency"
    @submit:form="handleSaveCurrency"
  />
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

import type { CurrencyFormFields } from '@/composables/useCurrencyValidation';

import { RouteName } from '@/application/types/app/enums';
import CurrencyForm from '@/components/CurrencyForm.vue';
import useCurrencyStore from '@/stores/currency';

const route = useRoute()
const router = useRouter()

const currencyId = Number(route.params.id)

const currencyStore = useCurrencyStore()

const editedCurrency = currencyStore.findCurrencyForEdit(currencyId)

function handleSaveCurrency(values: CurrencyFormFields): void {
  currencyStore.saveEditedCurrency({
    id: currencyId,
    ...values,
  })

  router.push({ name: RouteName.Edited })
}
</script>