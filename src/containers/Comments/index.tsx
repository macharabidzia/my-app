import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import IComment from '../../core/models/comment.model';
import { listComments } from '../../core/store/comments/actions';
import CustomCard from '../../components/CustomCard';
import { addReply } from '../../core/store/replies/actions';
import CustomTag from '../../components/CustomTag';
import { listSuggestions } from '../../core/store/suggestions/actions';
import { Badge } from 'reactstrap';
import { listTags } from '../../core/store/tags/actions';

interface ICommentSelector {
  loading: boolean;
  error: string;
  comments: IComment[];
  postId: number;
}
const Comments = () => {
  const commentList = useSelector((state: any) => state.comments);
  const { error, postId, comments = [] }: ICommentSelector = commentList;

  const repliesList = useSelector((state: any) => state.replies);
  const { replies = [] }: any = repliesList;

  const suggeestionList = useSelector((state: any) => state.suggestions);
  const { suggestions = [] }: any = suggeestionList;

  const tagsList = useSelector((state: any) => state.tags);
  const { tags = [] }: any = tagsList;

  const [page, setpage] = useState(1);

  const dispatch = useDispatch();

  const tempPostId = useRef(postId);

  const handleScroll = (event: any) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setpage((prev) => prev + 1);
    }
  };
  const addReplyHandler = (event: any, value: string, commentId: number) => {
    dispatch(
      addReply({
        postId,
        commentId,
        text: value,
        userId: 1,
        id: replies.length + 1,
      })
    );
  };

  useEffect(() => {
    tempPostId.current = postId;
  }, [postId]);
  useEffect(() => {
    dispatch(listSuggestions());
    dispatch(listTags());
  }, [dispatch]);
  useEffect(() => {
    if (tempPostId.current) {
      dispatch(listComments(tempPostId.current, page));
    }
  }, [dispatch, page]);

  if (error) return <div>Something went wrong</div>;

  return (
    <div onScroll={handleScroll} className="comments">
      {comments.map((comment: any, index: number) => (
        <div key={index}>
          {tags.map(
            (tag: any, tagIndex: number) =>
              tag.commentId === comment.id && (
                <Badge key={tagIndex}>{tag.text}</Badge>
              )
          )}
          <br />
          <CustomCard
            onClick={addReplyHandler}
            type="comment"
            title="Reply"
            data={comment}
          >
            {replies.map(
              (reply: any, replyIndex: number) =>
                reply.commentId === comment.id && (
                  <div key={replyIndex}>{reply.text}</div>
                )
            )}
          </CustomCard>
          {suggestions.length > 0 && (
            <CustomTag commentId={comment.id} suggestions={suggestions} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Comments;
