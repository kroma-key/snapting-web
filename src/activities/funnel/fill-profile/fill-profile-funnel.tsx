import type { ActivityComponentType } from "@stackflow/react";
import { useCallback, useMemo } from "react";
import { P, match } from "ts-pattern";

import { Layout } from "@/components/Layout";
import { IconArrowLeftCircle } from "@/components/ui/icon";
import { Progress } from "@/components/ui/progress";
import { Flex } from "@/components/ui/theme/flex";
import { G } from "@/library/guard";
import { cn } from "@/library/utils";
import { useStepFlow } from "@/stackflow";

import { FirstStep } from "./step/first-step";
import { SecondStep } from "./step/second-step";
import { ThirdStep } from "./step/third-step";

export const FillProfileFunnel: ActivityComponentType<{
  nickName?: string;
  gender?: string;
  birthDay?: string;
  areaSi?: string;
  areaGu?: string;
}> = ({ params }) => {
  const { nickName, gender, birthDay, areaSi, areaGu } = params;
  const { stepPush, stepPop } = useStepFlow("FillProfileFunnel");

  const currentStep = useMemo(() => {
    return match([nickName, [gender, birthDay], [areaSi, areaGu]])
      .with([P.nullish, P.any, P.any], () => 1 as const)
      .with([P.when(G.isValidString), [P.nullish, P.nullish], P.any], () => 2 as const)
      .with(
        [P.when(G.isValidString), [P.when(G.isValidString), P.when(G.isValidString)], P.any],
        () => 3 as const,
      )
      .otherwise(() => {
        throw new Error("Invalid step");
      });
  }, [areaGu, areaSi, birthDay, gender, nickName]);

  const handleBack = useCallback(() => {
    stepPop();
  }, [stepPop]);

  return (
    <Layout>
      <Progress value={(100 / 3) * currentStep} />
      <Flex direction="column" justify="between" className="h-full px-6 py-4">
        <Flex direction="column" className="flex-1" gap="16">
          <IconArrowLeftCircle
            size="32"
            className={cn("text-black", "cursor-pointer", currentStep === 1 && "invisible")}
            onClick={handleBack}
          />
          {match(currentStep)
            .with(1, () => (
              <FirstStep
                onNext={({ nickName }) => {
                  stepPush({
                    ...params,
                    nickName,
                  });
                }}
              />
            ))
            .with(2, () => (
              <SecondStep
                onNext={({ gender, birthDay }) => {
                  stepPush({
                    ...params,
                    gender,
                    birthDay,
                  });
                }}
              />
            ))
            .with(3, () => (
              <ThirdStep
                onNext={({ areaSi, areaGu }) => {
                  stepPush({
                    ...params,
                    areaSi,
                    areaGu,
                  });
                }}
              />
            ))
            .exhaustive()}
        </Flex>
      </Flex>
    </Layout>
  );
};
