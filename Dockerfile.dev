FROM node:alpine
LABEL maintainer = "Hector Lovo <lovohh@gmail.com>"

# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
# =-=-=-=-=-=-=-=-= ANGULAR2 CONFIG =-=-=-=-=-=-=-=-=-=-=-=
# =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

ENV USER app
ENV HOME /home/${USER}
ENV APP lovohhwebsite

RUN npm install -g @angular/cli

COPY package.json ${HOME}/${APP}/

WORKDIR ${HOME}/${APP}

RUN npm install

COPY . ${HOME}/${APP}

EXPOSE 4200

CMD ["npm", "start"]
