import * as React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductHero from './modules/views/ProductHero';

function Home() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductCategories />
    </React.Fragment>
  );
}

export default Home;
