import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';
import Main from 'components/organisms/Main/Main';

import Card from 'components/molecules/Card/Card';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';

import imgYES from 'assets/HomebrewGamesYES.png';
import imgNO from 'assets/HomebrewGamesNO.png';

const HomebrewGames = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  next,
  back,
  data,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { homebrewGames, mode, system } = state;

  return (
    <>
      <p className="lead">
        Do you want to install EmuDeck's selection of homebrew games?
      </p>
      <Main>
        <SelectorMenu>
          <div className="selector-menu__img">
            <img
              src={imgYES}
              className={homebrewGames == false && 'is-hidden'}
              alt="Background"
            />
            <img
              src={imgNO}
              className={homebrewGames == true && 'is-hidden'}
              alt="Background"
            />
          </div>
          <div className="selector-menu__options">
            <ul>
              <li onClick={() => onClick(true)}>
                <Card css={homebrewGames == true && 'is-selected'}>
                  <span className="h4">YES</span>
                </Card>
              </li>
              <li onClick={() => onClick(false)}>
                <Card css={homebrewGames == false && 'is-selected'}>
                  <span className="h4">NO</span>
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
              <li>Master System</li>
              <li>Genesis</li>
              <li>GameGear</li>
            </ul>
          </div>
        </SelectorMenu>
      </Main>
    </>
  );
};

export default HomebrewGames;
