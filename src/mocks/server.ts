import { setupServer } from "msw/node";
import { handlers } from "./loginHandler";

export const server = setupServer(...handlers);
