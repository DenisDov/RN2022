import * as React from 'react';
import Svg, { G, Path, SvgProps } from 'react-native-svg';

const Hamburger = (props: SvgProps) => (
  <Svg width={43.312} height={24.208} {...props}>
    <G
      fill="none"
      stroke={props.color || '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}>
      <Path d="M21.656 22.208h19.656M2 12.104h39.312M2 2h19.656" />
    </G>
  </Svg>
);

export { Hamburger };
