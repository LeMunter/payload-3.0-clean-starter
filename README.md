# Payload 3.0 Starter Template

This starter template is tailored for quick setup and includes integration with [Payload CMS 3.0](https://github.com/payloadcms/payload), Tailwind CSS and shadcn for styling, TypeScript, Bun as the package manager, and PostgreSQL as the database. It's ideal for those looking to jumpstart their projects.

See the official examples from payload [Examples Directory](https://github.com/payloadcms/payload/tree/main/examples) for details on how to use Payload in a variety of different ways.

## Development

To spin up the project locally, follow these steps:

1. First clone the repo
1. Then `cd YOUR_PROJECT_REPO && cp .env.example .env.local`
1. Install deps `bun i`
1. Next `docker-compose up`, to start the postgres db
1. Next `bun dev`
1. Now `open http://localhost:3000/admin` to access the admin panel
1. Create your first admin user using the form on the page
1. Go to `http://localhost:3000` and the user email should now be listed on the page

That's it!


