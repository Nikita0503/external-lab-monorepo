import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TaskStatusInProgressSvgImage = (props: any) => {
  return (
    <Svg
      fill="#fff"
      width={24}
      height={24}
      viewBox="0 0 32 32"
      id="icon"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 2a14 14 0 1014 14A14.016 14.016 0 0016 2zm0 26a12 12 0 010-24v12l8.481 8.481A11.963 11.963 0 0116 28z" />
      <Path
        id="_Transparent_Rectangle_"
        data-name="&lt;Transparent Rectangle&gt;"
        d="M0 0H32V32H0z"
        fill="none"
      />
    </Svg>
  );
};

export default TaskStatusInProgressSvgImage;
