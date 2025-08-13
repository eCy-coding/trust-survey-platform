services:
  db:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: postgres
      POSTGRES_USER: postgres
      POSTGRES_DB: strapi
    ports: ["5432:5432"]
    volumes: ["pg:/var/lib/postgresql/data"]

  strapi:
    image: node:18
    working_dir: /app
    volumes: ["./cms/cms:/app"]
    command: bash -lc "npm ci && npm run develop"
    environment:
      DATABASE_CLIENT: postgres
      DATABASE_HOST: db
      DATABASE_PORT: 5432
      DATABASE_NAME: strapi
      DATABASE_USERNAME: postgres
      DATABASE_PASSWORD: postgres
      NODE_ENV: development
    ports: ["1337:1337"]
    depends_on: [db]

volumes:
  pg: {}
