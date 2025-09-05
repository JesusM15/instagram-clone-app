import { View, StyleSheet, TouchableOpacity, Text, Image, FlatList, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import colors from "../constants/colors";
import Feather from '@expo/vector-icons/Feather';
import instalogoDark from './../assets/instalogodark.png';
import Ionicons from 'react-native-vector-icons/Ionicons';

import stories from "../utils/dump/stories";
import posts from "../utils/dump/posts";
import profiles from "../utils/dump/profiles";
import UserCircle from "../components/UserCircle";
import Post from "../components/Post";

const storiesMapped = stories?.map((story) => {
    const newObject = {
        ...story,
        autor: profiles?.find(user => user.id === story.autor)
    }
    return newObject;
})

const user = {  
    id: 8,
    username: "John Doe",
    first_name: "John",
    last_name: "Doe",
    birthday: "2002-04-15",
    profile_picture: "https://randomuser.me/api/portraits/men/6.jpg",
    is_active: true,
    email: "blaziken@example.com",
    phone: "+521234567890"
};

const postMapped = posts?.map((post) => (
        {
        ...post,
        autor: profiles?.find(user => user.id === post.autor)
        }
    )
);

function HomeScreen(){


    return (
        <View style={darkStyles.container} >
            <View style={darkStyles.header}>
                <View style={{
                    flex: 1
                }}>
                    <Image 
                        source={instalogoDark}
                        style={{
                            height: 70,
                            width: 125,
                            objectFit: 'contain',
                        }}
                    />
                </View>
                <View style={{
                    padding: 0,
                    flexDirection: 'row',
                    gap: 12,
                    alignItems: 'center'
                }}>
                    <TouchableOpacity>
                        <Ionicons name="heart-outline" color={colors.textPrimary} size={28} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Feather name="message-circle" color={colors.textPrimary} size={28} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                <View style={{ paddingLeft: 8, paddingBottom: 10 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <UserCircle user={user} size={80} />
                    {storiesMapped?.map((item, index) => (
                    <UserCircle
                        key={`${index}-${item.id}`}
                        linearGradient
                        size={80}
                        user={item.autor}
                    />
                    ))}
                </ScrollView>
                </View>
            </View>
            <ScrollView style={{
            }} showsVerticalScrollIndicator={false}>
                {
                    postMapped?.map((post, index) => (
                        <Post 
                            key={`${index}-${post.id}`}
                            post={post}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
};

const darkStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        height: "100%",
        flex: 1
    },
    header: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text: {
        color: colors.textPrimary
    },
    storyContainer: {
        height: 120,
    }
})

export default HomeScreen;