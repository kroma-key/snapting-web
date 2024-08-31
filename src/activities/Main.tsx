import { Flex } from "@radix-ui/themes";
import type { ActivityComponentType } from "@stackflow/react";

import { Layout } from "@/components/layout";

const Main: ActivityComponentType = () => {
  return (
    <Layout>
      <Flex justify="between" direction="column" className="h-full pb-6 pt-1.5">
        Main
      </Flex>
    </Layout>
  );
};

export default Main;
