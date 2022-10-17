const idade = require('../static/js/integration/getParams').idade

test('valor da idade para "0 - 10" deve ser 1', () => {
  expect(idade).toBe('1')
})