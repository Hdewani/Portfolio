FROM node:18

#create app Directory
RUN mkdir -p /home/app

# set working directory
WORKDIR /home/app

# COPY source Code
COPY  . /home/app/

# install app dependencies
RUN  npm install

# build app source code
RUN npm run build

CMD ["npm","start"]