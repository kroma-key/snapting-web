import { zodResolver } from "@hookform/resolvers/zod";
import { A } from "@mobily/ts-belt";
import { FC } from "react";
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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Flex } from "@/components/ui/theme/flex";
import { Text } from "@/components/ui/theme/text";

const schema = z.object({
  phoneNumber: z
    .string()
    .min(1, "휴대폰 번호를 입력해주세요.(ex. 010-1234-5678)")
    .max(11, "휴대폰 번호를 입력해주세요.(ex. 010-1234-5678)"),
});

type Schema = z.infer<typeof schema>;

export const PhoneNumberInputStep: FC<{
  onNext: (info: Schema) => void;
}> = ({ onNext }) => {
  const form = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  const handleSubmit = (values: Schema) => {
    onNext({
      phoneNumber: values.phoneNumber,
    });
  };

  return (
    <Flex direction="column" justify="between" className="h-full">
      <Flex direction="column" gap="20">
        <Flex direction="column" gap="4">
          <Text size="heading/tiny" weight="bold">
            휴대폰번호로 본인확인 할게요.
          </Text>
          <Flex direction="column">
            <Text size="paragraph/small" weight="medium" color="gray/500">
              허위/중복 가입을 막고, 악성 사용자를 제재하는데만 사용돼요.
            </Text>
            <Text size="paragraph/small" weight="medium" color="gray/500">
              번호는 절대 누구에게도 공개되지 않아요.
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
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>휴대폰 번호</FormLabel>
                      <FormControl>
                        <InputOTP
                          maxLength={11}
                          {...field}
                          containerClassName="flex justify-between"
                        >
                          <InputOTPGroup>
                            {A.range(0, 2).map((index) => (
                              <InputOTPSlot key={index} index={index} className="size-11" />
                            ))}
                          </InputOTPGroup>
                          <InputOTPSeparator type="dash" />
                          <InputOTPGroup>
                            {A.range(3, 6).map((index) => (
                              <InputOTPSlot key={index} index={index} className="size-11" />
                            ))}
                          </InputOTPGroup>
                          <InputOTPSeparator type="dash" />
                          <InputOTPGroup>
                            {A.range(7, 10).map((index) => (
                              <InputOTPSlot key={index} index={index} className="size-11" />
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
