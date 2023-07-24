import assert from "assert";
import isFromBellville from "../isFromBellvile.js";

describe('isFromBellville function', function(){

    it('should return true if the registration number starts with CY', function(){
        assert.equal(true, isFromBellville('CY 123'));
    });
    it('should return false if the registration number does not start with CY', function(){
        assert.equal(false, isFromBellville(' CJ 3404'));
    });
    it('should return false if the registration number does not start with CY', function(){
        assert.equal(false, isFromBellville(' CF 3404'));
    });
  
})