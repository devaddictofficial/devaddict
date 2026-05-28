import { useState } from "react"

function Header()
{
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <>
        <div className="Header flex flex-row w-full h-[10vh] p-5 bg-slate-900 border-b-2 border-primary/10 items-center justify-between ">

            <h1 className="font-bold font-inter-sans text-white text-[20px]">&lt;<span className="text-primary">Dev</span>Addict /&gt;</h1>

            <nav className="Nav hidden text-white md:flex flex-row items-center w-auto h-auto gap-7 tracking-wider text-[15px]">
                <a className="nav-hover" href="">Library</a>
                <a className="nav-hover" href="">Docs</a>
                <a className="nav-hover" href="">Blog</a>
                <a className="nav-hover" href="">About</a>
                <a className="nav-hover" href="">Github</a>
                <button className="p-2 w-30 rounded-xl bg-primary/70 font-bold font-geist-sans text-[13px]
                hover:scale-[105%] transition-transform ease-in-out duration-300 ">Sign In</button>
            </nav>

            {/* <!--Hamburger Icon--> */}
            <div className="md:hidden absolute left-82 mb-2">

                <button onClick={() => setMenuOpen(!menuOpen) }> 
                    
                    {/* <!--Menu Open Icon--> */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" 
                    className={`absolute inset-0 w-7.5 h-7.5 text-white transition-all duration-300
                    ${menuOpen ? "opacity-0" : "opacity-100 rotate-0 scale-100"}`} viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>

                    {/* <!--Menu Close Icon--> */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" 
                    className={`absolute inset-0 w-6 h-6 text-white transition-all duration-300
                    ${menuOpen ? "opacity-100" : "opacity-0"}`} viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>

                </button>

            </div>

        </div>

        {/* <!-- Mobile Slide Menu --> */}
        <div className={`fixed top-[10vh] h-full w-full bg-slate-900 text-white text-center z-40 transition-all duration-300 
        items-center ${menuOpen ? "right-0" : "-right-full"} flex flex-col justify-between`}>

            {/* <!-- Top Menu Links --> */}
            <div className="w-full">
                <a className="w-full border-b border-white/20 py-3.5 hover:bg-primary flex items-center justify-center gap-2">
                    Library
                </a>
                <a href="" className="w-full border-b border-white/20 py-3.5 hover:bg-primary flex items-center justify-center gap-2">
                    Docs
                </a>
                <a href="" className="w-full border-b border-white/20 py-3.5 hover:bg-primary flex items-center justify-center gap-2">
                    Blog
                </a>
                <a href="contact.html" className="w-full border-b border-white/20 py-3.5 hover:bg-primary flex items-center justify-center gap-2">
                    About
                </a>
                <a href="contact.html" className="w-full border-b border-white/20 py-3.5 hover:bg-primary flex items-center justify-center gap-2">
                    Github
                </a>

                {/* <!-- Highlighted Book Now --> */}
                <a href="" target="_blank" 
                    className="w-[90%] mx-auto mt-3 mb-2 py-3.5 bg-primary rounded-lg hover:bg-primary/80 flex items-center 
                    justify-center gap-2 font-semibold shadow-md">
                    Explore Now
                </a>
            </div>

            {/* <!-- Footer --> */}
            <div className="text-xs text-center opacity-70 mb-4">
                DevAddict © 2026
            </div>
            
        </div>
        </>
    )
}

export default Header