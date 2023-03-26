migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("84kfuz5dbicjtt1")

  // remove
  collection.schema.removeField("0nmzxnwd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i4vy7rqu",
    "name": "resume",
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
  const collection = dao.findCollectionByNameOrId("84kfuz5dbicjtt1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0nmzxnwd",
    "name": "resume",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("i4vy7rqu")

  return dao.saveCollection(collection)
})
