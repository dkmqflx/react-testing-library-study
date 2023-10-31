import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: "청소",
          cmpleted: true,
        },

        {
          id: 2,
          title: "청소2",
          cmpleted: true,
        },
        {
          id: 3,
          title: "청소3",
          cmpleted: false,
        },
      ])
    );
  }),
];
