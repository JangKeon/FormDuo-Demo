import * as React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import Survey_Type_Page from './modules/views/Survey_Type_Page';
import ProductHero from './modules/views/ProductHero';

function Index() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductCategories />
    </React.Fragment>
  );
}

export default Index;
