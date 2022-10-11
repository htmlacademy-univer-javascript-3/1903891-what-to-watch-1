import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import HeaderLoginIn from '../../components/header-login-in/header-login-in';
import '../../css/main.min.css';
import {Film} from '../../types/film';

type MyListScreenProps = {
  films: Film[],
  renderFilmCard: (film: Film) => JSX.Element
}

function MyListScreen(props: MyListScreenProps) {
  const {films, renderFilmCard} = props;
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <HeaderLoginIn/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          {
            films.map((filmItem: Film) => (
              renderFilmCard(filmItem)
            ))
          }
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default MyListScreen;
