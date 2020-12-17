import React, {useState} from "react";
import {StyleSheet, View, Text, SafeAreaView, StatusBar, Button} from "react-native";
import colors from "./src/utils/colors";
import Form from "./src/components/Form";

export default function App(){
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null)
  const [months, setMonths] = useState(null);

  const onSubmint = () => {
    console.log("capital => ", capital)
    console.log("interes => ", interest)
    console.log("mes => ", months)
  }

  return(
    <>
    <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        <Form setCapital={setCapital} setInterest={setInterest} setMonths={setMonths}  />
      </SafeAreaView>

      <View>
        <Text>Resulatdo</Text>
      </View>

      <View>
        <Button title="Enviar" onPress={onSubmint} />
        <Text>Footer</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },

}); 

 

