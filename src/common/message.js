import { showMessage } from "react-native-flash-message";

/**
  * shows error message
  * @argument : errMessage,
  */
export function showErrorMessage(errMessage) {
    showMessage({
        message: errMessage,
        type: 'warning',
    });
}
