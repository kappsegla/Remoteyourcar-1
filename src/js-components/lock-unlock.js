import React from 'react';
import styled from 'styled-components';


class App extends React.Component {
  render() {
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
}

export default App;

class IPhone816 extends React.Component {
  render() {
    const { title, ithsc, lockUnlock, lockUnlock2, daco_10390571, daco_10390572 } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="iphone-8-16 screen" data-id="344:421">
          <FlexRow data-id="an|ivB1rOSe">
            <OverlapGroup6 data-id="an|5dvXObhW">
              <Group17 data-id="351:513:an-component-instance" />
              <Group17 data-id="365:1110:an-component-instance" />
            </OverlapGroup6>
            <FlexCol data-id="an|NaDwozqn">
              <OverlapGroup5 data-id="an|ZfcLLJ6v">
                <Title data-id="344:422">{title}</Title>
                <Title data-id="365:1106">{ithsc}</Title>
              </OverlapGroup5>
              <OverlapGroup3 data-id="an|z6dSc1oY">
                <LockUnlock data-id="344:432">{lockUnlock}</LockUnlock>
                <LockUnlock data-id="365:1107">{lockUnlock2}</LockUnlock>
              </OverlapGroup3>
              <OverlapGroup4 data-id="an|3U2Sv9sY">
                <IconlyBoldLock data-id="365:1123"></IconlyBoldLock>
              </OverlapGroup4>
            </FlexCol>
          </FlexRow>
          <OverlapGroup2 data-id="an|uceJlugG">
            <Daco10390571 data-id="348:494" src={daco_10390571} />
            <IconlyBoldLock1 data-id="356:486"></IconlyBoldLock1>
            <IconlyBoldUnlock data-id="356:481"></IconlyBoldUnlock>
            <IconlyBoldLock2 data-id="356:492"></IconlyBoldLock2>
            <IconlyBoldLock3 data-id="356:495"></IconlyBoldLock3>
            <Daco10390571 data-id="365:1109" src={daco_10390572} />
            <IconlyBoldLock1 data-id="365:1111"></IconlyBoldLock1>
            <IconlyBoldUnlock data-id="365:1114"></IconlyBoldUnlock>
            <IconlyBoldLock2 data-id="365:1117"></IconlyBoldLock2>
            <IconlyBoldLock3 data-id="365:1126"></IconlyBoldLock3>
          </OverlapGroup2>
          <OverlapGroup7 data-id="an|rhpUT6Fn">
            <IconlyBoldLock data-id="365:1120"></IconlyBoldLock>
          </OverlapGroup7>
          <OverlapGroup1 data-id="an|i4guXMD7">
            <Group24 data-id="344:433:an-component-instance" />
            <Group24 data-id="365:1108:an-component-instance" />
          </OverlapGroup1>
        </div>
      </div>
    );
  }
}

const FlexRow = styled.div`
  height: 140px;
  margin-right: 68px;
  display: flex;
  align-items: flex-end;
  min-width: 237px;
`;

const OverlapGroup6 = styled.div`
  width: 53px;
  height: 46px;
  position: relative;
  margin-bottom: 4px;
`;

const FlexCol = styled.div`
  width: 167px;
  margin-left: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 140px;
`;

const OverlapGroup5 = styled.div`
  ${MontserratExtraBoldBlack36px}
  width: 116px;
  height: 35px;
  position: relative;
  margin-left: 1px;
`;

const Title = styled.h1`
  position: absolute;
  width: 116px;
  top: 0;
  left: 0;
  letter-spacing: 0;
`;

const OverlapGroup3 = styled.div`
  ${MontserratSemiBoldBlack24px}
  width: 167px;
  height: 29px;
  position: relative;
  margin-top: 26px;
`;

const LockUnlock = styled.div`
  position: absolute;
  width: 167px;
  top: 0;
  left: 0;
  letter-spacing: 0;
`;

const OverlapGroup4 = styled.div`
  margin-top: 10px;
  margin-right: 1px;
  display: flex;
  align-items: flex-start;
  min-width: 34px;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/6141e4ca9f195bb9cbd40316/releases/6141e506bc7b7a0b34c14585/img/vector-1@2x.svg);
  background-size: 100% 100%;
`;

const IconlyBoldLock = styled.div`
  width: 34px;
  height: 40px;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/6141e4ca9f195bb9cbd40316/releases/6141e506bc7b7a0b34c14585/img/vector-1@2x.svg);
  background-size: 100% 100%;
`;

const OverlapGroup2 = styled.div`
  width: 242px;
  height: 378px;
  position: relative;
  margin-top: 12px;
  margin-left: 7px;
`;

const Daco10390571 = styled.img`
  position: absolute;
  width: 178px;
  height: 378px;
  top: 0;
  left: 31px;
  object-fit: cover;
`;

const IconlyBoldLock1 = styled.div`
  position: absolute;
  width: 34px;
  height: 40px;
  top: 230px;
  left: 0;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/6141e4ca9f195bb9cbd40316/releases/6141e506bc7b7a0b34c14585/img/vector-1@2x.svg);
  background-size: 100% 100%;
`;

const IconlyBoldUnlock = styled.div`
  position: absolute;
  width: 34px;
  height: 40px;
  top: 147px;
  left: 0;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/6141e4ca9f195bb9cbd40316/releases/6141e506bc7b7a0b34c14585/img/vector-2@2x.svg);
  background-size: 100% 100%;
`;

const IconlyBoldLock2 = styled.div`
  position: absolute;
  width: 34px;
  height: 40px;
  top: 230px;
  left: 206px;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/6141e4ca9f195bb9cbd40316/releases/6141e506bc7b7a0b34c14585/img/vector-1@2x.svg);
  background-size: 100% 100%;
`;

const IconlyBoldLock3 = styled.div`
  position: absolute;
  width: 34px;
  height: 40px;
  top: 147px;
  left: 208px;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/6141e4ca9f195bb9cbd40316/releases/6141e506bc7b7a0b34c14585/img/vector-1@2x.svg);
  background-size: 100% 100%;
`;

const OverlapGroup7 = styled.div`
  margin-top: 11px;
  margin-left: 5px;
  display: flex;
  align-items: flex-start;
  min-width: 34px;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/6141e4ca9f195bb9cbd40316/releases/6141e506bc7b7a0b34c14585/img/vector-1@2x.svg);
  background-size: 100% 100%;
`;

const OverlapGroup1 = styled.div`
  width: 375px;
  height: 56px;
  position: relative;
  margin-top: 16px;
`;



class Group17 extends React.Component {
  render() {
    return (
      <Group18 data-id="351:513">
        <Input data-id="I351:513;330:153">
          <IconlyBulkArrowLeft3 data-id="I351:513;330:170:an-component-instance" />
        </Input>
      </Group18>
    );
  }
}

const Group18 = styled.div`
  position: absolute;
  height: 46px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 53px;
`;

const Input = styled.div`
  ${Border1pxX6bf8c5Button}
  height: 46px;
  position: relative;
  display: flex;
  padding: 0 7px;
  align-items: center;
  min-width: 53px;
  background-color: var(--eerie-black);
  border-radius: 8px;
`;



class IconlyBulkArrowLeft3 extends React.Component {
  render() {
    return (
      <IconlyBulkArrowLeft31 data-id="I351:513;330:170">
        <IconlyBulkArrowLeft32 data-id="I351:513;330:170;330:162:an-component-instance" />
      </IconlyBulkArrowLeft31>
    );
  }
}

const IconlyBulkArrowLeft31 = styled.div`
  height: 36px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 39px;
`;



class IconlyBulkArrowLeft32 extends React.Component {
  render() {
    return (
      <IconlyBulkArrowLeft3 data-id="I351:513;330:170;330:162">
        <ArrowLeft3 data-id="I351:513;330:170;330:162;0:4047">
          <Fill1
            data-id="I351:513;330:170;330:162;0:4048"
            src="https://anima-uploads.s3.amazonaws.com/projects/6141e4ca9f195bb9cbd40316/releases/6141e506bc7b7a0b34c14585/img/fill-1@2x.svg"
          />
          <Group5
            data-id="I351:513;330:170;330:162;0:4049"
            src="https://anima-uploads.s3.amazonaws.com/projects/6141e4ca9f195bb9cbd40316/releases/6141e506bc7b7a0b34c14585/img/group-5@2x.svg"
          />
        </ArrowLeft3>
      </IconlyBulkArrowLeft3>
    );
  }
}

const IconlyBulkArrowLeft3 = styled.div`
  height: 36px;
  display: flex;
  padding: 3.8px 10.9px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 39px;
`;

const ArrowLeft3 = styled.div`
  width: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 28px;
  transform: rotate(90deg);
`;

const Fill1 = styled.img`
  width: 17px;
  height: 3px;
  margin-top: 7px;
  margin-left: -0.33px;
  transform: rotate(-90deg);
`;

const Group5 = styled.img`
  width: 16px;
  height: 18px;
  margin-top: 2px;
  margin-left: 0.17px;
  transform: rotate(-90deg);
`;



class Group24 extends React.Component {
  render() {
    return (
      <Group241 data-id="344:433">
        <Group16 data-id="I344:433;322:10167">
          <Home
            data-id="I344:433;322:10139"
            src="https://anima-uploads.s3.amazonaws.com/projects/6141e4ca9f195bb9cbd40316/releases/6141e506bc7b7a0b34c14585/img/home@2x.svg"
          />
          <Place data-id="I344:433;322:10143">HOME</Place>
        </Group16>
        <Group15 data-id="I344:433;322:10165">
          <Group7 data-id="I344:433;322:10135">
            <Ellipse110 data-id="I344:433;322:10131"></Ellipse110>
          </Group7>
          <Text1 data-id="I344:433;322:10132">FIND MY CAR</Text1>
        </Group15>
        <Group23 data-id="I344:433;337:209">
          <Vector
            data-id="I344:433;332:294"
            src="https://anima-uploads.s3.amazonaws.com/projects/6141e4ca9f195bb9cbd40316/releases/6141e506bc7b7a0b34c14585/img/vector@2x.svg"
          />
          <Text3 data-id="I344:433;322:10150">MY CAR</Text3>
        </Group23>
        <Group13 data-id="I344:433;322:10161">
          <OverlapGroup data-id="an|lThoN5Yk">
            <Ellipse6
              data-id="I344:433;322:10147"
              src="https://anima-uploads.s3.amazonaws.com/projects/6141e4ca9f195bb9cbd40316/releases/6141e506bc7b7a0b34c14585/img/ellipse-6@2x.svg"
            />
            <Ellipse5 data-id="I344:433;322:10148"></Ellipse5>
          </OverlapGroup>
          <Text2 data-id="I344:433;322:10146">PROFIL</Text2>
        </Group13>
      </Group241>
    );
  }
}

const Group241 = styled.div`
  position: absolute;
  height: 56px;
  top: 0;
  left: 0;
  display: flex;
  padding: 4px 18px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 375px;
  background-color: var(--timber-green);
`;

const Group16 = styled.div`
  width: 36px;
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 44px;
`;

const Home = styled.img`
  width: 29px;
  height: 30px;
  margin-left: 2px;
`;

const Place = styled.div`
  ${MontserratMediumWhite10px}
  width: 36px;
  min-height: 12px;
  margin-top: 2px;
  letter-spacing: 0;
`;

const Group15 = styled.div`
  width: 71px;
  margin-left: 49px;
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 44px;
`;

const Group7 = styled.div`
  height: 31px;
  margin-right: 2.37px;
  display: flex;
  padding: 6px;
  align-items: flex-start;
  min-width: 23px;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/6141e4ca9f195bb9cbd40316/releases/6141e506bc7b7a0b34c14585/img/union@2x.svg);
  background-size: 100% 100%;
`;

const Ellipse110 = styled.div`
  ${Border12pxWhite}
  width: 10px;
  height: 9px;
  border-radius: 4.94px/4.5px;
`;

const Text1 = styled.div`
  ${MontserratMediumWhite10px}
  min-height: 12px;
  margin-top: 1px;
  min-width: 71px;
  letter-spacing: 0;
`;

const Group23 = styled.div`
  width: 43px;
  margin-left: 49px;
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 44px;
`;

const Vector = styled.img`
  width: 38px;
  height: 30px;
`;

const Text3 = styled.div`
  ${MontserratMediumWhite10px}
  min-height: 12px;
  margin-top: 2px;
  min-width: 43px;
  text-align: center;
  letter-spacing: 0;
`;

const Group13 = styled.div`
  width: 41px;
  align-self: flex-end;
  margin-left: 49px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 47px;
`;

const OverlapGroup = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  margin-left: 4.88px;
`;

const Ellipse6 = styled.img`
  position: absolute;
  width: 30px;
  height: 18px;
  top: 12px;
  left: 0;
`;

const Ellipse5 = styled.div`
  ${Border15pxWhite}
  position: absolute;
  width: 15px;
  height: 13px;
  top: 0;
  left: 7px;
  border-radius: 7.44px/6.72px;
`;

const Text2 = styled.div`
  ${MontserratMediumWhite10px}
  min-height: 12px;
  margin-top: 1px;
  letter-spacing: 0;
`;


export const MontserratMediumWhite10px = css`
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-m);
  font-weight: 500;
  font-style: normal;
`;

export const MontserratExtraBoldBlack36px = css`
  color: var(--black);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-xxxl);
  font-weight: 800;
  font-style: italic;
`;

export const MontserratSemiBoldBlack24px = css`
  color: var(--black-2);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-xxl);
  font-weight: 600;
  font-style: normal;
`;

export const Border1pxX6bf8c5Button = css`
  border: 1px solid var(--x6bf8c5-button);
`;

export const Border12pxWhite = css`
  border: 1.2px solid var(--white);
`;

export const Border15pxWhite = css`
  border: 1.5px solid var(--white);
`;
