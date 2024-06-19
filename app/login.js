import { Text, View } from "react-native";
import {Link, router} from "expo-router";

const Userpage = () => {
    return (
    <View>
        <Link href={'index'}>
        <Text>Second Page</Text>
        </Link>
    </View>)
}
export default Userpage;