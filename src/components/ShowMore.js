import React, { useState } from "react";
import styled from "styled-components";

const ShowMoreButton = styled.div`
  cursor: pointer;
  font-size: 14px;
  margin-top: ${props => (props.showMore ? `0` : `20px`)};
  margin-bottom:  ${props => (props.showMore ? `0` : `30px`)};
  text-decoration: underline;
  display: ${props => (props.showMore ? `hidden` : `block`)};
`;

const ShowMore = ({children}) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMore = () => {
    setIsShowMore(show => !show)
  }

  return (
    <>
      <ShowMoreButton showMore={isShowMore} onClick={toggleReadMore}>
        {!isShowMore &&  "Show more..."}
      </ShowMoreButton>
      {isShowMore &&
        <>
        {children}
        <ShowMoreButton onClick={toggleReadMore}>
          {isShowMore &&  "Show less..."}
        </ShowMoreButton>
      </>}
      
      </>
  );
};

export default ShowMore;
