import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import IPost from '../../core/models/post.model';
import { setActivePostId } from '../../core/store/comments/actions';
import { listPosts } from '../../core/store/posts/actions';
import CustomCard from '../../components/CustomCard';
interface IPostList {
  loading: boolean;
  error: string;
  posts: IPost[];
}
const Posts = () => {
  const [page, setpage] = useState(1);
  const [currentPosts, setCurrentPosts]: any = useState([]);
  const dispatch = useDispatch();

  const postList = useSelector((state: any) => state.posts);
  const { loading = true, error, posts = [] }: IPostList = postList;

  const handleClick = (id: number) => {
    dispatch(setActivePostId(id));
  };

  const handleScroll = (event: any) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setpage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    dispatch(listPosts(page));
  }, [dispatch, page]);

  useEffect(() => {
    setCurrentPosts((prev: any) => [...prev, ...posts]);
  }, [posts]);

  return (
    <div onScroll={handleScroll} className="posts">
      {currentPosts.map((post: any, index: any) => (
        <CustomCard
          onClick={() => handleClick(post.id)}
          data={post}
          key={index}
          title="Comments"
        />
      ))}
    </div>
  );
};

export default Posts;
