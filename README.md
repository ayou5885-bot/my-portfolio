# Ayoub Benoumessad — Portfolio

A responsive, single-page developer portfolio built with React, TypeScript, Tailwind CSS, and shadcn/ui.

## Editing content

All frequently edited content is separate from the page components:

- `src/config/site.ts`: name, role, bio, email, social links, and SEO text.
- `src/data/projects.ts`: project titles, descriptions, tags, links, and images.
- `src/data/services.ts`: service cards and the booking form's service options.
- `src/data/skills.ts`: technology badges.
- `src/assets/projects/`: one replaceable cover image per project.

Search for `TODO: edit` to find placeholder content quickly.

## Add or edit a project

1. Drop a 16:10 image into `src/assets/projects/`.
2. Import it at the top of `src/data/projects.ts`.
3. Add one object to the `projects` array. No component edits are needed.
4. Optionally provide `imageUrl` to use a remote image, or `detailsUrl` to show a Details button.

## Connect Web3Forms

Both the booking and contact forms use the same helper in `src/config/web3forms.ts`.

1. Visit [Web3Forms](https://web3forms.com/) and create an access key for `ayoub123123321321@gmail.com`.
2. Copy `.env.example` to `.env` if needed.
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with the real key:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_key_here
```

Never commit a real access key. Restart the local development server after changing environment values.

## Development

```sh
bun install
bun run dev
```
