import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { stackflow } from "@stackflow/react";

import { activities } from "./stackflow";

export const { Stack } = stackflow({
  transitionDuration: 350,
  activities,
  initialActivity: () => "Main",
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
});
