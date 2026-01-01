import { Metadata } from "next";
import "../globals.css";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Super Green Plantation",
  description: "Super Green Plantation - Your Trusted Partner in Sustainable Agriculture",
  icons: {
    icon: "/favicon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div >
        <NavBar/>
        <main className="grow ">
          {children}
        </main>

        <footer>
          <Footer/>
        </footer>
      </div>
  );
}