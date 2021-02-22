import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import IComment from '../../core/models/comment.model';
import { listComments } from '../../core/store/comments/actions';
import CustomCard from '../../components/CustomCard';

const Comments = () => {
  const commentList = useSelector((state: any) => state.comments);
  const [page, setpage] = useState(1);
  const dispatch = useDispatch();
  const [currentComments, setCurrentComments]: any = useState([]);
  const {
    loading = true,
    error,
    postId,
    comments = [],
  }: {
    loading: boolean;
    error: string;
    comments: IComment[];
    postId: number;
  } = commentList;
  const tempPostId = useRef(postId);

  const handleScroll = (event: any) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setpage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (postId !== tempPostId.current) {
      setpage(1);
      setCurrentComments([]);
      tempPostId.current = postId;
    }
    dispatch(listComments(postId, page));
    tempPostId.current = postId;
  }, [dispatch, page, postId]);

  useEffect(() => {
    setCurrentComments((prev: any) => [...prev, ...comments]);
  }, [comments]);

  return (
    <div onScroll={handleScroll} className="comments">
      {currentComments.map((comment: any, index: number) => (
        <CustomCard title="Reply" data={comment} key={index} />
      ))}
    </div>
  );
};

export default Comments;
