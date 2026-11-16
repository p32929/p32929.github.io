# README footer

Paste this at the end of every public README. Replace `REPO_NAME` with the repo's exact name.
The images and the pages live on this site, so changing them here updates every README. Nothing in the repos needs to change.

```markdown
## Share

<a href="https://p32929.github.io/share/?repo=REPO_NAME"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/share-dark.svg"><img src="https://p32929.github.io/readme/share-light.svg" alt="Share this with your friends in just a click" width="420"></picture></a>

## Support

<a href="https://p32929.github.io/support/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/support-dark.svg"><img src="https://p32929.github.io/readme/support-light.svg" alt="If you like my works and want to support me, feel free to support" width="420"></picture></a>
```

Files:
1. `public/readme/share.svg` and `public/readme/support.svg`: the two images.
2. `public/share/index.html`: the share page (reads `?repo=`).
3. `public/support/index.html`: the support page.
