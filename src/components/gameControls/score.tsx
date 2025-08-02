import { useState } from "react";
import { useInterval } from "../../hooks/useInterval";

type Props = {
  value: number;
  delay: number;
  step: number;
};

export function Score(props: Props) {
  const animatedValue = useAnimatedValue(props);
  return <span>{animatedValue}</span>;
}

function useAnimatedValue({ value, delay, step }: Props): number {
  const [animatedValue, setAnimatedValue] = useState(value);
  const dekayOrNull = animatedValue !== value ? delay : null;
  useInterval(() => {
    setAnimatedValue((current) => Math.min(current + step, value));
  }, dekayOrNull);
  return animatedValue;
}
