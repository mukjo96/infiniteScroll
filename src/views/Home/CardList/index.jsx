import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card/index';
import CommentWorker from 'services/CommentWorker.js';
import { useIntersectionObserver } from 'hooks/useIntersectionObserver.jsx';
import { LIMIT } from 'constants/commentAPI.js';

function CardList() {
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentWorker] = useState(new CommentWorker());
  const [lastPage, setLastPage] = useState(false);

  const setObservationTarget = useIntersectionObserver(async () => {
    setIsLoading(true);
    const newComments = await commentWorker.getMoreComments();
    if (newComments.length < LIMIT) {
      setLastPage(true);
    }
    setComments((comments) => [...comments, ...newComments]);
    setIsLoading(false);
  });
  return (
    <StyledCardListContainer>
      {comments.map((comment) => (
        <Card key={comment.id} comment={comment} />
      ))}
      {lastPage && <div>더이상 불러올 데이터가 없습니다...</div>}
      {!lastPage && isLoading && <div>Loading...</div>}
      {!lastPage && !isLoading && <div ref={setObservationTarget}></div>}
    </StyledCardListContainer>
  );
}

export default React.memo(CardList);

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
