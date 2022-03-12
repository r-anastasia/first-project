FROM registry.gitlab.com/wlb_project/deploy/node:14 AS build

ARG NEXT_PUBLIC_ENV_VARIABLE

WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]
