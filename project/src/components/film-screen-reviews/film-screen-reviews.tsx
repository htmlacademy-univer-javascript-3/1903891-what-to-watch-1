import {Comment} from '../../types/comment';
import CommentItem from '../comment-item/comment-item';
import {useAppSelector} from '../../hooks/hooks-toolkit';

type GetTwoArrayComments = {
  commentArray: Comment[],
  id: number
}

function getTwoArrayComments(arrayComments: Comment[]): [GetTwoArrayComments, GetTwoArrayComments] {
  const lengthArray = Math.ceil(arrayComments.length / 2);
  console.log(lengthArray);
  const firstArrayComment = arrayComments.slice(0, lengthArray);
  const secondArrayComment = arrayComments.slice(lengthArray);
  return [{commentArray: firstArrayComment, id: 1}, {commentArray: secondArrayComment, id: 2}];
}

function FilmScreenReviews() {
  const comments = useAppSelector((state) => state.filmCard.commentsByID);
  const arrayColumns = getTwoArrayComments(comments);

  return (
    <div className="film-card__reviews film-card__row">
      {
        comments.length === 0 ? (
          <div>Комментариев еще нет</div>
        ) : (
          <>
            {
              arrayColumns.map((col) => (
                <div className="film-card__reviews-col" key={col.id}>
                  {col.commentArray.map((comment) => <CommentItem comment={comment} key={comment.id}/>)}
                </div>
              ))
            }
          </>
        )
      }
    </div>

  );
}

export default FilmScreenReviews;
