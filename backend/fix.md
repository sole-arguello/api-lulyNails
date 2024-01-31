## En ./package.json
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

## ./schemas/user/register.schema.js

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