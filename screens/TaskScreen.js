import React from 'react';
import { Button, ScreenContainer, TextInput, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import myFunctionName6 from '../global-functions/myFunctionName6';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const TaskScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: 'rgb(255, 251, 243)' },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: 'rgb(255, 251, 243)',
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
          },
          dimensions.width
        )}
      >
        {/* Title Text 2 */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Text'].style,
              theme.typography.body1,
              { color: 'rgb(45, 60, 63)', paddingBottom: 5 }
            ),
            dimensions.width
          )}
        >
          {'Title'}
        </Text>
        {/* newTitle */}
        <TextInput
          autoCapitalize={'none'}
          autoCorrect={true}
          changeTextDelay={500}
          onChangeText={newNewTitleValue => {
            try {
              setGlobalVariableValue({
                key: 'newTitle',
                value: newNewTitleValue,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'Enter a value...'}
          webShowOutline={true}
          {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
          editable={Boolean(Constants['AlarmState'] !== 'view')}
          maxLength={100}
          multiline={false}
          placeholderTextColor={palettes.App['Custom Color']}
          selectionColor={palettes.App['Custom Color 2']}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextInputStyles(theme)['Text Input'].style,
              theme.typography.body2,
              {
                borderColor: 'rgb(85, 97, 95)',
                color: 'rgb(45, 60, 63)',
                marginBottom: 5,
              }
            ),
            dimensions.width
          )}
          value={Constants['newTitle']}
        />
        {/* Message Text  */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Text'].style,
              theme.typography.body1,
              { color: 'rgb(45, 60, 63)', paddingBottom: 5 }
            ),
            dimensions.width
          )}
        >
          {'Message'}
        </Text>
        {/* Message Text Input */}
        <TextInput
          autoCapitalize={'none'}
          autoCorrect={true}
          changeTextDelay={500}
          onChangeText={newMessageTextInputValue => {
            try {
              setGlobalVariableValue({
                key: 'newMessage',
                value: newMessageTextInputValue,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'Enter a value...'}
          webShowOutline={true}
          {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
          editable={Boolean(Constants['AlarmState'] !== 'view')}
          multiline={true}
          numberOfLines={8}
          placeholderTextColor={palettes.App['Custom Color 2']}
          selectionColor={palettes.App['Custom Color 2']}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextInputStyles(theme)['Text Input'].style,
              theme.typography.body2,
              {
                borderColor: 'rgb(85, 97, 95)',
                color: 'rgb(45, 60, 63)',
                marginBottom: 5,
              }
            ),
            dimensions.width
          )}
          value={Constants['newMessage']}
        />
        <>
          {!(Constants['AlarmState'] !== 'view') ? null : (
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  myFunctionName6(
                    navigation,
                    Variables,
                    setGlobalVariableValue
                  );
                  navigation.navigate('TaskActionsScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              {...GlobalStyles.ButtonStyles(theme)['Button'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Button'].style,
                  theme.typography.button,
                  { backgroundColor: 'rgb(85, 97, 95)', marginBottom: 5 }
                ),
                dimensions.width
              )}
              title={'Save'}
            />
          )}
        </>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(TaskScreen);
