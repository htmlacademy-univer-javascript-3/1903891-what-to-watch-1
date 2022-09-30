import '../../css/main.min.css';
import {Link} from 'react-router-dom';

function ItemGenresList() {
  return (
    // <li className="catalog__genres-item catalog__genres-item--active">
    //   <a href="#" className="catalog__genres-link">All genres</a>
    // </li>
    <li className="catalog__genres-item">
      <Link to='/' className="catalog__genres-link">Comedies</Link>
    </li>
  );
}

export default ItemGenresList;
