# TP2 - Proyecto Final | Cine API

API RESTful para la gestión de un cine: películas, usuarios y reservas de asientos.

**Stack:** Node.js + Express + Sequelize + PostgreSQL
**Arquitectura:** MVC con capa de servicios e inyección de dependencias

## Requisitos previos

- Node.js >= 20
- PostgreSQL instalado y corriendo
- npm

## Instalación

### 1. Clonar e instalar dependencias

```sh
git clone https://github.com/AgusBorgo/TP2-ProyectoFinal.git
cd TP2-ProyectoFinal
npm install
```

### 2. Crear la base de datos

Desde psql o pgAdmin:

```sql
CREATE DATABASE cine_db;
```

### 3. Configurar variables de entorno

```sh
cp .env.example .env
```

Editar `.env`:

```
SERVER_PORT=8000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tu_password
DB_NAME=cine_db
DB_DIALECT=postgres
```

### 4. Levantar el servidor

```sh
npm run dev
```

Salida esperada:

```
Conexion a la base de datos establecida correctamente.
Server ok in port http://localhost:8000
```

Al primer arranque, Sequelize crea automaticamente las tablas con sus relaciones.

## Estructura del proyecto

```
TP2-ProyectoFinal/
├── index.js                    Entry point
├── .env                        Variables de entorno (no commiteado)
├── .env.example
├── package.json
├── config/
│   └── config.js               Exporta variables de entorno
├── connection/
│   └── sequelize.js            Conecta Sequelize a PostgreSQL
├── Models/                     M de MVC
│   ├── index.js                Centraliza modelos y relaciones
│   ├── Film.js
│   ├── User.js
│   └── Reservation.js
├── services/                   Logica de negocio (classes)
│   ├── filmService.js
│   ├── userService.js
│   └── reservationService.js
├── controllers/                C de MVC (classes)
│   ├── FilmController.js
│   ├── UserController.js
│   └── ReservationController.js
├── containers/                 Inyeccion de dependencias
│   ├── filmContainer.js
│   ├── userContainer.js
│   └── reservationContainer.js
├── routes/
│   ├── router.js
│   ├── filmRoutes.js
│   ├── userRoutes.js
│   └── reservationRoutes.js
└── middlewares/
    ├── errorHandler.js
    └── notFound.js
```

### Patron de inyeccion de dependencias

Los `containers/` instancian los servicios y controllers con sus dependencias y los exportan listos para usar.

Ejemplo (`containers/filmContainer.js`):

```js
const filmService = new FilmService(Film);
const filmController = new FilmController(filmService);
export default filmController;
```

## Modelo de datos

### Tabla `films`
| Campo | Tipo |
|-------|------|
| id | INTEGER PK |
| titulo | STRING(150) NOT NULL |
| genero | STRING(50) NOT NULL |
| horario | STRING(5) |
| duracion | INTEGER |

### Tabla `users`
| Campo | Tipo |
|-------|------|
| id | INTEGER PK |
| nombre | STRING(100) NOT NULL |
| dni | STRING(8) NOT NULL UNIQUE |
| esAdmin | BOOLEAN default false |

### Tabla `reservations`
| Campo | Tipo |
|-------|------|
| id | INTEGER PK |
| filmId | INTEGER FK films.id |
| userId | INTEGER FK users.id |
| asientos | ARRAY(STRING) |

### Relaciones
- Un User tiene muchas Reservations (1-N)
- Un Film tiene muchas Reservations (1-N)
- ON DELETE CASCADE en ambos lados

## Endpoints

### Peliculas (`/films`)

| Metodo | Ruta |
|--------|------|
| GET | /films |
| GET | /films/:id |
| POST | /films |
| PUT | /films/:id |
| DELETE | /films/:id |

**Ejemplo POST:**
```json
{
  "titulo": "Matrix",
  "genero": "Ciencia ficcion",
  "horario": "22:00",
  "duracion": 136
}
```

### Usuarios (`/users`)

| Metodo | Ruta |
|--------|------|
| GET | /users |
| GET | /users/:id |
| GET | /users/dni/:dni |
| POST | /users |
| PUT | /users/:id |
| DELETE | /users/:id |

**Ejemplo POST:**
```json
{
  "nombre": "Guido",
  "dni": "42123456",
  "esAdmin": false
}
```

### Reservas (`/reservations`)

| Metodo | Ruta |
|--------|------|
| GET | /reservations |
| GET | /reservations/:id |
| GET | /reservations/user/:userId |
| POST | /reservations |
| DELETE | /reservations/:id |

**Ejemplo POST:**
```json
{
  "filmId": 1,
  "userId": 1,
  "asientos": ["A1", "A2", "A3"]
}
```

Si algun asiento ya esta ocupado para esa pelicula, devuelve 400.

## Formato de respuesta

```json
{ "success": true, "message": ... }
{ "success": false, "message": "..." }
```

## Probar con curl

```sh
curl http://localhost:8000/films

curl -X POST http://localhost:8000/users \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Guido","dni":"42123456"}'

curl -X POST http://localhost:8000/reservations \
  -H "Content-Type: application/json" \
  -d '{"filmId":1,"userId":1,"asientos":["A1","A2"]}'
```

## Scripts

| Comando | Descripcion |
|---------|-------------|
| `npm start` | Inicia el servidor |
| `npm run dev` | Inicia con auto-reload |
