import React, { FC } from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

const Camera: FC = (props: SvgProps): JSX.Element => (
  <Svg viewBox="0 0 512 512" width={24} height={24} fill="#5065ED" {...props}>
    <Circle cx={256} cy={272} r={64} />
    <Path d="M432 144h-59c-3 0-6.72-1.94-9.62-5l-25.94-40.94a15.52 15.52 0 0 0-1.37-1.85C327.11 85.76 315 80 302 80h-92c-13 0-25.11 5.76-34.07 16.21a15.52 15.52 0 0 0-1.37 1.85l-25.94 41c-2.22 2.42-5.34 5-8.62 5v-8a16 16 0 0 0-16-16h-24a16 16 0 0 0-16 16v8h-4a48.05 48.05 0 0 0-48 48V384a48.05 48.05 0 0 0 48 48h352a48.05 48.05 0 0 0 48-48V192a48.05 48.05 0 0 0-48-48zM256 368a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96z" />
  </Svg>
);

export default Camera;
