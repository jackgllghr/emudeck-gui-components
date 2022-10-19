import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';
import Step from 'components/molecules/Step/Step.js';

const DeviceSelector = ({
  onClick,
  disabledNext,
  disabledBack,
  downloadComplete,
  next,
  back,
  data,
  children,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { device } = state;

  return (
    <>
      <div className="app">
        <Aside />

        <div className="wrapper">
          <Header title="Choose your" bold="device" />
          <Main>
            <p className="lead">
              We tailor the experience depending on the selected device, each
              device has its own special configuration, different emulators and
              adjusted bezels.
            </p>

            <div className="cards">{children}</div>
          </Main>
          <Footer
            back={back}
            next={next}
            disabledNext={disabledNext}
            disabledBack={disabledBack}
          />
        </div>
      </div>
    </>
  );
};

export default DeviceSelector;
