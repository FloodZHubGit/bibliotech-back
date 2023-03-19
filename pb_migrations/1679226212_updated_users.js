migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7nphk5tr",
    "name": "likes",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "84kfuz5dbicjtt1",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7nphk5tr",
    "name": "likes",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "84kfuz5dbicjtt1",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": [
        "liked_by"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
