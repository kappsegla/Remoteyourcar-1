import React from 'react';
import './App.css';

function App() {
  return (
    <IPhone816
      title="ITHSC"
      ithsc="ITHSC"
      lockUnlock="Lock/Unlock"
      lockUnlock2="Lock/Unlock"
      daco_10390571="https://anima-uploads.s3.amazonaws.com/projects/6141e4ca9f195bb9cbd40316/releases/6141e506bc7b7a0b34c14585/img/daco-1039057-1@2x.png"
      daco_10390572="https://anima-uploads.s3.amazonaws.com/projects/6141e4ca9f195bb9cbd40316/releases/6141e506bc7b7a0b34c14585/img/daco-1039057-1@2x.png"
      data-id="344:421:an-component-instance"
    />
  );
}

export default App;

function IPhone816(props) {
  const { title, ithsc, lockUnlock, lockUnlock2, daco_10390571, daco_10390572 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-8-16 screen" data-id="344:421">
        <div className="flex-row" data-id="an|bATzYeI3">
          <div className="overlap-group6" data-id="an|FlVuqQBW">
            <Group17 data-id="351:513:an-component-instance" />
            <Group17 data-id="365:1110:an-component-instance" />
          </div>
          <div className="flex-col" data-id="an|sxR0ubvs">
            <div className="overlap-group5 montserrat-extra-bold-black-36px" data-id="an|m8FFoaOj">
              <h1 className="overlap-group5-item" data-id="344:422">
                {title}
              </h1>
              <div className="overlap-group5-item" data-id="365:1106">
                {ithsc}
              </div>
            </div>
            <div className="overlap-group3 montserrat-semi-bold-black-24px" data-id="an|EeCQh1vl">
              <div className="lock-unlock" data-id="344:432">
                {lockUnlock}
              </div>
              <div className="lock-unlock" data-id="365:1107">
                {lockUnlock2}
              </div>
            </div>
            <div className="overlap-group4" data-id="an|G477cj0T">
              <div className="iconly-bold-lock" data-id="365:1123"></div>
            </div>
          </div>
        </div>
        <div className="overlap-group2" data-id="an|4c0XmgG7">
          <img className="daco1039057" data-id="348:494" src={daco_10390571} />
          <div className="iconly-bold-lock-1" data-id="356:486"></div>
          <div className="iconly-bold-unlock" data-id="356:481"></div>
          <div className="iconly-bold-lock-2" data-id="356:492"></div>
          <div className="iconly-bold-lock-3" data-id="356:495"></div>
          <img className="daco1039057" data-id="365:1109" src={daco_10390572} />
          <div className="iconly-bold-lock-1" data-id="365:1111"></div>
          <div className="iconly-bold-unlock" data-id="365:1114"></div>
          <div className="iconly-bold-lock-2" data-id="365:1117"></div>
          <div className="iconly-bold-lock-3" data-id="365:1126"></div>
        </div>
        <div className="overlap-group7" data-id="an|zeYCAL8o">
          <div className="iconly-bold-lock" data-id="365:1120"></div>
        </div>
        <div className="overlap-group1" data-id="an|wL4UNAli">
          <Group24 data-id="344:433:an-component-instance" />
          <Group24 data-id="365:1108:an-component-instance" />
        </div>
      </div>
    </div>
  );
}


function Group17() {
  return (
    <div className="group" data-id="351:513">
      <div className="input border-1px-x6bf8c5-button" data-id="I351:513;330:153">
        <IconlyBulkArrowLeft3 data-id="I351:513;330:170:an-component-instance" />
      </div>
    </div>
  );
}


function IconlyBulkArrowLeft3() {
  return (
    <div className="iconly-bulk-arrow-left-3" data-id="I351:513;330:170">
      <IconlyBulkArrowLeft32 data-id="I351:513;330:170;330:162:an-component-instance" />
    </div>
  );
}


function IconlyBulkArrowLeft32() {
  return (
    <div className="iconly-bulk-arrow-left-3-1" data-id="I351:513;330:170;330:162">
      <div className="arrow-left-3" data-id="I351:513;330:170;330:162;0:4047">
        <img
          className="fill-1"
          data-id="I351:513;330:170;330:162;0:4048"
          src="https://anima-uploads.s3.amazonaws.com/projects/6141e4ca9f195bb9cbd40316/releases/6141e506bc7b7a0b34c14585/img/fill-1@2x.svg"
        />
        <img
          className="group-5"
          data-id="I351:513;330:170;330:162;0:4049"
          src="https://anima-uploads.s3.amazonaws.com/projects/6141e4ca9f195bb9cbd40316/releases/6141e506bc7b7a0b34c14585/img/group-5@2x.svg"
        />
      </div>
    </div>
  );
}


function Group24() {
  return (
    <div className="group-2" data-id="344:433">
      <div className="group-16" data-id="I344:433;322:10167">
        <img
          className="home"
          data-id="I344:433;322:10139"
          src="https://anima-uploads.s3.amazonaws.com/projects/6141e4ca9f195bb9cbd40316/releases/6141e506bc7b7a0b34c14585/img/home@2x.svg"
        />
        <div className="place montserrat-medium-white-10px" data-id="I344:433;322:10143">
          HOME
        </div>
      </div>
      <div className="group-15" data-id="I344:433;322:10165">
        <div className="group-7" data-id="I344:433;322:10135">
          <div className="ellipse-110 border-1-2px-white" data-id="I344:433;322:10131"></div>
        </div>
        <div className="text montserrat-medium-white-10px" data-id="I344:433;322:10132">
          FIND MY CAR
        </div>
      </div>
      <div className="group-23" data-id="I344:433;337:209">
        <img
          className="vector"
          data-id="I344:433;332:294"
          src="https://anima-uploads.s3.amazonaws.com/projects/6141e4ca9f195bb9cbd40316/releases/6141e506bc7b7a0b34c14585/img/vector@2x.svg"
        />
        <div className="text-1 montserrat-medium-white-10px" data-id="I344:433;322:10150">
          MY CAR
        </div>
      </div>
      <div className="group-13" data-id="I344:433;322:10161">
        <div className="overlap-group" data-id="an|KhAYonMA">
          <img
            className="ellipse-6"
            data-id="I344:433;322:10147"
            src="https://anima-uploads.s3.amazonaws.com/projects/6141e4ca9f195bb9cbd40316/releases/6141e506bc7b7a0b34c14585/img/ellipse-6@2x.svg"
          />
          <div className="ellipse-5 border-1-5px-white" data-id="I344:433;322:10148"></div>
        </div>
        <div className="text-2 montserrat-medium-white-10px" data-id="I344:433;322:10146">
          PROFIL
        </div>
      </div>
    </div>
  );
}

