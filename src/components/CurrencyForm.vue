<template>
  <AppForm
    class="currency-form"
    @submit="onSubmit"
  >
    <AppInput
      v-model="name"
      :error-message="errors.name"
      :error="!!errors.name"
      label="Назва"
    />

    <AppInput
      v-model="short"
      :error-message="errors.short"
      :error="!!errors.short"
      label="Скорочення"
    />

    <AppInput
      v-model="rate"
      :error-message="errors.rate"
      :error="!!errors.rate"
      label="Рейт"
    />

    <div class="currency-form__actions">
      <AppButton @click="$router.back()">
        Назад
      </AppButton>
      <AppButton type="submit">
        Зберегти
      </AppButton>
    </div>
  </AppForm>
</template>

<script setup lang="ts">
import
useCurrencyValidation,
{ type CurrencyFormFields }
  from '@/composables/useCurrencyValidation';

import { ComponentEvent } from '@/application/types/app/events';
import AppForm from '@/components/form/AppForm.vue';
import AppInput from '@/components/form/AppInput.vue';
import AppButton from '@/components/UI/AppButton.vue';

interface Emits {
  (event: ComponentEvent.SubmitForm, value: CurrencyFormFields): void,
}

const emit = defineEmits<Emits>()

interface Props {
  initialValues?: CurrencyFormFields | undefined,
}

const props = withDefaults(defineProps<Props>(), {
  initialValues: undefined,
})

const {
  defineField,
  handleSubmit,
  errors,
  setFieldValue,
} = useCurrencyValidation()

const [name] = defineField('name')
const [short] = defineField('short')
const [rate] = defineField('rate')

if(props.initialValues !== undefined) {
  setFieldValue('name', props.initialValues.name)
  setFieldValue('short', props.initialValues.short)
  setFieldValue('rate', props.initialValues.rate)
}

const onSubmit = handleSubmit((values: CurrencyFormFields) => {
  emit(ComponentEvent.SubmitForm, values)
})
</script>

<style scoped lang="scss">
.currency-form {
  max-width: 700px;
  margin: 0 auto;

  &__actions {
    display: flex;
    gap: 12px;
    margin-top: 12px;
  }
}
</style>