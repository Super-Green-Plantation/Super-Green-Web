import "../globals.css";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div >
        <NavBar/>
        <main className="pt-14 grow ">
          {children}
        </main>

        <footer>
          <Footer/>
        </footer>
      </div>
  );
}