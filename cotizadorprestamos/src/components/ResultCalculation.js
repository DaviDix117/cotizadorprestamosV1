import React from 'react'
import { StyleSheet, Text, View} from 'react-native'

export default function ResultCalculation(props) {
    const {capital, interest, months, total ,errorMessage} = props; //Captura el estado
    return (
        <View style={styles.content}>

            {/* si total llega... */}
            {total && (
                <View style={styles.boxResult}>
                    <View style={styles.scrollView}>
                        <DataResults title={"Cantidad Solicitada"} value={`${capital} $`}/>
                        <DataResults title={"Interés %:"} value={`${interest} %`}/>
                        <DataResults title={"Plazos:"} value={`${months} meses`}/>

                        <DataResults title={"Pago Mensual:"} value={`${total.monthlyFee} $`}/>
                        <DataResults title={"Total a pagar:"} value={`${total.totalPayable} $`}/>
                        
                    </View>
                </View>
            )}

            <View>
                <Text style={styles.error} > {errorMessage} </Text>
            </View>
        </View>
    )
}

//Componente para no repetir código
function DataResults(props){
    const {title, value} = props;

    return(
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    error: {
        textAlign: "center",
        color: "#f00",
        fontWeight: "bold", //negrita
        fontSize: 20,
    },
    content: {
        marginHorizontal: 40,
    },
    boxResult: {
        padding: 30,

    },
    value:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    }
});
