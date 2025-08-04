import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Asset from 'expo-asset';
import * as BarCodeScanner from 'expo-barcode-scanner';
import * as Camera from 'expo-camera';
import * as Clipboard from 'expo-clipboard';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';

const updateMoneyDisplay = (navigation, Variables, setGlobalVariableValue) => {
  const Money = Variables.Money;
  let MoneyDisplay = Variables.MoneyDisplay;

  // Extrage ID-urile deja afișate
  const usedIds = MoneyDisplay.map(item => item.id);

  // Filtrează doar itemii care NU sunt deja în display
  const availableItems = Money.filter(item => !usedIds.includes(item.id));

  // Dacă sunt mai puțin de 3 opțiuni, resetează tot pool-ul
  const pool = availableItems.length >= 3 ? availableItems : Money;

  // Selectează 3 itemi aleatorii diferiți
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const newItems = shuffled.slice(0, 3);

  // Înlocuiește complet MoneyDisplay
  MoneyDisplay = [...newItems];
  setGlobalVariableValue({
    key: 'MoneyDisplay',
    value: MoneyDisplay,
  });
};

export default updateMoneyDisplay;
