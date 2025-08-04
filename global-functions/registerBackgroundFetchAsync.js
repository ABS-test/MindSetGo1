import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Asset from 'expo-asset';
import * as BarCodeScanner from 'expo-barcode-scanner';
import * as Camera from 'expo-camera';
import * as Clipboard from 'expo-clipboard';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as All_Imports_with_Register from '../custom-files/All_Imports_with_Register';

const registerBackgroundFetchAsync = async (
  navigation,
  Variables,
  setGlobalVariableValue
) => {
  return BackgroundFetch.registerTaskAsync(BACKGROUND_NOTIFICATION_TASK, {
    minimumInterval: 60, // Intervalul minim este de 60 secunde (1 minut)
    stopOnTerminate: false, // Continuați să executați chiar dacă aplicația este închisă
    startOnBoot: true, // Începeți task-ul la pornirea dispozitivului
  });
};

export default registerBackgroundFetchAsync;
