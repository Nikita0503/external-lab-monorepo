import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TaskStatusDoneSvgImage = (props: any) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill="#fff" fillOpacity={0.01} d="M0 0H48V48H0z" />
      <Path
        d="M14 24l1.25 1.25M44 14L24 34l-1.25-1.25M4 24l10 10 20-20"
        stroke="#fff"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default TaskStatusDoneSvgImage;
