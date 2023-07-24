import assert from "assert";
import transportFee from "../transportFee.js";

describe('transportFee function', function(){

    it('should  return the R10, if you are working an afternoon shift', function(){
        assert.equal('R10', transportFee('afternoon'));
    });
    
    it("hould  return the free, if you are working a nightshift", function(){
        assert.equal('free', transportFee('nightshift'));
    });
    it('should  return the R20, if you are working an morning shift', function(){
        assert.equal('R20', transportFee('morning'));
    });
})