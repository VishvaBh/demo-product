import { Dimensions } from 'react-native';

/**
  * format currency in Euro
  * @argument : amount,
  * @returns : formattedCurrency
  */
export const formatCurrency = (amount) => {
    const formattedCurrency = new Intl.NumberFormat('en-DE', { style: 'currency', currency: 'EUR' }).format(amount);
    if (formattedCurrency === "NaN") {
        return amount;
    }
    return formattedCurrency;
};

const heightMobileUI = 896;
const widthMobileUI = 414;

export const responsiveWidth = (width) => (Dimensions.get('window').width * width) / widthMobileUI;

export const responsiveHeight = (height) => (Dimensions.get('window').height * height) / heightMobileUI;
