# ByteSpace

ByteSpace is a responsive online learning marketplace UI built with Next.js.

## Features

### Landing Page

- Hero section with course search UI
- Partner logos
- Course discovery section
- Learning paths
- Growth statistics
- Creator call-to-action
- Community section
- Newsletter footer

### Courses Page

- Course search interface
- Category chips
- Level and category filters
- Sort control
- Responsive shared course-card grid
- Pagination UI

### Course Details Page

- Course title, creator, rating, level, and student count
- Course preview image and play button
- About, Lessons, and Reviews tabs
- URL hash-based tab navigation
- Lesson summary and pricing panel
- Enrollment section
- Course inclusions and creator profile information

### Creator Page

- Creator information and avatar
- Product and follower statistics
- Follow button
- Creator course listing
- Filtering and sorting UI

### Authentication Pages

- Login page
- Signup page
- Email, name, and password fields
- Facebook and Google login buttons on the login page
- Navigation between login and signup
- Responsive visual authentication layout

### Shared Components

- Common Navbar
- Common Footer
- Shared CourseCard component
- Course detail tabs
- Responsive layouts for desktop, tablet, and mobile screen sizes

## Technology

- Next.js
- React
- JavaScript
- Tailwind CSS
- Global styling through `app/globals.css`
- React Icons
- Next.js Image optimization
- Next.js Link navigation
- Poppins, DM Sans, and Space Grotesk fonts
- CSS Grid and Flexbox
- React state management with `useState`
- React lifecycle handling with `useEffect`
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:3000
```

## Routes to Review

- `/`
- `/courses`
- `/courses/any-slug`
- `/creators`
- `/login`
- `/signup`

On the course details page, test the About, Lessons, and Reviews tabs:

- `/courses/any-slug#about`
- `/courses/any-slug#lessons`
- `/courses/any-slug#reviews`

## Validation

Run lint:

```bash
npm run lint
```

Run a production build:

```bash
npm run build
```

Check responsive behavior by resizing the browser or using mobile device emulation.

## Project Notes

- This project focuses on frontend experience and visual implementation.
- Course data, creator data, ratings, prices, and lesson information are static mock data.
- Authentication forms are UI-only and are not connected to a backend service.
- Search, filtering, sorting, pagination, enrollment, follow, newsletter subscription, and social login controls are presentational UI controls.
- The course detail page uses a dynamic route, while the current content is based on a static course presentation.

The project can be extended with backend authentication, a course database, real search and filtering, payment and enrollment functionality, creator dashboards, user profiles, and course progress tracking.

Reusable styling and responsive behavior are centralized in `app/globals.css`.
