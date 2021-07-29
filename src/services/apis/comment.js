import { LIMIT } from 'constants/commentAPI.js';
import { axiosInstance } from './axiosInstance';

export const commentAPI = {
  getComments: (page) =>
    axiosInstance.request({
      method: 'GET',
      url: '/comments',
      params: {
        _page: page,
        _limit: LIMIT,
      },
    }),
};
