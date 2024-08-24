import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../../mainPages/HomePage';
import Transactions from '../../mainPages/Transactions';
import Send from '../../mainPages/Send';
import Cards from '../../mainPages/Cards';
import MoreOptionsPage from '../../mainPages/MoreOptionsPage';
import colors from '../../../constants/colors';
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import image from '../../../assets/images/image';


const Tab = createBottomTabNavigator();

// Component logic to create the middle top bar button
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: Platform.OS === 'ios' ? -5 : 4,
    }}
  >
    <View style={{
      width: Platform.OS === 'ios' ? 70 : 60,
      height: Platform.OS === 'ios' ? 70 : 60,
      borderRadius: 35,
      marginBottom: 15,
      backgroundColor: colors.main
    }}>
      {children}
    </View>
  </TouchableOpacity>
)


const MainTabs = () => {
  return (

    <Tab.Navigator
      screenOptions={{
        tabBarLabel: '',
        tabBarActiveTintColor: colors.main,
        tabBarInactiveTintColor: colors.lightGrey,
        tabBarStyle: {
          position: 'absolute',
          borderRadius: 20,
          bottom: Platform.OS === 'ios' ? 0 : 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 85 : 90

        }
      }}
    >
      <Tab.Screen name="Home" component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={image.home}
                resizeMode='contain'
                style={{ width: 25, height: 25, tintColor: focused ? colors.main : colors.lightGrey }}
              />
              <Text style={{ color: focused ? colors.main : colors.lightGrey }}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="transaction" component={Transactions}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={image.time}
                resizeMode='contain'
                style={{ width: 25, height: 25, tintColor: focused ? colors.main : colors.lightGrey }}
              />
              <Text style={{ color: focused ? colors.main : colors.lightGrey }}>Transactions</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="send" component={Send}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={image.send}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                marginTop: 10,
                marginRight: 5,
                tintColor: colors.white
              }}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          )
        }}
      />
      <Tab.Screen name="cards" component={Cards}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={image.creditcard}
                resizeMode='contain'
                style={{ width: 25, height: 25, tintColor: focused ? colors.main : colors.lightGrey }}
              />
              <Text style={{ color: focused ? colors.main : colors.lightGrey }}>Cards</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="more" component={MoreOptionsPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={image.application}
                resizeMode='contain'
                style={{ width: 25, height: 25, tintColor: focused ? colors.main : colors.lightGrey }}
              />
              <Text style={{ color: focused ? colors.main : colors.lightGrey }}>More</Text>
            </View>
          ),

        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabs