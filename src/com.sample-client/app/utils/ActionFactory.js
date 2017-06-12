export default new class {

    create(type, name, data) {
        if (typeof data === 'undefined' || data === null) {
            data = {};
        }

        return {
            app: 'Sample',
            type: type,
            name: name,
            messageId: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
            createdOn: new Date().toUTCString(),
            source: 'client',
            data: data
        };
    }
};