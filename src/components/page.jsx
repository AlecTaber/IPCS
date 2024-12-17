import { useEffect } from 'react';
import Content from './Content.jsx';
import { capitalizeFirstLetter } from '../utils/helpers.js';
import { Outlet } from 'react-router-dom';

function Page({ openPage }) {
  openPage = openPage.substring(1);

  useEffect(() => {
    document.title = capitalizeFirstLetter(openPage);
  }, [openPage]);

  return (
    <section>
      <h2>{capitalizeFirstLetter(openPage)}</h2>

      <Content>
        <Outlet />
      </Content>
    </section>
  );
}
export default Page;
