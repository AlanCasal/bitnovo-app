import { Platform } from 'react-native';

export const IS_IOS = Platform.OS === 'ios';

export const LIGHT_BLUE = '#71B0FD';
export const PRIMARY_BLUE = '#035AC5';
export const PRIMARY_TEXT_COLOR = '#002859';

export const WHITE = '#FFFFFF';
export const WHITE_2 = '#F9FAFC';

export const LIGHT_GRAY = '#EFF2F7';
export const LIGHT_GRAY_2 = '#EAF3FF';
export const LIGHT_GRAY_3 = '#E5E9F2';
export const LIGHT_GRAY_4 = '#D3DCE6';
export const LIGHT_GRAY_5 = '#C0CCDA';
export const LIGHT_GRAY_6 = '#647184';
export const LIGHT_GRAY_7 = '#D3DCE64D';

export const IOS_SHADOW_COLOR = '#60617029';
export const ANDROID_SHADOW_COLOR = '#000';

export const MULISH_400 = 'Mulish_400Regular';
export const MULISH_600 = 'Mulish_600SemiBold';
export const MULISH_700 = 'Mulish_700Bold';

export const BLUR_HASH =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export enum ShareItemName {
  LINK = 'link',
  EMAIL = 'email',
  WHATSAPP = 'whatsapp',
  EXPORT = 'export',
}

export const paymentBodyMessage = (paymentLink: string, concept: string) =>
  `Enlace de pago: ${paymentLink}\nConcepto: ${concept}`;

export const isValidNumber = (value: string) => /^\d*$/.test(value);

export const isValidNumberWithDecimal = (value: string) =>
  /^\d*\.?\d*$/.test(value);
