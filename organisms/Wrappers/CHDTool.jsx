import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card';

import CHDToolImg from 'assets/powertools.png';
const ipcChannel = window.electron.ipcRenderer;
const CHDTool = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onChange,
  onClick,
  next,
  back,
  hasSudo,
  nextText,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { sudoPass, CHDTool } = state;

  return (
    <>
      <p className="lead">
        The Compression Tool is a script that looks through certain ROM folders
        and compresses games by up to 70% of their original file size using CHD
        and RVZ formats.
      </p>
      <Main>
        <p>
          Once a ROM is successfully converted, the original file will be
          deleted from your system. Please run Steam ROM Manager again after
          compressing your ROMs to update Steam with your new files.
        </p>
        <p>
          The tool will locate ISO, GDI, CUE/BIN, GCM ROMs and convert to either
          CHD or RVZ files.
        </p>
        <p>
          Important: CHD made from cue / bin will NOT work for Dreamcast. GDI is
          required. if you have both CUE and GDI for your Dreamcast games,
          remove any left over cue files after parsing, or Steam ROM
          Manager will detect non-existent games.
        </p>

        <p>
          <strong>CHD format:</strong>
          <br />
          Used to compress Dreamcast, PSX, PS2, Sega/MegaCD, 3DO, Saturn,
          TurboGraphix/PCEngineCD, PC-FX, Amiga CD32, NeoGeoCD games.
        </p>

        <p>
          <strong>RVZ format:</strong>
          <br />
          Used to compress Gamecube and Wii games.
        </p>
        <div className="form">
          <BtnSimple
            css="btn-simple--1"
            type="button"
            aria="Install CHDTool"
            onClick={() => onClick()}
            disabled={disabledNext && 'true'}
          >
            Run the Compression Tool
          </BtnSimple>
        </div>
      </Main>
    </>
  );
};

export default CHDTool;
