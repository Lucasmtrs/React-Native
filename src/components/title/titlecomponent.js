import React from "react";
import { View, Text, } from "react-native"
import styles from "./styletitle";

export default function Title(){

    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>ONEBITHEALTH</Text>
        </View>
    );
}