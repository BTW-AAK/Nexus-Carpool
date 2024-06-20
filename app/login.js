import { StyleSheet, Text, View, Pressable, Image, Button } from "react-native";
import {Link, router} from "expo-router";
import {  useFonts, Poppins_900Black, Poppins_600SemiBold, Poppins_700Bold, Poppins_500Medium  } from '@expo-google-fonts/poppins';

const Userpage = () => {
    return (
    <View>
        <Pressable style={styles.BackButton}>
<Link href={''}>
  <Image source={{uri: 'https://drive.usercontent.google.com/download?id=1fy-DtxFhD858OctZVMwoL290uN8_U55G'}}
       style={styles.buttonImage} />
  </Link></Pressable>

  <Text style={styles.BrandName}>Welcome Back</Text>
<Image source={{uri: 'https://drive.usercontent.google.com/download?id=1fTe9ASE-Tj8EJW3NIu2kebIG1ODXshRy'}}
       style={{width: 380, height: 380, paddingTop:0}} />

    </View>)
}
export default Userpage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: 24,
    },
    main: {
      flex: 1,
      justifyContent: "center",
      maxWidth: 960,
      marginHorizontal: "auto",
    },
    title: {
      fontSize: 64,
      fontWeight: "bold",
      alignSelf: "center",
      fontFamily: "Poppins"
  
    },
    subtitle: {
      fontSize: 36,
      color: "#000000",
      fontWeight: "bold",
    },
    buttonImage: {
      width: 20, height: 20, padding: 0,
    },
    BrandName: {
      fontFamily: 'Poppins_500Medium', fontSize:32, alignSelf: 'center'

    },
  
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: -10
    },
    BackButton: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 360,
      elevation: 2,
      margin:10 ,
      marginLeft:25,
      marginTop: 10,
      width: 40,
      height:40,
    
      backgroundColor: '#F0F0F0',
    },
    onboardingButtonText: {
  color: '#ffffff',
  fontFamily: 'Poppins_600SemiBold', fontSize:32,
  fontSize: 20,
    }
  });
  