import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<typeof AppScreen>;
export const Layout: React.FC<Props> = ({ appBar, children, ...props }) => (
  <AppScreen appBar={appBar} {...props}>
    {children}
  </AppScreen>
);

export const LayoutWithMenu: React.FC<Props> = ({ appBar, children, ...props }) => (
  <AppScreen appBar={appBar} {...props}>
    {children}
    {/* @TODO: add menubar */}
  </AppScreen>
);
