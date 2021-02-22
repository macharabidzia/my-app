import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommentCard from '../../components/CommentCard';
import IComment from '../../core/models/comment.model';

const Comments = () => {
  const commentList = useSelector((state: any) => state.comments);

  const {
    loading = true,
    error,
    comments = [],
  }: { loading: boolean; error: string; comments: IComment[] } = commentList;

  useEffect(() => {
    console.log(comments);
  });
  return (
    <div className="comments">
      {comments.map((comment, index) => (
        <CommentCard data={comment} key={index} />
      ))}
    </div>
  );
};

export default Comments;
