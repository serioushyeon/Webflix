import styled from "styled-components";
import ModalPortal from "./Portal";
import '../style/Modal.css';

const Modal = ({onClose, lecture}) => {
  const title = lecture.title;
  const classDes = lecture.description;
  const track = lecture.track;
  const grade = lecture.grade;
  const credit = lecture.credit;
  return(
    <ModalPortal>
      <Background>
        <Content>
          <ImageThumbnail style={{
            background: `linear-gradient(to top, #111 0%, transparent 70%), url(${lecture.img})`,
            backgroundSize: 'cover',
            backgroundRepeat : 'no-repeat',
            backgroundPosition: 'center'
            }}>
          </ImageThumbnail>
            <ContentInfo>
            <CloseBtn className="featured--myCloseButton" onClick={onClose}>X</CloseBtn>
            <ButtonLeft>
            <div className="featured--buttons">
              <a className="featured--watchButton" href={`/homescreen`}>♥</a>
              <a className="featured--myListButton" href={`/homescreen`}>+ My List</a>
            </div>
            </ButtonLeft>
            <Title>
              <Left>{title}</Left>
            </Title>
            <ContentDetail>
              <ContentDetailLeft>
                <H4>{classDes}</H4>
              </ContentDetailLeft>
              <ContentDetailRight>
                <Right>{track}</Right>
                <H4>학점: {credit}</H4>
                <H4>대상: {grade}</H4>
              </ContentDetailRight>
            </ContentDetail>
          </ContentInfo>
        </Content>
      </Background>
    </ModalPortal>
  );};
  
  // export module
  export default Modal;

  const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color : rgba(0,0,0,0.5);
`;

const ImageThumbnail = styled.div`
width :100%;
height:450px;
`
const Content = styled.div`
  z-index: 1001;
  height: 95%;
  width: 1000px;
  position: relative;
  background: #141414;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

const ContentInfo = styled.div`
  color: white;
`;

const ContentDetail = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 50px 50px 0;
`;

const Text = styled.p`
  padding-left: 50px;
  margin: 20px 0 20px 0;
  color: white;
  text-align: left;
  font-weight: bold;
`;

const Title = styled(Text)`
  font-size: 45px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.span`
  width: 480px;
  color: white;
  text-align: left;
`;

const Right = styled(Text)`
  font-size: 20px;
  color: red;
  text-align: left;
`;

const H2 = styled(Text)`
  margin: 10px 0;
  color: white;
  text-align: left;
  font-size: 30px;
  font-weight: bold;
`;

const H4 = styled(Text)`
  font-size: 20px;
  font-weight: revert;
`;

const ContentDetailLeft = styled(Left.withComponent("div"))`
  width: 600px;
  color: white;
  text-align: left;
  font-size: 18px;
`;
const ButtonLeft = styled(Left.withComponent("div"))`
  margin-left: 50px;
  margin-top: 50px;
`;

const ContentDetailRight = styled(Right.withComponent("div"))`
  margin-left: 50px;
  color: white;
  font-size: 18px;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 999;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  color: white;
  background: #141414

`;

