# 🕒 tiny-date-formatter

> A lightweight, zero-dependency date formatting utility for JavaScript and TypeScript.

![npm](https://img.shields.io/npm/v/@codemaniac-sahil/tiny-date-formatter)
![license](https://img.shields.io/github/license/codemaniac-sahil/tiny-date-formatter)
![tests](https://img.shields.io/badge/tests-passing-brightgreen)

## ✨ Features

- 🪶 **Lightweight** – Minimal codebase with no external dependencies
- 🧠 **Simple API** – Intuitive formatting syntax like `YYYY-MM-DD HH:mm:ss`
- 🧪 **Fully tested** – Comes with unit tests powered by `vitest`
- 📦 **TypeScript support** – Includes TypeScript types out of the box

- 🌍 **Locale support** – Format dates in different locales (e.g., `en`, `fr`, `de`)

## 📦 Installation

```bash
npm install @codemaniac-sahil/tiny-date-formatter
# or
yarn add @codemaniac-sahil/tiny-date-formatter
```

## 📖 Usage

```javascript
import { formatDate } from "tiny-date-formatter";

const date = new Date("2025-05-02T14:05:09");
const formatted = formatDate(date, "YYYY-MM-DD HH:mm:ss");

console.log(formatted); // 2025-05-02 14:05:09
```

## 🌍 Locale Support

You can format dates in different locales by passing a locale string as the second argument.

```javascript
formatDate(new Date("2025-05-02"), "DD MMMM YYYY", "fr");
// → "02 mai 2025"

formatDate(new Date("2025-05-02"), "DD MMMM YYYY", "de");
// → "02 Mai 2025"
```

## 🔤 Supported Tokens

| Token | Description                 | Example             |
| ----- | --------------------------- | ------------------- |
| YYYY  | 4-digit year                | `2025`              |
| MM    | 2-digit month               | `05`                |
| MMMM  | Full month name (localized) | `May`, `mai`, `Mai` |
| DD    | 2-digit day                 | `02`                |
| HH    | 2-digit hour                | `14`                |
| mm    | 2-digit minute              | `05`                |
| ss    | 2-digit second              | `09`                |

## Running Tests

To run the tests, you can use the following command:

```bash
npm test
# or
yarn test
```

## Building the Project

To build the project, you can use the following command:

```bash
npm run build
# or
yarn build
```

## Author

Made with ❤️ by [Sahil](https://github.com/codemaniac-sahil)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
