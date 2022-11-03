import { ReactNode } from "react";
import { Nav } from "./Navigation";

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Nav activeMenu={undefined} />
    <main>{children}</main>
  </>
);
