# NodeChatApp

I've split the nodejs webserver and the client into two seperate docker containers.
First you have to build the dockerfile for the server. You can use the command below...

sudo docker build -t node-chat-server .
sudo docker run -p 8080:8080 -d node-chat-server

You can then create the container for the client with the following command...

sudo docker run --name docker-nginx -p 80:80 -d -v ~/docker-nginx/html/client:/usr/share/nginx/html nginx
