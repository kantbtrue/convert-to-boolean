/**
 * Testing the number is a float number.
 */
function isFloatNumber(num) {
    return Number(num) === num && num % 1 !== 0;
}

/**
 * Convert any valueue into a boolean valueue.
 *
 * @param {*} value A mixed valueue.
 */
function convertToBoolean(value) {
    let result;
    const valueType = typeof value;
    if ("boolean" === valueType) {
        result = value;
    } else {
        switch (valueType) {
            case "undefined":
            case "null":
            case "NaN":
                result = false;
                break;
            case "object":
                if (Object.is(value, null)) {
                    result = false;
                } else if (Array.isArray(value)) {
                    if (0 === value.length) {
                        result = false;
                    } else {
                        result = true;
                    }
                } else if (0 === Object.keys(value).length) {
                    result = false;
                } else {
                    result = true;
                }
                break;
            case "number":
            case "string":
                if ("string" === valueType) {
                    if (0 === value.length) {
                        return false;
                    } else {
                        if (Object.is(parseInt(value), NaN)) {
                            return true;
                        }

                        if (0 === parseInt(value)) {
                            return false;
                        }

                        return true;
                    }
                }

                if (!Number.isFinite(value)) {
                    return false;
                }

                if (isFloatNumber(value)) {
                    return value > 0;
                }

                if (0 >= Number(value)) {
                    result = false;
                } else {
                    result = true;
                }

                break;
            case "bigint":
            case "symbol":
                result = true;
                break;
            case "function":
                if ("undefined" === typeof value()) {
                    result = false;
                } else {
                    result = true;
                }
                break;
        }
    }
    return result;
}
export default convertToBoolean;
