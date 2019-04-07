import Config from 'react-native-config';
import { Platform } from 'react-native'

export function configure() {
  if (Platform.OS === 'android') {
    process.env.CODEPUSH_KEY = Config.CODEPUSH_KEY_ANDROID || process.env.CODEPUSH_KEY;
  } else {
    process.env.CODEPUSH_KEY = Config.CODEPUSH_KEY_IOS || process.env.CODEPUSH_KEY;
  }
}
