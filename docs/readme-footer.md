# README footer

Paste this at the end of every public README. Replace `REPO_NAME` with the repo's exact name.
The images and the pages live on this site, so changing them here updates every README. Nothing in the repos needs to change.

```markdown
<p><a href="https://p32929.github.io/share/?repo=REPO_NAME"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-share-dark.svg"><img src="https://p32929.github.io/readme/footer-share-light.svg" width="50%" align="top" alt="Share this project with your friends in one click"></picture></a><a href="https://p32929.github.io/support/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-support-dark.svg"><img src="https://p32929.github.io/readme/footer-support-light.svg" width="50%" align="top" alt="If you like my work and want to support me, feel free to support"></picture></a><br><a href="https://openstore.pfay.workers.dev/add"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-join-dark.svg"><img src="https://p32929.github.io/readme/footer-join-light.svg" width="100%" align="top" alt="Put your own apps on OpenStore: free, your listing lives in your own repo"></picture></a></p>
```

Files:
1. `public/readme/footer-{share,support,join}-{light,dark}.svg`: the three cards (share and support side by side, then join OpenStore). Made with the drawing code from p32929/p32929's `scripts/build.mjs`, so they match the profile.
2. `public/share/index.html`: the share page (reads `?repo=`).
3. `public/support/index.html`: the support page.
