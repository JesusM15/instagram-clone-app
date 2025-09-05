import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";
import UserCircle from "./UserCircle";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function Post({ post }){

    return ( <View style={styles.container}>
        <View style={{
            flexDirection: 'row',
            padding: 4,
            alignItems: 'center',
            marginBottom: 6,
            height: 'auto'
        }}>
            <View style={{
                flexDirection: 'row',
                flex: 1,
                gap: 3,
                alignItems: 'flex-start'
            }}>
                <UserCircle 
                    user={post.autor}
                    size={40}
                    showUsername={false}
                />
                <Text style={styles.text}>
                    {post.autor?.username}
                </Text>
            {post.autor?.verified &&   <MaterialCommunityIcons style={{
                marginTop: 3,
            }} name="check-decagram" size={16} color={colors.info} />}
            </View>
            <TouchableOpacity>
                <Feather name="more-vertical" size={24} color={colors.textPrimary} />
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={{
            flex: 1,
            height: 300
        }}>
            <Image source={{ uri: post?.images[0] }}
                style={{
                    objectFit: 'cover',
                    flex: 1
                }}
            />
        </TouchableOpacity>
        <View style={{
            padding: 8
        }}>
            <View style={{
                flexDirection: 'row'
            }}>
                <View style={{
                    flexDirection: 'row',
                    gap: 8,
                    flex: 1,
                }}>
                    <TouchableOpacity style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
                        <Ionicons name={`heart-outline`} size={25} color={colors.textPrimary} />
                        <Text style={styles.text}>
                            {post.likes?.length}0 mil
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
                        <Feather name="message-circle" color={colors.textPrimary} size={24} />
                        <Text style={styles.text}>
                            4 mil
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
                        <Feather name="send" color={colors.textPrimary} size={24} />
                        <Text style={styles.text}>
                            4 mil
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <FontAwesome name="bookmark-o" size={24} color={colors.textPrimary} />
                </TouchableOpacity>
            </View>

            <View>
                <View style={{
                    flexDirection: 'row',
                    gap: 4,
                    paddingTop: 4,
                }}>
                    <Text style={{...styles.text, fontWeight: 700}}>
                        {post?.autor?.username}
                    </Text>
                    <Text style={{...styles.text,}}>
                        {post?.descripcion}
                    </Text>
                </View>
                
                <Text style={{...styles.text, opacity: .6, paddingTop: 4}}>
                    {new Date(post.fecha_de_subida).toUTCString()}
                </Text>
            </View>
        </View>

    </View>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 12
    },
    text: {
        color: colors.textPrimary
    }
});

export default Post;