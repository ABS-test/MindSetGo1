import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Asset from 'expo-asset';
import * as BarCodeScanner from 'expo-barcode-scanner';
import * as Camera from 'expo-camera';
import * as Clipboard from 'expo-clipboard';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as expoNotifications from 'expo-notifications';

const hasScheduledNotifications = async (
  navigation,
  Variables,
  setGlobalVariableValue
) => {
  // async mode function
  const hasNotifications = await hasScheduledNotifications();
  if (hasNotifications) {
    setGlobalVariableValue({
      key: 'hasNotifications',
      value: true,
    });
    //console.log('Există notificări programate.');
  } else {
    setGlobalVariableValue({
      key: 'hasNotifications',
      value: false,
    });
    //console.log('Nu există notificări programate.');
  }
};

export default hasScheduledNotifications;
