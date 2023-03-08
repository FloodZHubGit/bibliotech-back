migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("84kfuz5dbicjtt1")

  // remove
  collection.schema.removeField("wl7jolft")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("84kfuz5dbicjtt1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wl7jolft",
    "name": "pages",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "31fczwjrlsquy2o",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": [
        "book_id"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
