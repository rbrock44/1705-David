# 1705-David

> This project hosts links and descriptions of software projects I've created <br/>
> [Live - 1705 David Website](https://1705-david.ryan-brock.com/)

Screenshot:
![preview](/screenshot/main.png)

---

## 📚 Table of Contents

- [What's My Purpose?](#-whats-my-purpose)
- [How to Use](#-how-to-use)
- [Technologies](#-technologies)
- [Getting Started (Local Setup)](#-getting-started-local-setup)
  - [Run Locally](#run-locally)
  - [Test](#test)
  - [GitHub Hooks](#github-hooks)
  - [Build](#build)
  - [Deploy](#deploy)
- [How to Contribute](#-how-to-contribute)

---

## 🧠 What's My Purpose?

This is a server side single-page angular frontend created to showcase a house (1705 David) to potential renters and maybe for them to get in touch

---

## 🚦 How to Use

- `Google Map Link` - This redirect to google maps, showing the house/property
- `Photo Buttons` 
    - There are header buttons to jump to main rooms
    - There are buttons on the side(s) of images allowing forward and backward navigation
- `Contact` 
    - `House Occupied, not available for rent` shows when house is not for rent
    - Otherwise a button with email mail to link (to me) will be at the bottom

Screenshot:
![preview](/screenshot/main.png)

---

## 🛠 Technologies

- Framework: `Angular 18`
- Testing: `Karma`
- Deployment: `GitHub Pages`

---

## 🚀 Getting Started (Local Setup)

* Install [node](https://nodejs.org/en) - v18 is needed (v20 also works)
* Clone [repo](https://github.com/rbrock44/1705-David)

---

### Run Locally

```
npm install
npm start
```

---

### Test

- Unit
    - `ng test` || `npm run test`
- Integration
    - `ng e2e` || `npm run e2e`

---

### Github Hooks

- Build
    - Trigger: On Push to Main
    - Action(s): Builds application then kicks off gh page action to deploy build output

---

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

---

### Deploy

Run `npm run prod` to build and deploy the project. Make sure to be on `master` and that it is up to date before running the command. It's really meant to be a CI/CD action

---

## 🤝 How to Contribute

Found a typo or a small, obvious fix? Open a PR directly.
Want to change behavior or add something bigger? Open an issue first so we can talk it through before you put in the work.

---
