'use strict'

module.exports = ({ store, strapi }) => ({

  getLastCursorByUid: async function ({uid}) {
    return store.getStoreKey({ key: uid })
  },

  setLastCursorByUid: async function ({uid, cursor}) {
    return store.setStoreKey({
      key: uid,
      value: cursor || 0,
    })
  },
})
