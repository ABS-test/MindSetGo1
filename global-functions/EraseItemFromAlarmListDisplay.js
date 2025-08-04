import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Asset from 'expo-asset';
import * as BarCodeScanner from 'expo-barcode-scanner';
import * as Camera from 'expo-camera';
import * as Clipboard from 'expo-clipboard';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';

const EraseItemFromAlarmListDisplay = (
  navigation,
  Variables,
  setGlobalVariableValue
) => {
  const itemNr = Variables.ItemDisplayNr;
  const updated = Variables.AlarmListDisplay.filter(item => item.id !== itemNr);
  console.log(itemNr);
  console.log(updated); // vezi rezultatul actualizat
  setGlobalVariableValue({
    key: 'AlarmListDisplay',
    value: updated,
  });
};

export default EraseItemFromAlarmListDisplay;
