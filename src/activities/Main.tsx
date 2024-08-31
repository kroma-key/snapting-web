import { Link } from "@radix-ui/themes";
import type { ActivityComponentType } from "@stackflow/react";

import { LayoutWithMenu } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Flex } from "@/components/ui/flex";
import { IconClock, IconFilter, IconPlus, IconZap } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";

const Main: ActivityComponentType = () => {
  return (
    <LayoutWithMenu>
      <Flex direction="column" className="px-6 py-2.5">
        <Flex justify="between" align="center">
          <Badge className="gap-2" variant="secondary">
            <IconZap />0
          </Badge>
          <Flex gap="0.5" align="center">
            {/* @TODO: replace stackflow link */}
            <Flex className="px-4 py-2">
              <Link href="#" color="gray" underline="always">
                스냅팅 룰
              </Link>
            </Flex>
            <Flex>
              <Button size="icon" variant="ghost">
                <IconFilter />
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" justify="between" className="h-[calc(100%-60px)] p-2">
        <Card className="w-full bg-black p-4 text-white">
          <Flex direction="column" gap="2">
            <Flex direction="column" gap="0.25">
              <Text className="text-center text-4xl font-extrabold italic">SnapTing</Text>
              <Flex direction="column">
                <Text className="text-center text-sm font-extrabold">매일 저녁 7시부터 9시</Text>
                <Text className="text-center text-sm font-extrabold">스냅팅이 시작됩니다.</Text>
              </Flex>
            </Flex>
            <Flex align="center" direction="column" gap="0.75">
              <Badge variant="default" className="gap-1 bg-grey-700 px-2 py-1 text-grey-300">
                <IconClock />
                시작까지
              </Badge>
              <Flex align="center" className="gap-[19px]">
                <Text weight="extraBold" className="text-4xl">
                  00
                </Text>
                <Text weight="extraBold" className="text-4xl">
                  :
                </Text>
                <Text weight="extraBold" className="text-4xl">
                  00
                </Text>
                <Text weight="extraBold" className="text-4xl">
                  :
                </Text>
                <Text weight="extraBold" className="text-4xl">
                  00
                </Text>
              </Flex>
            </Flex>
            <Flex>
              <Card className="w-full bg-white p-4">
                <Flex justify="between" align="center">
                  <Flex direction="column" gap="0.25">
                    <Flex gap="0.25">
                      {/* @TODO: apply figma color */}
                      <Badge>필수</Badge>
                      <Text weight="semibold" size="label/base/02">
                        프로필을 입력해주세요.
                      </Text>
                    </Flex>
                    <Flex>
                      <Text weight="medium" size="label/base/03" color="content-secondary">
                        스냅팅에 참가위해 프로필 입력이 필요해요.
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex>
                    <IconPlus />
                  </Flex>
                </Flex>
              </Card>
            </Flex>
          </Flex>
        </Card>
        <Flex direction="column" gap="0.5">
          <Flex justify="center">
            <Text color="content-teritary" size="paragraph/small">
              시작하면 알려드릴게요!
            </Text>
          </Flex>
          <Button fullWidth radius="2xl" className="h-auto">
            <Text weight="semibold" size="label/large">
              시작하면 알림받기
            </Text>
          </Button>
          <Button fullWidth variant="secondary" radius="2xl" className="h-auto">
            <Text weight="semibold" size="label/large">
              공유하기
            </Text>
          </Button>
        </Flex>
      </Flex>
    </LayoutWithMenu>
  );
};

export default Main;
