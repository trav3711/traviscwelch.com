FROM node:12-alpine
WORKDIR /opt
EXPOSE 8080

ENV NODE_ENV=production
ENV PORT=8080

RUN apk add --no-cache git python make g++

COPY . .

RUN npm install --non-interactive --frozen-lockfile
RUN npm run build
CMD ["npm", "run", "serve"]
