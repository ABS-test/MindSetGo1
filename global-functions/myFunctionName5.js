import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Asset from 'expo-asset';
import * as BarCodeScanner from 'expo-barcode-scanner';
import * as Camera from 'expo-camera';
import * as Clipboard from 'expo-clipboard';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';

const myFunctionName5 = (navigation, Variables, setGlobalVariableValue) => {
  const AlarmList = Variables.AlarmList;

  // Află ID-ul maxim existent sau setează 0 dacă lista e goală
  const maxId =
    AlarmList.length > 0 ? Math.max(...AlarmList.map(item => item.id)) : 0;

  // Creează un nou item cu id = max + 1
  const nouItem = {
    id: maxId + 1,
    title: 'new',
    period: '60',
    message: 'new',
    checked: false,
  };

  // Adaugă itemul nou în array-ul existent
  const nouAlarmList = [...AlarmList, nouItem];
  setGlobalVariableValue({
    key: 'AlarmList',
    value: nouAlarmList,
  });
  setGlobalVariableValue({
    key: 'newItemNr',
    value: maxId + 1,
  });
  //console.log(nouAlarmList); // afișează array-ul actualizat cu itemul nou
};

export default myFunctionName5;
