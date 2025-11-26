# Step 1: Build Angular app
FROM node:20 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --configuration production

# Step 2: Run using Nginx
FROM nginx:alpine
COPY --from=build /app/dist/angular-counter-app /usr/share/nginx/html

# Fix Angular routing issue
COPY nginx.conf /etc/nginx/conf.d/default.conf
