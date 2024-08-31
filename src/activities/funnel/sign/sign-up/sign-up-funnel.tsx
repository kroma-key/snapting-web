import type { ActivityComponentType } from "@stackflow/react";
import { useCallback, useMemo } from "react";
import { P, match } from "ts-pattern";

import { Layout } from "@/components/Layout";
import { IconArrowLeftCircle } from "@/components/ui/icon";
import { Flex } from "@/components/ui/theme/flex";
import { useUnsafeFlow } from "@/hooks/useFlow";
import { G } from "@/library/guard";
import { cn } from "@/library/utils";
import { useStepFlow } from "@/stackflow";

import { PhoneNumberInputStep } from "../step/phonenumber-input-step";
import { PhoneNumberVerifyStep } from "../step/phonenumber-verify-step";

export const SignUpFunnel: ActivityComponentType<{
  phoneNumber?: string;
}> = ({ params }) => {
  const { phoneNumber } = params;
  const { replace } = useUnsafeFlow();
  const { stepPush, stepPop } = useStepFlow("SignUpFunnel");

  const currentStepInfo = useMemo(() => {
    return match(phoneNumber)
      .with(P.nullish, "", () => ({
        step: 1 as const,
      }))
      .with(P.when(G.isValidString), (phoneNumber) => ({
        step: 2 as const,
        phoneNumber,
      }))
      .exhaustive();
  }, [phoneNumber]);

  const handleBack = useCallback(() => {
    stepPop();
  }, [stepPop]);

  return (
    <Layout>
      <Flex direction="column" justify="between" className="h-full px-6">
        <Flex direction="column" className="flex-1" gap="16">
          <IconArrowLeftCircle
            size="32"
            className={cn(
              "text-black",
              "cursor-pointer",
              currentStepInfo.step === 1 && "invisible",
            )}
            onClick={handleBack}
          />
          {match(currentStepInfo)
            .with({ step: 1 }, () => (
              <PhoneNumberInputStep
                onNext={({ phoneNumber }) => {
                  stepPush({
                    ...params,
                    phoneNumber,
                  });
                }}
              />
            ))
            .with({ step: 2 }, ({ phoneNumber }) => (
              <PhoneNumberVerifyStep
                phoneNumber={phoneNumber}
                onNext={({ verifyCode }) => {
                  // do api validation here
                  console.log(verifyCode);
                  // when success
                  replace("Main", {});
                }}
                onTimeout={() => {
                  stepPop();
                }}
              />
            ))
            .exhaustive()}
        </Flex>
      </Flex>
    </Layout>
  );
};
