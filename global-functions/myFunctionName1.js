import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Asset from 'expo-asset';
import * as BarCodeScanner from 'expo-barcode-scanner';
import * as Camera from 'expo-camera';
import * as Clipboard from 'expo-clipboard';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';

const myFunctionName1 = (navigation, Variables, setGlobalVariableValue) => {
  // Nu mai este necesar sa definim AlarmList aici, pentru ca este deja disponibila
  const updated = Variables.AlarmList.map(item => {
    if (item.id === 1) {
      return { ...item, title: '' }; // golește conținutul titlului
    }
    return item;
  });

  // console.log(updated); // vezi rezultatul actualizat
};

export default myFunctionName1;
