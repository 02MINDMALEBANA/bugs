import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Reatjs from './Reatjs';

//icons
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

//routing
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';



const Stack = createNativeStackNavigator();
const Home = ({navigation}) =>{
   return(
    <>
    <View  > 
    <View style={styles.topHeader} >
          <View style={styles.greetings}>
          <FontAwesome style={styles.serach}  name="search" size={24} color="black" />
             
          </View>
          <Pressable onPress={()=>navigation.navigate('Profile')}>
          <View style={styles.avatar} >
              <Ionicons name="ios-person-circle" size={34} color="black" />
          </View>
          </Pressable>

          
    </View>
    <View style={styles.greeting}>
        <Text>
           Hi,
        </Text>
        <Text>
            Karabo
        </Text>
    </View>
    <View style={styles.underline}>
    </View>
    <View style={styles.frameworkHeading}>
       <Text style={styles.framework}>frameworks</Text>
    </View>

    <View style={styles.frameworksContainer}>

      <Pressable onPress={()=>navigation.navigate('React Bugs')}>
      <View style={styles.frameworkList}>
              <Text>React</Text>
          </View>
      </Pressable>
         
          <View  style={styles.frameworkList}>
          <Text>Angular</Text>
          </View>
    </View>
  
    </View>
   
   

    </>
    
   )
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="React Bugs" component={Reatjs} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  frameworkList:{
       borderColor:"#000000",
       borderWidth:1,
       width:100,
       height:100,
       borderRadius:15
  },
  frameworksContainer:{
      flexDirection:'row',
      justifyContent:'space-around'
  },
  framework:{
      fontSize:20,
      textTransform:'capitalize',
      marginLeft:50
  },
  frameworkHeading:{
    padding:20
  },
  underline:{
       height:2,
       backgroundColor:'#c2bcbc',
       width:'90%',
       alignSelf:'center',
       marginVertical:15
  },
  serach:{
    marginTop:7,
  },
  greet:{
         padding:5,
         marginTop:7,
         fontWeight:'700'
  },
  topHeader : {
    flexDirection:'row',
    justifyContent:'space-around',
    marginVertical: 50
    
  },
  greeting:{
      
        padding:10,
       marginLeft:60,
       
  },
  avatar : {

            padding:10
  }
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
                                             











































// // import { StatusBar } from 'expo-status-bar';
// // import { StyleSheet, Text, View } from 'react-native';

// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.txt}>Open up App.js to start working on your app!</Text>
// //       <StatusBar style="auto" />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: 'dodgerblue',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   txt: {
// //     color: 'white',
// //     fontSize: 30,
// //     fontWeight: 'bold'
// //   }
// // });
// // import React from "react";
// // import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

// // const App = () => (
// //   <View style={[styles.container, styles.horizontal]}>
// //     <ActivityIndicator />
// //     <ActivityIndicator size="large" />
// //     <ActivityIndicator size="small" color="#0000ff" />
// //     <ActivityIndicator size="large" color="#00ff00" />
// //   </View>
// // );

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center"
// //   },
// //   horizontal: {
// //     flexDirection: "row",
// //     justifyContent: "space-around",
// //     padding: 10
// //   }
// // });

// // export default App;



// // import React from 'react';
// // import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

// // const Separator = () => (
// //   <View style={styles.separator} />
// // );

// // const App = () => (
// //   <SafeAreaView style={styles.container}>
// //     <View>
// //       <Text style={styles.title}>
// //         The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
// //       </Text>
// //       <Button
// //         title="Press me"
// //         color='red'
// //         onPress={() => Alert.alert('Simple Button pressed')}
// //       />
// //     </View>
// //     <Separator />
// //     <View>
// //       <Text style={styles.title}>
// //         Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.
// //       </Text>
// //       <Button
// //         title="Press me"
// //         color="#f194ff"
// //         onPress={() => Alert.alert('Button with adjusted color pressed')}
// //       />
// //     </View>
// //     <Separator />
// //     <View>
// //       <Text style={styles.title}>
// //         All interaction for the component are disabled.
// //       </Text>
// //       <Button
// //         title="Press me"
// //         disabled
// //         onPress={() => Alert.alert('Cannot press this one')}
// //       />
// //     </View>
// //     <Separator />
// //     <View>
// //       <Text style={styles.title}>
// //         This layout strategy lets the title define the width of the button.
// //       </Text>
// //       <View style={styles.fixToText}>
// //         <Button
// //           title="Accept"
// //           color='green'
// //           onPress={() => Alert.alert('Left button pressed')}
// //         />
// //         <Button
// //           title="Reject"
// //           color='red'
// //           onPress={() => Alert.alert('Right button pressed')}
// //         />
// //       </View>
// //     </View>
// //   </SafeAreaView>
// // );

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     marginHorizontal: 16,
// //   },
// //   title: {
// //     textAlign: 'center',
// //     marginVertical: 8,
// //   },
// //   fixToText: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //   },
// //   separator: {
// //     marginVertical: 8,
// //     borderBottomColor: '#737373',
// //     borderBottomWidth: StyleSheet.hairlineWidth,
// //   },
// // });

// // export default App;

// import React from "react";
// import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";

// const image =  { uri: "https://reactjs.org/logo-og.png" };
// // const [text, onChangeText]=React.useState('Enter your name');
// const App = () => (
//   <View style={styles.container}>
//     <ImageBackground source={image} resizeMode="cover" style={styles.image}>
//       <Text style={styles.text}>Inside My App</Text>
//       <Text>Absolutely beautiful</Text>
//       <Button
//       title="Accept"
//       color='green'
//       onPress={() => Alert.alert('Right button pressed')}
//       />
//       <TextInput
//         style={styles.input}
//         // onChangeText={onChangeText}
//         // value={text}
//       />



//     </ImageBackground>
    
    
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     justifyContent: "center"
//   },
//   text: {
//     color: "white",
//     fontSize: 42,
//     lineHeight: 84,
//     fontWeight: "bold",
//     textAlign: "center",
//     backgroundColor: "#000000c0"
//   },
//   input:  {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });

// export default App;