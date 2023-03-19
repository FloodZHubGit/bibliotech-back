migrate((db) => {
  const collection = new Collection({
    "id": "f59ypceaigrchbw",
    "created": "2023-03-18 13:55:09.864Z",
    "updated": "2023-03-18 13:55:09.864Z",
    "name": "images",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "alqcsxag",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": []
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
  const collection = dao.findCollectionByNameOrId("f59ypceaigrchbw");

  return dao.deleteCollection(collection);
})
