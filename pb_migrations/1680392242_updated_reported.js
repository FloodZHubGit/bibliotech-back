migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qoim0jzk6p0k52y")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b3zuz7gy",
    "name": "book_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "84kfuz5dbicjtt1",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qoim0jzk6p0k52y")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b3zuz7gy",
    "name": "books_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "84kfuz5dbicjtt1",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
