# 1705-David

> This project is to showcase a house (1705 David) to potential renters <br/>
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

- `Listing Header` - Shows the address, a rent/occupied status badge, and a link out to Google Maps for the property
- `Spec Strip` - Price, bed, bath, square footage, and garage listed across a single line
- `What's Included` - List of what comes with the rental (utilities setup, yard, hookups, school district, pet terms)
- `Photo Gallery`
    - Room buttons jump straight to the first photo of that room (Yard, Living Room, Kitchen, Bedrooms, Bathrooms)
    - Arrow buttons on either side of the photo step forward and backward, wrapping around at both ends
- `Interested?`
    - `Currently Occupied` shows when the house is not for rent
    - Otherwise a button with an email mail to link (to me) is shown

Screenshot:
![preview](/screenshot/main.png)

---

## 🛠 Technologies

- Framework: `Angular 22`
- Testing: `Karma`
- Deployment: `GitHub Pages`

---

## 🚀 Getting Started (Local Setup)

* Install [node](https://nodejs.org/en) - v24 is needed (v22 also works)
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
