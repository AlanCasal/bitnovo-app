export enum CurrenciesEnum {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
}

export enum CurrencySymbol {
  USD = '$',
  EUR = '€',
  GBP = '£',
}

export interface Currency {
  shortName: CurrenciesEnum;
  symbol: CurrencySymbol;
}

export interface PaymentOrder {
  fiat: CurrenciesEnum;
  identifier: string;
  language: string;
  need_dni: boolean;
  reference: string;
  web_url: string;
}

export enum PaymentStatusEnum {
  PENDING = 'pending',
  COMPLETED = 'completed',
}
