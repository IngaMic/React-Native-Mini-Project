import { registerRootComponent } from "expo";
import React from "react";
import App from "./App";
import Toast from "react-native-toast-message";
import { MyProvider } from "./src/context";

const provider = () => (
    <MyProvider>
        <App />
        <Toast ref={(ref) => Toast.setRef(ref)} />
    </MyProvider>
);

registerRootComponent(provider);
