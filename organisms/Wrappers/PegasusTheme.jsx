import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import Card from 'components/molecules/Card/Card';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';
import SimpleCarousel from 'components/molecules/SimpleCarousel/SimpleCarousel';

import noir1 from 'assets/esdethemes/es-de_epicnoir_01.png';
import noir2 from 'assets/esdethemes/es-de_epicnoir_02.png';
import modern1 from 'assets/esdethemes/es-de_modern_01.png';
import modern2 from 'assets/esdethemes/es-de_modern_02.png';
import rbsimple1 from 'assets/esdethemes/es-de_rbsimple_01.png';
import rbsimple2 from 'assets/esdethemes/es-de_rbsimple_02.png';
import alekfull1 from 'assets/esdethemes/es-de_alekfull1.jpg';
import alekfull2 from 'assets/esdethemes/es-de_alekfull2.jpg';

import modern from 'assets/ES-DE_01.png';

const noirPics = [
  <img src={noir1} alt="Background" />,
  <img src={noir2} alt="Background" />,
];
const rbsimplePics = [
  <img src={rbsimple1} alt="Background" />,
  <img src={rbsimple2} alt="Background" />,
];
const modernPics = [
  <img src={modern1} alt="Background" />,
  <img src={modern2} alt="Background" />,
];

const alekPics = [
  <img src={alekfull1} alt="Background" />,
  <img src={alekfull2} alt="Background" />,
];

const PegasusTheme = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  next,
  back,
  data,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { theme, system } = state;
  return (
    <>
      <p className="lead">
        Choose your theme for EmulationStation DE, swipe to see more
        screenshots.
      </p>
      <Main>
        <SelectorMenu>
          <div className="selector-menu__img">
            <SimpleCarousel
              nav={false}
              img={noirPics}
              css={theme != 'EPICNOIR' && 'is-hidden'}
            />
            <SimpleCarousel
              nav={false}
              img={rbsimplePics}
              css={theme != 'RBSIMPLE-DE' && 'is-hidden'}
            />
            <SimpleCarousel
              nav={false}
              img={modernPics}
              css={theme != 'MODERN-DE' && 'is-hidden'}
            />
            {/*}
                <SimpleCarousel
                  nav={false}
                  img={alekPics}
                  css={theme != 'ALEK-DE' && 'is-hidden'}
                />*/}
          </div>
          <div className="selector-menu__options selector-menu__options--full">
            <ul>
              <li onClick={() => onClick('EPICNOIR')}>
                <Card css={theme == 'EPICNOIR' && 'is-selected'}>
                  <span className="h5">Epic Noir</span>
                </Card>
              </li>
              <li onClick={() => onClick('RBSIMPLE-DE')}>
                <Card css={theme == 'RBSIMPLE-DE' && 'is-selected'}>
                  <span className="h5">RBSimple</span>
                </Card>
              </li>
              <li onClick={() => onClick('MODERN-DE')}>
                <Card css={theme == 'MODERN-DE' && 'is-selected'}>
                  <span className="h5">Modern</span>
                </Card>
              </li>
              {/*
                  <li onClick={() => onClick('ALEK-DE')}>
                    <Card css={theme == 'ALEK-DE' && 'is-selected'}>
                      <span className="h5">Alekfull NX</span>
                    </Card>
                  </li>
                  */}
            </ul>
          </div>
        </SelectorMenu>
      </Main>
    </>
  );
};

export default PegasusTheme;
