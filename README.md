# Al-Ameen Ashimi Portfolio

![Al-Ameen Ashimi - Software Engineer]

Welcome to my portfolio website — proudly built with Next.js, TypeScript, and Tailwind CSS. The content is managed via Sanity, and the project uses pnpm as the default package manager, though it also supports npm and yarn.

I migrated to Next.js to take advantage of its significant performance and developer experience improvements. It's now my go-to framework not just for web applications, but for websites as well.

## Getting this project up and running

1.  **Fork or Clone**

    Clone this project from Github to get your own copy of it.

1.  **Installation**

    This project uses the npm package manager. To get started, follow the [Getting Started Guide](https://npm.io/installation)

    Once this is installed you can run `npm install` in your project directory to install dependencies.

    ```
    cd portfolio/
    npm dev
    ```

2.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:3000`!

## Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Third-Party Services used

### Sanity (Content Management System)

Sanity Studio comes preinstalled so you do not have to run a separate app in order to update your content.
<!-- under `/src/app/(admin)`, -->

Sanity is very easy to get started with either by signing up through their website or by using the command line:
<!-- 
```sh
npm create sanity@latest
```

At the end of this process you will get a Project ID. Add this to your `.env.local` as `NEXT_PUBLIC_SANITY_PROJECT_ID` file to get started (rename the `.env.example` file to get started more easily. There the `NEXT_PUBLIC_SANITY_DATASET` and `NEXT_PUBLIC_SANITY_API_VERSION` are prefilled with the defaults).

All the schemas for the content types I have implemented are included under `/src/schemas` and [GROQ](https://www.sanity.io/docs/groq) queries are under `/src/queries`. If you prefer GraphQL, Sanity does support this as well. Have a look at the [documentation](https://www.sanity.io/docs/graphql). -->

### Sentry (Error & Exception Tracking)

Mostly for server-side error tracking, this project uses [Sentry](https://docs.sentry.io/platforms/javascript/guides/nextjs/). 
<!-- They offer a free tier as well. To get started [click here](https://sentry.io/signup/) and sign up for their service.

Once you have set up your project, you need to get the DSN URL displayed in the Sentry project settings under _SDK Setup_ → _Client Keys (DSN)_. -->

### Mailchimp

For my recruiter sign up form I use [Mailchimp](http://eepurl.com/iphgxk) to manage this mailing list. 
<!-- Sign up and create an audience. Add this audience ID in your `.env.local` as `NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID`. -->

### SendGrid

I use [SendGrid](https://sendgrid.com/) and [Nodemailer](https://nodemailer.com/) to implement the contact form. 
<!-- Sign up to SendGrid for free to obtain an API Key and add this to your `.env.local` as `SENDGRID_API_KEY` to make the contact for work.

Please update the email address in `/src/pages/api/contact/send.ts` to ensure I do not receive all your contact form submissions 😂 -->

<!-- ### Vercel Analytics

[Vercel Analytics](https://vercel.com/analytics) is installed under `/src/app/(user)/layout.tsx`. If you do not want to use Vercel Analytics or don't intent to host your website on Vercel, you can remove this.

There is also a `vercel.json` file in the root of the project. This is fairly specific to my website, so you should likely remove this or clear the redirects that are irrelevant to your setup. -->
