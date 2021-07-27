import { axiosInstance } from './axiosInstance';

export const commentAPI = {
  getComments: (page) =>
    axiosInstance.request({
      method: 'GET',
      url: '/comments',
      params: {
        _page: page,
        _limit: '10',
      },
    }),
};
