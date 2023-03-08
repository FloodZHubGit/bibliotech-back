migrate((db) => {
  const collection = new Collection({
    "id": "kkw9dijx35wckf8",
    "created": "2023-03-08 09:58:37.807Z",
    "updated": "2023-03-08 09:58:37.807Z",
    "name": "categories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "egadv63s",
        "name": "label",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 255,
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
  const collection = dao.findCollectionByNameOrId("kkw9dijx35wckf8");

  return dao.deleteCollection(collection);
})
