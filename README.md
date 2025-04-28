
```
# Manual Installation Guide

## Steps to Set Up the Project

1. **Install Node.js locally**
   Make sure you have Node.js installed on your machine. [Download Node.js](https://nodejs.org/)

2. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd <your-project-folder>
```

1.  **Install dependencies**

```
npm install
```

1.

2.  **Set up the environment**

    -   Create a .env file based on the .env.example if provided.

    -   Configure your database connection URL inside .env.

3.  **Start your local database**

    (You can also use hosted databases like [Neon](https://neon.tech)).

4.  **Get a Database**

    -   Go to [neon.tech](https://neon.tech) and create a free PostgreSQL database.

    -   Copy the connection URL and paste it into your .env file.

5.  **Run database migrations**

```
npx prisma migrate dev
```

1.

2.  **Generate Prisma Client**

```
npx prisma generate
```

1.

2.  **Build the project**

```
npm run build
```

1.

2.  **Start the project**

```
npm run start
```

* * * * *

**Project Structure**
---------------------

```
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
```

* * * * *

**Notes**
---------

-   Make sure your PostgreSQL database is live and accessible.

-   If you change your Prisma schema, always re-run:

```
npx prisma generate
```

* * * * *

```
---

```