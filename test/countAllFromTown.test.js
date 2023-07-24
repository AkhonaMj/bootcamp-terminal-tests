import assert from "assert";
import countAllFromTown from "../countAllFromTown.js";

describe('CountAllTown function', function(){

    it('should return the number of registration numbers from Stellies', function(){
        assert.equal(1, countAllFromTown('CF 123, CA 2357, CJ 8009, Cl 1674'));
    });
    it('should count registration numbers from Paarl', function(){
        assert.equal(3, countAllFromTown('CJ 123, CA 7808, CL 565, CJ 89763, CJ 4723'));
    });
  
});