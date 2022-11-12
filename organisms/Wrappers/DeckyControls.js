import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import Notification from 'components/molecules/Notification/Notification.js';
import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card.js';

import DeckyControlsImg from 'assets/DeckyControls.jpg';

const DeckyControls = ({
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
  const { DeckyControls } = state;

  return (
    <div className="app">
      <Aside />
      <div className="wrapper">
        <Header title="Configure" bold="DeckyControls" />
        <Notification css={showNotification ? 'is-animated' : 'nope'}>
          {textNotification}
        </Notification>
        <Main>
          <p className="lead">
            DeckyControls is a plugin that allows you to see all EmuDeck's
            controls and hotkeys while you are gaming.
          </p>
          <br />
          <div className="container--grid">
            <div data-col-sm="6">
              <p>
                This tool requires you to use a Linux sudo (SuperUser) password.{' '}
                <strong>
                  Never share the sudo password, if you forget it you'll need to
                  reset your Steam Deck.
                </strong>
              </p>

              {hasSudo === false && (
                <div class="form">
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
                <div class="form">
                  <p>
                    We've detected you already have set your sudo password, type
                    it on the next input to install this tool.
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
                      aria="Install DeckyControls"
                      onClick={installClick}
                      disabled={disableButton && 'true'}
                    >
                      Install DeckyControls
                    </BtnSimple>
                  )}
                </div>
              )}
            </div>
            <div data-col-sm="1"></div>
            <div data-col-sm="5">
              <img src={DeckyControlsImg} alt="RetroAchievements" />
            </div>
          </div>
        </Main>
        <Footer
          next={false}
          nextText={nextText}
          disabledNext={disabledNext}
          disabledBack={disabledBack}
        />
      </div>
    </div>
  );
};

export default DeckyControls;
