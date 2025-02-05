import { useState, } from "react";
import { Pressable, StyleProp, TextStyle } from "react-native";
import { Link, RelativePathString } from "expo-router";
import { Text } from "react-native";

interface Props {
    label: string,
    estilo1?: StyleProp<TextStyle>,
    estilo2?: StyleProp<TextStyle>,
    onPress (): void
}

export const Boton1 = ({label, estilo1, estilo2, onPress}:Props) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
    };

    return (
        <Pressable>
            <Text
                style={[estilo1, isPressed && estilo2]}
                onPress={onPress}
                onPressIn={handlePress}
                onPressOut={handlePress}
                >{label}</Text>
        </Pressable>
    );
};