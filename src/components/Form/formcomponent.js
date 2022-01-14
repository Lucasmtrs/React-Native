import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import ResultImc from "./ResultImc/resultimc";

export default function Form(){

const [height, setHeight]= useState(null) 
const [weight, setWeight]= useState(null) 
const [messageImc, setMessageImc]= useState("preencha o peso e altura") 
const [imc, setImc]= useState(null) 
const [textButton, setTextButton]= useState("Calcular") 



function imcCalculator() {
    return setImc((weight/(height*height)).toFixed(2))
}

function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("Calcular Novamente")
        return
    }
    setImc(null)
    setTextButton("calcular")
    setMessageImc("Preencha o peso e a altura")
}

    return(
        <View>
           <View>
               <Text>Altura</Text>
               <TextInput
               onChangeText={setHeight}
               value={height}
               placeholder="Ex. 1.75"
               keyboardtype="numeric"
               />
               
               <Text>Peso</Text>
               <TextInput
               onChangeText={setWeight}
               value={weight}
               placeholder="Ex. 75.365"
               keyboardtype="numeric"
               />
               <Button
               onPress={() => validationImc()}
               title={textButton}
               ></Button>
           </View>
           <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}