import { StyleSheet, Text, View, Pressable, Image, Button } from "react-native";
import {Link, router} from "expo-router";
import {  useFonts, Poppins_900Black, Poppins_600SemiBold, Poppins_700Bold, Poppins_500Medium  } from '@expo-google-fonts/poppins';


export default function Page() {
  // return (
  //   <View style={styles.container}>
  //     <View style={styles.main}>
  //     <Link href={'page1'}>
  //       <Text style={styles.title}>Hello World</Text>
  //       </Link>
  //       <Text style={styles.subtitle}>This is the first page of your app.</Text>
  //     </View>
  //   </View>
  // );
  let [fontsLoaded] = useFonts({
    Poppins_900Black, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold
  });
  if (!fontsLoaded) {
    return null;
  }

  return(
    

    <View style={styles.container}>
          <View style={styles.header}>
    <Image source={{uri: 'https://media.discordapp.net/attachments/1252659588638179519/1252887903974199376/logo-placeholder-image.png?ex=6673da49&is=667288c9&hm=eefc929b15e1e5748625806b8f0aae8f8afc00ab5c90fa379e44e25ba675a822&=&format=webp&quality=lossless'}}
       style={styles.logo} />

<Text style={styles.BrandName}> Nexus</Text>

  </View>

<Image source={{uri: 'https://cdn.discordapp.com/attachments/1252659588638179519/1252872011911266355/Onboarding_image.png?ex=6673cb7c&is=667279fc&hm=0367a4699cd1515afcc6c13dfa1de1f982b2da3e01ab833c35ab6ecef3c331cc&'}}
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
