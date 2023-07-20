import assert from "assert";
import countAllFromTown from "../countAllFromTown.js";

describe('Count from all town function', function(){

    it('should count registration numbers from Kuilsriver', function(){
        assert.equal(1, countAllFromTown('CF 123, CA 2357, CJ 8009'));
    });
    it('should count registration numbers from Paarl', function(){
        assert.equal(3, countAllFromTown('CJ 123, CA 7808, CL 565, CJ 89763, CJ 4723'));
    });
  
});