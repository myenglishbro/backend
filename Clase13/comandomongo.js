show database -> me muestra todas la bases de datos
use (nombre de la base)-> ingresa a la base si existe y sino existe la crea
<-- mongo no te muestra la base de datos a menos de que existe alguna coleccion en ella

db.createcollection("products") "products"-> es elnombre de mi coleccion 
db.dropDatabase() ->para eliminar la base donde nos encontremos parados
show.collections -> me muestra las colecciones en la base donde me encuentro 
db.products.renameCollection("productos")-> para cambiar el nombre de la coleccion 

<-- si hago un insert y no existe la coleccion , mongo me crea la nueva coleccion 
db.products.drop()-> para eliminar la coleccion 

MongoDB Cheat Sheet
Show All Databases
show dbs
Show Current Database
db
Create Or Switch Database
use acme
Drop
db.dropDatabase()
Create Collection
db.createCollection('posts')
Show Collections
show collections
Insert Row
db.posts.insert({
  title: 'Post One',
  body: 'Body of post one',
  category: 'News',
  tags: ['news', 'events'],
  user: {
    name: 'John Doe',
    status: 'author'
  },
  date: Date()
})
Insert Multiple Rows
db.posts.insertMany([
  {
    title: 'Post Two',
    body: 'Body of post two',
    category: 'Technology',
    date: Date()
  },
  {
    title: 'Post Three',
    body: 'Body of post three',
    category: 'News',
    date: Date()
  },
  {
    title: 'Post Four',
    body: 'Body of post three',
    category: 'Entertainment',
    date: Date()
  }
])


db.products.find({precio:{$gt:500}}).pretty()

gt = mayor
ne= distinto
gte= mayo o igualo
eq= igual a
lt= menor que 

db.products.find({$and:[{precio:{$gt:400}},{precio:{$lt:1400}}]}).pretty() // se cumple todo 
db.products.find({$or:[{precio:{$gt:400}},{precio:{$lt:1400}}]}).pretty() //se cumple almenos una

//* Para mostrar todos mi elementos pero solo los 2 primeros  */
//* el pretty lo muestra como json ordenado  */
db.posts.find().limit(2).pretty()
//* Para mostrar todos mi elementos pero solo los 2 primeros pero saltandose el primero  */
db.posts.find().limit(2).skip(1).pretty() 

//* Para ordenar de menor a mayor */
# asc 
db.posts.find().sort({ precio: 1 }).pretty()
# desc de mayor a menor
db.posts.find().sort({ precio: -1 }).pretty()

db.posts.find().sort({ precio: -1 }).limit(2).pretty()

Count Rows
db.posts.countDocuments()
db.posts.countDocuments({ category: ‘News' });
count() is deprecated

//* Para actualizar una fila */

db.products.update({ nombre: 'Ipad' },{$set: {precio: 60 }})

$inc = es para incrementar
$mul= lo multiplica