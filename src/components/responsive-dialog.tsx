import { useIsMobile } from "@/hooks/use-mobile";

interface ResponsiveModalProps {
  children: React.ReactNode;
  open: boolean;
  title: string;
  onOpenChange: (open: boolean) => void;
}

export const ResponsiveModal = ({
  children,
  open,
  title,
  onOpenChange,
}: ResponsiveModalProps) => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return <Drawer></Drawer>;
  }
};
