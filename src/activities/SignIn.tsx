import { Flex, Text } from "@radix-ui/themes";
import type { ActivityComponentType } from "@stackflow/react";

import { Layout } from "@/components/layout";

const SignIn: ActivityComponentType = () => {
  return (
    <Layout>
      <Flex>
        <Text size="6">휴대폰번호로 본인확인 할게요.</Text>
      </Flex>
    </Layout>
  );
};

export default SignIn;
