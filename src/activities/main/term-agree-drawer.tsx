import { FC, useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { IconAlertTriangle } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { Flex } from "@/components/ui/theme/flex";

type Announcement = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const announcements = [
  {
    title: "개인정보는 신중하게 알려주기",
    description:
      "상호동의간 연락처를 교환할수 있지만 동의없이 제 3자에게 공유, 유출하는 모든 행위를 금지합니다.",
    icon: <IconAlertTriangle size="24" color="#1AA84A" />,
  },
  {
    title: "성적인 표현 및 욕설 금지",
    description:
      "성희롱을 포함한 욕설 및 불쾌한 발언에 대해서 심각한 것으로 규정하고 금지 및 제재합니다.",
    icon: <IconAlertTriangle size="24" color="#FF4550" />,
  },
  {
    title: "매너있고 친절하게 대화하기",
    description:
      "우리의 소중한 시간을 쓰는만큼 서로 의미있고 진중한 대화가 오갔으면해요. 서로를 존중해줘요.",
    icon: <IconAlertTriangle size="24" color="#ECD55B" />,
  },
] satisfies Announcement[];

export const TermAgreeDrawer: FC<{
  doesAgree: boolean;
}> = ({ doesAgree }) => {
  const [open, setOpen] = useState(!doesAgree);

  useEffect(() => {
    setOpen(!doesAgree);
  }, [doesAgree]);

  const handleAgree = useCallback(() => {
    // @TODO: do mutation here
  }, []);

  return (
    <Drawer open={open} onOpenChange={setOpen} handleOnly>
      <DrawerContent className="inset-0 mt-0 rounded-none px-6" hideHandle>
        <Flex direction="column" gap="36">
          <DrawerHeader>
            <DrawerTitle asChild>
              <Flex direction="column" gap="16">
                <Flex>
                  <IconAlertTriangle size="36" color="#D456C0" />
                </Flex>
                <Flex direction="column" gap="4" justify="start" align="baseline">
                  <Text size="heading/medium" weight="bold" align="left">
                    스냅팅에 오신걸 환영해요!
                  </Text>
                  <Text size="heading/medium" weight="bold" align="left">
                    3가지만 약속해요.
                  </Text>
                </Flex>
              </Flex>
            </DrawerTitle>
          </DrawerHeader>
          <Flex direction="column" gap="32">
            {announcements.map((anno, index) => (
              <Flex key={`announcement-${index}`} gap="16">
                <Flex>{anno.icon}</Flex>
                <Flex direction="column" gap="4">
                  <Text size="label/large" color="content-primary" weight="semibold">
                    {anno.title}
                  </Text>
                  <Text size="paragraph/small" color="content-secondary" weight="medium">
                    {anno.description}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button size="lg" onClick={handleAgree}>
              동의하기
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
