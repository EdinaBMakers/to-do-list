# to-do-list

A RESTful todo list API that supports `CRUD` operations on tasks.

## Routes
```
GET /tasks

Retrieves all tasks
```
```
POST /tasks

Creates a new task
```
```
GET /tasks/:taskId

Retrieves a task with the given id
```
```
PUT /tasks/:taskId

Updates a task with the given id
```
```
DELETE /tasks/:taskId

Deletes a task with the given id
```

## Persistence

Tasks are persisted into a `MongoDB` database using `Mongoose`.

## Testing

Routes have been tested using external tools, `cURL` and `Postman`. In future versions, unit test coverage could be added.
