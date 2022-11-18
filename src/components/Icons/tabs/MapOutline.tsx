import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = props => (
  <Svg viewBox="0 0 512 512" width={24} height={24} {...props}>
    <Path
      d="M313.27 124.64 198.73 51.36a32 32 0 0 0-29.28.35L56.51 127.49A16 16 0 0 0 48 141.63v295.8a16 16 0 0 0 23.49 14.14l97.82-63.79a32 32 0 0 1 29.5-.24l111.86 73a32 32 0 0 0 29.27-.11l115.43-75.94a16 16 0 0 0 8.63-14.2V74.57a16 16 0 0 0-23.49-14.14l-98 63.86a32 32 0 0 1-29.24.35zM328 128v336M184 48v336"
      fill="none"
      stroke="#5065ED"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
    />
  </Svg>
);

export default SvgComponent;
