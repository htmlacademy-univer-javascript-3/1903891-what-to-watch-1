import {useState} from 'react';

function CommentSubmissionForm() {
  const [reviewText, setReviewText] = useState('');
  return (
    <form className="add-review__text">
      <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={reviewText} onChange={(event) => {
        setReviewText(event.target.value);
      }}
      />
      <div className="add-review__submit">
        <button className="add-review__btn" type="submit">Post</button>
      </div>
    </form>
  );
}

export default CommentSubmissionForm;
