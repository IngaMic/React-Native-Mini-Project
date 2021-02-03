import React from "react";
import { StyleSheet, Text, View } from "react-native";

const StageTwo = () => {
    const context = useContext(MyContext);
    console.log(context);

    return (
        <View>
            <Text>Stage Two!</Text>
        </View>
    );
};

export default StageTwo;
