import assert from "assert";
import isFromBellville from "../isFromBellvile.js";

describe('Count from all town function', function(){

    it('should return true if the registration number is from Bellville', function(){
        assert.equal(true, isFromBellville('CY 123'));
    });
    it('should return false if the registration number is not from Bellville', function(){
        assert.equal(false, isFromBellville(' CJ 3404'));
    });
  
})