import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Flex } from "@/components/ui/theme/flex";
import { Text } from "@/components/ui/theme/text";

import { maxNickNameLength } from "./const";

const schema = z.object({
  nickName: z
    .string()
    .min(1, "닉네임을 입력해주세요.")
    .max(maxNickNameLength, `닉네임은 최대 ${maxNickNameLength}글자 입니다.`),
});

type Schema = z.infer<typeof schema>;

export const FirstStep: FC<{
  onNext: (info: Schema) => void;
}> = ({ onNext }) => {
  const form = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      nickName: "",
    },
  });

  const handleSubmit = (values: Schema) => {
    onNext({
      nickName: values.nickName,
    });
  };

  return (
    <Flex direction="column" justify="between" className="h-full">
      <Flex direction="column" gap="20">
        <Flex direction="column" gap="4">
          <Text size="heading/tiny" weight="bold">
            닉네임을 알려주세요.
          </Text>
          <Flex direction="column">
            <Text size="paragraph/small" weight="medium">
              프로필에 표시되는 이름입니다.
            </Text>
            <Text size="paragraph/small" weight="medium">
              한글 혹은 영어 8자까지 입력해주세요.
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <Form {...form}>
            <Flex className="w-full" direction="column" asChild>
              <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                  control={form.control}
                  name="nickName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder={`${maxNickNameLength}자까지 입력가능`}
                          {...field}
                        />
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
