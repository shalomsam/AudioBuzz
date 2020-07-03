import * as React from 'react';
import { View, Image } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import { colors } from '../../styles/AppStyles';

interface AppSplashScreenProps {
  splashIcon?: string;
  autoProgress?: boolean;
  promises?: Promise<any>[];
  onComplete?: () => void;
}

const AppSplashScreen: React.FunctionComponent<AppSplashScreenProps> = ({
  promises = [],
  onComplete = () => {},
  autoProgress = false,
  splashIcon = require('../../../assets/icon.png')
}) => {
  const [progress, setProgress] = React.useState(0);
  const [shouldLoad, setShouldLoad] = React.useState(false);

  React.useEffect(() => {
    let isMounted = true;

    const progressPromise = (promisesArr: Promise<any>[], callback: (...args: any) => void) => {
      const len = promisesArr.length;
      let _progress = 0;
      const tick = (promise: Promise<any>) => {
        promise.then(() => {
          _progress += 1;
          callback(_progress, len);
        });

        return promise;
      };

      return Promise.all(promisesArr.map(tick));
    };

    const onLoad = async () => {
      SplashScreen.hideAsync();
      if (autoProgress) {
        let i = 10;
        setTimeout(() => {
          while (i < 100) {
            if (isMounted) {
              setProgress(i += 10);
            }
          }
        }, 100);
      } else {
        await progressPromise(promises, (completed, total) => {
          if (isMounted) {
            setProgress((completed / total) * 100);
          }
        });
      }
      onComplete();
    };


    if (shouldLoad) {
      onLoad();
    }

    return () => {
      isMounted = false;
    };
  }, [shouldLoad]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ width: 200, height: 200 }}>
        <Image
          style={{
            width: 160, height: 160, marginLeft: 'auto', marginRight: 'auto',
          }}
          source={splashIcon}
          onLoad={() => setShouldLoad(true)}
        />
        <ProgressBar
          style={{ marginTop: 10 }}
          progress={progress}
          color={colors.primary}
          accessibilityStates={null}
        />
      </View>
    </View>
  );
};

export default AppSplashScreen;
