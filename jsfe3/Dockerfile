# good to specify version
FROM node:16

# node container uses its '/app' directory, copied files sent here
WORKDIR /app

# copies from host working directory to container's current WORKDIR
COPY package.json .

# runs only once during build process
RUN npm install

COPY . ./

COPY ./BAK.env ./.env

# RUN echo "FAST_REFRESH = false\n\
#     REACT_APP_FAST_REFRESH = false\n\
#     SKIP_PREFLIGHT_CHECK=true\n\
#     REACT_APP_SKIP_PREFLIGHT_CHECK=true\n\
#     REACT_APP_BACKEND_URL=http://$(curl ifconfig.me):3004/\n\
#     VITE_APP_BACKEND_URL=http://$(curl ifconfig.me):3004/\n\
#     CONTRACT_ADDRESS=\n" \
#     > .env

EXPOSE 3002

# cmd runs whenever container is started

CMD ["yarn", "start:dev"]