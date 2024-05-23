FROM maven:3-eclipse-temurin-21-alpine AS MAVEN_BUILD

#WORKDIR /gaming-server-app
#COPY . .
#RUN ./mvnw.cmd clean install
#
#EXPOSE 6868
#CMD mvn spring-boot:run

COPY pom.xml /build/
COPY mvnw /build/
COPY .mvn /build/.mvn
COPY src /build/src/
WORKDIR /build/
RUN mvn clean install -Dmaven.test.skip=true -Dorg.slf4j.simpleLogger.log.org.apache.maven.cli.transfer.Slf4jMavenTransferListener=WARN -B --no-transfer-progress -e && mvn package  -Dmaven.test.skip=true -Dorg.slf4j.simpleLogger.log.org.apache.maven.cli.transfer.Slf4jMavenTransferListener=WARN -B --no-transfer-progress -e

FROM eclipse-temurin:21-alpine
WORKDIR /app
COPY --from=MAVEN_BUILD /build/target/gameserver-0.0.1-SNAPSHOT.jar /app/gameserver.jar
EXPOSE 6868
ENTRYPOINT [  "java",                                     \
              "-Dfile.encoding=UTF-8",                    \
              "-Djava.security.egd=file:/dev/./urandom",  \
              "-jar",                                     \
              "/app/gameserver.jar"                        \
           ]