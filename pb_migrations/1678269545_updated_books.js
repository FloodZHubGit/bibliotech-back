migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("84kfuz5dbicjtt1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yiqyhlmr",
    "name": "category_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "kkw9dijx35wckf8",
      "cascadeDelete": false,
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
  const collection = dao.findCollectionByNameOrId("84kfuz5dbicjtt1")

  // remove
  collection.schema.removeField("yiqyhlmr")

  return dao.saveCollection(collection)
})
