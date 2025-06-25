 # Frost Box - Subscription Box Service Platform

---

## Project Overview

Frost Box is a Subscription Box Service Platform designed to provide users with a personalized monthly subscription experience. Users can browse, subscribe to, and manage curated subscription boxes tailored to their interests. The platform offers an easy-to-use interface with secure authentication, dynamic content, and responsive design to ensure seamless usage across devices.

---

## Live Demo

🌐 [View Live Site](https://frost-box-a9-ab4d6.web.app/)

---

## Screenshots

![Home Page](https://i.ibb.co/your-screenshot-url/homepage.png)  
*Home page featuring slider, subscription services, and responsive navbar.*

---

## Key Features

- **User Authentication**: Email/password login, Google login, registration with password validation, and forget password functionality (without email verification).
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop devices.
- **Subscription Services**: Browse subscription boxes displayed from JSON data with detailed protected pages.
- **Protected Routes**: Private pages such as subscription service details and user profile with persistent authentication state.
- **User Profile Management**: Edit user name and photoURL via Firebase updateProfile method.
- **Reviews and Ratings**: Submit reviews and ratings on subscription service detail pages.
- **Dynamic Page Titles**: Page titles update based on the current route.
- **404 Page**: Custom not found page for unmatched routes.
- **Extra Protected Route**: An additional meaningful private route (My Profile).
- **Animations**: Swiper slider integrated for the homepage slider.
- **Toast Notifications**: Real-time feedback using SweetAlert/toast for success and error messages.

---

## Technology Stack

- **Frontend**: React.js, React Router
- **Styling**: Tailwind CSS, DaisyUI
- **Authentication & Backend**: Firebase Authentication, Firebase Hosting
- **State Management**: React Hooks
- **Animations & UI Enhancements**: Swiper Slider, SweetAlert2 (toast)
- **Hosting**: Firebase Hosting

---

## Dependencies

- react
- react-dom
- react-router-dom
- firebase
- tailwindcss
- daisyui
- swiper
- sweetalert2
- react-hot-toast

(See `package.json` for full list)

---

## Installation & Running Locally

1. **Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
