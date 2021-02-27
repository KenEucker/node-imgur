var imgur = require('../index.js');

describe('getMashapeKey()', function () {
  test('should return the same client that was set', function () {
    var mashapeKey = '123456789abcdef';
    imgur.setMashapeKey(mashapeKey);

    return expect(imgur.getMashapeKey()).toBe(mashapeKey);
  });
});
