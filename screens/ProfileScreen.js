

import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import colors from "../constants/colors";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import UserCircle from "../components/UserCircle";

const user = {  
    id: 8,
    username: "John Doe",
    first_name: "John",
    last_name: "Doe",
    birthday: "2002-04-15",
    profile_picture: './../assets/pp.jpg',
    is_active: true,
    email: "email@example.com",
    phone: "+521234567890"
};

function ProfileScreen(){

    return (
        <View style={darkStyles.container}>
            {/* Header */}
            <View style={darkStyles.header}>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 8,
                }}>
                    <Feather name="lock" size={18} color={colors.textPrimary} style={{opacity: 0.75}} />
                    <Text style={{...darkStyles.text, fontSize: 18}}>
                        john_doe13
                    </Text>
                <AntDesign name="down" size={14} color={colors.textPrimary} style={{opacity: 0.75}} />
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    gap: 12,
                    alignItems: 'flex-end'
                }}>
                    <TouchableOpacity>
                        <Ionicons name="add" color={colors.textPrimary} size={20} style={{
                                borderWidth: 2,
                                borderColor: colors.textPrimary,
                                borderRadius: 4,
                            }} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Octicons name="three-bars" size={24} color={colors.textPrimary} />
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <UserCircle 
                        user={user}
                        size={48}
                    />
                </View>
            </View>
        </View>
    )
};

const darkStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
});

export default ProfileScreen;