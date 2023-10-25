import { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);

  function onClickHandler() {
    setIsLogin(!isLogin);
  }

  return (
    <button onClick={onClickHandler}>{isLogin ? "Logout" : "Login"}</button>
  );
}

// 유저 이벤트는
// click , keyup, keydown 등의 이벤트를 처리한다

// package.json 보면 아래 항목을 확인할 수 있다
// "@testing-library/user-event": "^13.5.0",

// 다만 공식문서 보면 v13 더 이상 지원하지 않는다고 되어 있기 때문에 v14로 업데이트 해준다
// https://testing-library.com/docs/ecosystem-user-event/
