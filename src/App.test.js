import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />); // 1. App을 render 한다 (render는 컴포넌트를 전달받아서 virtual dom을 생성한다)
  const linkElement = screen.getByText(/learn react/i);
  // 2. learn react라는 텍스트가 있는 element를 변수에 저장해한다
  // (대소문자를 무시한다는 정규식이 있기 때문에, 실제 App.js를 보면 Learn React가 있지만 테스트를 통과하게 되는 것)
  expect(linkElement).toBeInTheDocument(); // 3. linkElement가 document 안에 있는지 확인한다

  // 4. npm start 하면, 테스트를 통과하는 것을 확인할 수 있는데
  // 5. 화면에 있는 learn react와 getByText의 인자로 전달되는 learn react가 같기 때문이다.
  // 6. 만약 2번 항목의 learn react를 learn react2로 수정하면 테스트가 실패하는 것을 확인할 수 있다.
});

test("로고 이미지가 잘 나온다", () => {
  render(<App />);
  const logoEl = screen.getByAltText("logo");
  expect(logoEl).toBeInTheDocument();
});
