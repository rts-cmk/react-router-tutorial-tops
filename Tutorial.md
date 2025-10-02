# React Router Tutorial

React Router is a react routing libary, that lets you create client-side routes, and be able to navigate throug the website without reloading the page

------------------------------------------------------------------------



### 1. Create the Project

1. Create a folder o you computer
2. Open code editor and open the terminal

``` bash
npm create vite@latest .
npm install
npm install react-router-dom
```

Start the dev server:

``` bash
npm run dev
```

------------------------------------------------------------------------
### 2. src/main.jsx
```
    import ReactDom from 'react-dom/client'
    import { BrowserRouter } from 'react-router-dom'
    import App from './App.jsx'

    ReactDom.createRoot(root).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    )
```


------------------------------------------------------------------------

##  Run the Site

``` bash
npm run dev
```
------------------------------------------------------------------------