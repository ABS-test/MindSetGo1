import React from 'react';
import {
  Button,
  CheckboxRow,
  NumberInput,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import deleteAllScheduledNotifications from '../global-functions/deleteAllScheduledNotifications';
import sendNotifv2 from '../global-functions/sendNotifv2';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';
import waitUtil from '../utils/wait';

const ScheduleSetupScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [hourNumberInputValue, setHourNumberInputValue] = React.useState(0);
  const [hourNumberInputValue2, setHourNumberInputValue2] = React.useState(0);
  const [minuteNumberInputValue, setMinuteNumberInputValue] = React.useState(0);
  const [minuteNumberInputValue2, setMinuteNumberInputValue2] =
    React.useState(0);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: 'rgb(255, 251, 243)' },
        dimensions.width
      )}
    >
      {/* Time Setup View */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: 'rgb(227, 239, 233)',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            flexDirection: 'column',
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            paddingBottom: 5,
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 5,
          },
          dimensions.width
        )}
      >
        {/* Day Range Text */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Text'].style,
              theme.typography.headline6,
              { color: 'rgb(45, 60, 63)', paddingBottom: 5 }
            ),
            dimensions.width
          )}
        >
          {'Time Settings'}
        </Text>
        {/* Time Start View */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            },
            dimensions.width
          )}
        >
          {/* Start Time Text */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Text'].style,
                theme.typography.body1,
                { color: 'rgb(45, 60, 63)' }
              ),
              dimensions.width
            )}
          >
            {'Start Hour'}
          </Text>
          {/* Clock */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Hour Number Input */}
            <NumberInput
              changeTextDelay={500}
              onChangeText={newHourNumberInputValue => {
                try {
                  setGlobalVariableValue({
                    key: 'StartHour',
                    value: newHourNumberInputValue,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              {...GlobalStyles.NumberInputStyles(theme)['Number Input'].props}
              maxLength={2}
              placeholder={''}
              placeholderTextColor={palettes.App['Custom Color 2']}
              selectionColor={palettes.App['Custom Color 2']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.NumberInputStyles(theme)['Number Input'].style,
                  theme.typography.body2,
                  {
                    borderColor: 'rgb(85, 97, 95)',
                    color: 'rgb(45, 60, 63)',
                    paddingBottom: 5,
                    paddingLeft: 15,
                    paddingRight: 0,
                    paddingTop: 5,
                    width: 50,
                  }
                ),
                dimensions.width
              )}
              value={Constants['StartHour']}
            />
            {/* Start hour separator Text */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  theme.typography.body1,
                  { color: 'rgb(45, 60, 63)', paddingLeft: 5, paddingRight: 5 }
                ),
                dimensions.width
              )}
            >
              {':'}
            </Text>
            {/* Minute Number Input */}
            <NumberInput
              changeTextDelay={500}
              onChangeText={newMinuteNumberInputValue => {
                try {
                  setGlobalVariableValue({
                    key: 'StartMinute',
                    value: 0,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              {...GlobalStyles.NumberInputStyles(theme)['Number Input'].props}
              defaultValue={'00'}
              editable={false}
              maxLength={2}
              placeholder={''}
              placeholderTextColor={palettes.App['Custom Color 2']}
              selectionColor={palettes.App['Custom Color 2']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.NumberInputStyles(theme)['Number Input'].style,
                  theme.typography.body2,
                  {
                    borderColor: 'rgb(85, 97, 95)',
                    color: 'rgb(45, 60, 63)',
                    paddingBottom: 5,
                    paddingLeft: 15,
                    paddingRight: 0,
                    paddingTop: 5,
                    width: 50,
                  }
                ),
                dimensions.width
              )}
            />
          </View>
        </View>
        {/* Time End View */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              alignSelf: 'auto',
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
            dimensions.width
          )}
        >
          {/* End Time Text */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Text'].style,
                theme.typography.body1,
                { color: 'rgb(45, 60, 63)' }
              ),
              dimensions.width
            )}
          >
            {'End Hour'}
          </Text>
          {/* Clock */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Hour Number Input */}
            <NumberInput
              changeTextDelay={500}
              onChangeText={newHourNumberInputValue => {
                try {
                  setGlobalVariableValue({
                    key: 'EndHour',
                    value: newHourNumberInputValue,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              {...GlobalStyles.NumberInputStyles(theme)['Number Input'].props}
              maxLength={2}
              placeholder={''}
              placeholderTextColor={palettes.App['Custom Color 2']}
              selectionColor={palettes.App['Custom Color 2']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.NumberInputStyles(theme)['Number Input'].style,
                  theme.typography.body2,
                  {
                    borderColor: 'rgb(85, 97, 95)',
                    color: 'rgb(45, 60, 63)',
                    paddingBottom: 5,
                    paddingLeft: 15,
                    paddingRight: 0,
                    paddingTop: 5,
                    width: 50,
                  }
                ),
                dimensions.width
              )}
              value={Constants['EndHour']}
            />
            {/* End hour separator Text */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  theme.typography.body1,
                  { color: 'rgb(45, 60, 63)', paddingLeft: 5, paddingRight: 5 }
                ),
                dimensions.width
              )}
            >
              {':'}
            </Text>
            {/* Minute Number Input */}
            <NumberInput
              changeTextDelay={500}
              webShowOutline={true}
              {...GlobalStyles.NumberInputStyles(theme)['Number Input'].props}
              defaultValue={'00'}
              editable={false}
              maxLength={2}
              placeholder={''}
              placeholderTextColor={palettes.App['Custom Color 2']}
              selectionColor={palettes.App['Custom Color 2']}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.NumberInputStyles(theme)['Number Input'].style,
                  theme.typography.body2,
                  {
                    borderColor: 'rgb(85, 97, 95)',
                    color: 'rgb(45, 60, 63)',
                    paddingBottom: 5,
                    paddingLeft: 15,
                    paddingRight: 0,
                    paddingTop: 5,
                    width: 50,
                  }
                ),
                dimensions.width
              )}
            />
          </View>
        </View>
      </View>
      {/* Weeek Days Setup View  */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: 'rgb(253, 245, 223)',
            borderRadius: 5,
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            paddingLeft: 5,
            paddingTop: 5,
          },
          dimensions.width
        )}
      >
        {/* Week Text */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          selectionColor={palettes.App['Custom Color']}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Text'].style,
              theme.typography.headline6,
              { color: 'rgb(45, 60, 63)', textDecorationLine: 'none' }
            ),
            dimensions.width
          )}
        >
          {'Week Settings'}
        </Text>
        {/* Monday */}
        <CheckboxRow
          onPress={newMondayValue => {
            try {
              setGlobalVariableValue({
                key: 'Monday',
                value: newMondayValue,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'].props}
          color={palettes.App['Custom Color']}
          label={'Monday'}
          status={Constants['Monday']}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'].style,
              {
                color: 'rgb(45, 60, 63)',
                minHeight: null,
                paddingLeft: 0,
                paddingRight: 0,
              }
            ),
            dimensions.width
          )}
          uncheckedColor={palettes.App['Custom Color']}
        />
        {/* Tuesday */}
        <CheckboxRow
          onPress={newTuesdayValue => {
            try {
              setGlobalVariableValue({
                key: 'Tuesday',
                value: newTuesdayValue,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'].props}
          color={palettes.App['Custom Color']}
          label={'Tuesday'}
          status={Constants['Tuesday']}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'].style,
              {
                color: 'rgb(45, 60, 63)',
                minHeight: null,
                paddingLeft: 0,
                paddingRight: 0,
              }
            ),
            dimensions.width
          )}
          uncheckedColor={palettes.App['Custom Color']}
        />
        {/* Wednesday */}
        <CheckboxRow
          onPress={newWednesdayValue => {
            try {
              setGlobalVariableValue({
                key: 'Wednesday',
                value: newWednesdayValue,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'].props}
          color={palettes.App['Custom Color']}
          label={'Wednesday'}
          status={Constants['Wednesday']}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'].style,
              {
                color: 'rgb(45, 60, 63)',
                minHeight: null,
                paddingLeft: 0,
                paddingRight: 0,
              }
            ),
            dimensions.width
          )}
          uncheckedColor={palettes.App['Custom Color']}
        />
        {/* Thursday */}
        <CheckboxRow
          onPress={newThursdayValue => {
            try {
              setGlobalVariableValue({
                key: 'Thursday',
                value: newThursdayValue,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'].props}
          color={palettes.App['Custom Color']}
          label={'Thursday'}
          status={Constants['Thursday']}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'].style,
              {
                color: 'rgb(45, 60, 63)',
                minHeight: null,
                paddingLeft: 0,
                paddingRight: 0,
              }
            ),
            dimensions.width
          )}
          uncheckedColor={palettes.App['Custom Color']}
        />
        {/* Friday */}
        <CheckboxRow
          onPress={newFridayValue => {
            try {
              setGlobalVariableValue({
                key: 'Friday',
                value: newFridayValue,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'].props}
          color={palettes.App['Custom Color']}
          label={'Friday'}
          status={Constants['Friday']}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'].style,
              {
                color: 'rgb(45, 60, 63)',
                minHeight: null,
                paddingLeft: 0,
                paddingRight: 0,
              }
            ),
            dimensions.width
          )}
          uncheckedColor={palettes.App['Custom Color']}
        />
        {/* Saturday */}
        <CheckboxRow
          onPress={newSaturdayValue => {
            try {
              setGlobalVariableValue({
                key: 'Saturday',
                value: newSaturdayValue,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'].props}
          color={palettes.App['Custom Color']}
          label={'Saturday'}
          status={Constants['Saturday']}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'].style,
              {
                color: 'rgb(45, 60, 63)',
                minHeight: null,
                paddingLeft: 0,
                paddingRight: 0,
              }
            ),
            dimensions.width
          )}
          uncheckedColor={palettes.App['Custom Color']}
        />
        {/* Sunday */}
        <CheckboxRow
          onPress={newSundayValue => {
            try {
              setGlobalVariableValue({
                key: 'Sunday',
                value: newSundayValue,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'].props}
          color={palettes.App['Custom Color']}
          label={'Sunday'}
          status={Constants['Sunday']}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.CheckboxRowStyles(theme)['Checkbox Row'].style,
              {
                color: 'rgb(45, 60, 63)',
                minHeight: null,
                paddingLeft: 0,
                paddingRight: 0,
              }
            ),
            dimensions.width
          )}
          uncheckedColor={palettes.App['Custom Color']}
        />
      </View>
      {/* Save Setup Button */}
      <Button
        accessible={true}
        iconPosition={'left'}
        onPress={() => {
          const handler = async () => {
            try {
              if (Constants['StartHour'] > Constants['EndHour']) {
                setGlobalVariableValue({
                  key: 'EndHour',
                  value: Constants['StartHour'],
                });
              } else {
              }

              if (Constants['hasNotifications'] === true) {
                await deleteAllScheduledNotifications(
                  navigation,
                  Variables,
                  setGlobalVariableValue
                );
                await waitUtil({ milliseconds: 5000 });
                await sendNotifv2(
                  navigation,
                  Variables,
                  setGlobalVariableValue
                );
              } else {
                await sendNotifv2(
                  navigation,
                  Variables,
                  setGlobalVariableValue
                );
              }
            } catch (err) {
              console.error(err);
            }
          };
          handler();
        }}
        {...GlobalStyles.ButtonStyles(theme)['Button'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ButtonStyles(theme)['Button'].style,
            theme.typography.button,
            {
              backgroundColor: 'rgb(45, 60, 63)',
              marginBottom: 10,
              marginLeft: 10,
              marginRight: 10,
            }
          ),
          dimensions.width
        )}
        title={'Save Setup'}
      />
    </ScreenContainer>
  );
};

export default withTheme(ScheduleSetupScreen);
