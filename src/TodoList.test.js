import { screen, render } from "@testing-library/react";
import TodoList from "./TodoList";
import { server } from "./mocks/server";
import { rest } from "msw";

describe("Todo List", () => {
  test("Todo 라는 제목이 있다", () => {
    render(<TodoList />);
    const titleEl = screen.getByText("Todo");
    expect(titleEl).toBeInTheDocument();
  });

  test("리스트가 잘 나온다 (3개)", async () => {
    render(<TodoList />);
    const list = await screen.findAllByRole("listitem"); // li
    expect(list).toHaveLength(3);
  });

  // api 요청 실패하는 테스트 작성해도 다른 테스트에는 영향을 미치지 않는다
  // setupTest.js에서 확인할 수 있듯이, afterEac에서 reset 해주기 때문이다

  test("에러가 났을 때 에러 메세지를 보여준다", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/todos",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    render(<TodoList />);
    const error = await screen.findByText("에러 발생");
    expect(error).toBeInTheDocument();
  });
});
