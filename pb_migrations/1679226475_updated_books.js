migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("84kfuz5dbicjtt1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "voe86v8b",
    "name": "liked_by",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
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
  collection.schema.removeField("voe86v8b")

  return dao.saveCollection(collection)
})
