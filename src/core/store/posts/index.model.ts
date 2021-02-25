import IPost from '../../models/post.model';

export interface ISPosts {
  loading: boolean;
  posts: IPost[];
  postId?: number;
  error?: any;
}
