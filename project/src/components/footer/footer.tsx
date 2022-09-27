import Logo from '../logo/logo';
import '../../css/main.min.css';

function Footer() {
  return (
    <footer className="page-footer">
      <Logo/>
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
