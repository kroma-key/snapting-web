import { zodResolver } from "@hookform/resolvers/zod";
import { A } from "@mobily/ts-belt";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Flex } from "@/components/ui/theme/flex";
import { Text } from "@/components/ui/theme/text";
import { useTimer } from "@/hooks/useTimer";

const verifyCodeLength = 4;
const timerDuration = 180;

const schema = z.object({
  verifyCode: z.string().length(verifyCodeLength, `인증번호는 ${verifyCodeLength}자리여야 합니다.`),
});

type Schema = z.infer<typeof schema>;

export const PhoneNumberVerifyStep: FC<{
  phoneNumber: string;
  onNext: (info: Schema) => void;
  onTimeout: () => void;
}> = ({ phoneNumber, onNext, onTimeout }) => {
  const { time, startTimer } = useTimer(timerDuration);
  const form = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      verifyCode: "",
    },
  });

  useEffect(() => {
    startTimer();
  }, [startTimer]);

  useEffect(() => {
    // go back to previous page when phone number auth time is over
    if (time <= 0) {
      onTimeout();
    }
  }, [time]);

  const handleSubmit = (values: Schema) => {
    onNext({
      verifyCode: values.verifyCode,
    });
  };

  return (
    <Flex direction="column" justify="between" className="h-full">
      <Flex direction="column" gap="20">
        <Flex direction="column" gap="4">
          <Text size="heading/tiny" weight="bold">
            {phoneNumber}
          </Text>
          <Flex direction="column">
            <Text size="paragraph/small" weight="medium">
              전송된 인증번호를 입력해주세요.
            </Text>
            <Text size="paragraph/small" weight="medium">
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
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>휴대폰 번호</FormLabel>
                      <FormControl>
                        <InputOTP maxLength={4} {...field}>
                          <InputOTPGroup>
                            {A.range(0, 3).map((index) => (
                              <InputOTPSlot key={index} index={index} />
                            ))}
                          </InputOTPGroup>
                        </InputOTP>
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
          다음
        </Button>
      </Flex>
    </Flex>
  );
};
