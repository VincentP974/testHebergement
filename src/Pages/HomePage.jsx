import React from 'react';
import "./HomePage.scss";
import Banner from '../components/Banner.jsx';
import ApartmentGrid from '../components/ApartmentGrid.jsx';
import Main from '../Layout/Main.jsx';


function HomePage() {
  return (
    <div>
      <Main>
        <>
          <Banner />
          <ApartmentGrid />
        </>
      </Main>
    </div>
  );
};

export default HomePage;