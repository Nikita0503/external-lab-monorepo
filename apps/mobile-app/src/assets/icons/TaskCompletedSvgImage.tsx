import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

const TaskCompletedSvgImage = (props: any) => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={22} height={22} rx={8} fill="#6871EE" />
    <G clipPath="url(#clip0_26_498)">
      <Path
        d="M17.35 5.813a.77.77 0 010 1.042l-7.862 8.44a.65.65 0 01-.97 0l-2.912-3.126a.77.77 0 010-1.042c.27-.29.7-.29.97 0l2.427 2.604 7.377-7.918c.27-.29.7-.29.97 0zm-1.462-1.578l-6.885 7.39L7.069 9.55a1.323 1.323 0 00-1.962 0l-.971 1.042a1.57 1.57 0 000 2.106l3.883 4.168c.54.58 1.42.58 1.962 0l8.84-9.482a1.57 1.57 0 000-2.106l-.971-1.042a1.323 1.323 0 00-1.962 0z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_26_498">
        <Path
          fill="#fff"
          transform="translate(2.87 2)"
          d="M0 0H17.2174V18H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default TaskCompletedSvgImage;
