# Vault74

![](https://ipfs.io/ipfs/QmW2Kbkx2APq8rmGDnGaMPZy4amTk4fzhrMiDq257h745J)

Decentralized chat & sharing platform


![](https://c.gitcoin.co/docs/8d49c129c59c3431b4127f521993eae2/unknown.png)

## Running Locally

You must install `Node.JS` on your system prior to running the application.

**Install Deps.**
`yarn` or `npm install`

**Start in Devmode**
`yarn dev` or `npm run dev`

Navigate to `http://localhost:8080`.

## Theming

Themes can be added by adding them to the list in `src/components/main/settings/personalize`
You should clone one of the themes in `src/assets/styles/` first then add the name of the theme in `Personalize.vue`.

Example. if your theme is named `cyan.less` you'd add the following to Personalize.

```vue
<div class="select">
    <select v-model="$store.state.theme">
        <option value="dark">Simply Dark</option>
        <option value="light">Eye Strain</option>
        <option value="ice">Ice Cold</option>
        <option value="tokyo">Tokyo Night</option>
        <option value="tokyo-lights">Tokyo Lights</option>
        <!-- Your Theme! -->
        <option value="cyan">Oh So Cyan</option>
    </select>
</div>
```
Save your changes and select your theme under settings. Please do not set your theme to default before submitting a PR. Please be sure to check all aspects of the app for concistancy before uploading your theme. Please make sure to use the variables at the top of the theme as opposed to manually editing everything.

## Contributing Rules

### Single File Components
If a single file component exceeds 150 lines please split it into a three file component.

### ESLint
Please make sure your changes pass the linter before commiting code

### Documentation
Please add at least a comment to new methods so it is clear what they do.
