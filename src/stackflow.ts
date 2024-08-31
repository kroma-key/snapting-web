import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { devtoolsPlugin } from "@stackflow/plugin-devtools";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import { mapInitialActivityPlugin } from "@stackflow/plugin-map-initial-activity";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { stackflow } from "@stackflow/react";
import { decompressFromEncodedURIComponent } from "lz-string";
import { z } from "zod";

import { FillProfileFunnel } from "./activities/funnel/fill-profile";
import { SignInFunnel } from "./activities/funnel/sign/sign-in";
import { SignUpFunnel } from "./activities/funnel/sign/sign-up";
import Main from "./activities/main";
import Welcome from "./activities/Welcome";

export const { Stack, activities, useStepFlow, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    Welcome,
    SignUpFunnel: {
      component: SignUpFunnel,
      paramsSchema: {
        type: "object",
        properties: {
          phoneNumber: {
            type: "string",
          },
        },
        required: ["phoneNumber"],
      },
    },
    SignInFunnel: {
      component: SignInFunnel,
      paramsSchema: {
        type: "object",
        properties: {
          phoneNumber: {
            type: "string",
          },
        },
        required: ["phoneNumber"],
      },
    },
    Main,
    // funnel
    FillProfileFunnel: {
      component: FillProfileFunnel,
      paramsSchema: {
        type: "object",
        properties: {
          nickName: {
            type: "string",
          },
          gender: {
            type: "string",
          },
          birthDay: {
            type: "string",
          },
          areaSi: {
            type: "string",
          },
          areaGu: {
            type: "string",
          },
        },
        required: ["nickName", "gender", "birthDay"],
      },
    },
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
        Main: "/main",
        SignInFunnel: "/sign-in",
        SignUpFunnel: "/sign-up",
        FillProfileFunnel: "/fill-profile",
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
