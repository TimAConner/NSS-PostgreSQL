# NSS-PostgreSQL
## Motivation
Solo practice in PostgreSQL and Sequelize following [this walkthrough](https://github.com/nashville-software-school/bangazon-corp/tree/master/post-orientation-exercises/postgres) done while attending the [Nashville Software School](http://nashvillesoftwareschool.com/).

## To Test
1. Fork this repo to your GitHub.
1. Clone it down.
1. Install Node globally if it is not already installed.
1. Install PostgreSQL if it nos already installed.
1. Run `npm install`
1. Modify the username, password, and database name in the config/config.json.
1. Run `node build-db.js`
1. Run `node app.js`
1. Navigate to `http://localhost:3000/beaches` in your browser
1. You should see the json data below
```
[
  {
    "id": 1,
    "name": "North Beach",
    "location": "LA",
    "sand_rating": 2
  },
  {
    "id": 2,
    "name": "South Beach",
    "location": "LA",
    "sand_rating": 10
  }
]
```