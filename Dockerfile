FROM openjdk:18

ENV ENVIRONMENT=prod

LABEL maintainer="sara.krieger2022@gmail.com"

ADD backend/target/animal-adoption.jar animal-adoption.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -jar /animal-adoption.jar" ]
