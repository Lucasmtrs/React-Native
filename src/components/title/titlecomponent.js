import React from "react";
import { View, Text, StyleSheet } from "react-native"

export default function Title(){

    const page = StyleSheet.create({
        title: {
            color: "red",
            fontWeight: "bold"
        },
    })

    return(
        <View>
            <Text style={page.title}>ONEBITHEALTH</Text>
        </View>
    );
}