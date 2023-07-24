import assert from "assert";
import countRegNumber from "../countRegNumber.js";

describe('CountRegNumbers function', function(){

    it('should count the number of registration numbers', function(){
        assert.equal(1, countRegNumber('CJ 123'));
    });
    it('should count the number of registration numbers', function(){
        assert.equal(3, countRegNumber('CJ 123, CA 7808, CL 565'));
    });
  
});