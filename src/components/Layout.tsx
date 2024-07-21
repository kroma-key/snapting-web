import { AppScreen } from "@stackflow/plugin-basic-ui";

type PropOf<T> = T extends React.ComponentType<infer U> ? U : never;

interface LayoutProps {
  readonly appBar?: PropOf<typeof AppScreen>["appBar"];
  readonly children: React.ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ appBar, children }) => (
  <AppScreen appBar={appBar}>{children}</AppScreen>
);
