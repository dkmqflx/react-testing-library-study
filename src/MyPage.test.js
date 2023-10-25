import { render, screen } from "@testing-library/react";

import MyPage from "./MyPage";

test("제목이 있다", () => {
  render(<MyPage />);

  // const titleEl = screen.getByRole("heading");
  // getByRole은 aria-role을 기준으로 찾는다
  // h1 ~ h6: heading
  // button: button
  // a: link
  // checkbox: checkbox
  // radio: radio
  // select: combobox
  // 만약 heading 태그가 두개라면 테스트 실패하게 된다

  // 이러한 문제를 해결하기 위해서는 아래처럼 level을 지정하면,
  // h1 하나에 대해서만 찾게 되므로 테스트를 통과하게 된다
  const titleEl = screen.getByRole("heading", {
    level: 1,
  });

  expect(titleEl).toBeInTheDocument();

  // option 지정해주지 않으면 에러가 발생하는데
  // 그 이유는 input과 textare 모두 role이 tetbox이기 때문이다.
  // 그렇기 때문에 아래처럼 option을 지정해주면 된다.
  // label의 name이 자기소개인 텍스트를 찾는 것이다
  // id와 htmlFor가 연결되어 있기 때문에 가능한 것
  const inputEl = screen.getByRole("textbox", {
    name: "자기소개",
  });

  // option을 전달하는 것이 번거롭다면 아래처럼 getByLabelText를 사용할 수도 있다.
  // const inputEl = screen.getByLabelText("자기소개");

  // 그리고 만약 input과 textare의 label이 모두 자기소개로 동일한경우
  // 아래처럼 selector라는 옵션을 넣어주면 해결할 수 있다
  // const inputEl = screen.getByLabelText("자기소개", {
  //   selector: "textarea",
  // });
  expect(inputEl).toBeInTheDocument();

  // 만약 value가 있다면 getByDisplayValue를 사용할 수 도 있다
  const inputEl2 = screen.getByDisplayValue("Tom");
  expect(inputEl2).toBeInTheDocument();

  // 이 외에도 getByPlaceholderText, getByTitle 등이 있다.

  // 지금까지 다루었던 쿼리로 찾을 수 없을 때 getByTestId를 사용한다
  // 테스트를 위해 프로젝트와 관련 없는 dataset-id를 추가하기 때문에 최후의 수단이다
  const myDiv = screen.getByTestId("my-div");
  expect(myDiv).toBeInTheDocument();
});
