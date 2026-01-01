import * as React from 'react';
import Svg, { ClipPath, Defs, G, Mask, Path, Rect } from 'react-native-svg';

const CommonTasksScreenTabActive = (props: any) => (
  <Svg
    width={45}
    height={45}
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={45} height={45} rx={22.5} fill="#6871EE" />
    <G clipPath="url(#clip0_26_483)">
      <Mask
        id="a"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={7}
        y={7}
        width={32}
        height={32}
      >
        <Path d="M39 7H7v32h32V7z" fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M25.667 15v-2.667h-5.334V15h5.334zm-13.334 4v12c0 .733.6 1.333 1.334 1.333h18.666c.734 0 1.334-.6 1.334-1.333V19c0-.733-.6-1.333-1.334-1.333H13.667c-.734 0-1.334.6-1.334 1.333zm21.334-4a2.658 2.658 0 012.666 2.667v14.666A2.658 2.658 0 0133.667 35H12.333a2.657 2.657 0 01-2.666-2.667l.013-14.666A2.646 2.646 0 0112.333 15h5.334v-2.667a2.657 2.657 0 012.666-2.666h5.334a2.657 2.657 0 012.666 2.666V15h5.334z"
          fill="#fff"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0_26_483">
        <Path fill="#fff" transform="translate(7 7)" d="M0 0H32V32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CommonTasksScreenTabActive;
