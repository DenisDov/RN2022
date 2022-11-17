import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

/* SVGR has dropped some elements not supported by react-native-svg: title */

const Map = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
    width={24}
    height={24}
    {...props}>
    <Path d="M48.17 113.34A32 32 0 0 0 32 141.24V438a32 32 0 0 0 47 28.37c.43-.23.85-.47 1.26-.74l84.14-55.05a8 8 0 0 0 3.63-6.72V46.45a8 8 0 0 0-12.51-6.63zm164.19-74.03A8 8 0 0 0 200 46v357.56a8 8 0 0 0 3.63 6.72l96 62.42A8 8 0 0 0 312 466V108.67a8 8 0 0 0-3.64-6.73zm252.17 7.16a31.64 31.64 0 0 0-31.5-.88 12.07 12.07 0 0 0-1.25.74l-84.15 55a8 8 0 0 0-3.63 6.72v357.46a8 8 0 0 0 12.52 6.63l107.07-73.46a32 32 0 0 0 16.41-28v-296a32.76 32.76 0 0 0-15.47-28.21z" />
  </Svg>
);

export default Map;
