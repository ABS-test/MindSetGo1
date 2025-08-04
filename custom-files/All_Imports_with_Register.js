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

    // Trimiterea notificarii
    await sendPushNotification();

    // Trebuie să returnăm `BACKGROUND_FETCH_RESULT.NewData` dacă task-ul a produs date noi
    return BackgroundFetch.BackgroundFetchResult.NewData;
  } catch (error) {
    console.error('Error in background task:', error);
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

export default function App() {
  const [isRegistered, setIsRegistered] = React.useState(false);
  const [status, setStatus] = React.useState(null);

  useEffect(() => {
    registerForPushNotificationsAsync();
    checkStatusAsync();
  }, []);

  const checkStatusAsync = async () => {
    const isRegistered = await TaskManager.isTaskRegisteredAsync(
      BACKGROUND_NOTIFICATION_TASK
    );
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

  return (
    //... restul componentei tale
    null
  );
}
