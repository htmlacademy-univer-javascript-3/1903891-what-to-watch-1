import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import FilmCard from '../../components/film-card/film-card';
import HeaderLoginIn from '../../components/header-login-in/header-login-in';
import '../../css/main.min.css';

function MyListScreen() {
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
          {[...new Array(9)].map((el) => (
            <FilmCard key={el}/>
          ))}
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default MyListScreen;
