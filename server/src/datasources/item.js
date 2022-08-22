const { DataSource } = require('apollo-datasource');

const allItems = [{
  id: '1',
  quantity: 1,
  pickedUp: false,
}]

class ItemAPI extends DataSource {
  getAllItems() {

    return allItems
  }

  getItemById({id}) {
    return allItems.find(item => item.id === id);
  }
}

module.exports = ItemAPI;
