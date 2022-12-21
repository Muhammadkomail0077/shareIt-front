import React from 'react'
import { Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from './style'

export default function BackButton() {
    return (
        <>
            <View>
                <Pressable><Icon style={styles.BackButton} name="left" size={18} color="#4DC500" /></Pressable>
            </View>
        </>
    )
}
