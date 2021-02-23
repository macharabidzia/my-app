import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Replies = ({ data }: any) => {
  const dispatch = useDispatch();

  const repliesList = useSelector((state: any) => state.replies);
  const {
    loading = true,
    error,
    replies = [],
    postId = null,
  }: any = repliesList;

  useEffect(() => {
    console.log();
  }, [postId]);

  return (
    <div>
      {replies.map((item: any, index: number) => {
        return <div>{item.text}</div>;
      })}
    </div>
  );
};

export default Replies;
