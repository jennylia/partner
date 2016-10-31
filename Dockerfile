FROM node:latest


USER root

ENV home /home

WORKDIR $home

# Install app dependencies
RUN npm install -g iron-meter

# Creating app directory
ADD . $home/

#Run app
RUN cd app && iron 

