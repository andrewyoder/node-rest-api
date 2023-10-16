module.exports = {
    type: 'object',
    properties: {
        product: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        creationDate: {
            type: 'string'
        },
        alertSent: {
            type: 'boolean'
        }
    },
    additionalProperties: false
};
