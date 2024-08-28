export enum CurrencyBackendEndpoint {
    List = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
}

export interface CurrencyResponse {
    cc: string,
    exchangedate: string,
    r030: number,
    rate: number,
    txt: string,
}

export interface CurrencyRequestParams {
    date: string,
}