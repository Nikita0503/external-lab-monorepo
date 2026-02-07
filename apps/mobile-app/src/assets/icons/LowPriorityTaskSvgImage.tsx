import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

const LowPriorityTaskSvgImage = (props: any) => {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_475_356)">
        <Path
          d="M20.08 15.778l-8-8.278-8 8.278a1.181 1.181 0 101.702 1.639l6.299-6.521 6.305 6.52a1.182 1.182 0 001.701-1.638h-.006z"
          fill="#008C0E"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_475_356">
          <Path fill="#fff" d="M0 0H25V25H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default LowPriorityTaskSvgImage;
