migrate((db) => {
  const collection = new Collection({
    "id": "31fczwjrlsquy2o",
    "created": "2023-03-08 09:45:03.136Z",
    "updated": "2023-03-08 09:45:03.136Z",
    "name": "pages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vb2crpai",
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
        "id": "iaau7f9z",
        "name": "content",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "cxinttc4",
        "name": "book_id",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "84kfuz5dbicjtt1",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id"
          ]
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
  const collection = dao.findCollectionByNameOrId("31fczwjrlsquy2o");

  return dao.deleteCollection(collection);
})
