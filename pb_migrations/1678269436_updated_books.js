migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("84kfuz5dbicjtt1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lo1ktxzo",
    "name": "user_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
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
  collection.schema.removeField("lo1ktxzo")

  return dao.saveCollection(collection)
})
