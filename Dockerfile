FROM node:20-alpine AS build
WORKDIR /app
COPY client/package*.json ./
RUN npm ci --only=production
COPY client/ .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
