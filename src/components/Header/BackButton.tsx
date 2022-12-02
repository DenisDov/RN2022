import React, { FC } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const BackButton: FC = (props: SvgProps): JSX.Element => (
  <Svg viewBox="0 0 512 512" width={24} height={24} {...props}>
    <Path
      fill="none"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={48}
      d="M328 112 184 256l144 144"
    />
  </Svg>
);

export default BackButton;
