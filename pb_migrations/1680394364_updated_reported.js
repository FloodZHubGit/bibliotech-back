migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qoim0jzk6p0k52y")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4q1epqwf",
    "name": "user_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
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
  const collection = dao.findCollectionByNameOrId("qoim0jzk6p0k52y")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4q1epqwf",
    "name": "user_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
