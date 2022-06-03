import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
import Ratings from './Ratings.jsx';
import styled from 'styled-components';

const ReviewContainer = styled.div`
  max-height: 580px;
  overflow: scroll;
  margin-right:20px;
  scrollbar-width: thin;
  scrollbar-color: #f9d4d3 #f35a64;
`
const Container = styled.div`
  padding: 20px;
`
const SortingContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  padding: 5px;
`
const DropDownContainer = styled.select`
  width: 100px;
  height: 30px;
  font-family: 'Petrona';
  font-weight: 500;
  border-radius: 5px;
  background-color: #e8dbd8;
  position: relative;
  menu>ul>li>ul {
    position: absolute;
    background-color: #555;
    width: 100%;
    left: 0;
    top: 100%;
    z-index: 1;
}
`
const Button = styled.button`
  margin-right: 10px;
  background-color: #e8dbd8;
  border: 2px solid #f35a64;
  border-radius: 30px;
  box-shadow: #cf2b2a 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-family: 'Patrona';
  font-size: 13px;
  font-weight: 600;
  padding: 5 15px;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  z-index: 5;

  :hover {
    background-color: #f35a64;
  }
  @media (min-width: 768px) {
    min-width: 120px;
    padding: 0 25px;
  }
`


const Reviews = ({ reviews, order, setOrder, showModal, filter, setUpdate }) => {
  let [numberToRender, setNumberToRender] = useState(2);
  let [showMoreButton, setShowMoreButton] = useState(true);
  let [reviewsToRender, setReviewsToRender] = useState(reviews);
  let [allReviews, setAllReviews] = useState(null);

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  }

  const addToRender = (event) => {
    setNumberToRender(numberToRender += 2);
    if (numberToRender >= reviews.length) {
      setShowMoreButton(false);
    }
  }
  useEffect(() => {
    setReviewsToRender(reviews);
  }, [reviews])

  useEffect (() => {
    if (filter.length !== 0 ) {
      const selectedReviews = reviews.filter((review) => filter.includes(review.rating.toString()));
      setReviewsToRender(selectedReviews)
      if (selectedReviews.length < 2) {
        setShowMoreButton(false);
      } else {
        setShowMoreButton(true);
      }
    } else {
      setReviewsToRender(reviews);
    }
  }, [filter])

  return (
    <Container>
      <SortingContainer>
        <p style={{fontFamily:'Petrona', fontWeight: 'bold'}}> {reviewsToRender.length} Reviews   --- sort by:  </p>
        <DropDownContainer  value={order} onChange={handleOrderChange}>
          <option style={{fontFamily:'Petrona', fontWeight: '500'}} value="relevant">relevance</option>
          <option style={{fontFamily:'Petrona', fontWeight: '500'}} value="helpful">helpfulness</option>
          <option style={{fontFamily:'Petrona', fontWeight: '500'}} value="newest">date</option>
        </DropDownContainer>
      </SortingContainer>
      <ReviewContainer>
        <div>
          {reviewsToRender.slice(0, numberToRender).map((review) => {
            return <Review key={review.review_id} review={review} />
          })}
        </div>
      </ReviewContainer>
        {showMoreButton ? <Button onClick={addToRender}> See more! </Button> : 'No reviews yet  '}
        <Button onClick={showModal}>Add Review +</Button>
    </Container>
  )

}

export default Reviews;