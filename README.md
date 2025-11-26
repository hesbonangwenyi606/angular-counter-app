# Angular Counter App

This repository contains a simple Angular Counter application. The app is built using **Angular** and served using **Nginx** inside a Docker container.

---

## Features

* Increment and decrement a counter
* Reset the counter
* Responsive UI
* Dockerized deployment with Nginx
* Supports Angular routing

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

* [Node.js](https://nodejs.org/) (v20 or higher)
* [Angular CLI](https://angular.io/cli)
* [Docker](https://www.docker.com/)
* [npm](https://www.npmjs.com/)

---

## Project Structure

```
angular-counter-app/
├── dist/                   # Compiled Angular app (after build)
├── src/                    # Angular source code
├── Dockerfile              # Docker configuration
├── nginx.conf              # Nginx configuration for Angular routing
├── package.json            # Project dependencies
└── README.md
```

---

## Local Development

1. Clone the repository:

```bash
git clone <repository-url>
cd angular-counter-app
```

2. Install dependencies:

```bash
npm install
```

3. Serve the app locally:

```bash
ng serve
```

Visit `http://localhost:4200` in your browser.

---

## Build Angular App

Before deploying with Docker, build the production version of the Angular app:

```bash
ng build --configuration production
```

The output will be generated in `dist/angular-counter-app`.

---

## Docker Setup

### Dockerfile Overview

The project uses a **multi-stage Docker build**:

1. Build Angular app using a Node.js image.
2. Serve the production build using Nginx.

### Build Docker Image

```bash
docker build --no-cache -t angular-counter-app .
```

### Run Docker Container

```bash
docker run -d -p 8080:80 angular-counter-app
```

* The app will be available at [http://localhost:8080](http://localhost:8080).
* Use port `8080` to avoid conflicts with host Nginx.

### Verify Container

Check running containers:

```bash
docker ps
```

Enter container shell (optional):

```bash
docker exec -it <container_id> sh
ls /usr/share/nginx/html
```

---

## Nginx Configuration

* The `nginx.conf` ensures Angular routing works properly.
* All non-file routes fall back to `index.html`:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

---

## Troubleshooting

1. **Port conflicts**
   If port `80` or `8080` is already in use:

   ```bash
   sudo lsof -i :8080
   sudo kill <PID>
   ```

2. **Default Nginx page**
   Ensure `nginx.conf` is copied into the container correctly and points to `/usr/share/nginx/html`.

3. **Rebuild Docker image**
   Use `--no-cache` to ensure latest changes are applied:

   ```bash
   docker build --no-cache -t angular-counter-app .
   ```

---

## License

This project is open-source and available under the MIT Licence