import { render, screen } from "@testing-library/react";

import UserList from "./UserList";

describe("UserList test", () => {
  const users = ["Tom", "Jane", "Mike"];

  test("ul이 있다", () => {
    render(<UserList users={users} />);

    const ulElement = screen.getByRole("list"); // ul이 있는지 확인
    expect(ulElement).toBeInTheDocument();
  });

  test("li가 3개 있다", () => {
    render(<UserList users={users} />);

    const liElements = screen.getAllByRole("listitem"); // li가 있는지 확인
    expect(liElements).toHaveLength(users.length);
  });

  test("li가 없다", () => {
    render(<UserList users={[]} />);

    const liElements = screen.queryByRole("listitem");
    // li가 없기 때문에 queryByRole을 사용해주어야 한다
    // getBy 방식에서는 요소가 없으면 에러를 반환한다
    // 하지만 queryBy나 queryAllBy에서는 요소가 없으면 null이나 빈 배열을 반환한다

    expect(liElements).not.toBeInTheDocument();

    // 아래처럼도 테스트할 수 있다
    // expect(liElements).toHaveLength(0);
  });

  // findBy
  // https://testing-library.com/docs/dom-testing-library/api-async/#findby-queries

  test("잠시 후 제목이 나타난다", async () => {
    render(<UserList users={users} />);

    // screen.debug();
    // scree.debug 사용하면 렌더링된 트리를 볼 수 있다.

    const titleEl = await screen.findByRole("heading", {
      name: "사용자 목록",
    });
    // findByRole은 비동기적인 로직을 처리할 때 사용한다
    // 다만 default timeout은 1000ms이기 때문에
    // 1초 이상인 경우에는 timeout 옵션을 추가해준다

    // screen.debug();
    // 위 디버그에서는 없는 h1 태그가 트리에 있는 것을 확인할 수 있다.
    expect(titleEl).toBeInTheDocument();
  });
});
