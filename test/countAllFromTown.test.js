import assert from "assert";
import countAllFromTown from "../countAllFromTown.js";

describe('CountAllTown function', function () {

    it('should return the number of registration numbers from Stellies', function () {
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
        assert.equal(fromStellies, 3);
    });

    it('should return the number of registration numbers from Paarl', function () {
        var fromPaarl = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF');
        assert.equal(fromPaarl, 1)

    });
    it('should return the number of registration numbers fromm Kuilsriver', function () {
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF');
        assert.equal(fromKuilsriver, 1)
    })


});