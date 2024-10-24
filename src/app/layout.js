import './globals.css';
import { Navigation } from "./components/Navigation";
import { Footer } from './components/footer/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Xua HomeSchool</title>
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
