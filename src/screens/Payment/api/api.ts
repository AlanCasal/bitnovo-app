import api from '@/src/api/api';

interface CreatePaymentData {
  expected_output_amount: number;
  reference?: string;
  fiat?: string;
}

const paymentApi = {
  createPayment: async (data: CreatePaymentData) => {
    const response = await api.post('/orders/', data);
    return response;
  },
};

export default paymentApi;
