import { StyleSheet, Text, View, Pressable, Image, Button } from "react-native";
import {Link, router} from "expo-router";
import {  useFonts, Poppins_900Black, Poppins_600SemiBold, Poppins_700Bold, Poppins_500Medium  } from '@expo-google-fonts/poppins';


export default function Page() {
  let [fontsLoaded] = useFonts({
    Poppins_900Black, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold
  });
  if (!fontsLoaded) {
    return null;
  }

  return(
    

    <View style={styles.container}>
          <View style={styles.header}>
    <Image source={{uri: 'https://drive.usercontent.google.com/download?id=1v3puPD0znpb2FjYcDVEuJ2YLR4XmUJHg'}}
       style={styles.logo} />

<Text style={styles.BrandName}> Nexus</Text>

  </View>

<Image source={{uri: 'https://drive.usercontent.google.com/download?id=19OLVq7TZuYBrQLwao1dhfsJdPy4IKQTx'}}
       style={{width: 380, height: 380, paddingTop:0}} />

<Text style={{fontFamily: 'Poppins_600SemiBold', fontSize:38, color: '#000000'}}>Welcome to{"\n"}     Nexus!</Text>
<Text style={{fontFamily: 'Poppins_500Medium', fontSize:16, textAlign: 'center', paddingTop: 15}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
            </Text>

<View style={styles.header}>
<Pressable style={styles.onboardingButton}>
 <Link href={'login'}>
  <Text style={styles.onboardingButtonText}>   Login   </Text>
  </Link>
</Pressable>
<Pressable style={styles.onboardingButton}>
<Link href={'signup'}>
  <Text style={styles.onboardingButtonText}>Sign Up</Text>
  </Link>

</Pressable></View>
    </View>
    
  );
}

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
  logo: {
    width: 50, height: 50, padding: -0
  },
  BrandName: {
    fontFamily: 'Poppins_500Medium', fontSize:32,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -10
  },
  onboardingButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 100,
    elevation: 3,
    margin:10 ,
    marginTop: 30,
    backgroundColor: '#DC5049',
  },
  onboardingButtonText: {
color: '#ffffff',
fontFamily: 'Poppins_600SemiBold', fontSize:32,
fontSize: 18,
  }
});
