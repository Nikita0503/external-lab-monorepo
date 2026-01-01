import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CommonTasksScreenTabInactive = (props: any) => (
  <Svg
    width={45}
    height={45}
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M26 14.333v-2.666h-5.333v2.666H26zm-13.333 4v12c0 .734.6 1.334 1.333 1.334h18.667c.733 0 1.333-.6 1.333-1.334v-12C34 17.6 33.4 17 32.667 17H14c-.733 0-1.333.6-1.333 1.333zm21.333-4A2.658 2.658 0 0136.667 17v14.667A2.657 2.657 0 0134 34.333H12.667A2.657 2.657 0 0110 31.667L10.013 17a2.646 2.646 0 012.654-2.667H18v-2.666A2.658 2.658 0 0120.667 9H26a2.658 2.658 0 012.667 2.667v2.666H34z"
      fill="#323232"
    />
  </Svg>
);
export default CommonTasksScreenTabInactive;
