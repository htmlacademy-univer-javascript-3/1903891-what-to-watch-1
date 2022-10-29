import {useParams} from 'react-router-dom';
import {Comment} from '../../types/comment';
import CommentItem from '../comment-item/comment-item';
import {store} from '../../store/store';
import {getCommentsByID} from '../../store/api-actions';
import {useAppSelector} from '../../hooks/hooks-toolkit';

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

function FilmScreenReviews() {
  const {id} = useParams();
  store.dispatch(getCommentsByID(id));
  const comments: Comment[] = useAppSelector((state) => state.films.commentsByID)
  const arrayColumns = getTwoArrayComments(comments);

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
