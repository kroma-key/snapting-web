export type CreateOverlayElement = (
  props: Readonly<{
    isOpen: boolean;
    close: () => void;
    exit: () => void;
  }>,
) => JSX.Element;
