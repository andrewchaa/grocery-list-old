module.exports = {
  Query: {
    items: (_, __, { dataSources }) => {
      const allItems = dataSources.itemAPI.getAllItems()
      return allItems
    },
    item: (_, { name }, { dataSources }) =>
      dataSources.itemAPI.getItemById({ name: name }),
  },
  Mutation: {
    add: async (_, { name, quantity }, { dataSources }) => {
      const items = await dataSources.itemAPI.add({ name, quantity })

      return {
        success: true,
        message: "item added successfully",
        items,
      }
    },

    remove: async (_, { name }, { dataSources }) => {
      const result = await dataSources.itemAPI.remove({ name })
      return {
        success: result,
        message: result ? `item ${name} removed` : "failed to remove item",
      }
    },

    update: async (_, { name, quantity, pickedUp }, { dataSources }) => {
      const result = await dataSources.itemAPI.update({ name, quantity, pickedUp })
      return {
        success: result,
        message: result ? `item ${name} updated` : 'failed to update item',
      }
    },
  },
}
