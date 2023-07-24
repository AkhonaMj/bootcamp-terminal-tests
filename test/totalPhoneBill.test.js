import assert from "assert";
import totalPhoneBill from "../totalPhonebill.js";

describe('totalPhoneBill function', function(){

    it('should calculate the total bill for the data provided', function(){
        assert.equal("R7.45", totalPhoneBill('call, sms, call, sms, sms'));
    });
   
    it('should calculate the total bill for the data provided', function(){
        assert.equal("R5.50", totalPhoneBill('call, call'));
    });
  
});