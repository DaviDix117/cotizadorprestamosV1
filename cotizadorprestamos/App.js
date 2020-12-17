import React from "react";
import {StyleSheet, View, Text, SafeAreaView, StatusBar} from "react-native";
import colors from "./src/utils/colors";
import Form from "./src/components/Form";

export default function App(){
  return(
    <>
    <StatusBar barStyle={"light-content"}/> 
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        <Form />
      </SafeAreaView>

      <View>
        <Text>Resulatdo</Text>
      </View>

      <View>
        <Text>Footer</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.PRIMARY_COLOR, //el colors es la importacion del archivo colors
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
  titleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color:"#fff",
    marginTop: 15,
  }

}); 

 

