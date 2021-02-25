import IReply from '../../models/reply.model';

export interface ISReplies {
  loading: boolean;
  replies: IReply[];
  postId?: number;
  error?: any;
}
