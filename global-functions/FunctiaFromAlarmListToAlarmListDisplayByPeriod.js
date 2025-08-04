import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Asset from 'expo-asset';
import * as BarCodeScanner from 'expo-barcode-scanner';
import * as Camera from 'expo-camera';
import * as Clipboard from 'expo-clipboard';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';

const FunctiaFromAlarmListToAlarmListDisplayByPeriod = (
  navigation,
  Variables,
  setGlobalVariableValue
) => {
  const AlarmList = Variables.AlarmList;
  let AlarmListDisplay = Variables.AlarmListDisplay;

  // Obține minutele actuale din zi
  const now = new Date();
  const minuteActuale = now.getHours() * 60 + now.getMinutes();

  // Parcurge fiecare alarmă
  AlarmList.forEach(item => {
    const perioada = parseInt(item.period); // asigură-te că e număr

    // Dacă timpul actual împărțit la period are rest 0
    if (minuteActuale % perioada === 0) {
      // Verifică dacă itemul NU este deja în AlarmListDisplay
      const dejaExista = AlarmListDisplay.some(
        displayItem => displayItem.id === item.id
      );

      if (!dejaExista) {
        AlarmListDisplay.push(item); // adaugă doar dacă nu e deja
      }
    }
  });
  setGlobalVariableValue({
    key: 'AlarmListDisplay',
    value: AlarmListDisplay,
  });
  //console.log("AlarmListDisplay actualizat:", AlarmListDisplay);
};

export default FunctiaFromAlarmListToAlarmListDisplayByPeriod;
