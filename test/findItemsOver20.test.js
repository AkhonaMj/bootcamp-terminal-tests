import assert from "assert";
import findItemsOver20 from "../findItemsOver20.js";

var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
];

var results2 = [];

var itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];


var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];
describe("findItemsOver function", function(){

    it("should return products that have quantity higher than the threshold", function(){
        assert.deepEqual(results2, findItemsOver20(itemList2, 20));
    });

    it("It should not return anything for the products that have a quantity less than the threshold.", function(){
        assert.deepEqual(results2, findItemsOver20(itemList2));
    });
});