import { Flex, Link, Text } from "@radix-ui/themes";
import type { ActivityComponentType } from "@stackflow/react";

import { Image } from "@/components/common/Image";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Literal } from "@/components/ui/literal";
import { useUnsafeFlow } from "@/hooks/useFlow";

const Welcome: ActivityComponentType = () => {
  const { push } = useUnsafeFlow();

  const handleSignIn = () => {
    push("SignIn", {});
  };

  const handleSignUp = () => {
    push("SignUp", {});
  };

  return (
    <Layout>
      <Flex justify="between" direction="column" className="h-full pb-6 pt-1.5">
        <Flex direction="column" align="center" gap="1rem" className="px-10">
          {/* @TODO: add image fallback */}

          <Image src="/main.png" alt="logo" />
          <Text className="text-center text-6xl font-extrabold italic">SnapTing</Text>
          <Flex justify="center" align="center" direction="column" gap="0.5rem" asChild>
            <Text align="center">
              <Text size="6" weight="bold">
                직장인 실시간 소개팅
              </Text>
              {/* @TODO: make it api response */}
              <Flex direction="column">
                <div>매일 저녁 7시부터 9시</div>
                <div>스냅팅이 시작됩니다</div>
              </Flex>
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" gap="1.5rem">
          <Flex className="flex flex-col gap-4 px-6">
            {/* @TODO: apply button variant */}
            <Button className="rounded-2xl border-2 border-black" onClick={handleSignUp}>
              회원가입
            </Button>
            <Button
              variant="ghost"
              className="rounded-2xl border-2 border-black"
              onClick={handleSignIn}
            >
              로그인
            </Button>
          </Flex>
          <Flex direction="column" align="center">
            {/* @TODO: define text size and make color token */}
            <Text color="gray" size="2">
              로그인은
              <Literal.Space />
              <Link href="#" underline="always" weight="light" color="gray">
                개인 정보 보호 정책
              </Link>
              <Literal.Space />
              및
              <Literal.Space />
              <Link href="#" underline="always" weight="light" color="gray">
                서비스 약관
              </Link>
              에
            </Text>
            <Text color="gray" size="2">
              동의 하는 것을 의마합니다
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Welcome;
