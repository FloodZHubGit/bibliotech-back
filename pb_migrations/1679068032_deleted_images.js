migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("enyr3z726ptjslt");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "enyr3z726ptjslt",
    "created": "2023-03-08 08:46:24.425Z",
    "updated": "2023-03-08 08:48:55.199Z",
    "name": "images",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "a1tpoxgw",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/png",
            "image/jpeg"
          ],
          "thumbs": []
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
