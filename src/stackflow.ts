import { vars } from "@seed-design/design-token";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { devtoolsPlugin } from "@stackflow/plugin-devtools";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import { mapInitialActivityPlugin } from "@stackflow/plugin-map-initial-activity";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { stackflow } from "@stackflow/react";
import { decompressFromEncodedURIComponent } from "lz-string";
import z from "zod";

import Article from "./activities/Article";
import Main from "./activities/Main";

export const { Stack, activities } = stackflow({
  transitionDuration: 350,
  activities: {
    Main,
    Article: {
      component: Article,
      paramsSchema: {
        type: "object",
        properties: {
          articleId: {
            type: "string",
          },
          title: {
            type: "string",
          },
        },
        required: ["articleId", "title"],
      },
    },
  },
  plugins: [
    devtoolsPlugin(),
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
      backgroundColor: vars.$semantic.color.paperDefault,
      appBar: {
        textColor: vars.$scale.color.gray900,
        iconColor: vars.$scale.color.gray900,
        borderColor: vars.$semantic.color.divider3,
        backButton: {
          ariaLabel: "뒤로 가기",
        },
        closeButton: {
          ariaLabel: "닫기",
        },
      },
    }),
    historySyncPlugin({
      routes: {
        Main: "/",
        Article: "/articles/:articleId",
      },
      fallbackActivity: () => "Main",
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
