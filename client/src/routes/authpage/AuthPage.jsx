import { useState } from "react";
import Image from "../../components/Image/Image";
import "./authPage.css";

const AuthPage = () => {
  const [IsRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  return (
    <div className="authPage">
      <div className="authContainer">
        <Image path="/general/logo.png" alt="로고" width={36} height={36} />
        <h1>{IsRegister ? "회원가입" : "로그인"}</h1>
        {IsRegister ? (
          <form action="">
            <div className="formGroup">
              <label htmlFor="username">이름</label>
              <input
                type="username"
                id="username"
                name="username"
                placeholder="이름"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="nickname">닉네임</label>
              <input
                type="nickname"
                id="nickname"
                name="nickname"
                placeholder="닉네임"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email">비밀번호</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호"
                required
              />
            </div>
            <button className="btn">회원가입</button>
            <p onClick={() => setIsRegister(() => !IsRegister)}>
              회원이신가요? <b>로그인</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        ) : (
          <form action="">
            <div className="formGroup">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email">비밀번호</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호"
                required
              />
            </div>
            <button className="btn">로그인</button>
            <p onClick={() => setIsRegister(() => !IsRegister)}>
              회원이 아니신가요? <b>회원가입</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
