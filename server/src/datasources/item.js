const { DataSource } = require('apollo-datasource');

const allItems = [{
  id: 'banana tree',
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

  add({id, quantity}) {
    const item = this.getItemById({id});
    if (item) {
      item.quantity += quantity
    } else {
      allItems.push({
        id,
        quantity,
        pickedUp: false,
      });
    }
    return allItems
  }

  remove({id}) {
    const item = this.getItemById({id});
    if (!item) {
      return false;
    }

    allItems.splice(allItems.indexOf(item), 1)
    return true
  }
}

module.exports = ItemAPI;
