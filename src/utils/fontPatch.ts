import React from 'react';
import { Platform, Text } from 'react-native';

export default function enableFontPatch() {
  const defaultFontFamily = {
    ...Platform.select({
      android: { fontFamily: 'Roboto' },
    }),
  };

  const oldRender = (Text as any).render;

  // eslint-disable-next-line func-names
  (Text as any).render = function (...args: any) {
    const origin = oldRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [defaultFontFamily, origin.props.style],
    });
  };
}
