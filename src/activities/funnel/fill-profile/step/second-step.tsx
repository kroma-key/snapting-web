import { zodResolver } from "@hookform/resolvers/zod";
import { A } from "@mobily/ts-belt";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { RadioCard, RadioCardItem } from "@/components/ui/radio-card";
import { Flex } from "@/components/ui/theme/flex";
import { Text } from "@/components/ui/theme/text";

const schema = z.object({
  gender: z.enum(["male", "female"], {
    required_error: "성별을 선택해주세요.",
  }),
  birthDay: z.string().min(8, "생년월일을 입력해주세요."),
});

type Schema = z.infer<typeof schema>;

export const SecondStep: FC<{
  onNext: (info: Schema) => void;
}> = ({ onNext }) => {
  const form = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      gender: "male",
      birthDay: "",
    },
  });

  const handleSubmit = (values: Schema) => {
    onNext(values);
  };

  return (
    <Flex direction="column" justify="between" className="h-full">
      <Flex direction="column" gap="20">
        <Flex direction="column" gap="4">
          <Text size="heading/tiny" weight="bold">
            생일과 나이를 알려주세요.
          </Text>
          <Flex direction="column">
            <Text size="paragraph/small" weight="medium" color="destructive">
              이 정보는 변경할 수 없어요. 정확하게 입력해주세요.
            </Text>
          </Flex>
        </Flex>
        <Flex asChild>
          <Form {...form}>
            <Flex direction="column" gap="32" asChild>
              <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <RadioCard
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="grid grid-cols-2 justify-between gap-2"
                        >
                          <FormItem>
                            <FormControl>
                              <RadioCardItem value="male" asChild>
                                <Flex className="rounded-md border p-10">
                                  <Text size="heading/small">남성</Text>
                                </Flex>
                              </RadioCardItem>
                            </FormControl>
                          </FormItem>
                          <FormItem>
                            <FormControl>
                              <RadioCardItem value="female" asChild>
                                <Flex className="rounded-md border p-10">
                                  <Text size="heading/small">여성</Text>
                                </Flex>
                              </RadioCardItem>
                            </FormControl>
                          </FormItem>
                        </RadioCard>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="birthDay"
                  render={({ field }) => (
                    <FormItem className="mx-auto">
                      <FormControl>
                        <InputOTP
                          maxLength={8}
                          {...field}
                          containerClassName="flex justify-between"
                        >
                          <InputOTPGroup>
                            {A.range(0, 3).map((index) => (
                              <InputOTPSlot
                                key={index}
                                index={index}
                                placeholder={
                                  <Text size="label/base/02" color="muted">
                                    생
                                  </Text>
                                }
                              />
                            ))}
                          </InputOTPGroup>
                          <InputOTPSeparator />
                          <InputOTPGroup>
                            {A.range(4, 5).map((index) => (
                              <InputOTPSlot
                                key={index}
                                index={index}
                                placeholder={
                                  <Text size="label/base/02" color="muted">
                                    월
                                  </Text>
                                }
                              />
                            ))}
                          </InputOTPGroup>
                          <InputOTPSeparator />
                          <InputOTPGroup>
                            {A.range(6, 7).map((index) => (
                              <InputOTPSlot
                                key={index}
                                index={index}
                                placeholder={
                                  <Text size="label/base/02" color="muted">
                                    일
                                  </Text>
                                }
                              />
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
