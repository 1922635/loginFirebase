import { StyleSheet } from "react-native"
import { Colores } from "./Colores"

export const GlobalStyles = StyleSheet.create({
    containerCentrado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colores.darkBlue
    },

    viewHorizontal: {
        flexDirection: 'row',
    },

    titulo: {
        fontSize: 46,
        margin: 20,
        fontWeight: 'bold',
        color: Colores.lightGreen,
    },

    textImput: {
        backgroundColor: Colores.lightGreen,
        borderRadius: 12,
        margin: 10,
        width: 250,
        fontSize: 18,
        borderColor: Colores.darkGreen,
        borderWidth: 4,
    },

    boton: {
        backgroundColor: Colores.lightGreen,
        padding: 5,
        fontSize: 18,
        borderRadius: 15,
        borderColor: Colores.darkGreen,
        borderWidth: 3,
        margin: 10,
        marginHorizontal: 15,
        width: 110,
        textAlign: 'center',
    },
    
    botonPulsado: {
        opacity: 0.4,
    },

    texto: {
        fontSize: 25,
        margin: 5,
        color: Colores.lightGreen,
    },

    containerLinea: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})