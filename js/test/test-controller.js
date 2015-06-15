var assert = require("assert");

import {CommonFormInputController} from '../controller/CommonFormInputController.js';

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(false, CommonFormInputController.checkLength("", 0));
      assert.equal(false, CommonFormInputController.checkLength("", 0));
    })
  })
})