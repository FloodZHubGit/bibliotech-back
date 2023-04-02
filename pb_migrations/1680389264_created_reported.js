migrate((db) => {
  const collection = new Collection({
    "id": "qoim0jzk6p0k52y",
    "created": "2023-04-01 22:47:44.235Z",
    "updated": "2023-04-01 22:47:44.235Z",
    "name": "reported",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "b3zuz7gy",
        "name": "books_id",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "84kfuz5dbicjtt1",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "4q1epqwf",
        "name": "user_id",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "5hrzzc4x",
        "name": "description",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("qoim0jzk6p0k52y");

  return dao.deleteCollection(collection);
})
