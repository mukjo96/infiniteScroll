import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card/index';
import { commentAPI } from '../../../services/apis/comment.js';

export default function CardList() {
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);

  const fetchMoreComments = useCallback(async () => {
    setIsLoading(true);
    const { data } = await commentAPI.getComments(page);
    setComments((comments) => [...comments, ...data]);
    setIsLoading(false);
  }, [page]);

  useEffect(() => {
    fetchMoreComments();
  }, [page, fetchMoreComments]);

  const handleScroll = ({ target }) => {
    const scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      target.scrollHeight
    );
    const scrollTop = Math.max(
      document.documentElement.scrollTop,
      target.scrollTop
    );
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight === scrollHeight && !isLoading) {
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
