import Navbar from "@/components/Navbar";

const Header = () => {
    return (
        <header className="fixed top-0 w-full bg-slate-950/40 backdrop-blur-2xl z-40 border-b border-slate-900">
            <Navbar/>
        </header>
    );
};

export default Header;