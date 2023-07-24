import assert from "assert";
import countAllPaarl from "../countAllPaarl.js";

describe('CountAllPaarl function', function(){

    it('should return the number of registration numbers from Paarl', function(){
        assert.equal(1, countAllPaarl('CF 123, CA 2357, CJ 8009'));
    });
    it('should count registration numbers from Paarl', function(){
        assert.equal(3, countAllPaarl('CJ 123, CA 7808, CL 565, CJ 89763, CJ 4723'));
    });
  
});