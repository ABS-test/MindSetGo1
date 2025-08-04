import React from 'react';
import {
  IconButton,
  ScreenContainer,
  SimpleStyleFlatList,
  Timer,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import myFunctionName3 from '../global-functions/myFunctionName3';
import myFunctionName5 from '../global-functions/myFunctionName5';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const TaskActionsScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [newId, setNewId] = React.useState(0);
  const [newMessage, setNewMessage] = React.useState('');
  const [newPeriod, setNewPeriod] = React.useState(0);
  const [newTitle, setNewTitle] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const viewTimerRef = React.useRef();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: 'rgb(255, 251, 243)' },
        dimensions.width
      )}
    >
      <SimpleStyleFlatList
        data={Constants['AlarmList']}
        decelerationRate={'normal'}
        horizontal={false}
        inverted={false}
        keyExtractor={(listData, index) => listData?.id}
        keyboardShouldPersistTaps={'never'}
        listKey={'List'}
        nestedScrollEnabled={false}
        numColumns={1}
        onEndReachedThreshold={0.5}
        pagingEnabled={false}
        renderItem={({ item, index }) => {
          const listData = item;
          return (
            <View
              style={StyleSheet.applyWidth(
                {
                  alignContent: 'center',
                  alignItems: 'flex-start',
                  alignSelf: 'auto',
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                  flexDirection: 'row',
                  gap: 5,
                  justifyContent: 'space-between',
                  marginBottom: 5,
                  paddingBottom: 5,
                  paddingLeft: 5,
                  paddingRight: 5,
                  paddingTop: 5,
                },
                dimensions.width
              )}
            >
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    alignSelf: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginLeft: 5,
                  },
                  dimensions.width
                )}
              >
                {/* Title Text */}
                <Text
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  accessibilityRole={'none'}
                  accessible={true}
                  adjustsFontSizeToFit={false}
                  allowFontScaling={false}
                  disabled={false}
                  ellipsizeMode={'middle'}
                  maxFontSizeMultiplier={0}
                  numberOfLines={1}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      theme.typography.body1,
                      {
                        alignSelf: 'auto',
                        color: 'rgb(45, 60, 63)',
                        textAlign: 'left',
                      }
                    ),
                    dimensions.width
                  )}
                  suppressHighlighting={false}
                  textBreakStrategy={'balanced'}
                >
                  {listData?.title}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  },
                  dimensions.width
                )}
              >
                {/* Icon edit Button */}
                <IconButton
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'newItemNr',
                        value: listData?.id,
                      });
                      setGlobalVariableValue({
                        key: 'newTitle',
                        value: listData?.title,
                      });
                      setGlobalVariableValue({
                        key: 'newMessage',
                        value: listData?.message,
                      });
                      setGlobalVariableValue({
                        key: 'AlarmState',
                        value: 'edit',
                      });
                      navigation.navigate('TaskScreen');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  color={palettes.App['Custom Color']}
                  icon={'EvilIcons/pencil'}
                  size={32}
                  style={StyleSheet.applyWidth({ right: 20 }, dimensions.width)}
                />
                {/* Icon Delete Button */}
                <IconButton
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'ItemNr',
                        value: listData?.id,
                      });
                      setGlobalVariableValue({
                        key: 'newTitle',
                        value: '',
                      });
                      setGlobalVariableValue({
                        key: 'newPeriod',
                        value: '',
                      });
                      setGlobalVariableValue({
                        key: 'newMessage',
                        value: '',
                      });
                      myFunctionName3(
                        navigation,
                        Variables,
                        setGlobalVariableValue
                      );

                      viewTimerRef.current?.start();
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  size={32}
                  color={palettes.App['Custom Color']}
                  icon={'MaterialCommunityIcons/delete-outline'}
                />
              </View>
            </View>
          );
        }}
        snapToAlignment={'start'}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: 'rgb(227, 239, 233)',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            gap: 0,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
          },
          dimensions.width
        )}
      />
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'row', justifyContent: 'space-between' },
          dimensions.width
        )}
      >
        <IconButton
          onPress={() => {
            try {
              myFunctionName5(navigation, Variables, setGlobalVariableValue);
              setGlobalVariableValue({
                key: 'AlarmState',
                value: 'new',
              });
              setGlobalVariableValue({
                key: 'newTitle',
                value: '',
              });
              setGlobalVariableValue({
                key: 'newMessage',
                value: '',
              });
              navigation.navigate('TaskScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          size={32}
          color={palettes.App['Custom Color']}
          hitSlop={10}
          icon={'AntDesign/pluscircleo'}
          style={StyleSheet.applyWidth(
            { left: 10, right: 10, top: 5 },
            dimensions.width
          )}
        />
        <Timer
          countDirection={'up'}
          format={'mm:ss'}
          initialTime={0}
          onTimerChange={newTimerValue => {
            try {
              myFunctionName3(navigation, Variables, setGlobalVariableValue);

              viewTimerRef.current?.reset(undefined);

              setGlobalVariableValue({
                key: 'ItemNr',
                value: 0,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          updateInterval={1000}
          {...GlobalStyles.TimerStyles(theme)['Timer'].props}
          ref={viewTimerRef}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TimerStyles(theme)['Timer'].style,
              theme.typography.headline4,
              { color: 'rgba(0, 0, 0, 0)', paddingRight: 5 }
            ),
            dimensions.width
          )}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(TaskActionsScreen);
