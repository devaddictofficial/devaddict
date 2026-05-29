import hero from "./../../assets/images/hero.png"
import Editor from "@monaco-editor/react";

function Hero()
{

    const code = `<section class="hero">
  <div class="container">
    <h1>Build Smarter. Code Faster.</h1>
    <p>Copy-paste ready UI components for developers.</p>
    <button>Browse Components</button>
    <span>HTML • CSS • React • Tailwind</span>
    <div class="glow"></div>
    <div class="grid-bg"></div>
    <div class="hero-overlay"></div>
    <a href="#">Explore Library</a>
  </div>
</section>`;

    return(
        <>
        <div className="Hero relative w-full h-auto p-12.5">

            <div className="w-full flex flex-col h-1/2 gap-5 md:gap-0 md:flex-row md:h-auto">
                
                {/* Content */}
                <div className="h-1/2 md:w-1/2 flex flex-col items-start gap-3">
                    
                    {/* Version v1.0 */}
                    <h3 className="border-2 border-primary/30 rounded-full text-center w-64 p-2 text-[12px] text-primary">
                        v1.0 The Ultimate UI Library For Developers
                    </h3>

                    {/* Heading */}
                    <h1 className="text-white font-geist-sans w-full font-bold text-[40px] leading-11.5 "> 
                        Build <span className="text-primary">Smarter.</span> <br/>Code <span className="text-primary">Faster.</span>
                    </h1>

                    {/* Description */}
                    <ul className="text-white/80 list-disc list-inside">
                        <li>Copy-paste ready UI code</li>
                        <li>Headers • Footers • CTAs • Forms • Cards & more</li>
                        <li>Preview → Copy → Customize instantly</li>
                        <li>No CDN risk. No setup hassle.</li>
                        <li>Clean, responsive & production-ready code</li>
                    </ul>

                    {/* Icons */}
                    <div className="flex flex-col md:flex-row w-full md:w-auto mt-2 gap-5">

                        {/* Icon 1 */}
                        <div class="flex flex-row items-center gap-2">
    
                            <div class="text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" 
                                class="bi bi-clipboard-check w-8 h-8" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
                                </svg>
                            </div>

                            <div class="flex flex-col text-white tracking-wide">
                                <h4 class="text-[13px] font-bold">Ready To Copy</h4>
                                <p class="text-[10px] text-white/70">One click. Clean code.</p>
                            </div>

                        </div>

                        {/* Icon 2 */}
                        <div class="flex flex-row items-center gap-2">
    
                            <div class="text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-shield-check w-7 h-7" viewBox="0 0 16 16">
                                <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
                                <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                                </svg>
                            </div>

                            <div class="flex flex-col text-white tracking-wide">
                                <h4 class="text-[13px] font-bold">No CDN Risk</h4>
                                <p class="text-[10px] text-white/70">No dependencies.</p>
                            </div>

                        </div>

                        {/* Icon 3 */}
                        <div class="flex flex-row items-center gap-2">
    
                            <div class="text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-gift w-7 h-7" viewBox="0 0 16 16">
                                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z"/>
                                </svg>
                            </div>

                            <div class="flex flex-col text-white tracking-wide">
                                <h4 class="text-[13px] font-bold">100% Free & Open</h4>
                                <p class="text-[10px] text-white/70">Open source forever.</p>
                            </div>

                        </div>

                    </div>

                    <div class="flex flex-col md:flex-row w-full md:w-auto items-center gap-4 mt-2">
                        <button class="flex flex-row w-full md:w-auto justify-center items-center text-[13.2px] tracking-wider font-bold gap-3 bg-primary rounded-xl p-3 
                        px-8 text-white transition-all duration-300 hover:bg-transparent hover:text-primary border 
                        border-transparent hover:border-primary">
                                Explore Components <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-arrow-right w-4 mt-0.5 h-4" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </button>
                        <button class="flex flex-row w-full md:w-auto justify-center items-center text-[13.2px] tracking-wider font-bold gap-3 rounded-xl p-3 px-14
                         text-primary border border-primary transition-all duration-300 hover:bg-primary
                          hover:text-white">
                                Browse Cards
                        </button>  
                    </div>

                </div>
                
                {/* Code Box */}
                <div className="h-1/2 md:w-1/2 flex">
                    <div className="w-full overflow-hidden rounded-2xl border border-primary/50 bg-[#070b14]">
                        
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                            
                            <h3 className="text-[16px] font-semibold text-white border-b-2 border-primary p-1.5">
                                Code
                            </h3>

                            <span className="rounded-full border border-cyan-400/30 px-4 py-1 text-sm text-cyan-400">
                            HTML
                            </span>
                        </div>

                        {/* Editor */}
                        <Editor height="320px" defaultLanguage="html" theme="vs-dark" defaultValue={`${code}`}
                            options={
                            {
                                minimap: { enabled: false },
                                fontSize: 16,
                                wordWrap: "on",
                                scrollBeyondLastLine: false,
                                automaticLayout: true,
                                padding: {
                                    top: 20,
                                    bottom :20,
                                },
                            }}/>
                    </div>
                </div>

            </div>

            {/* Background Image */}
            <img className="absolute inset-0 w-full h-full object-cover -z-1 " src={hero} alt="" />

        </div>
        </>
    );
}

export default Hero