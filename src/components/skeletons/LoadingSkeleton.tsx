import { colors } from "@/src/app/constants/colors";
import styled from "styled-components";

const Skeleton = styled.div<{
  $height: string;
  $width: string;
  $maxHeight?: string;
  $maxWidth?: string;
  $margin?: string;
  $borderRadius?: string;
}>`
  aspect-ratio: 1/1;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  max-width: ${({ $maxWidth }) => $maxWidth || "100%"};
  max-height: ${({ $maxHeight }) => $maxHeight || "100%"};
  margin: ${({ $margin }) => $margin || "0"};
  border-radius: ${({ $borderRadius }) => $borderRadius || "10px"};
  opacity: 0.2;
  background-color: ${colors.neutralGrey};

  @keyframes shimmer {
    from {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  animation: shimmer 2.5s linear infinite;
  background: linear-gradient(
    to right,
    ${colors.neutralGrey} 0%,
    ${colors.darkGrey} 25%,
    ${colors.neutralGrey} 50%
  );
  background-size: 200% 100%;
`;

type Props = {
  height: string;
  width: string;
  maxHeight?: string;
  maxWidth?: string;
  margin?: string;
  borderRadius?: string;
};

const LoadingSkeleton = ({
  height = "100%",
  width = "100%",
  maxHeight,
  maxWidth,
  margin,
  borderRadius,
}: Props) => {
  return (
    <Skeleton
      $height={height}
      $width={width}
      $margin={margin}
      $maxHeight={maxHeight}
      $maxWidth={maxWidth}
      $borderRadius={borderRadius}
    />
  );
};

export default LoadingSkeleton;
