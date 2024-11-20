import { ImageSource } from 'expo-image';
import { CurrenciesEnum } from '../context/PaymentContext/types';

export type Item = {
  title: string;
  description: string;
  image: ImageSource;
};

export const CURRENCIES: Item[] = [
  {
    title: 'Euro',
    description: CurrenciesEnum.EUR,
    image: require('@/assets/images/eur.png'),
  },
  {
    title: 'Dólar Estadounidense',
    description: CurrenciesEnum.USD,
    image: require('@/assets/images/us.png'),
  },
  {
    title: 'Libra Esterlina',
    description: CurrenciesEnum.GBP,
    image: require('@/assets/images/gbp.png'),
  },
];

export const COUNTRIES: Item[] = [
  {
    title: '+34',
    description: 'España',
    image: require('@/assets/images/spa.png'),
  },
  {
    title: '+240',
    description: 'Equatorial Guinea',
    image: require('@/assets/images/gui.png'),
  },
  {
    title: '+30',
    description: 'Grecia',
    image: require('@/assets/images/gre.png'),
  },
  {
    title: '+500',
    description: 'South Georgia and the S...',
    image: require('@/assets/images/gbp.png'),
  },
  {
    title: '+502',
    description: 'Guatemala',
    image: require('@/assets/images/gua.png'),
  },
  {
    title: '+592',
    description: 'Guyana',
    image: require('@/assets/images/guy.png'),
  },
  {
    title: '+852',
    description: 'Hong Kong',
    image: require('@/assets/images/hk.png'),
  },
  {
    title: '+504',
    description: 'Honduras',
    image: require('@/assets/images/hon.png'),
  },
];

export const PAYMENT_LINK_MOCK = 'https://paytest.bitnovo.com/11111111/'; // <- save generated link in store and use it here
