import {Comment} from '../../types/comment';

type CommentItemProps = {
  comment: Comment
}

function getMonthString(numberMonth: number): string {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  return monthNames[numberMonth];
}

function CommentItem(props: CommentItemProps) {
  const {comment} = props;
  const commentDate = new Date(comment.date);

  const dataCommentHumanType = `${getMonthString(commentDate?.getMonth())} ${commentDate?.getDate()}, ${commentDate?.getFullYear()}`;
  const dataCommentProgramType = [commentDate?.getFullYear(), commentDate?.getMonth() + 1, commentDate?.getDate()].join('-');

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment?.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment?.user.name}</cite>
          <time className="review__date" dateTime={dataCommentProgramType}>{dataCommentHumanType}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment?.rating}</div>
    </div>
  );
}

export default CommentItem;
