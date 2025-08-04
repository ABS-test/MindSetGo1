import React from 'react';
import {
  Checkbox,
  Icon,
  IconButton,
  ScreenContainer,
  SimpleStyleFlatList,
  Timer,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import FunctiaFromAlarmListToAlarmListDisplayByPeriod from '../global-functions/FunctiaFromAlarmListToAlarmListDisplayByPeriod';
import sendNotifv2 from '../global-functions/sendNotifv2';
import updateCheckedStatus from '../global-functions/updateCheckedStatus';
import updateMoneyDisplay from '../global-functions/updateMoneyDisplay';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const defaultProps = { topmenu: 'AntDesign/bars' };

const WealthThoughtsAndActionsScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const params = useParams();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (Constants['hasNotifications'] === true) {
        } else {
          await sendNotifv2(navigation, Variables, setGlobalVariableValue);
          setGlobalVariableValue({
            key: 'hasNotifications',
            value: true,
          });
        }
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, []);
  const viewTOPSecDollarMoneyViewMoneyTimerRef = React.useRef();
  const moodViewMoodTimerRef = React.useRef();
  const tasksViewSecTasksViewTaskTimerRef = React.useRef();

  return (
    <ScreenContainer
      hasLeftSafeArea={false}
      hasRightSafeArea={false}
      hasSafeArea={false}
      hasTopSafeArea={false}
      scrollable={true}
      style={StyleSheet.applyWidth(
        {
          alignContent: 'space-around',
          backgroundColor: 'rgb(255, 251, 243)',
          justifyContent: 'flex-start',
        },
        dimensions.width
      )}
    >
      {/* Top View */}
      <View
        style={StyleSheet.applyWidth(
          {
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 0,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
          },
          dimensions.width
        )}
      >
        {/* Text main */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Text'].style,
              theme.typography.headline6,
              {
                color: 'rgb(45, 60, 63)',
                marginLeft: 5,
                paddingBottom: 5,
                paddingTop: 5,
              }
            ),
            dimensions.width
          )}
        >
          {'Wealth thoughts and actions'}
        </Text>

        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', justifyContent: 'flex-end' },
            dimensions.width
          )}
        >
          {/* Icon Refresh Button */}
          <IconButton
            onPress={() => {
              try {
                updateMoneyDisplay(
                  navigation,
                  Variables,
                  setGlobalVariableValue
                );
              } catch (err) {
                console.error(err);
              }
            }}
            color={palettes.App['Custom Color']}
            icon={'FontAwesome/refresh'}
            size={18}
            style={StyleSheet.applyWidth(
              { right: 10, top: 7 },
              dimensions.width
            )}
          />
          {/* Icon  Settings Button */}
          <IconButton
            onPress={() => {
              try {
                navigation.navigate('ScheduleSetupScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            color={palettes.App['Custom Color']}
            icon={'MaterialIcons/display-settings'}
            size={21}
            style={StyleSheet.applyWidth(
              { position: 'relative', right: 5, top: 5 },
              dimensions.width
            )}
          />
        </View>
      </View>
      {/* View TOP sec dollar */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: 'rgb(227, 239, 233)',
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            justifyContent: 'space-around',
            marginLeft: 10,
            marginRight: 10,
          },
          dimensions.width
        )}
      >
        {/* Money View */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              alignSelf: 'auto',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 10,
            },
            dimensions.width
          )}
        >
          {/* Icon dollar */}
          <Icon
            color={palettes.App['Custom Color']}
            name={'Foundation/dollar'}
            size={32}
            style={StyleSheet.applyWidth({ left: 8 }, dimensions.width)}
          />
          {/* money title Text */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Text'].style,
                theme.typography.button,
                { color: 'rgb(45, 60, 63)', marginLeft: 8 }
              ),
              dimensions.width
            )}
          >
            {' Activation of money-based thoughts'}
          </Text>
          {/* Money Timer */}
          <Timer
            initialTime={0}
            onTimerChange={newTimerValue => {
              try {
                /* hidden 'If/Else' action */
              } catch (err) {
                console.error(err);
              }
            }}
            updateInterval={1000}
            {...GlobalStyles.TimerStyles(theme)['Timer'].props}
            countDirection={'up'}
            format={'hh:mm:ss'}
            ref={viewTOPSecDollarMoneyViewMoneyTimerRef}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TimerStyles(theme)['Timer'].style,
                theme.typography.headline4,
                { alignSelf: 'auto', color: 'rgba(0, 0, 0, 0)', fontSize: 15 }
              ),
              dimensions.width
            )}
          />
        </View>
      </View>
      {/* View money thoughts */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: 'rgb(227, 239, 233)',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            borderTopLeftRadius: 0,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginLeft: 10,
            marginRight: 10,
          },
          dimensions.width
        )}
      >
        {/* Money List */}
        <SimpleStyleFlatList
          data={Constants['MoneyDisplay']}
          decelerationRate={'normal'}
          horizontal={false}
          inverted={false}
          keyExtractor={(moneyListData, index) => moneyListData?.id}
          keyboardShouldPersistTaps={'never'}
          listKey={'View money thoughts->Money List'}
          nestedScrollEnabled={false}
          numColumns={1}
          onEndReachedThreshold={0.5}
          pagingEnabled={false}
          renderItem={({ item, index }) => {
            const moneyListData = item;
            return (
              <>
                {/* View list messages */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      flexDirection: 'column',
                      marginLeft: 40,
                      paddingBottom: 5,
                      paddingRight: 5,
                    },
                    dimensions.width
                  )}
                >
                  {/* Text money thought */}
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
                    {moneyListData?.message}
                  </Text>
                </View>
              </>
            );
          }}
          showsVerticalScrollIndicator={true}
          snapToAlignment={'start'}
          showsHorizontalScrollIndicator={false}
          style={StyleSheet.applyWidth(
            { flexDirection: 'column' },
            dimensions.width
          )}
        />
      </View>
      {/* Mood View */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: 'rgb(253, 245, 223)',
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            paddingTop: 10,
          },
          dimensions.width
        )}
      >
        <Icon
          color={palettes.App['Custom Color']}
          name={'MaterialCommunityIcons/lightning-bolt'}
          size={32}
          style={StyleSheet.applyWidth(
            { marginLeft: 4, marginRight: 4 },
            dimensions.width
          )}
        />
        {/* Text mood */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Text'].style,
              theme.typography.button,
              { color: 'rgb(45, 60, 63)', paddingLeft: 5 }
            ),
            dimensions.width
          )}
        >
          {'Activation of productive mood'}
        </Text>
        {/* Mood Timer */}
        <Timer
          initialTime={0}
          onTimerChange={newTimerValue => {
            try {
              if (newTimerValue / 1000 >= 60) {
                moodViewMoodTimerRef.current?.reset(undefined);

                moodViewMoodTimerRef.current?.start();

                FunctiaFromAlarmListToAlarmListDisplayByPeriod(
                  navigation,
                  Variables,
                  setGlobalVariableValue
                );
              } else {
              }
            } catch (err) {
              console.error(err);
            }
          }}
          updateInterval={1000}
          {...GlobalStyles.TimerStyles(theme)['Timer'].props}
          countDirection={'up'}
          format={'hh:mm:ss'}
          ref={moodViewMoodTimerRef}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TimerStyles(theme)['Timer'].style,
              theme.typography.headline4,
              { alignSelf: 'auto', color: 'rgba(0, 0, 0, 0)', fontSize: 15 }
            ),
            dimensions.width
          )}
        />
      </View>
      {/* Mood List */}
      <SimpleStyleFlatList
        data={Constants['Mood']}
        decelerationRate={'normal'}
        horizontal={false}
        inverted={false}
        keyExtractor={(moodListData, index) => moodListData?.id}
        keyboardShouldPersistTaps={'never'}
        listKey={'Mood List'}
        nestedScrollEnabled={false}
        numColumns={1}
        onEndReachedThreshold={0.5}
        pagingEnabled={false}
        renderItem={({ item, index }) => {
          const moodListData = item;
          return (
            <>
              {/* View list mood */}
              <View
                onLayout={event => {
                  try {
                    viewTOPSecDollarMoneyViewMoneyTimerRef.current?.start();
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  {
                    alignContent: 'space-between',
                    alignItems: 'stretch',
                    borderRadius: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: 1,
                    marginLeft: 40,
                    marginRight: 5,
                  },
                  dimensions.width
                )}
              >
                {/* Text mood */}
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      theme.typography.body1,
                      { color: 'rgb(45, 60, 63)', marginLeft: 5 }
                    ),
                    dimensions.width
                  )}
                >
                  {moodListData?.message}
                </Text>
              </View>
            </>
          );
        }}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        snapToAlignment={'start'}
        style={StyleSheet.applyWidth(
          {
            alignItems: 'stretch',
            backgroundColor: 'rgb(253, 245, 223)',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            gap: 10,
            marginLeft: 10,
            marginRight: 10,
            paddingBottom: 5,
          },
          dimensions.width
        )}
      />
      {/* Tasks View */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignContent: 'flex-start',
            alignItems: 'stretch',
            alignSelf: 'auto',
            backgroundColor: 'rgb(240, 242, 250)',
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            flexDirection: 'column',
            justifyContent: 'space-around',
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            paddingBottom: 12,
          },
          dimensions.width
        )}
      >
        {/* Sec Tasks View */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              flexDirection: 'row',
              height: 44,
              paddingBottom: 5,
            },
            dimensions.width
          )}
        >
          <Icon
            color={palettes.App['Custom Color']}
            name={'AntDesign/checkcircle'}
            size={24}
            style={StyleSheet.applyWidth(
              {
                bottom: 10,
                left: 10,
                marginRight: 5,
                position: 'relative',
                right: 10,
                top: 10,
              },
              dimensions.width
            )}
          />
          {/* Text task title */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Text'].style,
                theme.typography.button,
                {
                  alignSelf: 'center',
                  color: 'rgb(45, 60, 63)',
                  marginLeft: 10,
                  paddingLeft: 5,
                }
              ),
              dimensions.width
            )}
          >
            {'Money/health/partners task actions'}
          </Text>
          {/* Task Timer */}
          <Timer
            initialTime={0}
            onTimerChange={newTimerValue => {
              try {
                if (newTimerValue / 1000 >= 60) {
                  tasksViewSecTasksViewTaskTimerRef.current?.reset(undefined);

                  tasksViewSecTasksViewTaskTimerRef.current?.start();

                  FunctiaFromAlarmListToAlarmListDisplayByPeriod(
                    navigation,
                    Variables,
                    setGlobalVariableValue
                  );
                } else {
                }
              } catch (err) {
                console.error(err);
              }
            }}
            updateInterval={1000}
            {...GlobalStyles.TimerStyles(theme)['Timer'].props}
            countDirection={'up'}
            format={'hh:mm:ss'}
            ref={tasksViewSecTasksViewTaskTimerRef}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TimerStyles(theme)['Timer'].style,
                theme.typography.headline4,
                {
                  alignSelf: 'auto',
                  color: 'rgba(0, 0, 0, 0)',
                  fontSize: 15,
                  marginTop: 10,
                }
              ),
              dimensions.width
            )}
          />
        </View>
        {/* Tasks List  */}
        <SimpleStyleFlatList
          data={Constants['AlarmList']}
          decelerationRate={'normal'}
          horizontal={false}
          inverted={false}
          keyExtractor={(tasksListData, index) => tasksListData?.id}
          keyboardShouldPersistTaps={'never'}
          listKey={'Tasks View->Tasks List '}
          nestedScrollEnabled={false}
          numColumns={1}
          onEndReachedThreshold={0.5}
          pagingEnabled={false}
          renderItem={({ item, index }) => {
            const tasksListData = item;
            return (
              <>
                {/* Task List View */}
                <View
                  onLayout={event => {
                    try {
                      viewTOPSecDollarMoneyViewMoneyTimerRef.current?.start();
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  accessibilityRole={'adjustable'}
                  collapsable={false}
                  style={StyleSheet.applyWidth(
                    {
                      alignContent: 'space-between',
                      alignItems: 'stretch',
                      alignSelf: 'stretch',
                      borderRadius: 5,
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    },
                    dimensions.width
                  )}
                >
                  {/* Title task View */}
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
                    {/* TItle task Text */}
                    <Text
                      accessible={true}
                      selectable={false}
                      {...GlobalStyles.TextStyles(theme)['Text'].props}
                      numberOfLines={1}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'].style,
                          theme.typography.button,
                          { color: 'rgb(45, 60, 63)' }
                        ),
                        dimensions.width
                      )}
                    >
                      {tasksListData?.title}
                    </Text>
                    {/* Ttile Checkbox */}
                    <Checkbox
                      onCheck={() => {
                        const checkboxValue = undefined;
                        try {
                          setGlobalVariableValue({
                            key: 'ItemDisplayNr',
                            value: tasksListData?.id,
                          });
                          setGlobalVariableValue({
                            key: 'checkedValue',
                            value: true,
                          });
                          updateCheckedStatus(
                            navigation,
                            Variables,
                            setGlobalVariableValue
                          );
                          setGlobalVariableValue({
                            key: 'checkedValue',
                            value: false,
                          });
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      onUncheck={() => {
                        const checkboxValue = undefined;
                        try {
                          setGlobalVariableValue({
                            key: 'ItemDisplayNr',
                            value: tasksListData?.id,
                          });
                          setGlobalVariableValue({
                            key: 'checkedValue',
                            value: false,
                          });
                          updateCheckedStatus(
                            navigation,
                            Variables,
                            setGlobalVariableValue
                          );
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      color={palettes.App['Custom Color']}
                      defaultValue={tasksListData?.checked}
                      uncheckedColor={palettes.App['Custom Color']}
                    />
                  </View>
                  {/* Task Message Text */}
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
                    {tasksListData?.message}
                  </Text>
                </View>
              </>
            );
          }}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          snapToAlignment={'start'}
          style={StyleSheet.applyWidth(
            {
              alignContent: 'flex-start',
              alignItems: 'stretch',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              flexDirection: 'column',
              gap: 10,
              marginLeft: 40,
              paddingLeft: 5,
              paddingRight: 5,
            },
            dimensions.width
          )}
        />
      </View>
      {/* Bottom Task List View */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'flex-start',
            alignSelf: 'stretch',
            backgroundColor: 'rgb(240, 242, 250)',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            paddingBottom: 5,
            paddingRight: 5,
          },
          dimensions.width
        )}
      >
        {/* Icon actions Button */}
        <IconButton
          onPress={() => {
            try {
              navigation.navigate('TaskActionsScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          color={palettes.App['Custom Color']}
          icon={'FontAwesome/pencil-square-o'}
          size={21}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(WealthThoughtsAndActionsScreen);
