import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TasksScreenTabInactive = (props: any) => (
  <Svg
    width={45}
    height={45}
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M33.36 12.773l1.867 1.867L18.24 31.627l-7.467-7.467 1.867-1.867 5.6 5.6 15.12-15.12zm0-3.773L18.24 24.12l-5.6-5.6L7 24.16 18.24 35.4 39 14.64 33.36 9z"
      fill="#323232"
    />
  </Svg>
);
export default TasksScreenTabInactive;
