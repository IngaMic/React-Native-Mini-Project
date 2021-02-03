import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";

import { MyContext } from "../context";

const StageTwo = () => {
    const context = useContext(MyContext);
    console.log(context);

    return (
        <>
            <Text>The chosen one is:</Text>
            <Text style={{ marginTop: 30, fontSize: 30 }}>
                {context.state.result}
            </Text>
            <Button
                buttonStyle={styles.button}
                title="Try again"
                onPress={() => context.getNewPayer()}
            />
            <Button
                buttonStyle={styles.button}
                title="Start over"
                onPress={() => context.resetGame()}
            />
        </>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#41B6E6",
        marginTop: 20,
    },
});

export default StageTwo;
