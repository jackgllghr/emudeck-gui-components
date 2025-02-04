import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import Main from 'components/organisms/Main/Main';

import Notification from 'components/molecules/Notification/Notification';
import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card';

import gyroDsu from 'assets/gyroDsu.png';

const GyroDSU = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onChange,
  onChangeSetPass,
  onChangeCheckPass,
  onClick,
  installClick,
  next,
  back,
  hasSudo,
  nextText,
  sudoPass,
  showNotification,
  textNotification,
  passValidates,
  disableButton,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { GyroDSU } = state;

  return (
    <>
      <Notification css={showNotification ? 'is-animated' : 'nope'}>
        {textNotification}
      </Notification>
      <p className="lead">
        SteamDeckGyroDSU is a plugin that allows you to use your Steam Deck
        Gyroscope in Cemu (Wii U), Citra (3DS), Dolphin (Gamecube and Wii), Ryujinx (Nintendo Switch), and 
        Yuzu (Nintendo Switch) games. Learn more about
        SteamDeckGyroDSU{' '}
        <LinkSimple
          css="link-simple--1"
          href="https://github.com/kmicki/SteamDeckGyroDSU"
          target="_blank"
        >
          here
        </LinkSimple>
      </p>
      <Main>
        <br />
        <div className="container--grid">
          <div data-col-sm="6">
            <p>
              This tool requires you to use a Linux sudo (SuperUser) password.{' '}
              <strong>
                Never share this password, if you forget it, you will need to
                reset your Steam Deck.
              </strong>
            </p>

            {hasSudo === false && (
              <div className="form">
                <FormInputSimple
                  label="Create sudo Password"
                  type="password"
                  name="pass1"
                  id="pass1"
                  onChange={onChangeSetPass}
                />

                <FormInputSimple
                  label="Repeat sudo Password"
                  type="password"
                  name="pass2"
                  id="pass2"
                  onChange={onChangeCheckPass}
                />
                {passValidates === true && (
                  <BtnSimple
                    type="button"
                    onClick={onClick}
                    css="btn-simple--1"
                    aria="Create Password"
                  >
                    Create Password
                  </BtnSimple>
                )}
              </div>
            )}
            {hasSudo === true && (
              <div className="form">
                <p>
                  We have detected you already have set a sudo password, type it
                  below to install SteamDeckGyroDSU.
                </p>
                <FormInputSimple
                  label="Sudo Password"
                  type="password"
                  name="pass"
                  id="pass"
                  onChange={onChange}
                />
                {sudoPass !== '' && (
                  <BtnSimple
                    css="btn-simple--1"
                    type="button"
                    aria="Install GyroDSU"
                    onClick={installClick}
                    disabled={disableButton && 'true'}
                  >
                    Install SteamDeckGyroDSU
                  </BtnSimple>
                )}
              </div>
            )}
          </div>
          <div data-col-sm="1" />
          <div data-col-sm="5">
            <img src={gyroDsu} alt="RetroAchievements" />
          </div>
        </div>
      </Main>
    </>
  );
};

export default GyroDSU;
