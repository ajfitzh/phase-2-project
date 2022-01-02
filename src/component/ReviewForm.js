import React from "react";

function ReviewForm({ onAddReview }) {
  

function handleSubmit(e) {
  e.preventDefault();
  const itemData = {
    text: e.target.name.value,
    }
  fetch("https://boiling-falls-26905.herokuapp.com/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemData),
  })
    .then((r) => r.json())
    .then((newItem) => onAddReview(newItem));
}

  
  return (
    <div className="new-review-form">
      <h2>Add Your Own!</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Add Review" />
        <button type="submit">Add Review</button>
      </form>
    </div>
  );
}

export default ReviewForm;