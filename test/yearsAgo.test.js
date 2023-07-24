import assert from "assert";
import yearsAgo from "../yearsAgo.js";

describe('yearsAgo function', function () {

    it('should return how many years ago is it, from the current year', function () {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    });
    it('should return how many years ago is it, from the current year', function () {
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000))
    });
    it('should return how many years ago is it, from the current year', function () {
        assert.equal((new Date().getFullYear() - 1995), yearsAgo(1995))
    });

});