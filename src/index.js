/**
 * Convert any value into a boolean value.
 *
 * @param {*} val A mixed value.
 */
function convertToBoolean(val) {
    let result;
    const valType = typeof val;
    if ("boolean" === valType) {
        result = val;
    } else {
        switch (valType) {
            case "undefined":
            case "null":
                result = false;
                break;
            case "object":
                if (Object.is(val, null)) {
                    result = false;
                } else if (Array.isArray(val)) {
                    if (0 === val.length) {
                        result = false;
                    } else {
                        result = true;
                    }
                } else if (0 === Object.keys(val).length) {
                    result = false;
                } else {
                    result = true;
                }
                break;
            case "number":
            case "string":
                if ("string" === valType) {
                    val = parseInt(val);
                }
                if (0 === val || Object.is(val, NaN)) {
                    result = false;
                } else {
                    result = true;
                }
                break;
            case "bigint":
            case "symbol":
            case "function":
                result = true;
                break;
        }
    }
    return result;
}
export default convertToBoolean;