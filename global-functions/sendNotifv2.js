import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Asset from 'expo-asset';
import * as BarCodeScanner from 'expo-barcode-scanner';
import * as Camera from 'expo-camera';
import * as Clipboard from 'expo-clipboard';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as expoNotifications from 'expo-notifications';

const sendNotifv2 = async (navigation, Variables, setGlobalVariableValue) => {
  // Solicită permisiunea utilizatorului pentru notificări
  const { status } = await expoNotifications.requestPermissionsAsync();
  if (status !== 'granted') {
    alert('No notification permissions!');
    return;
  }

  expoNotifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  //variables related with scheduling
  //hours
  let StartHour = Variables.StartHour;
  let EndHour = Variables.EndHour;
  //weekdays
  let Monday = Variables.Monday;
  let Tuesday = Variables.Tuesday;
  let Wednesday = Variables.Wednesday;
  let Thurday = Variables.Thurday;
  let Friday = Variables.Friday;
  let Saturday = Variables.Saturday;
  let Sunday = Variables.Sunday;

  let lines = [Monday, Tuesday, Wednesday, Thurday, Friday, Saturday, Sunday];

  const receiptIDs = [];
  if (EndHour == 24) {
    Endhour = 23;
  }

  for (let i = 1; i <= 7; i++) {
    if (lines[i - 1]) {
      //console.log(lines[i-1]);
      //console.log(StartHour);
      //console.log(EndHour);
      for (let j = StartHour; j <= EndHour; j++) {
        let receiptID = await expoNotifications.scheduleNotificationAsync({
          content: {
            //to: expoPushToken,
            title: 'MindSetGo',
            body: 'Open the app, internalize productive mindsets, stay in driven mode, and act on your task list.',
          },
          trigger: {
            hour: j,
            minute: 0,
            repeats: true,
            weekday: i,
          },
        });
        receiptIDs.push(receiptID);
      }
    }
  }
  //console.log(receiptIDs);
  return receiptIDs;
  /*
let receiptID = await expoNotifications.scheduleNotificationAsync({ \u2709
  
  content: {
      //to: expoPushToken,
      title: "Wealth thoughts and actions",//💰 ✉️
      body: "Activation of money-based thoughts Activation of productive mood Activation of productive mood",
  },
  trigger: { seconds: 10,repeats: true, }
	});
console.log(receiptID);
	return receiptID;*/
};

export default sendNotifv2;
