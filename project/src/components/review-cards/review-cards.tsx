import ReviewItem from '../review-item/review-item';
import '../../css/main.min.css';

function ReviewCards() {
  return (
    <div className="film-card__reviews-col">
      {[...new Array(3)].map((el) => (
        <ReviewItem key={el}/>
      ))}
    </div>
  );
}

export default ReviewCards;
