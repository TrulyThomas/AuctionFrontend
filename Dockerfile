# ---- Base Node ----
FROM node:18 AS base
WORKDIR /web
COPY package*.json ./

# ---- Dependencies ----
FROM base AS dependencies
WORKDIR /web
RUN npm ci --silent

# ---- Copy Files/Build ----
FROM dependencies AS build
WORKDIR /web
COPY ./ ./
RUN npm run build

# ---- NGINX ----
FROM nginx:stable-alpine AS production
WORKDIR /web
RUN rm /usr/share/nginx/html -r -f
COPY --from=build /web/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]