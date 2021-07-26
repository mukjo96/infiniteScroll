import { commentAPI } from './apis/comment';

class CommentWorker {
  constructor() {
    this.commentAPI = commentAPI;
  }
  async getCommentByPage(page) {
    try {
      const { data } = await this.commentAPI.getComments(page);
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}

export default CommentWorker;
