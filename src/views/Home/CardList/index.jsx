import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Card from './Card/index';
import CommentWorker from '../../../services/CommentWorker';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

function CardList() {
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentWorker] = useState(new CommentWorker());

  const fetchMoreComments = useCallback(async () => {
    setIsLoading(true);
    const newComments = await commentWorker.getCommentByPage();
    setComments((comments) => [...comments, ...newComments]);
    setIsLoading(false);
  }, [commentWorker]);
  const setTargetObserver = useIntersectionObserver(fetchMoreComments);

  return (
    <StyledCardListContainer>
      {comments.map((comment) => (
        <Card key={comment.id} comment={comment} />
      ))}
      {isLoading && <div>Loading...</div>}
      {!isLoading && <div ref={setTargetObserver}></div>}
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
