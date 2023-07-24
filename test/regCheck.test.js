import assert from "assert";
import regCheck from "../regCheck.js";

describe('regCheck function', function(){

    it('should return true registration numbers that end with GP', function(){
        assert.equal(true, regCheck('SC 76 TU GP', 'GP'));
    });
    
    it("It should return false for registration numbers that don't end with M", function(){
        assert.equal(false, regCheck('6463 L'));
    });
  
})