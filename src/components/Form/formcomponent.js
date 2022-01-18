import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard } from "react-native";
import ResultImc from "./ResultImc/resultimc";
import styles from "./styleform";

export default function Form(){

const [height, setHeight]= useState(null) 
const [weight, setWeight]= useState(null) 
const [messageImc, setMessageImc]= useState("preencha o peso e altura") 
const [imc, setImc]= useState(null) 
const [textButton, setTextButton]= useState("Calcular") 
const [errorMessage, setErrorMessage]= useState(null)


function imcCalculator() {
    let heightFormat = height.replace(",",".")
    return setImc((weight/(heightFormat*heightFormat)).toFixed(2))
}

function verificationImc() {
    if (imc == null) {
        Vibration.vibrate();
        setErrorMessage("campo obrigatório*")
    }
}

function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("Calcular Novamente")
        setErrorMessage(null)
    }
    else{
        verificationImc()
        setImc(null)
        setTextButton("calcular")
        setMessageImc("Preencha o peso e a altura")
    }
    
}

    return (
      <View style={styles.formContext}>
        {imc == null ? 
          <Pressable style={styles.form} onPress={Keyboard.dismiss}>
            <Text style={styles.formLabel}>Altura</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
              style={styles.input}
              onChangeText={setHeight}
              value={height}
              placeholder="Ex. 1.75"
              keyboardtype="numeric"
            />

            <Text style={styles.formLabel}>Peso</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
              style={styles.input}
              onChangeText={setWeight}
              value={weight}
              placeholder="Ex. 75.365"
              keyboardtype="numeric"
            />
            <TouchableOpacity
              style={styles.buttonCalculator}
              onPress={() => validationImc()}
            >
              <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
          </Pressable>
         : 
          <View style={styles.exhibitionResultImc}>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
            <TouchableOpacity
              style={styles.buttonCalculator}
              onPress={() => validationImc()}
            >
              <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    );
}