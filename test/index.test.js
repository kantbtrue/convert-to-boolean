import convertToBoolean from "../src/index.js";
import { describe, it } from "mocha";
import { expect } from "chai";
describe("Check", () => {
    describe("Convert any value to boolean", () => {
        function undefinedFunc() {
            return;
        }
        it("Should return `true` for valid function", () => {
            expect(
                convertToBoolean(() => {
                    return true;
                })
            ).to.equal(true);
        });
        it("Should return `false` for undefined function", () => {
            expect(convertToBoolean(undefinedFunc)).to.equal(false);
        });
        it("Should return `true` for truthy values like 1, non empty string, true, none empty array and object", () => {
            expect(convertToBoolean(1)).to.equal(true);
            expect(convertToBoolean(true)).to.equal(true);
            expect(convertToBoolean("kanbtrue")).to.equal(true);
            expect(convertToBoolean(["a", "b"])).to.equal(true);
            expect(convertToBoolean({ a: "b", c: "d" })).to.equal(true);
        });
        it("Should return `false` for unwanted values like 0, -1, empty [], empty {}, false, empty string, NaN, null, undefined", () => {
            expect(convertToBoolean(false)).to.equal(false);
            expect(convertToBoolean(0)).to.equal(false);
            expect(convertToBoolean(-1)).to.equal(false);
            expect(convertToBoolean("")).to.equal(false);
            expect(convertToBoolean([])).to.equal(false);
            expect(convertToBoolean({})).to.equal(false);
            expect(convertToBoolean(1 / 0)).to.equal(false); // Infiniy
            expect(convertToBoolean("kantbtrue" - 1)).to.equal(false); // NaN
            expect(convertToBoolean(null)).to.equal(false);
            expect(convertToBoolean(undefined)).to.equal(false);
        });
    });
    describe("Check numeric string and floating values", () => {
        it("Should return `true` for numeric string value 1", () => {
            expect(convertToBoolean("1")).to.equal(true);
        });
        it("Should return `false` for numeric string value 0", () => {
            expect(convertToBoolean("0")).to.equal(false);
        });
        it("Should return `true` for bigint value", () => {
            expect(convertToBoolean(9007199254740995n)).to.equal(true);
        });
        it("Should return `true` for float values greater than 0", () => {
            expect(convertToBoolean(0.1)).to.equal(true);
            expect(convertToBoolean(0.01)).to.equal(true);
        });
        it("Should return `false` for float values smaller than or equal to 0", () => {
            expect(convertToBoolean(0.0)).to.equal(false);
            expect(convertToBoolean(-0.0)).to.equal(false);
        });
    });
});
