import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import Card from 'components/molecules/Card/Card';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';

import imgBezels from 'assets/bezels.png';
import imgNoBezels from 'assets/no-bezels.png';

const RABezels = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  next,
  back,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { bezels } = state;

  return (
    <>
      <p className="lead">
        Use our pre-configured bezels to hide the vertical black bars on 8 bit
        and 16 bit games.
      </p>

      <Main>
        <SelectorMenu>
          <div className="selector-menu__img">
            <img
              src={imgBezels}
              className={bezels == false && 'is-hidden'}
              alt="Background"
            />
            <img
              src={imgNoBezels}
              className={bezels == true && 'is-hidden'}
              alt="Background"
            />
          </div>
          <div className="selector-menu__options">
            <ul>
              <li onClick={() => onClick(true)}>
                <Card css={bezels == true && 'is-selected'}>
                  <span className="h4">On</span>
                </Card>
              </li>
              <li onClick={() => onClick(false)}>
                <Card css={bezels == false && 'is-selected'}>
                  <span className="h4">Off</span>
                </Card>
              </li>
            </ul>
          </div>
          <div className="selector-menu__details">
            <p className="lead">Systems</p>
            <ul>
              <li>GameBoy</li>
              <li>GameBoy Color</li>
              <li>Super Nintendo</li>
              <li>Nintendo NES</li>
              <li>Atari</li>
              <li>Master System</li>
              <li>Genesis</li>
              <li>SegaCD</li>
              <li>Sega32x</li>
              <li>GameGear</li>
              <li>NeoGeo Pocket</li>
            </ul>
          </div>
        </SelectorMenu>
      </Main>
    </>
  );
};

export default RABezels;
