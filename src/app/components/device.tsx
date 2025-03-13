import { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

interface DeviceProps {
  children: (props: {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
  }) => ReactNode;
}

export default function Device(props: DeviceProps) {
  const isTablet = useMediaQuery({ minWidth: "768px", maxWidth: "1239px" });
  const isMobile = useMediaQuery({ maxWidth: "767px" });
  const isDesktop = useMediaQuery({ minWidth: "1240px" });

  return (
    <>
      {props.children({
        isDesktop,
        isMobile,
        isTablet,
      })}
    </>
  );
}
