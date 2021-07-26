import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card/index';
import CommentWorker from '../../../services/CommentWorker';
import { isFetchComments } from '../../../services/isFetchComments.js';

export default function CardList() {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);

  const fetchMoreComments = useCallback(async () => {
    const commentWorker = new CommentWorker();
    setIsLoading(true);
    const newComments = await commentWorker.getCommentByPage(page);
    setComments((comments) => [...comments, ...newComments]);
    setIsLoading(false);
  }, [page]);

  useEffect(() => {
    fetchMoreComments();
  }, [page, fetchMoreComments]);

  const handleScroll = ({ target }) => {
    if (isFetchComments(target)) {
      setPage(page + 1);
    }
  };

  return (
    <StyledCardListContainer onScroll={handleScroll}>
      {comments.map((comment) => (
        <Card key={comment.id} comment={comment} />
      ))}
    </StyledCardListContainer>
  );
}

const StyledCardListContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 750px;
  background-color: white;
  flex-direction: column;
  overflow-y: scroll;
  align-items: center;
  padding: 33px 0;
`;
