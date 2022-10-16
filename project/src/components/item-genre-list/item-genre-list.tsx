import {useAppDispatch} from '../../hooks/hooks-toolkit';
import {changeGenreAction} from '../../store/film-list/film-list.action';

type ItemGenreListProps = {
  genre: string;
  active: boolean
}

function ItemGenreList(props: ItemGenreListProps,) {
  const {genre, active} = props;
  const dispatch = useAppDispatch();

  const handlerClick = () => {
    dispatch(changeGenreAction(genre));
  };
  return (
    <li className={`catalog__genres-item ${active ? 'catalog__genres-item--active' : ''}`}>
      <div className="catalog__genres-link" onClick={handlerClick}>{genre}</div>
    </li>
  );
}

export default ItemGenreList;
