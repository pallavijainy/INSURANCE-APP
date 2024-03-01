import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

function CustomLinearGradient({
  children,
  style,
  focusColor,
  customized = false,
  gradientColor = ['#fd8e3d', '#dd2523'],
  startGrad = { x: 0, y: 0 },
  endGrad = { x: 0, y: 0 },
}) {
  if (focusColor) {
    if (customized) {
      return (
        <LinearGradient
          start={startGrad}
          end={endGrad}
          colors={gradientColor}
          className={style}
        >
          {children}
        </LinearGradient>
      );
    }
    return (
      <LinearGradient colors={['#fd8e3d', '#dd2523']} className={style}>
        {children}
      </LinearGradient>
    );
  }
  return <View className={style}>{children}</View>;
}

export default CustomLinearGradient;
