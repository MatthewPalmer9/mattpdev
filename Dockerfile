# Stage 0 -- Building Frontend Assests
FROM node:12.16.3-alpine as build 

WORKDIR /app 
COPY package*.json ./
RUN npm install 
COPY . . 
RUN npm run build

FROM gcr.io/google.com/cloudsdktool/cloud-sdk:alpine
RUN apk --update add openjdk7-jre
RUN gcloud components install app-engine-java kubectl

# Stage 1 - Serve Frontend Assests 
FROM fholzer/nginx-brotli:v1.12.2

WORKDIR /etc/nginx 
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 443 
CMD ["nginx", "-g", "daemon off;"]