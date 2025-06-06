import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "MediMeet -Doctor Appointment App",
  description: "Connect your doctor anytime,anywhere",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
