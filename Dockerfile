# Stage 1 — build Storybook
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build-storybook

# Stage 2 — serve with Nginx
FROM nginx:alpine AS runner

# Storybook (interactive docs) at /storybook/
COPY --from=builder /app/storybook-static /usr/share/nginx/html/storybook

# Static landing page at /
COPY landing/ /usr/share/nginx/html/

# UI kit CSS source (so the landing's <link href="/uikit/styles/index.css"> resolves)
COPY src /usr/share/nginx/html/uikit

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
