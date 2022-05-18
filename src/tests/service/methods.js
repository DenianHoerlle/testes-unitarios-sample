import { rest } from "msw";
import { setupServer } from "msw/node";

const defaultData = {
  results: [
    {
      name: { first: "Test User" },
    },
  ],
  info: {},
};

const handlers = [
  rest.get("https://randomuser.me/api/", (req, res, context) => {
    return res(context.status(200), context.json(defaultData));
  }),
];

export default setupServer(handlers[0]);
