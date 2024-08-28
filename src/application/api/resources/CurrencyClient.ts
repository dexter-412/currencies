import
axios,
{ type AxiosPromise } from 'axios';

import {
  CurrencyBackendEndpoint,
  type CurrencyRequestParams,
  type CurrencyResponse,
} from '@/application/types/api/resources/currency';

export interface CurrencyClientRecourse {
    fetchList(): AxiosPromise<CurrencyResponse[]>,
}

export default class CurrencyClient implements CurrencyClientRecourse{
  fetchList(params?: CurrencyRequestParams): AxiosPromise<CurrencyResponse[]> {
    return axios.get(CurrencyBackendEndpoint.List, { params: params })
  }
}