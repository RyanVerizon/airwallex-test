import React, { useState } from 'react';
import Button from '~components/button';
import InviteModal from '~containers/invite-modal';

const PageHome = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="home">
      <div className="home__container">
        <h1 className="home__title">
          A better way
          <br />
          to enjoy every day.
        </h1>
        <p className="home__summary">Be the first to know when we launch.</p>
        <Button onClick={() => { setModalOpen(true); }}>Request an invite</Button>
      </div>

      <If condition={modalOpen}>
        <InviteModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </If>
    </section>
  );
};

export default PageHome;
