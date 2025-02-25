import { COLORS } from '@constants/colors';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

type CountdownCircleProps = {
  duration: number;
  onTimeout: () => void;
};

const CountdownCircle = ({ duration, onTimeout }: CountdownCircleProps) => {
  const radius = 18;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * radius;

  const [remainingTime, setRemainingTime] = useState(duration);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = (timestamp - startTime) / 1000;
      const newProgress = Math.max(1 - elapsedTime / duration, 0);

      setProgress(newProgress);
      setRemainingTime(Math.ceil(duration - elapsedTime));

      if (newProgress > 0) {
        requestAnimationFrame(animate);
      } else {
        onTimeout();
      }
    };

    requestAnimationFrame(animate);

    return () => {
      startTime = null;
    };
  }, [duration, onTimeout]);

  return (
    <View style={styles.container}>
      <Svg width={42} height={42} viewBox="0 0 42 42">
        <Circle
          cx="21"
          cy="21"
          r={radius}
          stroke="#EAE7EC"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx="21"
          cy="21"
          r={radius}
          stroke={COLORS.primary}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
          transform="rotate(-90 21 21)"
        />
      </Svg>
      <Text style={styles.remainingTime}>{remainingTime}</Text>
    </View>
  );
};

export default CountdownCircle;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  remainingTime: {
    position: 'absolute',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: COLORS.gray,
    lineHeight: 24,
    letterSpacing: 0.16,
  },
});
