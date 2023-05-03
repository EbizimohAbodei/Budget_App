# Introduction

A practice budget project developed using React-Typescript.

## Requirements

1. Create a simple one-page application to store incomes and expenses, and set
   saving target.
2. Account balance can be calculated from incomes, expenses, and saving.
   `incomes - expenses - saving = balance`
3. Users should be able to add new incomes, expenses, transfer from balance account to saving account, and reset saving target. Balance should never be negative number.
4. Use React Hooks where applicable. TypeScript must be used at least for the props types.
5. Style is not the priority in this assignment.

## Bonus point

1. Add function to transfer money back from saving account to current balance.
2. Set source of incomes and expenses as the select elements with the categories of your choice.
3. Add edit/delete button and according functions for incomes and expenses.
4. Use `d3` package to print out 2 piecharts for incomes and expenses in categories (I only give bonus point when you use `d3`, not the other handier libraries).

## Technologies

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Project Structure

```
├─ node_modules
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  └─ manifest.json
├─ src
│  ├─ components
│  │  ├─ Expense.tsx
│  │  ├─ Income.tsx
│  │  ├─ ShowBal.tsx
│  │  └─ Target.tsx
│  ├─ types
│  │  └─ alltypes.ts
│  ├─ App.css
│  ├─ App.test.tsx
│  ├─ App.tsx
│  ├─ index.css
│  ├─ index.tsx
│  └─ logo.svg
├─ .gitignor
├─ demo1.png
├─ demo2.png
├─ dome3.png
├─ package-lock.json
├─ package.json
├─ README.md
└─ tsconfig.json
```

## Live Project Link

[Click here](https://fs15-7-budget-app.vercel.app/)

## Getting Started

- Clone the repository from [Github](https://github.com/EbizimohAbodei/fs15_7-budget-app)
- Install dependencies by runing `npm install i` in the terminal
- Start the project by running `npm start` in the terminal
