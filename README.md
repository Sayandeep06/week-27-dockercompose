# Manual Installation Guide

## Steps to Set Up the Project

1\. **Install Node.js locally**  

 Make sure you have Node.js installed on your machine. [Download Node.js](https://nodejs.org/)

2\. **Clone the repository**

 ```bash

 git clone <your-repo-url>

 cd <your-project-folder>

3.  Install dependencies

npm install

4.  Set up the environment

-  Create a .env file based on the .env.example if provided.

-  Configure your database connection URL inside .env.

5.  Start your local database

(You can also use hosted databases like Neon).

6.  Get a Database

-  Go to neon.tech and create a free PostgreSQL database.

-  Copy the connection URL and paste it into your .env file.

7.  Run database migrations

npx prisma migrate dev

8.  Generate Prisma Client

npx prisma generate

9.  Build the project

npm run build

10.  Start the project

npm run start

⸻

Project Structure

/src

 index.ts

/prisma

 schema.prisma

.gitignore

.env

package.json

package-lock.json

tsconfig.json

Contribute.md

⸻

Notes

-  Make sure your PostgreSQL database is live and accessible.

-  If you change your Prisma schema, always re-run:

npx prisma generate

⸻

Docker Installation

-  Install Docker.

-  Start PostgreSQL:

docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres

-  Build the image.

-  Start the image.

⸻

Docker Compose

-  Install Docker and Docker Compose.

-  Run:

docker-compose up

⸻