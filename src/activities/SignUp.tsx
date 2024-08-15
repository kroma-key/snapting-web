import { zodResolver } from "@hookform/resolvers/zod";
import { O } from "@mobily/ts-belt";
import type { ActivityComponentType } from "@stackflow/react";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { P, match } from "ts-pattern";
import { z } from "zod";

import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { IconArrowLeftCircle } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Flex } from "@/components/ui/theme/flex";
import { Text } from "@/components/ui/theme/text";
import { useUnsafeFlow } from "@/hooks/useFlow";
import { useTimer } from "@/hooks/useTimer";
import { formatVerifySeconds } from "@/library/string";
import { useStepFlow } from "@/stackflow";

const verifyCodeLength = 4;
const timerDuration = 180;
const phoneNumberRegex = /^\d{3}-\d{3,4}-\d{4}$/;

// First Step

const firstStepSchema = z.object({
  phoneNumber: z.string().regex(phoneNumberRegex, "휴대폰 번호 형식이 올바르지 않습니다."),
});

type FirstStepForm = z.infer<typeof firstStepSchema>;

const FirstStep = () => {
  const { replace } = useUnsafeFlow();
  const { stepPush } = useStepFlow("SignUp");

  const form = useForm<FirstStepForm>({
    mode: "all",
    resolver: zodResolver(firstStepSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  const handleBack = () => {
    replace("Welcome", {}, { animate: false });
  };

  const handleSubmit = (values: FirstStepForm) => {
    stepPush({
      phoneNumber: values.phoneNumber,
    });
  };

  return (
    <Flex direction="column" justify="between" className="h-full px-6 py-4">
      <Flex direction="column" gap="32">
        <Flex direction="column" gap="32">
          {/* @TODO: request for arrowleftcircle fill icon */}
          <Flex display="inline-flex" className="bg-black" asChild onClick={handleBack}>
            <IconArrowLeftCircle color="white" size="32" className="rounded-full" />
          </Flex>
          <Flex direction="column" gap="4">
            <Text size="22" weight="bold">
              휴대폰번호로 본인확인 할게요.
            </Text>
            <Text size="22" weight="light">
              허위/중복 가입을 막고, 악성 사용자를 제재하는데만 사용돼요. 번호는 절대 누구에게도
              공개되지 않아요.
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <Form {...form}>
            <Flex className="w-full" direction="column" asChild>
              <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  // @TODO: show input as phone number format
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>휴대폰 번호</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="010-0000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Flex>
          </Form>
        </Flex>
      </Flex>
      <Flex direction="column" gap="8">
        <Button
          fullWidth
          disabled={!form.formState.isValid}
          onClick={form.handleSubmit(handleSubmit)}
        >
          인증번호 발송
        </Button>
      </Flex>
    </Flex>
  );
};

// Second Step

const secondStepSchema = z.object({
  verifyCode: z.string().length(verifyCodeLength, `인증번호는 ${verifyCodeLength}자리여야 합니다.`),
});

type SecondStepForm = z.infer<typeof secondStepSchema>;

const SecondStep: FC<{
  phoneNumber: string;
}> = ({ phoneNumber }) => {
  const { time, startTimer } = useTimer(timerDuration);
  const { replace } = useUnsafeFlow();
  const { stepPop } = useStepFlow("SignUp");

  useEffect(() => {
    startTimer();
  }, [startTimer]);

  useEffect(() => {
    if (time <= 0) {
      stepPop();
    }
  }, [stepPop, time]);

  const form = useForm<SecondStepForm>({
    mode: "all",
    resolver: zodResolver(secondStepSchema),
    defaultValues: {
      verifyCode: "",
    },
  });

  const handleBack = () => {
    stepPop();
  };

  const handleSubmit = (values: SecondStepForm) => {
    // @TODO: do mutation call
    console.log(values);
    // @TODO: need to remove all router history
    // reset here
    // if success go to next step
    replace("Main", {});
  };

  return (
    <Flex direction="column" justify="between" className="h-full px-6 py-4">
      <Flex direction="column" gap="16">
        <Flex direction="column" gap="16">
          {/* @TODO: request for arrowleftcircle fill icon */}
          <Flex display="inline-flex" className="bg-black" asChild onClick={handleBack}>
            <IconArrowLeftCircle color="white" size="32" className="rounded-full" />
          </Flex>
          <Flex direction="column" gap="4">
            <Text size="22" weight="bold">
              {phoneNumber}
            </Text>
            <Text size="22" weight="bold">
              전송된 인증번호를 입력해주세요.
            </Text>
            <Text size="22" weight="light">
              인증번호 {verifyCodeLength}자리를 입력해주세요
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <Form {...form}>
            <Flex className="w-full" direction="column" asChild>
              <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                  control={form.control}
                  name="verifyCode"
                  // @TODO: show input as phone number format
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>인증번호 {formatVerifySeconds(time)} </FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="대소문자를 구분해주세요" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Flex>
          </Form>
        </Flex>
      </Flex>
      <Flex direction="column" gap="8">
        <Button
          fullWidth
          disabled={!form.formState.isValid}
          onClick={form.handleSubmit(handleSubmit)}
        >
          가입완료
        </Button>
      </Flex>
    </Flex>
  );
};

// non-null, non-empty string guard
const guardValidString = (value: O.Option<string>): value is string => {
  return O.isSome(value) && value !== "";
};

const SignUp: ActivityComponentType<{
  phoneNumber?: string;
}> = ({ params }) => {
  return (
    <Layout>
      {match(params.phoneNumber)
        .with(P.nullish, "", () => <FirstStep />)
        .with(P.when(guardValidString), (number) => <SecondStep phoneNumber={number} />)
        .exhaustive()}
    </Layout>
  );
};

export default SignUp;
