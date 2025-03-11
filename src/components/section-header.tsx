import { FadeInUpMotion, FadeInUpMotionProps } from "./fade-in-up-motion";
import { Button, ButtonProps } from "./ui/button";

type SectionHeaderProps = ButtonProps & {
  animation?: FadeInUpMotionProps;
};

export const SectionHeader = ({
  children,
  variant='outline',
  animation,
  ...props
}: SectionHeaderProps) => {
  return (
    <FadeInUpMotion {...animation}>
      <Button variant={variant}  {...props}>{children}</Button>
    </FadeInUpMotion>
  );
};
