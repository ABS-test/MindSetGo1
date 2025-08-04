import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Asset from 'expo-asset';
import * as BarCodeScanner from 'expo-barcode-scanner';
import * as Camera from 'expo-camera';
import * as Clipboard from 'expo-clipboard';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';

const myFunctionName3 = (navigation, Variables, setGlobalVariableValue) => {
  const itemNr = Variables.ItemNr;
  const updated = Variables.AlarmList.filter(item => item.id !== itemNr);
  //console.log(itemNr);
  //console.log(updated); // vezi rezultatul actualizat
  setGlobalVariableValue({
    key: 'AlarmList',
    value: updated,
  });
};

export default myFunctionName3;
