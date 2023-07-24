import assert from "assert";
import  fromWhere from "../fromWhere.js";

describe("fromWher function", function(){
    it("Should return the town the registration is from. If reg number starts with CY, return Bellville", function(){
        assert.equal(fromWhere("CY 87378"), "Bellville")
    });
    it("Should return the town the registration is from. If reg number starts with CF, return some other place!", function(){
        assert.equal(fromWhere("CF 12378"), "Some other place!")
    });
    it("Should return the town the registration is from. If reg number starts with CA, return Cape town", function(){
        assert.equal(fromWhere("CA 12378"), "Cape Town")
    });
});