import * as React from 'react';
import Svg, { ClipPath, Defs, G, Mask, Path, Rect } from 'react-native-svg';

const TasksScreenTabActive = (props: any) => (
  <Svg
    width={45}
    height={45}
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={45} height={45} rx={22.5} fill="#6871EE" />
    <G clipPath="url(#clip0_26_465)">
      <Path transform="translate(7 7)" fill="#6871EE" d="M0 0H32V32H0z" />
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
          d="M33.36 13.707l1.867 1.866L18.24 32.56l-7.467-7.467 1.867-1.866 5.6 5.6 15.12-15.12zm0-3.774l-15.12 15.12-5.6-5.6L7 25.093l11.24 11.24L39 15.573l-5.64-5.64z"
          fill="#fff"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0_26_465">
        <Path fill="#fff" transform="translate(7 7)" d="M0 0H32V32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default TasksScreenTabActive;
