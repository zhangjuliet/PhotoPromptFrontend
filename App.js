import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

function LogInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>PhotoPrompt</Text>
      <StatusBar style="auto" />

      <Text style={styles.title}>Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotButton}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.createAccount}>New user? Sign up here</Text>
      </TouchableOpacity>
    </View>
  );
}

function PhotoUpload({ navigation }){
  return (
    <View style = {styles.mainBackdrop}>
      <Text style= {styles.heading}>Prompt of the Day</Text>
      <Text style = {styles.prompt}>"find an animal"</Text>
      <View style = {[styles.whiteBox, styles.shadowProp]}>
      <TouchableOpacity style={styles.cameraButton} activeOpacity={0.5}>
        <Image source={require('./assets/cameraAdd.png')}
        style={styles.ImageIconStyle}/>
        <Text style={styles.TextStyle}>Take a Photo!</Text>
      </TouchableOpacity>
      </View>
    </View>
 )
}

function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>PhotoPrompt</Text>
      <StatusBar style="auto" />

      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(user) => setUserName(user)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

function ExploreScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Gallery of Images</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Prompt of the Day</Text>
      <Text>Click to take photo</Text>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Joe Bruin</Text>
    </View>
  );
}

// const StartStack = createNativeStackNavigator();

// function StartStackScreen() {
//   return (
//     <StartStack.Navigator>
//       <StartStack.Screen name="Login" component={LogInScreen} />
//       <StartStack.Screen name="Signup" component={SignUpScreen} />
//     </StartStack.Navigator>
//   );
// }

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* Delete login from bottom tab navigator later. Currently here for testing. */}
        <Tab.Screen name="Log In" component={LogInScreen} />
        <Tab.Screen name="Sign Up" component={SignUpScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Prompt" component={PhotoUpload} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#344E41",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  appName: {
    color: "#DAD7CD",
    fontSize: innerWidth / 9.5,
    fontWeight: "bold",
    marginBottom: 50,
  },

  title: {
    color: "#DAD7CD",
    fontSize: innerWidth / 15,
    fontWeight: "bold",
    marginBottom: 10,
    alignItems: "left",
    textAlign: "left",
    justifyContent: "left",
  },

  inputView: {
    backgroundColor: "#DAD7CD",
    borderRadius: 10,
    width: "65%",
    height: 45,
    marginBottom: 20,
    alignItems: "left",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },

  forgotButton: {
    height: 30,
    color: "#DAD7CD",
  },

  loginButton: {
    width: "25%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
    backgroundColor: "#DAD7CD",
    fontWeight: "bold",
  },

  createAccount: {
    height: 30,
    marginTop: 40,
    color: "#DAD7CD",
    fontStyle: "italic",
  },
  mainBackdrop: {
    flexDirection: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#588157',
 },
 whiteBox: {
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#dfdfdf',
   width: '100%',
   height: 700,
   position: 'absolute',
   top: 200,
   borderTopLeftRadius: 10,
   borderTopRightRadius: 10,
 },
 shadowProp: {
  shadowColor: '#171717',
  shadowOffset: {width: -2, height: 4},
  shadowOpacity: 0.2,
  shadowRadius: 3,
},
heading: {
  color: '#EFEFEF',
  fontWeight: 'bold',
  fontSize: innerWidth / 12,
  marginBottom: 170,
  marginTop: 40,
  alignItems: 'center',
  justifyContent: 'center',
},
prompt: {
  color: '#EFEFEF',
  fontWeight: 'normal',
  fontSize: innerWidth / 17,
  fontStyle: 'italic',
  position: 'absolute',
  top: 100,
  alignItems: 'center',
  justifyContent: 'center',
},

regularText: {
  color: '#EFEFEF',
  fontStyle: 'italic',
  marginBottom: 4,
  marginRight: 25,
},
cameraButton: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  borderWidth: 3,
  borderColor: '#145125',
  borderStyle: 'dashed',
  height: 50,
  width: 130,
  borderRadius: 10,
  margin: 5,
},
ImageIconStyle: {
  padding: 10,
  margin: 5,
  height: 25,
  width: 25,
  resizeMode: 'stretch',
},
SeparatorLine:{
  backgroundColor : '#dfdfdf',
  width: 1,
  height: 200
},
});
