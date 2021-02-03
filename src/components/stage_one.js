import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import { Formik } from "formik";
//simple validation schema with yup
import * as Yup from "yup";
import { Input, Button, ListItem, Text } from "react-native-elements";

import { MyContext } from "../context";

const StageOne = () => {
    const context = useContext(MyContext);

    return (
        <Formik
            initialValues={{ player: "" }}
            validationSchema={Yup.object({
                player: Yup.string()
                    .min(3, "Must be more than 3 characters")
                    .max(15, "Must be less than 15 characters")
                    .required("Sory, the name is required"),
            })}
            onSubmit={(values, { resetForm }) => {
                alert(values);
            }}
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                touched,
                errors,
            }) => {
                <>
                    <Text>Wro pays the bill</Text>
                    <Input
                        placeholder="Add names here"
                        leftIcon={{ type: "antdesign", name: "adduser" }}
                        inputContainerStyle={{
                            marginHorizontal: 50,
                            marginTop: 50,
                        }}
                        renderErrorMessage={errors.player && touched.player}
                        errorMessage={errors.player}
                        errorStyle={{
                            marginHorizontal: 50,
                        }}
                        onChangeText={handleChange("player")}
                        onBlur={handleBlur("player")}
                        value={values.player}
                    />
                    <Button
                        buttonStyle={styles.button}
                        title="Add player"
                        onPress={handleSubmit}
                    />
                </>;
            }}
        </Formik>
    );
};

const styles = StyleSheet.create({
    button: {
        backroundColor: "#DB3EB1",
        marginTop: 20,
    },
});

export default StageOne;
