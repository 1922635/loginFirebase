import { StyleSheet } from "react-native"

export const GlobalStyles = StyleSheet.create({
    containerCentrado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0075bb'
    },

    viewHorizontal: {
        flexDirection: 'row',
    },

    titulo: {
        fontSize: 50,
        margin: 20,
        fontWeight: 'bold',
        color: '#9cffce',
    },

    textImput: {
        backgroundColor: '#9cffce',
        borderRadius: 12,
        margin: 10,
        width: 250,
        fontSize: 18,
        borderColor: '#007b3e',
        borderWidth: 4,
    },

    boton: {
        backgroundColor: '#9cffce',
        padding: 5,
        fontSize: 18,
        borderRadius: 15,
        borderColor: "#007b3e",
        borderWidth: 3,
        margin: 10,
        marginHorizontal: 15,
        width: 110,
        textAlign: 'center',
    }
})