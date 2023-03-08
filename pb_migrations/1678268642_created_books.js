migrate((db) => {
  const collection = new Collection({
    "id": "84kfuz5dbicjtt1",
    "created": "2023-03-08 09:44:02.715Z",
    "updated": "2023-03-08 09:44:02.715Z",
    "name": "books",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0fiuuqwv",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 255,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "0nmzxnwd",
        "name": "resume",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "hlo5quf9",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpeg",
            "image/png"
          ],
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
  const collection = dao.findCollectionByNameOrId("84kfuz5dbicjtt1");

  return dao.deleteCollection(collection);
})
