import { useState } from "react";
import { Pressable, StyleProp, TextStyle } from "react-native";
import { Link, RelativePathString } from "expo-router";

interface Props {
    label: string,
    estilo1?: StyleProp<TextStyle>,
    estilo2?: StyleProp<TextStyle>,
    link: RelativePathString,
}

export const Boton1 = ({label, link, estilo1, estilo2}:Props) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
    };

    return (
        <Pressable>
            <Link
                style={[estilo1, isPressed && estilo2]}
                onPressIn={handlePress}
                onPressOut={handlePress}
                href={link}>{label}</Link>
        </Pressable>
    );
};