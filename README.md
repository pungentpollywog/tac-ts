# React Project Template

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

It includes SASS, Vitest (Jest), and RTL.

## Setup

### Using this template

**Fork** this template into your name space. _Tip: rename the project as your fork it (e.g. `my-react-project`)._

Next, **clone** it to your PC.

### Install dependencies

Switch into the project folder ...

```bash
cd my-react-project
```

Install the dependencies ...

```bash
 npm install 
```

**Note**: You can add other dependencies as needed. For example...

```bash
npm install react-router@latest 
```

### Running the project

Enter ...

```bash
npm run dev
```

### Open your web app in the browser

Navigate to the specified URL in the browser (e.g. http://localhost:5173/).

### Stopping the project

Just hit `ctrl+c` to stop running your React project.

## Testing

This project has been configured to enable testing with Jest (Vitest) and React Testing Library (RTL).

You can try it out by running: `npm run test`

This will cause Jest (Vitest) to run tests in any test files and display the results.

## JS Config notes

#### JS Config Schema file (static file - offline version)

The **settings.json** file in **.vscode** makes it so the JS Config schema file, **jsconfig.schema.json**, is available to the students offline since IT did not want to add it to the allowed list. However, this file should be periodically updated by downloading a new copy from this site: https://github.com/SchemaStore/schemastore/blob/master/src/schemas/json/jsconfig.json

## ESLint notes

Run with...

```bash
npm run lint
```

## Using Font Awesome Icons

### Install
See the next section, Adding/ Updating packages, for the npm command to install the font awesome dependencies into your project.

### Docs 

[See the Docs](https://docs.fontawesome.com/v5/web/use-with/react/)

### Avaiable Icons
We have the following icon packages available: 

- @fortawesome/free-solid-svg-icons
- @fortawesome/free-regular-svg-icons
- @fortawesome/free-brands-svg-icons

### Font Awesome Icon usage

To use these with React, first import the `FontAwesomeIcon` component. Then import any icons you'd like to use.
Then just add the FontAwesomeIcon to the jsx and pass it the name of the icon you want via the icon prop.

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faEnvelope, faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <div>
      <h3>How to use font-awesome in react</h3>
      <FontAwesomeIcon icon={faPenNib} size="3x" />
      <FontAwesomeIcon icon={faEnvelope} pulse />
      <FontAwesomeIcon icon={faCoffee} spin />
    </div>
  )
}

export default IconPage
```

#### Sizing 

```jsx
<FontAwesomeIcon icon="coffee" size="xs" />
<FontAwesomeIcon icon="coffee" size="lg" />
<FontAwesomeIcon icon="coffee" size="6x" />
```

Note that icon size can be controlled with the CSS `font-size` attribute, and FontAwesomeIcon’s `size` prop determines icon size relative to the current `font-size`.

#### Rotating Icons

```jsx
<FontAwesomeIcon icon="coffee" rotation={90} />
<FontAwesomeIcon icon="coffee" rotation={180} />
<FontAwesomeIcon icon="coffee" rotation={270} />
```

#### Animating Icons 

```jsx
<FontAwesomeIcon icon="spinner" spin />
<FontAwesomeIcon icon="spinner" pulse />
```

#### Adding Classes Yourself

You can add classes for your own project purposes and styling to any component using the className property.

```jsx
<FontAwesomeIcon icon="spinner" className="highlight" />
```

## Adding/ Updating packages 

For react ...
```bash
npm install react@latest react-dom@latest 
```

For react dev dependencies...
```bash
npm install @types/react@latest @types/react-dom@latest --save-dev 
```

For vite ...
```bash
npm install vite@latest @vitejs/plugin-react-swc@latest --save-dev 
```

Other ...
```bash
npm install jsdom globals --save-dev 
```

For linting...
```bash
npm install @eslint/js@latest eslint@latest eslint-plugin-react@latest eslint-plugin-react-hooks@latest eslint-plugin-react-refresh@latest --save-dev 
```

For unit testing...
```bash
npm install vitest@latest @vitest/coverage-v8@latest @testing-library/jest-dom@latest @testing-library/react@latest @testing-library/user-event@latest --save-dev 
```

For Font Awesome...
```bash
npm install @fortawesome/fontawesome-svg-core@latest @fortawesome/free-brands-svg-icons@latest @fortawesome/free-regular-svg-icons@latest @fortawesome/free-solid-svg-icons@latest @fortawesome/react-fontawesome@latest --save-dev 
```

For React Router...
```bash
npm install react-router@latest 
```

For MUI...
```bash
npm install @mui/material @emotion/react @emotion/styled 
```

For MUI icons...
```bash
npm install @mui/icons-material@latest 
```


## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
