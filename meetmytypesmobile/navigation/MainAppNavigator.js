import Profile from '../components/MainStack/Profile/ProfileScreen';
import MatchRequest from '../components/MainStack/matchRequest/MatchRequestScreen';
import ConfirmedMatch from '../components/MainStack/confirmedMatches/MatchScreen';
import UserList from '../components/MainStack/userList/UserListScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

const Tab = createBottomTabNavigator();
function MainAppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="MatchRequest" component={MatchRequest} />
        <Tab.Screen name="UserList" component={UserList} />
        <Tab.Screen name="Matches" component={ConfirmedMatch} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainAppNavigator;
