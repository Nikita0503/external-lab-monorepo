import * as React from 'react';
import Svg, { ClipPath, Defs, G, Mask, Path, Rect } from 'react-native-svg';

const ProfileScreenTabActive = (props: any) => (
  <Svg
    width={45}
    height={45}
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={45} height={45} rx={22.5} fill="#6871EE" />
    <G clipPath="url(#clip0_26_474)">
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
          d="M23 23a5.332 5.332 0 005.333-5.333A5.332 5.332 0 0023 12.333a5.332 5.332 0 00-5.333 5.334A5.332 5.332 0 0023 23zm0-8c1.467 0 2.667 1.2 2.667 2.667 0 1.466-1.2 2.666-2.667 2.666a2.674 2.674 0 01-2.667-2.666C20.333 16.2 21.533 15 23 15zm0 9.333c-3.56 0-10.667 1.787-10.667 5.334v2.666c0 .734.6 1.334 1.334 1.334h18.666c.734 0 1.334-.6 1.334-1.334v-2.666c0-3.547-7.107-5.334-10.667-5.334zM31 31H15v-1.32c.267-.96 4.4-2.68 8-2.68 3.6 0 7.733 1.72 8 2.667V31z"
          fill="#fff"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0_26_474">
        <Path fill="#fff" transform="translate(7 7)" d="M0 0H32V32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ProfileScreenTabActive;
