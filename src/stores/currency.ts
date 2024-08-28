import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import type { CurrencyTableRow } from '@/application/componentResources/CurrencyTable';
import type { CurrencyResponse } from '@/application/types/api/resources/currency';

export const useCurrencyStore = defineStore('currency', () => {
  const currenciesList = ref<CurrencyResponse[]>([])
  const editedCurrenciesList = ref<CurrencyTableRow[]>([])

  const currenciesTableRows = computed<CurrencyTableRow[]>(() => {
    return currenciesList.value.map((item) => {
      return {
        name: item.txt,
        short: item.cc,
        rate: item.rate,
        id: item.r030,
      }
    })
  })

  function findCurrencyForEdit(id: number) {
    const isAlreadyEdited = editedCurrenciesList.value.some((item) => item.id === id)

    if (isAlreadyEdited) {
      return editedCurrenciesList.value.find((item) => item.id === id)
    }

    return currenciesTableRows.value.find((item) => item.id === id)
  }

  function saveEditedCurrency(currency: CurrencyTableRow) {
    const indexEditedCurrency = editedCurrenciesList.value.findIndex((item) => item.id === currency.id)

    if(indexEditedCurrency !== -1) {
      editedCurrenciesList.value[indexEditedCurrency] = currency

      return
    }
    
    editedCurrenciesList.value.unshift(currency)
  }

  return {
    currenciesList,
    editedCurrenciesList,
    currenciesTableRows,
    findCurrencyForEdit,
    saveEditedCurrency,
  }
})

export default useCurrencyStore
