migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("31fczwjrlsquy2o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cxinttc4",
    "name": "book_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "84kfuz5dbicjtt1",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("31fczwjrlsquy2o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cxinttc4",
    "name": "book_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "84kfuz5dbicjtt1",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
