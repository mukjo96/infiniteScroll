import { DEFAULT_PAGE } from 'constants/commentAPI.js';
import { commentAPI } from './apis/comment';

class CommentWorker {
  constructor() {
    this.page = DEFAULT_PAGE;
    this.commentAPI = commentAPI;
  }
  async getMoreComments() {
    try {
      const { data } = await this.commentAPI.getComments(this.page);
      this.page += 1;
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}

export default CommentWorker;
