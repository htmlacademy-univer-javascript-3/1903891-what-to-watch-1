import {useParams} from 'react-router-dom';
import {Comment} from '../../types/comment';
import CommentItem from '../comment-item/comment-item';

type FilmScreenReviewsProps = {
  comments: Comment[]
}

type GetTwoArrayComments = {
  commentArray: Comment[],
  id: number
}

function getTwoArrayComments(arrayComments: Comment[]): [GetTwoArrayComments, GetTwoArrayComments] {
  const lengthArray = arrayComments.length / 2;
  const secondArrayComment = arrayComments.slice(0, lengthArray);
  const firstArrayComment = arrayComments.slice(lengthArray);
  return [{commentArray: firstArrayComment, id: 1}, {commentArray: secondArrayComment, id: 2}];
}

function FilmScreenReviews(props: FilmScreenReviewsProps) {
  const {comments} = props;
  const {id} = useParams();
  const filmComments = comments.filter((commentItem: Comment) => commentItem.filmId.toString() === id);
  const arrayColumns = getTwoArrayComments(filmComments);

  return (
    <div className="film-card__reviews film-card__row">
      {arrayColumns.map((col) => (
        <div className="film-card__reviews-col" key={col.id}>
          {col.commentArray.map((comment) => <CommentItem comment={comment} key={comment.id}/>)}
        </div>
      ))}
    </div>
  );
}

export default FilmScreenReviews;
