import assert from "assert";
import isWeekday from "../isWeekday.js";

describe('isWeekday function', function(){

    it('should return true if the day passed in is a weekday', function(){
        assert.equal(true, isWeekday('Monday'));
    });
    
    it('should return false if the day passed in is not a weekday', function(){
        assert.equal(false, isWeekday('Sunday'));
    });
  
});