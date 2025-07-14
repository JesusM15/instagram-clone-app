import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import colors from "../constants/colors";


function UserCircle({ user, linearGradient = false, onPress, size, showUsername=true }){

    return (
        <TouchableOpacity style={darkStyles.container} onPress={onPress}>
            {linearGradient && <LinearGradient
                colors={["#833ab4", "#fd1d1d", "#fcb045"]}
                style={{
                    borderRadius: 3 / 2,
                    padding: 3,
                    height: 92,
                    borderRadius: 9999999,
                    width: 92,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <View style={{
                    backgroundColor: "#000",
                    height: 86,
                    borderRadius: 6 / 2,
                    padding: 3,
                    borderRadius: 99999999999,
                    width: 86,
                }}
                >
                    <Image 
                        source={{uri: user?.profile_picture}}
                        style={{
                            height: 80,
                            width: 80,
                            borderRadius: 999999999
                        }}
                />
                </View>
            </LinearGradient>
            }
            {
                !linearGradient && <View style={{
                    backgroundColor: "#000",
                    height: size,
                    borderRadius: 99999999999,
                    width: size,
                }}
                >
                    <Image 
                        source={{uri: user?.profile_picture}}
                        style={{
                            height: size,
                            width: size,
                            borderRadius: 999999999
                        }}
                    />
                </View>
            }
{showUsername &&            <Text style={darkStyles.text}>
                {user?.username}
            </Text>}
        </TouchableOpacity>
       
    )

}

const darkStyles = StyleSheet.create({
    container: {
        height: 'auto',
        borderRadius: 9999999,
        width: 'auto',
        marginRight: 8,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        gap: 4,
    },
    text: {
        color: colors.textPrimary,
        fontWeight: 500,
        fontSize: 15
    }
})

export default UserCircle;