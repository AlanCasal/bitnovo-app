import api from '@/src/api/api';

const orderApi = {
  getPaymentInfo: async (identifier: string) => {
    const response = await api.get(`/orders/info/${identifier}`);
    return response?.data[0];
  },
};

export default orderApi;
