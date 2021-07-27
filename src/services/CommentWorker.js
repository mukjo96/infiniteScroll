import { commentAPI } from './apis/comment';

class CommentWorker {
  constructor() {
    this.page = 1;
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
