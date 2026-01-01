import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ProfileScreenTabInactive = (props: any) => (
  <Svg
    width={45}
    height={45}
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M23 22c3.315 0 6-2.685 6-6s-2.685-6-6-6-6 2.685-6 6 2.685 6 6 6zm0-9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zm0 10.5c-4.005 0-12 2.01-12 6v3c0 .825.675 1.5 1.5 1.5h21c.825 0 1.5-.675 1.5-1.5v-3c0-3.99-7.995-6-12-6zm9 7.5H14v-1.485c.3-1.08 4.95-3.015 9-3.015s8.7 1.935 9 3V31z"
      fill="#323232"
    />
  </Svg>
);
export default ProfileScreenTabInactive;
