This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Project Name: Data Dashboard using Next.js and Nivo

This project is a **data dashboard** built using **Next.js**. It includes visual representations of datasets, such as bump charts, calendars, and line charts, using **Nivo** and other dependencies for user interface components and charts.

![Dashboard Screenshot](./mnt/data/image.png)

## Features

- **Dynamic Data Visualizations**: Uses Nivo for rendering bump charts, calendar heatmaps, and line charts to display data trends and statistics.
- **User Interface**: Implemented using Radix UI components for alerts, dialogs, avatars, and dropdown menus.
- **Command Palette**: Integrated with `cmdk` to offer quick user access to various functions.
- **TailwindCSS**: Utilizes TailwindCSS for styling and animations, allowing for a modern and responsive UI.
- **Chart.js Integration**: For additional chart options alongside Nivo.
- **Calendar Integration**: Uses `react-day-picker` and `date-fns` to handle date-based visualizations and interactions.

## Tech Stack

- **Framework**: Next.js (v14.2.11)
- **Frontend**: React (v18), TailwindCSS, Radix UI
- **Data Visualization**: Nivo, Chart.js
- **Utilities**: Axios for API requests, clsx for conditional classNames

## Dependencies

- **Nivo Libraries**:
  - `@nivo/bump`: Used for bump charts displaying ranked series over time.
  - `@nivo/calendar`: Displays calendar-based heatmaps.
  - `@nivo/core`, `@nivo/line`: Core utilities and line charts.
- **Radix UI Components**:

  - `@radix-ui/react-alert-dialog`, `@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-icons`, and more for various UI elements.

- **Chart Libraries**:
  - `chart.js` and `react-chartjs-2`: For advanced chart customizations.
- **Other Notable Dependencies**:
  - `axios`: For API calls.
  - `cmdk`: Provides command palette functionality.
  - `date-fns` and `react-day-picker`: For date manipulation and interactive calendars.
  - `lucide-react`: Icons for modern UI components.
  - `clsx` and `class-variance-authority`: For managing CSS classes in a clean and efficient way.

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-repo.git
   ```
