import styled from "styled-components";

export const Card = styled.div`
  margin-bottom: 32px;
  border-radius: 6px;
  border: #dedede 1px solid;
  padding: 16px;
`;

export const CardCoverArea = styled.div`
  margin: -16px -16px 16px;
`;

export const CardThumbnailImage = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 6px;
`;

export const CardText = styled.p`
  font-size: 16px;
  color: #333333;
`;
