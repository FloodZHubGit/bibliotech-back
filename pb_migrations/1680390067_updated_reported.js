migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qoim0jzk6p0k52y")

  // remove
  collection.schema.removeField("5hrzzc4x")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qoim0jzk6p0k52y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5hrzzc4x",
    "name": "description",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
