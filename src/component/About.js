import React, {useState, useEffect } from 'react'
import ReviewForm from "./ReviewForm"

const About = props => {
    const [reviews, setReviews] = useState([])
  
    useEffect(()=>{
        fetch('https://boiling-falls-26905.herokuapp.com/reviews')
        .then((r) => r.json())
        .then((reviews) => setReviews(reviews))
      }, []);   
      console.log(reviews);

      function onAddReview(newReview){
          setReviews([...reviews,newReview])
      }
    return (
        <div>
           <h1>Our Story</h1>
           <p>Hi, I'm Mike. I've been breathing life into old motorcycles for five years.</p>
           <img width="300" height="300" src="https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/257629254_436181924541812_6286573123512835835_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Qgt7eqr8VD0AX_XrLZu&_nc_ht=scontent-iad3-2.xx&oh=00_AT9LeJrK_Q1AK1ULb68-rrGR25UkUYAr_NjxPYe73LNU4w&oe=61D7BA0F" />

           <h2> What Our Customers Say</h2>
           {reviews.map(review => <p>{review.text}</p>)} 
            <ReviewForm onAddReview={onAddReview}/>
        </div>
    )
}

export default About
