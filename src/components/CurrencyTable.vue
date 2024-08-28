<template>
  <AppTable
    :columns="currencyTableColumns"
    :rows="filteredRows"
    :visible-columns="visibleColumns"
    @row-click="handleEditCurrency"
  >
    <template #top-left>
      <AppInput
        v-model="search"
        placeholder="Пошук"
      />
    </template>
  </AppTable>
</template>

<script setup lang="ts">
import type { QTableProps } from 'quasar';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

import type { CurrencyTableRow } from '@/application/componentResources/CurrencyTable';
import { RouteName } from '@/application/types/app/enums';
import AppInput from '@/components/form/AppInput.vue';
import AppTable from '@/components/UI/AppTable.vue';

interface Props {
  rows: CurrencyTableRow[],
}

const props = defineProps<Props>()

const router = useRouter()

const search = ref<string>('')

// Implement debounce for server side filtering
const filteredRows = computed<CurrencyTableRow[]>(() => {
  return props.rows.filter((item) => item.name.toLowerCase().includes(search.value.toLowerCase()))
})

const currencyTableColumns = ref<QTableProps['columns']>([
  {
    name: 'name',
    label: 'Назва',
    field: 'name',
    align: 'left',
  },
  {
    name: 'short',
    label: 'Скорочення',
    field: 'short',
    align: 'left',
  },
  {
    name: 'rate',
    label: 'Рейт',
    field: 'rate',
    align: 'right',
  },
  {
    field: 'id',
  },
])

const visibleColumns = ref<string[]>(['rate', 'short', 'name'])

function handleEditCurrency(_, val: CurrencyTableRow) {
  router.push({
    name: RouteName.Edit,
    params: {
      id: val.id,
    },
  });
}
</script>