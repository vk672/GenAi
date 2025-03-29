const queryLogic = require('../src/queryLogic');

test('processQuery should return a processed message', () => {
    expect(queryLogic.processQuery('Test')).toBe('Processed query: Test');
});

test('explainQuery should return an explanation', () => {
    expect(queryLogic.explainQuery('Test')).toBe('Explanation for: Test');
});

test('validateQuery should validate query length', () => {
    expect(queryLogic.validateQuery('Short')).toBe('Invalid query');
    expect(queryLogic.validateQuery('Longer query')).toBe('Valid query');
});
