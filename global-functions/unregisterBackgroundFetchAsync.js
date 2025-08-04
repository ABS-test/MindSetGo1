import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Asset from 'expo-asset';
import * as expoBackgroundFetch from 'expo-background-fetch';
import * as BarCodeScanner from 'expo-barcode-scanner';
import * as Camera from 'expo-camera';
import * as Clipboard from 'expo-clipboard';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as expoNotifications from 'expo-notifications';
import * as expoTaskManager from 'expo-task-manager';
import * as reactNativePushNotification from 'react-native-push-notification';
import * as All_Imports_with_Register from '../custom-files/All_Imports_with_Register';

const unregisterBackgroundFetchAsync = async (
  navigation,
  Variables,
  setGlobalVariableValue
) => {
  return BackgroundFetch.unregisterTaskAsync(BACKGROUND_NOTIFICATION_TASK);
};

export default unregisterBackgroundFetchAsync;
