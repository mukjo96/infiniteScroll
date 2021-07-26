import axios from 'axios';

// NOTE: 인자로 들어온 페이지에 해당하는 걸 가져와야함

export const commentAPI = {
  getComments: (page) =>
    axios({
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`,
    }),
};
