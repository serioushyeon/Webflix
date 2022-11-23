import React, { useEffect, useState } from 'react'
import {useLocation, Link} from "react-router-dom"
import webflixLogo from './webflix logo.png';
import background from './background.jpg';
import App from './App';

//import idpws from './idpw'

// const User = {
//   email: 'test@example.com',
//   pw: 'test2323@@@'
// }

export const idpws = [
  {
      email: 'test@example.com',
      pw: 'test2323@@@',
      name: '테스트유저'
  },
  {
      email: '1225yj50@naver.com',
      pw: 'yj12345*',
      name: '예지'
  },
];

export default function Login() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);
    
    useEffect(() => {
      if(emailValid && pwValid) {
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    }, [emailValid, pwValid]);

    const handleEmail = (e) => {
      setEmail(e.target.value);
      const regex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
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
      if (regex.test(e.target.value)) {
        setPwValid(true);
      } else {
        setPwValid(false);
      }
    };
    const onClickConfirmButton = () => {
      for (var i = 0; i<idpws.length; i++) {
        if (email === idpws[i].email && pw === idpws[i].pw) {
          alert(idpws[i].name + "님 환영합니다.");
          break;
        }
      }
      if (i >= idpws.length){
        alert("등록되지 않은 회원입니다.");
      }

      // if(email === User.email && pw === User.pw) {
      //   alert('로그인에 성공했습니다.')
      // } else {
      //   alert("등록되지 않은 회원입니다.");
      // }
    }

    return (
      //<div className="background" style={{background: netflix_background}}>
      
      <div>
        <img className="background" src={background}></img>
        <div className="page">
          <div>
            <img className="logo" src={webflixLogo}></img>
          </div>
          <div className="titleWrap">
            로그인
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

            <div style={{ marginTop: "26px" }} className="inputTitle">
              비밀번호
            </div>
            <div className="inputWrap">
              <input
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
          </div>

          <div>
            <button onClick={onClickConfirmButton} disabled={notAllow} className="signinButton">
              확인
            </button>
          </div>
          {/* 회원가입 버튼 */}
          <div>
            <button className="signinButton">
              <Link to="signup" style={{ textDecoration: "none", color: "white"}}>회원가입</Link>
            </button>
          </div>
        </div>
      </div>
    );
}

//export const Signup = () => (signup.jsx)