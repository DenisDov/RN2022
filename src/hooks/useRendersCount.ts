// https://streamich.github.io/react-use/?path=/story/state-userenderscount--docs
import { useRef } from 'react';

export function useRendersCount(): number {
  return ++useRef(0).current;
}

// const rendersCount: number = useRendersCount();
