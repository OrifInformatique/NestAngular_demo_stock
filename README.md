# stock-nest-angular

## Getting started
- Clone this repository
- Launch a virtual local server app (Laragon, Xampp, Wamp)
    - Start the Apache and MySQL servers
    - Create a database named 'stock'
    - Then import the stock database in phpMyAdmin
- Open a command-line interface at the root of the project

### Backend
- At the root of the project, navigate to the backend:
```
cd stock-backend
```
- Install project dependencies:
```
npm install
```
- Create a `.env` file and copy the following lines:
```dosini
DATABASE_HOST=localhost
DATABASE_NAME=stock
DATABASE_USER=root
DATABASE_PASSWORD=
DATABASE_PORT=3306
```
- Finally you can start the backend:
```
# Development (watch mode)
npm run start:dev

# Production
npm run start:prod
```

### Frontend
- At the root of the project, navigate to the frontend:
```
cd stock-frontend
```
- Install project dependencies:
```
npm install
```
- Finally you can start the frontend:
```
# Development
ng serve -c development

# Production
ng serve -c production
```
- Additionally, add the images in `src/assets/uploads/`
- Then navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.