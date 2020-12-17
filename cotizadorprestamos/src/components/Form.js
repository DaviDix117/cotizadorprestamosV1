import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import RNPickerSelect from 'react-native-picker-select';


import colors from "../utils/colors";

export default function Form(){
    return(
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput 
                    placeholder="cantidad a pedir"
                    keyboardType="numeric"
                    style={styles.input}>
                </TextInput>
                <TextInput 
                    placeholder="interés %" 
                    keyboardType="numeric" 
                    style={[styles.input, styles.inputPercentage]}>
                </TextInput>
            </View>
            
            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Hockey', value: 'hockey' },
                ]}
            />            
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm: {
        position: "absolute", //Donde queramos
        bottom: -90, //Por debajo de la linea
        width: "85%", //alto
        paddingHorizontal: 50, //
        backgroundColor: colors.PRIMARY_COLOR_DARK, //El color secundario
        borderRadius: 30, //redondear
        height: 180, //Va a caer en la mitad
        justifyContent: "center", //centrar vertical los input
    },
    viewInputs: {
        flexDirection: "row" //Para input al lado del otro
    },
    input: {
       height: 50,
       backgroundColor: "#fff",
       borderWidth: 1,
       borderColor: colors.PRIMARY_COLOR,
       borderRadius: 5,
       width:"60%",
       marginRight: 5,
       marginLeft: -5,
       marginBottom: 10,
       color: "#000",
       paddingHorizontal: 20,
    },
    inputPercentage: {
        width: "40%",
        marginLeft: 5,
    }
});