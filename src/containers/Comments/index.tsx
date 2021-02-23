import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import IComment from '../../core/models/comment.model';
import { listComments } from '../../core/store/comments/actions';
import CustomCard from '../../components/CustomCard';

interface ICommentSelector {
  loading: boolean;
  error: string;
  comments: IComment[];
  postId: number;
}
const Comments = () => {
  const commentList = useSelector((state: any) => state.comments);
  const [page, setpage] = useState(1);
  const dispatch = useDispatch();
  const { error, postId, comments = [] }: ICommentSelector = commentList;
  const tempPostId = useRef(postId);

  const handleScroll = (event: any) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setpage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    tempPostId.current = postId;
  }, [postId]);

  useEffect(() => {
    if (tempPostId.current) {
      dispatch(listComments(tempPostId.current, page));
    }
  }, [dispatch, page]);

  if (error) return <div>Something went wrong</div>;
  return (
    <div onScroll={handleScroll} className="comments">
      {comments.map((comment: any, index: number) => (
        <CustomCard type="comment" title="Reply" data={comment} key={index} />
      ))}
    </div>
  );
};

export default Comments;
