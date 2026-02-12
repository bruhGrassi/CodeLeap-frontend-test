# CodeLeap - FrontEnd Test

A social media application built with React, TypeScript, and Vite. Users can create, read, update, and delete posts.

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS
- **State Management**: TanStack React Query (React Query)
- **UI Components**: Headless UI
- **HTTP Client**: Fetch API
- **Notifications**: Sonner
- **Code Quality**: ESLint

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd CLeap-test
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # Shared UI components (buttons, forms, modals)
│   ├── MainScreen.tsx  # Main application screen
│   ├── PostForm.tsx    # Form for creating/editing posts
│   ├── PostCard.tsx    # Individual post display component
│   └── ...             # Other components
├── hooks/              # Custom React hooks
│   ├── usePosts.ts     # Hook for post data management
│   └── useRelativeTime.ts # Hook for relative time formatting
├── services/           # API services
│   └── postService.ts  # Post API operations
├── types/              # TypeScript type definitions
│   └── post.ts         # Post-related types
├── constants/          # Application constants
│   ├── api.ts         # API configuration
│   └── storage.ts     # Storage keys
└── App.tsx            # Main application component
```
