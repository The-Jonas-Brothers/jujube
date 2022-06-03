import React, { useRef } from "react";
import ReactDom from "react-dom";
import Star from './Star.jsx';
import Recommend from './Recommend.jsx';
import Characteristics from './Characteristics.jsx';
import Summary from './Summary.jsx';
import Body from './Body.jsx';
import PhotoUpload from './PhotoUpload.jsx';
import UsernameEmail from './UsernameEmail.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  margin: 5px;
`
export const CreateReview = ({characteristics, product_id, name}) => {
  const [rating, setRating] = useState(null);
  const [recommended, setRecommended] = useState(null);
  let [choiceObj, setChoiceObj] = useState({})
  const [summary, setSummary] = useState('');
  let [body, setBody] = useState('');
  let [images, setImages] = useState([]);
  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');
  let [imagesToPost, setImagesToPost] = useState([])

  const handlePostVerification = () => {
    if(images.length === 0) {
      setImagesToPost(null);
    } else {
      setImagesToPost(images)
    }

    const validEmail = (email) => {
      let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (email.match(mailFormat)) {
        return (true)
      } else {
        return (false)
      }
    }

<<<<<<< HEAD
export const CreateReview = ({characteristics}) => {
=======
    let params = {
      'product_id': product_id,
      'rating': rating,
      'summary': summary,
      'body': body,
      'recommend': recommended,
      'name': username,
      'email': email,
      'photos': imagesToPost,
      'characteristics': choiceObj
    }


    if(validEmail(email)) {
      axios.post('/api/reviews', params)
      .then(() => {
        alert('posted!')
      })
    } else {
      alert('invalid email format');
    }

  };
>>>>>>> main
  return (
    <div>
      <h2 style={{fontFamily:'Shrikhand'}}>{name}</h2>
      <Container>
        <Star rating={rating} setRating={setRating}/>
      </Container>

      <Recommend setRecommended={setRecommended}/>
      <Container>
        <Characteristics characteristics={characteristics} choiceObj={choiceObj} setChoiceObj={setChoiceObj}/>
      </Container>

      <Summary setSummary={setSummary}/>

      <Body setBody={setBody}/>

      <PhotoUpload images={images} setImages={setImages}/>

      <UsernameEmail setUsername={setUsername} setEmail={setEmail}/>

      <button onClick={handlePostVerification}>submit review</button>
    </div>
  );
};
export default CreateReview;