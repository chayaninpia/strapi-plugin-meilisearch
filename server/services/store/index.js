const createStoreConnector = require('./store')
const credential = require('./credential')
const indexedContentTypes = require('./indexed-content-types')
const listenedContentTypes = require('./listened-content-types')
const cursor = require('./cursor')

module.exports = ({ strapi }) => {
  const store = createStoreConnector({ strapi })
  return {
    ...credential({ store, strapi }),
    ...listenedContentTypes({ store }),
    ...indexedContentTypes({ store }),
    ...createStoreConnector({ strapi }),
    ...cursor({ store }),
  }
}
