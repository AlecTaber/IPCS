import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../utils/helpers';

function Nav({ openPage }) {
  const pages = ['about', 'services', 'testimonials', 'training', 'resources', 'contact'];

  return (
    <nav>
      <ul className="flex-row">
        <li
          className={`mx-5 ${openPage === '/' && 'navActive'}`}
          key="Home"
        >
          <Link to="/">Home</Link>
        </li>
        {pages.map((Page) => (
          <li
            className={`mx-5 ${openPage === `/${Page}` && 'navActive'}`}
            key={Page}
          >
            <Link to={`/${Page}`}>{capitalizeFirstLetter(Page)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
