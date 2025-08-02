# ----------- Step 1: Build Stage -----------
FROM maven:3.9.4-eclipse-temurin-21 AS builder

WORKDIR /app

# Copy pom.xml and download dependencies first for better Docker caching
COPY pom.xml ./
RUN mvn dependency:go-offline -B

# Now copy the rest of the source code
COPY src ./src

# Build the Spring Boot application (skip tests to speed up)
RUN mvn clean package -DskipTests


# ----------- Step 2: Run Stage -----------
FROM eclipse-temurin:21-jdk

WORKDIR /app

# Copy the built JAR file from the builder stage
COPY --from=builder /app/target/*.jar app.jar

# Expose port 8080 for Render
EXPOSE 8080

# Start the Spring Boot app
CMD ["java", "-jar", "app.jar"]
