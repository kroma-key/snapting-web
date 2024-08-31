import { zodResolver } from "@hookform/resolvers/zod";
import { A, O } from "@mobily/ts-belt";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Flex } from "@/components/ui/theme/flex";
import { Text } from "@/components/ui/theme/text";

import { areaGuList, areaSiList } from "./const";

const schema = z.object({
  areaSi: z.string().min(2, "시를 선택해주세요."),
  areaGu: z.string().min(2, "시/도를 선택해주세요."),
});

type Schema = z.infer<typeof schema>;

export const ThirdStep: FC<{
  onNext: (info: Schema) => void;
}> = ({ onNext }) => {
  const form = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      areaSi: O.getWithDefault(A.head(areaSiList), ""),
      areaGu: O.getWithDefault(A.head(areaGuList), ""),
    },
  });

  const handleSubmit = (values: Schema) => {
    onNext({
      areaSi: values.areaSi,
      areaGu: values.areaGu,
    });
  };

  return (
    <Flex direction="column" justify="between" className="h-full">
      <Flex direction="column" gap="20">
        <Flex direction="column" gap="4">
          <Text size="heading/tiny" weight="bold">
            마지막이에요 사는곳을 알려주세요.
          </Text>
        </Flex>
        <Flex justify="center" align="center">
          <Form {...form}>
            <Flex
              className="grid w-full grid-cols-2 gap-4"
              direction="column"
              justify="between"
              asChild
            >
              <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                  control={form.control}
                  name="areaSi"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a verified email to display" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {areaSiList.map((si) => (
                            <SelectItem value={si} key={si}>
                              {si}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="areaGu"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a verified email to display" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {areaGuList.map((gu) => (
                            <SelectItem value={gu} key={gu}>
                              {gu}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
          스냅팅 시작하기
        </Button>
      </Flex>
    </Flex>
  );
};
