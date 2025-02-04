import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import Card from 'components/molecules/Card/Card';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';

import lcdonH from 'assets/lcdon.png';
import lcdoffH from 'assets/lcdoff.png';

const ShadersHandhelds = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  next,
  back,
  data,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { shaders } = state;

  return (
    <>
      <p className="lead">
        The LCD Shader simulates the old LCD Matrix screens of handheld systems.
      </p>
      <Main>
        <SelectorMenu>
          <div className="selector-menu__img">
            <img
              src={lcdoffH}
              className={shaders.handhelds == true && 'is-hidden'}
              alt="Background"
            />
            <img
              src={lcdonH}
              className={shaders.handhelds == false && 'is-hidden'}
              alt="Background"
            />
          </div>
          <div className="selector-menu__options selector-menu__options--full">
            <ul>
              <li onClick={() => onClick(false)}>
                <Card css={shaders.handhelds == false && 'is-selected'}>
                  <span className="h4">Off</span>
                </Card>
              </li>
              <li onClick={() => onClick(true)}>
                <Card css={shaders.handhelds == true && 'is-selected'}>
                  <span className="h4">On</span>
                </Card>
              </li>
            </ul>
          </div>
          <div className="selector-menu__details">
            <p className="lead">Systems</p>
            <ul>
              <li>GameBoy</li>
              <li>GameBoy Color</li>
              <li>GameGear</li>
              <li>NeoGeo Pocket</li>
            </ul>
          </div>
        </SelectorMenu>
      </Main>
    </>
  );
};

export default ShadersHandhelds;
