# Netflix Clone

This project is a Netflix clone application built with a React frontend and a Spring Boot backend. The project uses MySQL for the database, managed via phpMyAdmin using XAMPP. The application demonstrates various features and functionalities inspired by Netflix, emphasizing full-stack development and REST API integration.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Java JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) (version 11 or higher)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [XAMPP](https://www.apachefriends.org/index.html) (for MySQL and phpMyAdmin)
- [Maven](https://maven.apache.org/)

## Getting Started

### 1. Setting Up the Database

1. Download and install [XAMPP](https://www.apachefriends.org/index.html). (**phth**: On Ubuntu: Run `sudo /etc/init.d/apache2 stop`, `sudo /opt/lampp/lampp start` to start the database server.)
2. Open XAMPP Control Panel (**phth**: On Ubuntu: Run `sudo /opt/lampp/./manager-linux-x64.run` to open the XAMPP Control Panel.) and start `Apache` and `MySQL`.
3. Open phpMyAdmin by visiting `http://localhost/phpmyadmin/` in your browser.
4. ~~Create a new database named `netflix`.~~ (will be created automatically "2. Setting Up the Backend", see 2.5)
5. ~~Import the provided SQL file to set up the initial database structure and data (if available).~~ (will be done in 2.6)

### 2. Setting Up the Backend

1. Clone the repository to your local machine:

    ```sh
    git clone https://github.com/OshithRoshantha/netflix-clone.git
    cd netflix-clone/backend
    ```

2. Ensure you have Java JDK and Maven installed.
3. Update the database configuration in `src/main/resources/application.properties`:

    ```properties
    spring.application.name=backend
    spring.jpa.hibernate.ddl-auto=update
    spring.datasource.url=jdbc:mysql://localhost:3306/netflix?createDatabaseIfNotExist=true
    spring.datasource.username=root
    spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
    spring.jpa.show-sql=true
    ```

4. Navigate to the backend directory and run the backend application:

    ```sh
    mvn spring-boot:run
    ```

    Alternatively, you can run the main application class directly:

    ```sh
    cd src/main/java/com/netflixClone/backend
    java BackendApplication.java
    ```

    The backend will be running on `http://localhost:8080`.

5. After running the backend for the first time, the `netflix` database will be created automatically, and the `video_meta_data` table will be set up.

6. To populate the `video_meta_data` table, import the SQL file `SQL/video_meta_data.sql`:

    - Open phpMyAdmin.
    - Select the `netflix` database.
    - Navigate to the `Import` tab.
    - Choose the `SQL/video_meta_data.sql` file from the repository.
    - Click `Go` to execute the SQL script and populate the table.

### 3. Setting Up the Frontend

1. Open a new terminal window, navigate to the frontend directory:

    ```sh
    cd netflix-clone
    ```

2. Install the dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

3. Start the React application:

    ```sh
    npm start
    # or
    yarn start
    ```

    The frontend will be running on `http://localhost:3000`.

## Usage

- Visit `http://localhost:3000` to use the application.
- Ensure the backend is running at `http://localhost:8080` for the frontend to interact with the backend APIs.

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Create a new Pull Request

