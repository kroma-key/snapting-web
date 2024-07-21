import type { ActivityComponentType } from "@stackflow/react";

import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";

const Main: ActivityComponentType = () => {
  return (
    <Layout>
      <Button>abc</Button>
    </Layout>
  );
};

export default Main;
