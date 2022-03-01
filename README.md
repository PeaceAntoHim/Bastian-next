# Next.js + Tailwind CSS Example

## How create next app with prisma and mongo
    1. First you have to write "npm i -D prisma" to install all prisma dependencies.
    2. Second you have install reguler dependencies for prisma client you have wrote this in cli "npm i @prisma/client"
    3. Third you have to initialize you project with write "npx prisma init"

## Step working with prisma, next and mongodb
    1. First you have to create schema collection database in your schema.prisma and you have create mode your_example_table to create database.
    2. For mongodb you have to write this " id String @id @default(dbgenerated()) @map("_id") @db.ObjectId" to generate id automaticly
    3. After made schema model you have to write this in cli "npx prisma dev --preview-feature" but this commnd just for relational database if you use mongo you have write "npx prisma generate" to generate data

## Step Working with prisma, next and mysql
    1. First you have create schema table in mysql database so you than to migrate the data you have to write "npx prisma migrate dev"
    2 After that enter for new migration is "first_migrations"
    3 Than you can write "npx prisma studio" to get good visual representation



This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v2.2)](https://blog.tailwindcss.com/tailwindcss-2-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
