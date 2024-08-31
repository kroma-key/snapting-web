import { FC } from "react";

const Space: FC = () => {
  return <>&nbsp;</>;
};

const Slash: FC = () => {
  return <>/</>;
};

export const Literal = {
  Space,
  Slash,
};
