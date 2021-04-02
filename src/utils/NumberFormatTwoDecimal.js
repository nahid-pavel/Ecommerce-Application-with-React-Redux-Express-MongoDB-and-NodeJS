export const numberFormatTwoDecimal = (number) => {
    if (number === "NaN") {
        return "0.00";
    } else {
        return parseFloat(number).toFixed(2);
    }
};
