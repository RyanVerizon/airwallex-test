import React from 'react';
import Header from '~components/header';
import Footer from '~components/footer';
import PageHome from '~pages/home';

const App = () => (
  <div>
    <Header />
    <main>
      <PageHome />
    </main>
    <Footer />
  </div>
);

export default App;
