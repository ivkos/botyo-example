FROM node:8.9-slim as builder-prod
COPY package.json /app/
COPY yarn.lock /app/
WORKDIR /app
RUN yarn install --prod --non-interactive --no-progress --prefer-offline --network-concurrency 64

FROM node:8.9-slim as builder-dev
COPY --from=builder-prod /app/package.json /app/package.json
COPY --from=builder-prod /app/yarn.lock /app/yarn.lock
COPY --from=builder-prod /app/node_modules /app/node_modules
COPY src /app/src
COPY tsconfig.json /app/
WORKDIR /app
RUN yarn install --non-interactive --no-progress --prefer-offline --network-concurrency 64
RUN yarn run build

FROM node:8.9-slim
COPY --from=builder-prod /app/node_modules /app/node_modules
COPY --from=builder-dev /app/build /app/build
WORKDIR /app
CMD ["node", "build/index.js"]
