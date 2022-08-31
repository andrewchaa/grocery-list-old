const { DataSource } = require('apollo-datasource')

const allItems = []

class ItemAPI extends DataSource {
  getAllItems() {
    return allItems
  }

  getItemById({name}) {
    return allItems.find(item => item.name === name)
  }

  add({name, quantity}) {
    const item = this.getItemById({name})
    if (item) {
      item.quantity += quantity
    } else {
      allItems.push({
        name,
        quantity,
        pickedUp: false,
      })
    }
    return allItems
  }

  remove({name}) {
    const item = this.getItemById({name})
    if (!item) {
      return false
    }

    allItems.splice(allItems.indexOf(item), 1)
    return true
  }

  update({name, quantity, pickedUp}) {
    const item = this.getItemById({name})
    if (!item) {
      return false
    }

    item.name = name
    item.quantity = quantity
    item.pickedUp = pickedUp
    return true
  }
}

module.exports = ItemAPI
