migrate((db) => {
  const collection = new Collection({
    "id": "06m17jju2n3m6xr",
    "created": "2023-03-07 18:16:47.523Z",
    "updated": "2023-03-07 18:16:47.523Z",
    "name": "tests",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "w3fdy5rt",
        "name": "titre",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("06m17jju2n3m6xr");

  return dao.deleteCollection(collection);
})
