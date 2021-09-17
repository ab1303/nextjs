import cookie from "cookie";
import type { GetServerSidePropsContext } from "next";

type RequestType = Pick<GetServerSidePropsContext, "req">;

export function parseCookies({ req }: RequestType) {
  return cookie.parse(req ? req.headers.cookie || "" : "");
}
