# Address Book

This project displays addresses in alphabetical order.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

1. [Node](https://nodejs.org/en/download/)

### Installing

Download dependencies.

```
npm install
```

Start server.
```
npm run start
```

Visit the site at http://127.0.0.1:8080/.

* Click "Add" to add an address.
* In the address card, click "Edit" to edit the details
* In the address card, click "Delete" to delete the address
* The only input requirements are:
  * There should be at least one field filled in to save.
  * If there is an email input, it must be a valid email. 

### Known Issues

* In the interest of time, I did not add error handling should the save to local storage fail.


## Built With

* [ES6](https://github.com/lukehoban/es6features)
* [ReactJS](https://reactjs.org/)
* [Webpack](https://webpack.js.org/)
* [Bootstrap](https://getbootstrap.com/)