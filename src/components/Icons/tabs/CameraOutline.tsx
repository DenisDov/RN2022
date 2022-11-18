import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

/* SVGR has dropped some elements not supported by react-native-svg: title */

const CameraOutline = props => (
  <Svg viewBox="0 0 512 512" width={24} height={24} {...props}>
    <Path
      d="m350.54 148.68-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h352a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32z"
      fill="none"
      stroke="#5065ED"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <Circle
      cx={256}
      cy={272}
      r={80}
      fill="none"
      stroke="#5065ED"
      strokeMiterlimit={10}
      strokeWidth={32}
    />
    <Path
      fill="none"
      stroke="#5065ED"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M124 158v-22h-24v22"
    />
  </Svg>
);

export default CameraOutline;
