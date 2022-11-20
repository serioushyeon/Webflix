import React, { useEffect, useState } from 'react'
import {useLocation, Link} from "react-router-dom"
import webflixLogo from './webflix logo.png';
import background from './background.jpg';

const User = {
  email: 'test@example.com',
  pw: 'test2323@@@'
}


export default function Signup() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [pwConfirm, setPwConfirm] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [pwConfirmValid, setpwConfirmValid] = useState(false); // 비밀번호 확인
    const [notAllow, setNotAllow] = useState(true);
    // const [account, setAccount] = useState({
    //   password: "",
    //   passwordConfirm: "",
    // });

    useEffect(() => {
      if(emailValid && pwValid && pwConfirmValid) {
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    }, [emailValid, pwValid, pwConfirmValid]);

    const handleEmail = (e) => {
      setEmail(e.target.value);
      const regex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      // setAccount({
      //   ...account,
      //   [e.target.name]: e.target.value,
      // });
      if (regex.test(e.target.value)) {
        setEmailValid(true);
      } else {
        setEmailValid(false);
      }
    };
    const handlePw = (e) => {
      setPw(e.target.value);
      const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
      // setAccount({
      //   ...account,
      //   [e.target.name]: e.target.value,
      // });
      if (regex.test(e.target.value)) {
        setPwValid(true);
      } else {
        setPwValid(false);
      }
    };
    const handlePwConfirm = (e) => {
      setPwConfirm(e.target.value);
      const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
      if (pw === e.target.value) {
        setpwConfirmValid(true);
      } else {
        setpwConfirmValid(false);
      }
    };
    const onClickConfirmButton = () => {
      if(email === User.email && pw === User.pw) {
        alert('로그인에 성공했습니다.')
      } else {
        alert("등록되지 않은 회원입니다.");
      }
    }

    return (
      <div>
        <img className="background" src={background}></img>
        <div className="page">
          <div>
            <img className="logo" src={webflixLogo}></img>
          </div>
          <div className="titleWrap">
            회원가입
          </div>

          <div className="contentWrap">
            <div className="inputTitle">이메일 주소</div>
            <div
              className="inputWrap"
            >
              <input
                className="input"
                type="text"
                placeholder="test@gmail.com"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className="errorMessageWrap">
              {!emailValid && email.length > 0 && (
                <div>올바른 이메일을 입력해주세요.</div>
              )}
            </div>

            <div className="inputTitle">이름</div>
            <div
              className="inputWrap"
            >
              <input
                className="input"
                type="text"
                //placeholder="한 글자 이상 입력"
                //value={email}
                //onChange={handleEmail}
              />
            </div>

            <div style={{ marginTop: "13px" }} className="inputTitle">
              비밀번호
            </div>
            <div className="inputWrap">
              <input
                id="password"
                className="input"
                type="password"
                placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                value={pw}
                onChange={handlePw}
              />
            </div>
            <div className="errorMessageWrap">
              {!pwValid && pw.length > 0 && (
                <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
              )}
            </div>
            <div style={{ marginTop: "13px" }} className="inputTitle">
              비밀번호 확인
            </div>
            <div className="inputWrap">
              <input
                id="passwordConfirm"
                className="input"
                type="password"
                placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                value={pwConfirm}
                onChange={handlePwConfirm}
              />
            </div>
          </div>

          {/* 회원가입 버튼 */}
          <div>
            <button className="signupButton" style={{float: "left"}}>
              <Link to="/" style={{ textDecoration: "none", color: "white"}}>로그인</Link>
            </button>
            <button onClick={onClickConfirmButton} disabled={notAllow} className="signupButton" style={{float: "right"}}>
              회원가입하기
            </button>
          </div>
        </div>
      </div>
    );
}