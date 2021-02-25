import IComment from '../../models/comment.model';

export interface ISComments {
  loading: boolean;
  comments: IComment[];
  postId?: number;
  error?: any;
}
