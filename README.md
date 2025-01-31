# Event Manager 🚀

## Overview

Event Manager is a **modern, feature-rich** web application designed to **seamlessly create, manage, and track events**. Built with cutting-edge technologies, it ensures an intuitive user experience, smooth state management, and efficient API interactions. The project adheres to the best industry practices, ensuring scalability, maintainability, and performance.

## Tech Stack 🛠

- **React** – Modern component-based UI development
- **Redux Toolkit** – Scalable state management
- **RTK Query** – Optimized API requests with built-in caching
- **Tailwind CSS** – Utility-first styling for rapid development
- **ShadCN UI** – Elegant, accessible, and customizable components

## Folder Structure 📂

The project follows a structured and modular approach to maintainability and scalability:

```
/src
│── assets/          # Static assets (images, icons, fonts, etc.)
│── components/      # Reusable UI components
│── pages/          # Individual page-level components
│── routes/         # Application routing logic
│── services/       # API service configurations
│── stores/         # Redux store
│── styles/         # Custom stylesheets
│── utils/          # Helper functions and utilities
│── App.jsx         # Root component
│── main.jsx        # Application entry point
```

### React Best Practices ✅

- **Component Structure:** Components are modular, reusable, and follow **PascalCase** naming convention.
- **Atomic Design Approach:** Smallest UI elements reside in **atoms** (ShadCN components use lowercase naming convention).
- **State Management:** Implemented via Redux Toolkit, ensuring a **centralized and scalable** approach.
- **Optimized API Calls:** RTK Query reduces **redundant network requests** by leveraging caching and automated re-fetching.

---

## State Management with Redux Toolkit & RTK Query ⚡

### API Slice

Using `createApi` from RTK Query, we efficiently manage API interactions:

```javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://task-manager-eight-olive.vercel.app/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
});
```

✅ **Key Features:**

- **Dynamic Headers:** Handles authentication tokens seamlessly.
- **Optimized Fetching:** Automatic data caching reduces API calls.
- **Global API State:** Easily accessible across the application.

### Authentication with Redux 🔐

The `authSlice` leverages RTK Query to efficiently handle user authentication, ensuring a **secure** login/signup flow.

### Multi-Step Form with Redux 📄

The `formSlice` ensures **data persistence** across multiple pages, allowing users to create events smoothly:

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  forms: [],
  formData: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetFormData: (state) => {
      state.formData = {};
    },
    addEvent: (state, action) => {
      state.forms.push(action.payload);
    },
  },
});

export const { updateFormData, resetFormData, addEvent } = formSlice.actions;
export const selectAllEvents = (state) => state.form.forms;
export default formSlice.reducer;
```

✅ **Key Features:**

- **Multi-Page Persistence:** Users can navigate through different form steps without losing data.
- **Redux-Powered Event Storage:** All created events are **efficiently managed** in the Redux store.

---

## UI & Styling 🎨

### Tailwind CSS 🌟

- **Utility-First Approach:** Rapid styling with minimal CSS bloat.
- **Fully Responsive:** Optimized for all screen sizes.
- **Consistent Design:** Ensures a cohesive look across all pages.

### ShadCN Components ✨

- **Beautiful & Accessible UI Elements**
- **Lightweight & Fully Customizable**
- **Built with Developer Experience in Mind**

---

## Key Features 🚀

✅ **Modern UI** – A sleek and fully responsive design.
✅ **Efficient State Management** – Redux Toolkit ensures seamless data flow.
✅ **Optimized API Calls** – RTK Query enhances performance with caching.
✅ **Secure Authentication** – Fully integrated login/signup flow.
✅ **Scalable Architecture** – Best practices ensure long-term maintainability.

---

## Getting Started 🏁

### Installation

```sh
git clone https://github.com/vinayaka-iyer/event-manager-frontend.git
cd event-manager
npm install
```

### Running the App

```sh
npm run dev
```

---
