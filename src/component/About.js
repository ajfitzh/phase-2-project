import React, {useState, useEffect } from 'react'
import ReviewForm from "./ReviewForm"
import Review from "./Review"

const About = props => {
    const [reviews, setReviews] = useState([])
  
    useEffect(()=>{
        fetch('https://boiling-falls-26905.herokuapp.com/reviews')
        .then((r) => r.json())
        .then((reviews) => setReviews(reviews))
      }, []);   

      function onAddReview(newReview){
          setReviews([...reviews,newReview])
      }
    return (
        <div>
           <h1>Our Story</h1>
           <h2> What Our Customers Say</h2>
           {reviews.map(review => <Review key={review.id} text={review.text}/>)} 
            <ReviewForm onAddReview={onAddReview}/>
        </div>
    )
}

export default About
