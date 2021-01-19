import { rest } from "msw";
import messages from "./data/messages";
import rice from "./data/rice";

export const handlers = [
  rest.get("/rice/type", (req, res, ctx) => {
    return res(ctx.json(rice.type));
  }),

  rest.get("/users/:id/messages", (req, res, ctx) => {
    return res(ctx.json(messages));
  }),

  rest.post("/users/:id/messages", (req, res, ctx) => {
    const { message } = JSON.parse(req.body);
    return res(
      ctx.json({
        id: Math.random(),
        message,
      })
    );
  }),
];