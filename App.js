// Pitch as wordle but with getting you outside

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

const apiDest = 'https://wander.wumpler.com';

let global_userID = "";
let global_session = "";

const backend = {
  login: (email, password) => {
    const data = {
      email: email,
      password: password
    };

    return fetch(apiDest + '/auth/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  },
};

function LogInScreen({ navigation }) {
  const [responseText, setResponseText] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>PhotoPrompt</Text>
      <StatusBar style="auto" />

      <Text style={styles.responseText}>{responseText}</Text>

      <Text style={styles.title}>Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(e) => setEmail(e)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(p) => setPassword(p)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotButton}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={async () => {
          backend.login(email, password).then(res => {
            if (res.status == 200) {
              let { userID, session } = res.json();
              global_userID = userID;
              global_session = session;

              setResponseText("");
              setEmail("");
              setPassword("");
              navigation.navigate('Home'); // success
            }
            else if (res.status == 401) {
              // Invalid username or password
              setResponseText("Invalid username or password");
            }
            else if (res.status == 501) {
              // User not found
              setResponseText("User not found");
            }
          });
        }}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.createAccount}>New user? Sign up here</Text>
      </TouchableOpacity>
    </View>
  );
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

  responseText: {
    color: "#FF0000",
    fontSize: innerWidth / 25,
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
});
