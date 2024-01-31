## En backend\package.json
```json
MAL❌
{
    "start": "nodemon src/index.js",
    "start-prod": "nodemon src/index.js --mode production --port 8080"
}
 BIEN ✅ pero falta modo dev, cuando estás en un servidor solamente se debería ejecutar start-prod, no en desarrollo
{
   "start-prod": "node src/index.js --mode production --port 8080"
}
    
```

## backend\src\schemas\user\register.schema.js

```js
// Linea 34
{
    pasword: joi
        .string()
        .required()
        .pattern(/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[¡!$%^&*()_+|~={}:";'<>¿?,.#])[a-zA-Z0-9¡!$%^&*()_+|~={}:";'<>¿?,.#].{8,}$/)
        .messages({ ...JoiMsgError.errorMsgPassword, ...JoiMsgError.errorMessage }),
}
```

## backend\src\dao\factory.js
```js
switch(environment){
    case 'development':
}
```

Falta el de producción, error relacionado con package.json
Siempre en desarrollo se debe ejecutar el entorno de desarrollo