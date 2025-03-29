module.exports = {
    processQuery: (query) => {
        return `Processed query: ${query}`;
    },
    explainQuery: (query) => {
        return `Explanation for: ${query}`;
    },
    validateQuery: (query) => {
        return query.length > 5 ? 'Valid query' : 'Invalid query';
    }
};
