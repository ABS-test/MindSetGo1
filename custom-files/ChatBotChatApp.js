import * as Notifications from 'expo-notifications';
//import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import { useEffect } from 'react';

import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';

const BACKGROUND_NOTIFICATION_TASK = 'background-notification-task';

TaskManager.defineTask(BACKGROUND_NOTIFICATION_TASK, async () => {
  try {
    const now = Date.now();
    console.log(
      `Got background fetch call at date: ${new Date(now).toISOString()}`
    );

    // Trimiterea notificarii locale
    await scheduleLocalNotification();

    return BackgroundFetch.BackgroundFetchResult.NewData;
  } catch (error) {
    console.error('Error in background task:', error);
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

async function scheduleLocalNotification() {
  try {
    // Solicită permisiunea utilizatorului pentru notificări (dacă nu a fost deja făcută)
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
      console.warn('No notification permissions!'); //Nu mai aratam alerta
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Local Notification',
        body: 'This is a local notification triggered in the background!',
        data: { someData: 'goes here' }, // Date adiționale pe care le poți trimite
      },
      trigger: null, // Imediat, vom folosi background-fetch
    });
  } catch (error) {
    console.error('Error scheduling local notification:', error);
  }
}

export async function registerBackgroundFetchAsync() {
  try {
    return BackgroundFetch.registerTaskAsync(BACKGROUND_NOTIFICATION_TASK, {
      minimumInterval: 60 * 15, // 15 minute (minimul recomandat pentru task-urile background fetch)
      stopOnTerminate: false,
      startOnBoot: true,
    });
  } catch (error) {
    console.error('Error registering background fetch:', error);
    throw error; // Aruncă eroarea mai departe pentru a putea fi prinsă în componentă
  }
}

export async function unregisterBackgroundFetchAsync() {
  return BackgroundFetch.unregisterTaskAsync(BACKGROUND_NOTIFICATION_TASK);
}

/*export default function App() {
    const [isRegistered, setIsRegistered] = React.useState(false);
    const [status, setStatus] = React.useState(null);

    useEffect(() => {
        checkStatusAsync();
    }, []);

    const checkStatusAsync = async () => {
        const isRegistered = await TaskManager.isTaskRegisteredAsync(BACKGROUND_NOTIFICATION_TASK);
        setIsRegistered(isRegistered);
        if (isRegistered) {
            const status = await BackgroundFetch.getStatusAsync();
            setStatus(status);
        }
    };

    const toggleRegister = async () => {
        if (isRegistered) {
            await unregisterBackgroundFetchAsync();
        } else {
            await registerBackgroundFetchAsync();
        }
        checkStatusAsync();
    };

    // Acesta este important: Trebuie să definim modul în care aplicația gestionează notificările primite atunci când este în foreground.
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,  // Arată alerta
            shouldPlaySound: false, // Nu reda sunet (poți schimba)
            shouldSetBadge: false, // Nu modifica badge-ul aplicației (poți schimba)
        }),
    });

    return (
        //... restul componentei tale
        null
    );
}*/

export default function ChatBotChatApp() {
  //... componenta ta
}
