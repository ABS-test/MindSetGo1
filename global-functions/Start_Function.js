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
import * as ChatBotChatApp from '../custom-files/ChatBotChatApp';

const Start_Function = async (
  navigation,
  Variables,
  setGlobalVariableValue
) => {
  // Solicită permisiunea utilizatorului pentru notificări
  const { status } = await expoNotifications.requestPermissionsAsync();
  if (status !== 'granted') {
    alert('No notification permissions!');
    return;
  }

  try {
    await ChatBotChatApp.registerBackgroundFetchAsync(); // Așteaptă ca funcția să se termine
    //console.log("Background fetch task registered successfully!");
  } catch (error) {
    //console.error("Failed to register background fetch task:", error);
    // Aici poți trata eroarea, de exemplu, afișând un mesaj utilizatorului
  }
};

export default Start_Function;
