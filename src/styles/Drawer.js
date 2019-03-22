import { StyleSheet } from 'react-native';
import { theme } from '../theme';

export const DrawerStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  iconWrp: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.drawerImageWrp
  },
  icon: {
    marginTop: 10
  },
  itemsWrp: {
    flex: 6
  }
});
