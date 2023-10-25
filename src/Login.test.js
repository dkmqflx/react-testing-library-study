import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

describe("Login Test", () => {
  test("처음에는 Login 버튼이 있다.", () => {
    render(<Login />);

    const btnEl = screen.getByRole("button");
    expect(btnEl).toHaveTextContent("Login");
  });

  test("한번 클릭하면 Logout 버튼이 된다", async () => {
    const user = userEvent.setup();

    render(<Login />);

    const btnEl = screen.getByRole("button");
    await user.click(btnEl);
    expect(btnEl).toHaveTextContent("Logout");
  });

  test("tab, space, enter 동작", async () => {
    const user = userEvent.setup();

    render(<Login />);

    const btnEl = screen.getByRole("button");
    await user.tab();
    await user.keyboard(" "); // 키보드의 space 입력
    // await user.keyboard("{Enter}"); // 키보드의 엔터 입력은 이렇게 처리해줄 수 있다
    await waitFor(() => expect(btnEl).toHaveTextContent("Logout"));
  });
});
