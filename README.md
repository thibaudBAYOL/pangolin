# pangolin

les dependances (particulière) dans api/ 
sont 
"npm install express " &
"npm install mongodb"

les dependances (particulière) dans pangolin0/ 
sont 

npm install -g @angular/cli


La BD mongoDB utilisé est une DB local "mongodb://localhost:27017/" que l'on peut modifier à la 7 eme ligne du fichier api/server.js .
La BD contient une database "pangolin" et 2 collections ("amie" exemple: api/amie.json et "users" exemple: api/users.json).
l'api utilise le port 8080.

Pour lancer l'api il faut faire node api/server.js .

Pour lancer l'angular il faut faire ng serve dans le dossier pangolin0/ .

