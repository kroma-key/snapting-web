import type { ActivityComponentType } from "@stackflow/react";

import { Layout } from "@/components/Layout";
import { Flex } from "@/components/ui/theme/flex";
import { Text } from "@/components/ui/theme/text";

const SignIn: ActivityComponentType = () => {
  return (
    <Layout>
      <Flex>
        <Text size="24">휴대폰번호로 본인확인 할게요.</Text>
      </Flex>
    </Layout>
  );
};

export default SignIn;
