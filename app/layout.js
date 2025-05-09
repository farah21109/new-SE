// app/layout.js or app/layout.jsx
import '../styles/style.css'; ; // adjust path if needed

export const metadata = {
  title: 'Your Site Title',
  description: 'Your site description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
