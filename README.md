# Beer API Sample

## Ingredients: 
* **mysql2**
* **node & express**
* **dotenv**

## Usage:

You should copy `.env.sample` to `.env` and then:
| command | description |
| ------- | -------|
| `npm install` | Install dependencies |
| `npm run dev` | Run the development server. |
| `npm run build` | Builds the server. |
| `npm start` | Runs the server. |

## Default endpoints:

`GET -> /beer` will respond with **beer list** data from database.

`GET -> /beer/:id` will respond with **one beer** data from database.

`POST -> /beer/pour` will **create** a new beer in database.

`DELETE -> /beer/:id` will **delete** a beer from database.

## Important Note:

If you want to **fill the database with sample data**, change the .env file like this and run `npm run build` or `npm run dev`:
```java
BEER_INIT=INIT_TRUE     // set false after fetching data to database
BEER_COUNT=3            // the number of objects will be fetched from https://random-data-api.com/api/v2/beers
```
