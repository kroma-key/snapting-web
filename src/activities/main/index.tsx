import type { ActivityComponentType } from "@stackflow/react";
import { useEffect, useMemo } from "react";

import { LayoutWithMenu } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IconClock, IconFilter, IconPlus, IconZap } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { Flex } from "@/components/ui/theme/flex";
import { useTimer } from "@/hooks/useTimer";

import { TermAgreeDrawer } from "./term-agree-drawer";

const Main: ActivityComponentType = () => {
  const doesAgreeTerm = false;
  const { time, formatTime, startTimer } = useTimer(2 * 60 * 60);
  const remainTime = useMemo(() => formatTime(time), [formatTime, time]);

  useEffect(() => {
    startTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LayoutWithMenu>
      <Flex direction="column" className="px-6 py-2.5">
        <Flex justify="between" align="center">
          <Badge className="gap-2" variant="secondary">
            <IconZap />0
          </Badge>
          <Flex gap="8" align="center">
            {/* @TODO: replace stackflow link */}
            <Flex className="px-4 py-2">
              {/* <Link href="#" color="gray" underline="always">
                스냅팅 룰
              </Link> */}
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
          <Flex direction="column" gap="32">
            <Flex direction="column" gap="4">
              <Text className="text-center text-4xl font-extrabold italic">SnapTing</Text>
              <Flex direction="column">
                <Text className="text-center text-sm font-extrabold">매일 저녁 7시부터 9시</Text>
                <Text className="text-center text-sm font-extrabold">스냅팅이 시작됩니다.</Text>
              </Flex>
            </Flex>
            <Flex align="center" direction="column" gap="12">
              <Badge variant="default" className="gap-1 bg-grey-700 px-2 py-1 text-grey-300">
                <IconClock />
                시작까지
              </Badge>
              <Flex align="center" className="gap-[19px]">
                <Text weight="extraBold" className="text-4xl">
                  {remainTime.hours.toString().padStart(2, "0")}
                </Text>
                <Text weight="extraBold" className="text-4xl">
                  :
                </Text>
                <Text weight="extraBold" className="text-4xl">
                  {remainTime.minutes.toString().padStart(2, "0")}
                </Text>
                <Text weight="extraBold" className="text-4xl">
                  :
                </Text>
                <Text weight="extraBold" className="text-4xl">
                  {remainTime.seconds.toString().padStart(2, "0")}
                </Text>
              </Flex>
            </Flex>
            <Flex>
              <Card className="w-full bg-white p-4">
                <Flex justify="between" align="center">
                  <Flex direction="column" gap="4">
                    <Flex gap="4">
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
        <Flex direction="column" gap="8">
          <TermAgreeDrawer doesAgree={doesAgreeTerm} />
          <Button fullWidth disabled radius="2xl" className="h-auto">
            <Text weight="semibold" size="label/large">
              아직 참여 시간이 아니에요
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
