import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Asset from 'expo-asset';
import * as BarCodeScanner from 'expo-barcode-scanner';
import * as Camera from 'expo-camera';
import * as Clipboard from 'expo-clipboard';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';

const updateCheckedStatus = (navigation, Variables, setGlobalVariableValue) => {
  const AlarmList = Variables.AlarmList;
  const idDeModificat = Variables.ItemDisplayNr;
  const checkedValue = Variables.checkedValue;

  // Creează un nou array modificând DOAR checked pentru itemul cu ID-ul căutat
  const nouAlarmList = AlarmList.map(item => {
    if (item.id === idDeModificat) {
      return { ...item, checked: checkedValue }; // doar checked se modifică
    }
    return item;
  });

  setGlobalVariableValue({
    key: 'AlarmList',
    value: nouAlarmList,
  });
};

export default updateCheckedStatus;
