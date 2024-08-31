import type { ActivityComponentType } from "@stackflow/react";

import { Image } from "@/components/common/Image";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Literal } from "@/components/ui/literal";
import { Flex } from "@/components/ui/theme/flex";
import { Link } from "@/components/ui/theme/link";
import { Text } from "@/components/ui/theme/text";
import { useUnsafeFlow } from "@/hooks/useFlow";

const Welcome: ActivityComponentType = () => {
  const { push } = useUnsafeFlow();

  const handleSignIn = () => {
    push("SignInFunnel", {});
  };

  const handleSignUp = () => {
    push("SignUpFunnel", {});
  };

  return (
    <Layout>
      <Flex justify="between" direction="column" className="h-full pb-6 pt-1.5">
        <Flex direction="column" align="center" gap="4" className="px-10">
          {/* @TODO: add image fallback */}
          <Image src="/main.png" alt="logo" />
          <Text className="text-center text-6xl font-extrabold italic">SnapTing</Text>
          <Flex justify="center" align="center" direction="column" gap="8" asChild>
            <Text align="center">
              <Text weight="bold">직장인 실시간 소개팅</Text>
              <Flex direction="column">
                <div>매일 저녁 7시부터 9시</div>
                <div>스냅팅이 시작됩니다</div>
              </Flex>
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" gap="24">
          <Flex className="flex flex-col gap-4 px-6">
            <Button variant="secondary" className="rounded-2xl border-2" onClick={handleSignUp}>
              회원가입
            </Button>
            <Button className="rounded-2xl border-2" onClick={handleSignIn}>
              로그인
            </Button>
          </Flex>
          <Flex direction="column" align="center">
            {/* @TODO: define text size and make color token */}
            <Text size="label/base/03" color="gray/500">
              로그인은
              <Literal.Space />
              <Link href="https://github.com" underline="always" weight="light">
                개인 정보 보호 정책
              </Link>
              <Literal.Space />
              및
              <Literal.Space />
              <Link href="https://github.com" underline="always" weight="light">
                서비스 약관
              </Link>
              에
            </Text>
            <Text size="label/base/03" color="gray/400">
              동의 하는 것을 의마합니다
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Welcome;
