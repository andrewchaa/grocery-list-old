module.exports = {
  Query: {
    items: (_, __, { dataSources }) => {
      const allItems = dataSources.itemAPI.getAllItems()
      allItems.reverse()

      return allItems
    },
    item: (_, { id }, { dataSources }) =>
      dataSources.itemAPI.getItemById({ id: id }),
  },
  Mutation: {
    add: async (_, {id, quantity}, { dataSources }) => {
      const items = await dataSources.itemAPI.add({id, quantity})

      return {
        success: true,
        message: 'item added successfully',
        items
      }
    },
    remove: async (_, { id }, { dataSources }) => {
      const result = await dataSources.itemAPI.remove({ id })
      if (!result)
        return {
          success: false,
          message: 'failed to remove item',
        }

      const items = await dataSources.itemAPI.getAllItems()
      return {
        success: true,
        message: `item ${id} removed`,
        items: items,
      }
    },
    pickUp: async (_, { id }, { dataSources }) => {
      const result = await dataSources.itemAPI.update({ id, pickedUp: true })
      if (!result)
        return {
          success: false,
          message: 'failed to remove item',
        }

      const items = await dataSources.itemAPI.getAllItems()
      return {
        success: true,
        message: 'item picked up',
        items: items
      }
    },
  },

}
