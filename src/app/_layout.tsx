import { Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { COLORS } from '../constants/colors';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { FONTS } from '@constants/fonts';
import { Provider } from 'react-redux';
import { store } from '@store/store';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts(FONTS);

  useEffect(() => {
    if (loaded && !error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: COLORS.background,
          },
        }}
      />
    </Provider>
  );
};

export default RootLayout;
