migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qoim0jzk6p0k52y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mjnvjohz",
    "name": "reason",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nsirkfbl",
    "name": "description",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qoim0jzk6p0k52y")

  // remove
  collection.schema.removeField("mjnvjohz")

  // remove
  collection.schema.removeField("nsirkfbl")

  return dao.saveCollection(collection)
})
