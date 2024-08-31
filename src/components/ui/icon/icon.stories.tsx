import React, { FC } from "react";

import { PropsFromWithoutRef } from "@/library/types/react";

import * as IconComponents from "./generated";
import { size } from "./types";

import { colorMap } from "../token/color";

/* ---------- 아이콘 스타일 래퍼 시작 ----------*/

interface IconItemProps {
  readonly name: string;
  readonly children?: React.ReactNode;
}

// Todo - support code copy(ts, res) handler
const IconItem: React.FC<IconItemProps> = ({ name, children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexBasis: "200px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid #A9A9A9",
          borderRadius: "8px",
          width: 80,
          height: 80,
          marginBottom: 10,
        }}
      >
        {children}
      </div>
      <div>{name}</div>
    </div>
  );
};

export const IconGallery: FC<PropsFromWithoutRef<(typeof IconComponents)["IconActivity"]>> = (
  args,
) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
      }}
    >
      {Object.entries(IconComponents).map(([name, Component]) => (
        <IconItem key={name} name={name}>
          <Component {...args} />
        </IconItem>
      ))}
    </div>
  );
};

const Icons = IconGallery.bind({});

export default {
  title: "Icon",
  component: Icons,
  argTypes: {
    size: {
      defaultValue: "24",
      description: "아이콘의 사이즈입니다.",
      control: { type: "radio" },
      options: size,
    },
    color: {
      control: { type: "select" },
      options: Object.keys(colorMap),
    },
  },
};
