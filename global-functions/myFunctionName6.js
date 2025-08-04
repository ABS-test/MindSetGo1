import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Asset from 'expo-asset';
import * as BarCodeScanner from 'expo-barcode-scanner';
import * as Camera from 'expo-camera';
import * as Clipboard from 'expo-clipboard';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';

const myFunctionName6 = (navigation, Variables, setGlobalVariableValue) => {
  const AlarmList = Variables.AlarmList;
  const newTitle = Variables.newTitle;
  const newMessage = Variables.newMessage;
  const newPeriod = 60;

  // ID-ul pe care vrei să-l modifici
  const idDeModificat = Variables.newItemNr;

  // Noile valori pentru acel ID
  const valoriNoi = {
    title: newTitle,
    period: newPeriod,
    message: newMessage,
    checked: false,
  };

  // Creează un nou array cu modificarea aplicată doar pentru ID-ul respectiv
  const nouAlarmList = AlarmList.map(item => {
    if (item.id === idDeModificat) {
      return { ...item, ...valoriNoi }; // înlocuiește valorile doar la id corespunzător
    }
    return item;
  });

  setGlobalVariableValue({
    key: 'AlarmList',
    value: nouAlarmList,
  });

  /*console.log(idDeModificat);
console.log(newTitle);
console.log(newMessage);
console.log(newPeriod);
console.log(nouAlarmList);*/ // afișează array-ul cu valorile modificate
};

export default myFunctionName6;
