import * as React from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
    width={24}
    height={24}
    {...props}>
    <Rect
      x={48}
      y={80}
      width={416}
      height={352}
      rx={48}
      ry={48}
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <Circle
      cx={336}
      cy={176}
      r={32}
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={32}
    />
    <Path
      d="m304 335.79-90.66-90.49a32 32 0 0 0-43.87-1.3L48 352m176 80 123.34-123.34a32 32 0 0 1 43.11-2L464 368"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
  </Svg>
);

export default SvgComponent;