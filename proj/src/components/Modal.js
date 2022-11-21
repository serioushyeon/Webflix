import styled from "styled-components";
import img from "./web.jpg";
const Modal = () => {
  const title = "웹프레임워크1"
  const classDes = "React는 사용자 인터페이스를 만들기 위한 라이브러리입니다. React는 Svelte, Vue.js, Angular와 함께 웹 프론트엔드 분야에서 활용도가 높습니다. 컴포넌트를 활용하는 React는 재사용성이 높고, Virtual DOM을 사용함으로써 동적인 웹페이지를 보다 효율적으로 렌더링할 수 있습니다. 본 교과목에서는 JavaScript의 최신 문법을 토대로 React를 활용하는 개발에서 필요한 주요 개념을 이해하고, 효과적으로 사용자 인터페이스를 구현하는 웹 프론트엔드 프로젝트를 수행합니다."
  const prof = "박승현";
  const classNum = "7,A,B,N";
  const extra = "..";
  const grade = "3학년"
  const text = "3학점 전공필수";
  return(
      <Background>
        <Content>
          <ContentInfo>
            <CloseBtn>X</CloseBtn>
            <ContentVideo>
              <img src = {img} width="100%"/>
            </ContentVideo>
            <ButtonLeft>
                <button aria-label="내가 찜한 콘텐츠에서 삭제" type="button">
                  <svg  pointer-events="none" width="70" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="currentColor">
                    </path>
                  </svg>
                </button>
                <span>  </span>
                <button class="color-supplementary hasIcon round ltr-1ihscfb" data-uia="thumbs-rate-button" type="button" aria-haspopup="menu" aria-controls="#thumbs-selection-menu" aria-expanded="false">
                  <div class="ltr-1ol9m1e"><div class="small ltr-1evcx25" role="presentation">
                    <svg  width="70" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z" fill="currentColor">
                      </path>
                    </svg>
                  </div>
                </div>
              </button>
            </ButtonLeft>
            <Title>
              <Left>{title}</Left>
            </Title>
            <ContentDetail>
              <ContentDetailLeft>
                <H4>{classDes}</H4>
              </ContentDetailLeft>
              <ContentDetailRight>
                <Right>{text}</Right>
                <H4>교수: {prof}</H4>
                <H4>분반: {classNum}</H4>
                <H4>대상: {grade}</H4>
              </ContentDetailRight>
            </ContentDetail>
          </ContentInfo>
          <H2>{extra}</H2>
        </Content>
      </Background>
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

const Content = styled.div`
  margin-top: 70px;
  z-index: 1001;
  height: 100%;
  width: 950px;
  position: relative;
  background: #141414;
  overflow: scroll;
`;


const Checkbtn = styled.div`
  padding-left: 50px;
  margin: 20px 0 20px 0;
  position: relative;
  background: #141414;
`;

const ContentInfo = styled.div`
  color: white;
`;

const ContentVideo = styled.div`
  width: 100%;
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

