FROM node:lts-alpine

RUN addgroup app && adduser -S -G app app
RUN mkdir /app && chown app:app /app
USER app
WORKDIR /app

COPY --chown=app:app . .
RUN npm install
RUN npm run build

ENV GOOGLE_APPLICATION_CREDENTIALS=/app/firebase.config.json

EXPOSE 4000

CMD ["npm", "start"]
