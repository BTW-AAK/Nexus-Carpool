import { Text, View } from "react-native";
import {Link, router} from "expo-router";

const Userpage = () => {
    return (
    <View>
        <Link href={'index'}>
        <Text>Sign Up to Home</Text>
        </Link>
    </View>)
}
export default Userpage;