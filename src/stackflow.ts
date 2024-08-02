import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { devtoolsPlugin } from "@stackflow/plugin-devtools";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import { mapInitialActivityPlugin } from "@stackflow/plugin-map-initial-activity";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { stackflow } from "@stackflow/react";
import { decompressFromEncodedURIComponent } from "lz-string";
import { z } from "zod";

import Main from "./activities/Main";
import SignIn from "./activities/SignIn";
import SignUp from "./activities/SignUp";
import Welcome from "./activities/Welcome";

export const { Stack, activities, useStepFlow, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    Welcome,
    SignUp: {
      component: SignUp,
      paramsSchema: {
        type: "object",
        properties: {
          phoneNumber: {
            type: "string",
          },
        },
        required: [],
      },
    },
    SignIn,
    Main,
  },
  plugins: [
    devtoolsPlugin(),
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
    historySyncPlugin({
      routes: {
        Welcome: "/",
        SignIn: "/sign-in",
        SignUp: "/sign-up",
        Main: "/main",
      },
      fallbackActivity: () => "Welcome",
    }),
    mapInitialActivityPlugin({
      mapper(url) {
        try {
          if (!url.pathname.startsWith("/.lzstring/")) {
            return null;
          }

          const [, encodedString] = url.pathname.split("/.lzstring/");

          const schema = z.object({
            activityName: z.string(),
            activityParams: z.record(z.any()),
          });

          const result = schema.safeParse(
            JSON.parse(decompressFromEncodedURIComponent(encodedString)),
          );

          if (!result.success) {
            return null;
          }

          return {
            activityName: result.data.activityName,
            activityParams: result.data.activityParams,
          };
        } catch {
          return null;
        }
      },
    }),
  ],
});

export type TypeActivities = typeof activities;
