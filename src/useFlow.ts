import { useActions } from "@stackflow/react";

import type { TypeActivities } from "./stackflow";

export function useUnsafeFlow() {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { push, replace, pop, ...rest } = useActions<TypeActivities>();
  return {
    push,
    replace,
    pop,
    ...rest,
  };
}
