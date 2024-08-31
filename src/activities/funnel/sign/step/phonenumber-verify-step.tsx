import { zodResolver } from "@hookform/resolvers/zod";
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
import { Input } from "@/components/ui/input";
import { Flex } from "@/components/ui/theme/flex";
import { Text } from "@/components/ui/theme/text";
import { useTimer } from "@/hooks/useTimer";
import { formatVerifySeconds } from "@/library/string";

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
          다음
        </Button>
      </Flex>
    </Flex>
  );
};
