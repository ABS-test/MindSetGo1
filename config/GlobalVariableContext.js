import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DeviceVariables = {
  AlarmList: [],
  AlarmListDisplay: [],
  AlarmState: '',
  checkedValue: false,
  EndHour: 23,
  EndMinute: 59,
  Friday: true,
  hasNotifications: false,
  ItemDisplayNr: 0,
  ItemNr: 0,
  Monday: true,
  Money: [
    {
      id: 1,
      message:
        '• Every day, I choose only actions that have the potential to bring me money, improve my health, or attract the right partner. If an action doesn’t serve one of these goals, I don’t do it.',
    },
    {
      id: 2,
      message:
        '• One stone a day fills the basket. One money action a day has the potential to fill the bank account.',
    },
    {
      id: 3,
      message:
        '• Each day I invest time only in actions that bring me money, improve my health, attract the right person.',
    },
    {
      id: 4,
      message:
        '• I train my mind daily to generate useful, action-driven, and energizing thoughts.',
    },
    {
      id: 5,
      message:
        "• I take money-making actions even when I don't feel like it — I simply do them anyway.",
    },
    {
      id: 6,
      message:
        '• Progress begins exactly when productive actions are put into motion — no matter if the mind resists, avoids work, or craves laziness.',
    },
    {
      id: 7,
      message:
        '• I gently guide my brain... to think clearly... and act productively.',
    },
    {
      id: 8,
      message:
        '• Every unproductive or depressing thought that appears in my mind… I instantly rephrase into a productive and energizing one.',
    },
    {
      id: 9,
      message: '• Even when emotions say “no”… I still take productive action.',
    },
    {
      id: 10,
      message:
        '• Stop wasting time on YouTube, porn, or people who show zero respect.',
    },
    {
      id: 11,
      message:
        '• Stop being your own enemy through thoughts and habits that sabotage your future.',
    },
    {
      id: 12,
      message:
        '• Many things happen outside our control — but that’s never an excuse to avoid productive action.',
    },
    {
      id: 13,
      message:
        '• Money-making actions deserve immediate attention — if I delay them, the chances grow that they’ll never get done.',
    },
    {
      id: 14,
      message:
        '• Discipline means doing money-driven actions even when my mind and mood are stuck in fatigue.',
    },
    {
      id: 15,
      message:
        '• I replace mental clutter with one clear affirmation: I do money-making actions that move me forward right now.',
    },
    {
      id: 16,
      message:
        '• Comfort is a trap — the mind falls into it and refuses to generate productive thoughts or take money-making actions.',
    },
    {
      id: 17,
      message:
        '• I stay focused only on productive thoughts and money-making actions — even when my mind starts to drift.',
    },
    {
      id: 18,
      message:
        '• I reject the fantasy of the perfect moment — I take money-making actions now.',
    },
    {
      id: 19,
      message:
        '• Success doesn’t respond to wishes — it responds to repeated, focused, and executed productive actions.',
    },
  ],
  MoneyDisplay: [
    {
      id: 1,
      message:
        '• Every day, I choose only actions that have the potential to bring me money, improve my health, or attract the right partner. If an action doesn’t serve one of these goals, I don’t do it.',
    },
    {
      id: 2,
      message:
        '• One stone a day fills the basket. One money action a day has the potential to fill the bank account.',
    },
    {
      id: 3,
      message:
        '• Each day I invest time only in actions that bring me money, improve my health, attract the right person.',
    },
  ],
  Mood: [
    {
      id: 1,
      title: 'Mood',
      period: '60',
      message:
        'I personally charge my body with a productive, driven mood. I refuse to absorb external negativity or apathy. I keep my state focused and energized.',
    },
  ],
  Saturday: true,
  StartHour: 0,
  StartMinute: 0,
  Sunday: true,
  Thursday: true,
  Tuesday: true,
  Wednesday: true,
  __env__: 'Development',
};
export const AppVariables = {
  AlarmPeriod: 5,
  AlarmText: 'none',
  Custom1: '',
  newItemNr: 1,
  newMessage: '',
  newPeriod: 0,
  newTitle: '',
};
const GlobalVariableContext = React.createContext();
const GlobalVariableUpdater = React.createContext();
const keySuffix = '';

// Attempt to parse a string as JSON. If the parse fails, return the string as-is.
// This is necessary to account for variables which are already present in local
// storage, but were not stored in JSON syntax (e.g. 'hello' instead of '"hello"').
function tryParseJson(str) {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
}

class GlobalVariable {
  /**
   *  Filters an object of key-value pairs for those that should be
   *  persisted to storage, and persists them.
   *
   *  @param values Record<string, string>
   */
  static async syncToLocalStorage(values) {
    const update = Object.entries(values)
      .filter(([key]) => key in DeviceVariables)
      .map(([key, value]) => [key + keySuffix, JSON.stringify(value)]);

    if (update.length > 0) {
      await AsyncStorage.multiSet(update);
    }

    return update;
  }

  static async loadLocalStorage() {
    const keys = Object.keys(DeviceVariables);
    const entries = await AsyncStorage.multiGet(
      keySuffix ? keys.map(k => k + keySuffix) : keys
    );

    // If values isn't set, use the default. These will be written back to
    // storage on the next render.
    const withDefaults = entries.map(([key_, value]) => {
      // Keys only have the suffix appended in storage; strip the key
      // after they are retrieved
      const key = keySuffix ? key_.replace(keySuffix, '') : key_;
      return [key, value ? tryParseJson(value) : DeviceVariables[key]];
    });

    return Object.fromEntries(withDefaults);
  }
}

class State {
  static defaultValues = {
    ...AppVariables,
    ...DeviceVariables,
  };

  static reducer(state, { type, payload }) {
    switch (type) {
      case 'RESET':
        return { values: State.defaultValues, __loaded: true };
      case 'LOAD_FROM_ASYNC_STORAGE':
        return { values: { ...state.values, ...payload }, __loaded: true };
      case 'UPDATE':
        return state.__loaded
          ? {
              ...state,
              values: {
                ...state.values,
                [payload.key]: payload.value,
              },
            }
          : state;
      default:
        return state;
    }
  }

  static initialState = {
    __loaded: false,
    values: State.defaultValues,
  };
}

export function GlobalVariableProvider({ children }) {
  const [state, dispatch] = React.useReducer(State.reducer, State.initialState);

  React.useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  // This effect runs on mount to overwrite the default value of any
  // key that has a local value.
  React.useEffect(() => {
    async function initialStorageLoader() {
      try {
        const payload = await GlobalVariable.loadLocalStorage();
        if (
          payload?.__env__ &&
          DeviceVariables.__env__ &&
          payload.__env__ !== DeviceVariables.__env__
        ) {
          console.log(
            `Publication Environment changed from ${payload.__env__} to ${DeviceVariables.__env__}. Refreshing variables`
          );
          dispatch({
            type: 'LOAD_FROM_ASYNC_STORAGE',
            payload: DeviceVariables,
          });
        } else {
          dispatch({ type: 'LOAD_FROM_ASYNC_STORAGE', payload });
        }
      } catch (err) {
        console.error(err);
      }
    }
    initialStorageLoader();
  }, []);

  // This effect runs on every state update after the initial load. Gives us
  // best of both worlds: React state updates sync, but current state made
  // durable next async tick.
  React.useEffect(() => {
    async function syncToAsyncStorage() {
      try {
        await GlobalVariable.syncToLocalStorage(state.values);
      } catch (err) {
        console.error(err);
      }
    }
    if (state.__loaded) {
      syncToAsyncStorage();
    }
  }, [state]);

  const onLayoutRootView = React.useCallback(async () => {
    if (state.__loaded) {
      await SplashScreen.hideAsync();
    }
  }, [state.__loaded]);

  // We won't want an app to read a default state when there might be one
  // incoming from storage.
  if (!state.__loaded) {
    return null;
  }

  return (
    <GlobalVariableUpdater.Provider
      value={dispatch}
      onLayout={onLayoutRootView}
    >
      <GlobalVariableContext.Provider value={state.values}>
        {children}
      </GlobalVariableContext.Provider>
    </GlobalVariableUpdater.Provider>
  );
}

// Hooks
export function useSetValue() {
  const dispatch = React.useContext(GlobalVariableUpdater);
  return ({ key, value }) => {
    dispatch({ type: 'UPDATE', payload: { key, value } });
    return value;
  };
}

export function useValues() {
  return React.useContext(GlobalVariableContext);
}
