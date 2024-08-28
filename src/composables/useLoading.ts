import { computed, ref } from 'vue';

import { RequestStatus } from '@/application/types/api/config';

export default function () {
  const loadingStatus = ref<RequestStatus>(RequestStatus.IDLE)

  const isLoading = computed<boolean>(() => {
    return loadingStatus.value === RequestStatus.Pending
  })

  function changeLoadingStatus(value: RequestStatus) {
    loadingStatus.value = value
  }

  function loadingSucceed() {
    changeLoadingStatus(RequestStatus.Success)
  }

  function loadingFailed() {
    changeLoadingStatus(RequestStatus.Error)
  }

  function loadingBegan() {
    changeLoadingStatus(RequestStatus.Pending)
  }

  function resetLoadingStatus() {
    changeLoadingStatus(RequestStatus.IDLE)
  }

  return {
    loadingStatus,
    isLoading,
    changeLoadingStatus,
    loadingSucceed,
    loadingFailed,
    loadingBegan,
    resetLoadingStatus,
  }
}

