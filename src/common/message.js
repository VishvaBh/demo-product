import { showMessage } from "react-native-flash-message";

export function showErrorMessage(errMessage) {
    showMessage({
        message: errMessage,
        type: 'warning',
    });
}
