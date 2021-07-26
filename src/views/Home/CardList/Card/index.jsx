import React from 'react';
import styled from 'styled-components';

function Card({ comment }) {
  return (
    <CardContainer>
      <IdAndEmailContainer>
        <Title>Comment Id</Title>
        <Contents>{comment.id}</Contents>
      </IdAndEmailContainer>
      <IdAndEmailContainer>
        <Title>Email</Title>
        <Contents>{comment.email}</Contents>
      </IdAndEmailContainer>
      <CommentContainer>
        <Title>Comment</Title>
        <Contents>{comment.body}</Contents>
      </CommentContainer>
    </CardContainer>
  );
}

export default React.memo(Card);

const CardContainer = styled.div`
  padding: 20px;
  width: 500px;
  background-color: #f8f9fa;
  border: 0.5px solid #ced4da;
  border-radius: 20px;
  margin-bottom: 14px;
`;

const IdAndEmailContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const CommentContainer = styled.div``;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-right: 12px;
  margin-bottom: 2px;
`;

const Contents = styled.span`
  font-size: 18px;
`;
