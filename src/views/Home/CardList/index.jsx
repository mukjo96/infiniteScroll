import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Card from './Card/index';
import CommentWorker from '../../../services/CommentWorker';

export default function CardList() {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [commentWorker] = useState(new CommentWorker());
  const [element, setElement] = useState(null);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          fetchMoreComments();
        }
      },
      { threshold: 1 }
    )
  );

  const fetchMoreComments = useCallback(async () => {
    setIsLoading(true);
    const newComments = await commentWorker.getCommentByPage();
    setComments((comments) => [...comments, ...newComments]);
    setIsLoading(false);
  }, [commentWorker]);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;
    if (currentElement) {
      currentObserver.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  useEffect(() => {
    fetchMoreComments();
  }, [fetchMoreComments]);

  return (
    <StyledCardListContainer>
      {comments.map((comment) => (
        <Card key={comment.id} comment={comment} />
      ))}
      {isLoading && <div>Loading...</div>}
      {!isLoading && <div ref={setElement}></div>}
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
