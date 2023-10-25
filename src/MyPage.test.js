import { render, screen } from "@testing-library/react";

import MyPage from "./MyPage";

test("유저가 없으면 로그인 문구와 버튼을 보여준다", () => {
  render(<MyPage />);

  const textEl = screen.getByText(/로그인을 해주세요/);
  const btnEl = screen.getByRole("button");

  // text와 button이 document에 있다
  expect(textEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();

  // button은 로그인이라는 텍스트를 가지고 있다.
  expect(btnEl).toHaveTextContent("로그인");
});

// 정상적으로 name을 가진 유저 객체가 전달되는 경우
test("유저가 있으면 환영 문구를 보여준다", () => {
  render(<MyPage user={{ name: "Kim" }} />);

  const textEl = screen.getByText(/Kim님 환영합니다/);
  expect(textEl).toBeInTheDocument();
});

// name을 가진 유저 객체가 전달되지 않는 테스트가 실패하는 케이스
test("유저가 name이 없으면 로그인 문구와 버튼을 보여준다", () => {
  render(<MyPage user="Park" />);

  const textEl = screen.getByText(/로그인을 해주세요/);
  const btnEl = screen.getByRole("button");

  expect(textEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent("로그인");
});
