import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

/* SVGR has dropped some elements not supported by react-native-svg: title */

const GridOutline = props => (
  <Svg viewBox="0 0 512 512" width={24} height={24} {...props}>
    <Rect
      x={48}
      y={48}
      width={176}
      height={176}
      rx={20}
      ry={20}
      fill="none"
      stroke="#5065ED"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <Rect
      x={288}
      y={48}
      width={176}
      height={176}
      rx={20}
      ry={20}
      fill="none"
      stroke="#5065ED"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <Rect
      x={48}
      y={288}
      width={176}
      height={176}
      rx={20}
      ry={20}
      fill="none"
      stroke="#5065ED"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
    <Rect
      x={288}
      y={288}
      width={176}
      height={176}
      rx={20}
      ry={20}
      fill="none"
      stroke="#5065ED"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
  </Svg>
);

export default GridOutline;
