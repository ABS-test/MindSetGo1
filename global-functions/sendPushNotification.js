import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Asset from 'expo-asset';
import * as BarCodeScanner from 'expo-barcode-scanner';
import * as Camera from 'expo-camera';
import * as Clipboard from 'expo-clipboard';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as reactNativePushNotification from 'react-native-push-notification';
import * as All_Imports_with_Register from '../custom-files/All_Imports_with_Register';
import * as Platform from '../custom-files/Platform';

const sendPushNotification = async (
  navigation,
  Variables,
  setGlobalVariableValue
) => {
  // Solicită permisiunea utilizatorului pentru notificări (dacă nu a fost deja făcută)
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') {
    alert('No notification permissions!');
    return;
  }

  let receiptID = await Notifications.scheduleNotificationAsync({
    content: {
      title: 'notificationV2',
      body: 'salut v2',
      data: { someData: 'goes here' }, // Date adiționale pe care le poți trimite
    },
    trigger: null, // Imediat, vom folosi setInterval
  });

  return receiptID;
};

export default sendPushNotification;
