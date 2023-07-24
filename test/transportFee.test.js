import assert from "assert";
import transportFee from "../transportFee.js";

describe('transportFee function', function(){

    it('should return true registration numbers that end with GP', function(){
        assert.equal('R10', transportFee('afternoon'));
    });
    
    it("It should return false for registration numbers that don't end with M", function(){
        assert.equal('free', transportFee('nightshift'));
    });
  
})