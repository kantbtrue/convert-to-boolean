import convertToBoolean from "../src/index.js";
import { describe, it } from "mocha";
import { expect } from "chai";
describe("Helper Funcitons", () => {
    describe("Convert any value to boolean", () => {
        function undefinedFunc() {
            return;
        }
        let values = {
            boolean: true,
            "empty array": [],
            "empty object": {},
            "empty string": "",
            NaN: "minus" - 1,
            null: null,
            undefined: undefined,
            bigint: 9007199254740995n,
            symbol: Symbol("test"),
            "numric string": "0",
            "simple array": ["a", "b"],
            "simple object": { a: 1, b: 2 },
            string: "string",
            infinite: 2 / 0,
            integer: 1,
            float: 0.1,
            "undefined function": undefinedFunc,
            function: () => {
                return true;
            },
        };
        Object.keys(values).forEach((key) => {
            it(`Should return a boolean from ${key} value`, () => {
                expect(convertToBoolean(values[key])).to.be.a("boolean");
            });
        });
    });
});
