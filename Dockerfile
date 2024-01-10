# Stage 1: build Vue app

FROM node:20 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./

RUN npm run build

# Stage 2: Serve Vue app with nginx
FROM nginx:1.19 as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]