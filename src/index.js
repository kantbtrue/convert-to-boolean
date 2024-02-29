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
            case "NaN":
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
                    if (Object.is(parseInt(val), NaN)) {
                        return true;
                    } else {
                        if (parseInt(val) === 0) {
                            return false;
                        } else {
                            return true;
                        }
                    }
                }
                if (0 === parseInt(val) || !Object.is(parseInt(val), NaN)) {
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
