# Stage 1: build Vue app

FROM node:20 AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./

RUN npm run build

# Stage 2: Serve Vue app with nginx
FROM nginx:1.19 AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

LABEL org.opencontainers.image.title="StageTool UI" \
    org.opencontainers.image.description="StageTool web interface" \
    org.opencontainers.image.version="0.1.0" \
    org.opencontainers.image.source="https://github.com/turku-bioimaging/stagetool-ui" \
    org.opencontainers.image.documentation="https://github.com/turku-bioimaging/stagetool-ui" \
    org.opencontainers.image.maintainer="Junel Solis <image-data@bioimaging.fi>"