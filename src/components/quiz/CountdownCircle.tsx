import { COLORS } from '@constants/colors';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { useFocusEffect } from '@react-navigation/native';

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
  const animationFrameRef = useRef<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const startTimer = useCallback(() => {
    setRemainingTime(duration);
    setProgress(1);
    startTimeRef.current = Date.now();

    const animate = () => {
      const elapsedTime =
        (Date.now() - (startTimeRef.current as number)) / 1000;
      const newProgress = Math.max(1 - elapsedTime / duration, 0);
      setProgress(newProgress);

      if (newProgress > 0) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    intervalRef.current = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev > 1) return prev - 1;
        clearInterval(intervalRef.current as NodeJS.Timeout);
        onTimeout();
        return 0;
      });
    }, 1000);

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [duration, onTimeout]);

  useFocusEffect(
    useCallback(() => {
      startTimer();

      return () => {
        if (animationFrameRef.current)
          cancelAnimationFrame(animationFrameRef.current);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }, [startTimer]),
  );

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

export default React.memo(CountdownCircle);

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
