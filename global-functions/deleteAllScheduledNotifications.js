import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Asset from 'expo-asset';
import * as BarCodeScanner from 'expo-barcode-scanner';
import * as Camera from 'expo-camera';
import * as Clipboard from 'expo-clipboard';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as expoNotifications from 'expo-notifications';

const deleteAllScheduledNotifications = async (
  navigation,
  Variables,
  setGlobalVariableValue
) => {
  try {
    await expoNotifications.cancelAllScheduledNotificationsAsync();
    //console.log('Toate notificările programate au fost anulate.');
  } catch (error) {
    //console.error('Eroare la anularea tuturor notificărilor programate:', error);
  }
};

export default deleteAllScheduledNotifications;
