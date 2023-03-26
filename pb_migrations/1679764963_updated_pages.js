migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("31fczwjrlsquy2o")

  // remove
  collection.schema.removeField("iaau7f9z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "epwaxp6d",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("31fczwjrlsquy2o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iaau7f9z",
    "name": "content",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("epwaxp6d")

  return dao.saveCollection(collection)
})
