import React, { useState, useEffect } from "react";
import {
    ArrowRight,
    Calendar,
    MapPin,
    Phone,
    Mail,
    Globe,
    Briefcase,
    Building,
    FileText,
    HeartPulse,
    ShieldAlert,
    Users,
    ChevronLeft,
    ChevronRight,
    MessageCircle,
    PlaySquare,
    Camera,
    Hash,
    Menu, // <-- Mobile Menu icon
    X, // <-- Mobile X icon
} from "lucide-react";

// --- HERO CAROUSEL IMAGES ---
const HERO_SLIDES = [
    "/images/cabs.png",
    "/images/cab-church.jpg",
    "/images/cab-city-hall.jpg",
    "/images/indakan.jpg",
    "/images/cabuyao-town_plaza.jpg",
];

// --- DUMMY DATA FOR THE SECTIONS ---
const SERVICES = [
    {
        title: "Business Permit",
        desc: "Apply or renew your business permit online",
        icon: Briefcase,
        color: "text-red-500",
        bg: "bg-red-50",
    },
    {
        title: "Real Property Tax",
        desc: "Pay your real property taxes conveniently",
        icon: Building,
        color: "text-blue-500",
        bg: "bg-blue-50",
    },
    {
        title: "Community Tax Certificate",
        desc: "Get your cedula or community tax certificate",
        icon: FileText,
        color: "text-green-500",
        bg: "bg-green-50",
    },
    {
        title: "Job Openings",
        desc: "Browse available job opportunities in Cabuyao",
        icon: Users,
        color: "text-purple-500",
        bg: "bg-purple-50",
    },
    {
        title: "Civil Registry",
        desc: "Birth, marriage, and death certificates",
        icon: FileText,
        color: "text-yellow-500",
        bg: "bg-yellow-50",
    },
    {
        title: "Health Services",
        desc: "Access city health programs and services",
        icon: HeartPulse,
        color: "text-pink-500",
        bg: "bg-pink-50",
    },
    {
        title: "Social Welfare",
        desc: "DSWD programs and assistance services",
        icon: Users,
        color: "text-cyan-500",
        bg: "bg-cyan-50",
    },
    {
        title: "Disaster Preparedness",
        desc: "Emergency hotlines and disaster response",
        icon: ShieldAlert,
        color: "text-orange-500",
        bg: "bg-orange-50",
    },
];

const NEWS = [
    {
        id: 1,
        title: "Cabuyao City Launches New Community Health Initiative",
        date: "March 1, 2026",
        color: "bg-red-500",
    },
    {
        id: 2,
        title: "Mayor DenHa Leads Infrastructure Development",
        date: "February 28, 2026",
        color: "bg-blue-500",
    },
    {
        id: 3,
        title: "Free Skills Training Program for Cabuyeños",
        date: "February 25, 2026",
        color: "bg-green-500",
    },
    {
        id: 4,
        title: "Scholarship Grants for Academic Year 2026-2027",
        date: "February 20, 2026",
        color: "bg-purple-500",
    },
    {
        id: 5,
        title: "Clean and Green Cabuyao Initiative",
        date: "February 15, 2026",
        color: "bg-teal-500",
    },
    {
        id: 6,
        title: "Business Permit Renewal Now Online",
        date: "February 10, 2026",
        color: "bg-orange-500",
    },
];

const COUNCILORS = [
    {
        id: 1,
        name: "Hon. Aguillo, Sonny Visa",
        image: "/images/councilor-1.jpg",
    },
    { id: 2, name: "Hon. Bariring, Ariel", image: "/images/councilor-2.jpg" },
    {
        id: 3,
        name: "Hon. Alimagno, Atty. Alexis",
        image: "/images/councilor-3.jpg",
    },
    {
        id: 4,
        name: "Hon. Del Rosario, Evelyn",
        image: "/images/councilor-4.jpg",
    },
    { id: 5, name: "Hon. Hain, Kim", image: "/images/councilor-5.jpg" },
    {
        id: 6,
        name: "Hon. Beguico, Zhen Sherwin",
        image: "/images/councilor-6.jpg",
    },
    { id: 7, name: "Hon. Alcabasa, Jomm", image: "/images/councilor-7.jpg" },
    { id: 8, name: "Hon. Alimagno, Coco", image: "/images/councilor-8.jpg" },
    {
        id: 9,
        name: "Hon. Devoma, Emerson Emer",
        image: "/images/councilor-9.jpg",
    },
    { id: 10, name: "Hon. Humarang, Fe", image: "/images/councilor-10.jpg" },
];

export default function Home() {
    // --- STATES ---
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    // --- HERO CAROUSEL LOGIC ---
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === HERO_SLIDES.length - 1 ? 0 : prev + 1,
            );
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === HERO_SLIDES.length - 1 ? 0 : prev + 1,
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? HERO_SLIDES.length - 1 : prev - 1,
        );
    };

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            {/* 1. TOP BAR */}
            <div
                className="w-full h-8 flex items-center px-6 text-white text-xs font-medium"
                style={{
                    background:
                        "linear-gradient(90deg, #4c1d95 0%, #dc2626 50%, #f59e0b 100%)",
                }}
            >
                Republic of the Philippines
            </div>

            {/* 2. NAVIGATION BAR */}
            <nav className="w-full bg-white px-6 md:px-12 py-4 flex items-center justify-between shadow-sm sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    {/* ACTUAL CITY LOGO */}
                    <img
                        src="/images/cab.png"
                        alt="City of Cabuyao Logo"
                        className="w-12 h-12 object-contain rounded-full border-2 border-red-500 p-0.5 bg-white"
                        onError={(e) =>
                            (e.target.src =
                                "https://via.placeholder.com/150?text=LOGO")
                        }
                    />
                    <div>
                        <h1 className="text-xl font-bold text-gray-900 leading-tight">
                            City of Cabuyao
                        </h1>
                        <p className="text-xs text-gray-500">
                            Official E-Governance Portal
                        </p>
                    </div>
                </div>

                {/* DESKTOP MENU (Hidden on small screens) */}
                <div className="hidden lg:flex items-center gap-8">
                    <a
                        href="#"
                        className="text-sm font-semibold text-red-600 bg-red-50 px-4 py-2 rounded-full"
                    >
                        Home
                    </a>
                    <a
                        href="/about"
                        className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
                    >
                        About
                    </a>
                    <a
                        href="/departments"
                        className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
                    >
                        Departments
                    </a>
                    <a
                        href="/news"
                        className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
                    >
                        News
                    </a>
                    <a
                        href="/drrm"
                        className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
                    >
                        DRRM
                    </a>
                    <a
                        href="/faqs"
                        className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
                    >
                        FAQs
                    </a>
                    <a
                        href="/contact"
                        className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
                    >
                        Contact
                    </a>
                    <a
                        href="/login"
                        className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition shadow-sm ml-4"
                    >
                        Evacuation Portal
                    </a>
                </div>

                {/* MOBILE MENU BUTTON (Hidden on desktop) */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-800 hover:text-red-600 focus:outline-none transition-colors"
                    >
                        {isMobileMenuOpen ? (
                            <X size={28} />
                        ) : (
                            <Menu size={28} />
                        )}
                    </button>
                </div>

                {/* MOBILE MENU DROPDOWN */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col items-center py-6 gap-5 lg:hidden z-50">
                        <a
                            href="/"
                            className="text-sm font-semibold text-red-600 bg-red-50 px-6 py-2 rounded-full w-11/12 text-center"
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
                        >
                            About
                        </a>
                        <a
                            href="/departments"
                            className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
                        >
                            Departments
                        </a>
                        <a
                            href="/news"
                            className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
                        >
                            News
                        </a>
                        <a
                            href="/drrm"
                            className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
                        >
                            DRRM
                        </a>
                        <a
                            href="/faqs"
                            className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
                        >
                            FAQs
                        </a>
                        <a
                            href="/contact"
                            className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
                        >
                            Contact
                        </a>
                        <a
                            href="/login"
                            className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-6 py-3 rounded-lg transition shadow-sm w-11/12 text-center mt-2"
                        >
                            Evacuation Portal
                        </a>
                    </div>
                )}
            </nav>

            {/* 3. HERO SECTION (DYNAMIC CAROUSEL) */}
            <div className="relative w-full h-[650px] bg-gray-900 flex items-center justify-center overflow-hidden group">
                {/* DYNAMIC BACKGROUND IMAGES */}
                {HERO_SLIDES.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                            index === currentSlide
                                ? "opacity-50 z-0"
                                : "opacity-0 -z-10"
                        }`}
                        style={{
                            backgroundImage: `url('${slide}')`,
                        }}
                    />
                ))}

                {/* LEFT ARROW */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 md:left-6 top-[40%] md:top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md flex items-center justify-center text-white border border-white/30 hover:scale-110 transition-all z-30 opacity-100 md:opacity-0 group-hover:opacity-100 focus:outline-none"
                    aria-label="Previous Slide"
                >
                    <ChevronLeft
                        size={24}
                        strokeWidth={2.5}
                        className="mr-0.5"
                    />
                </button>

                {/* RIGHT ARROW */}
                <button
                    onClick={nextSlide}
                    className="absolute right-4 md:right-6 top-[40%] md:top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md flex items-center justify-center text-white border border-white/30 hover:scale-110 transition-all z-30 opacity-100 md:opacity-0 group-hover:opacity-100 focus:outline-none"
                    aria-label="Next Slide"
                >
                    <ChevronRight
                        size={24}
                        strokeWidth={2.5}
                        className="ml-0.5"
                    />
                </button>

                {/* STATIC HERO TEXT */}
                <div className="relative z-20 text-center px-4 max-w-4xl pointer-events-none mt-[-40px] md:mt-0">
                    <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-xs md:text-sm font-semibold border border-white/20 mb-6 uppercase tracking-wider">
                        Bagong Cabuyao
                    </span>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
                        Welcome to the <br />
                        <span className="text-yellow-400">City of Cabuyao</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-100 mb-10 max-w-2xl mx-auto drop-shadow-md">
                        Pera ng Bayan, Ibalik sa Mamamayan — Building a
                        progressive and sustainable community for every
                        Cabuyeño.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
                        <button className="bg-white text-red-600 font-bold px-8 py-3.5 rounded-xl hover:bg-gray-50 transition flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto">
                            Explore Services{" "}
                            <ArrowRight size={18} strokeWidth={2.5} />
                        </button>
                        <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition w-full sm:w-auto backdrop-blur-sm">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* CLICKABLE DOT INDICATORS */}
                <div className="absolute bottom-20 md:bottom-16 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                    {HERO_SLIDES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 shadow-md ${
                                index === currentSlide
                                    ? "w-10 bg-white"
                                    : "w-2.5 bg-white/50 hover:bg-white/80"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* WHITE CURVE AT BOTTOM */}
                <div className="absolute bottom-0 w-full h-12 md:h-16 bg-white rounded-t-[100%] scale-110 translate-y-6 md:translate-y-8 z-10" />
            </div>

            {/* 4. E-SERVICES & QUICK LINKS */}
            <div className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-red-600 mb-4">
                        E-Services & Quick Links
                    </h3>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Access government services online. Fast, convenient, and
                        hassle-free transactions for every Cabuyeño.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SERVICES.map((s, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300 group"
                        >
                            <div
                                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${s.bg}`}
                            >
                                <s.icon className={s.color} size={24} />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">
                                {s.title}
                            </h4>
                            <p className="text-sm text-gray-500 mb-8 min-h-[40px]">
                                {s.desc}
                            </p>
                            <a
                                href="#"
                                className="text-red-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                            >
                                Access Service <ArrowRight size={16} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* 5. NEWS & ANNOUNCEMENTS */}
            <div className="bg-gray-50 py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-red-600 mb-2 inline-block relative">
                            News and Announcements
                            <div className="flex h-1 w-24 absolute -bottom-3 left-1/2 -translate-x-1/2">
                                <div className="w-1/3 h-full bg-blue-600"></div>
                                <div className="w-1/3 h-full bg-yellow-400"></div>
                                <div className="w-1/3 h-full bg-red-600"></div>
                            </div>
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {NEWS.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition border border-gray-100"
                            >
                                <div
                                    className={`h-48 ${item.color} flex items-center justify-center relative overflow-hidden`}
                                >
                                    <img
                                        src={`https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&q=80&w=400&sig=${item.id}`}
                                        alt="News thumbnail"
                                        className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply"
                                    />
                                    <span className="text-8xl font-black text-white/30 absolute z-10">
                                        {item.id}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <p className="text-xs text-gray-500 flex items-center gap-1.5 mb-3 font-medium">
                                        <Calendar size={14} /> {item.date}
                                    </p>
                                    <h4 className="text-lg font-bold text-gray-900 mb-3 leading-tight hover:text-red-600 cursor-pointer transition">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-500 mb-6">
                                        The local government unveils
                                        comprehensive programs intended to
                                        support the citizens...
                                    </p>
                                    <a
                                        href="#"
                                        className="text-red-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                                    >
                                        Read More <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-xl transition shadow-md flex items-center gap-2 mx-auto">
                            View All News <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* 6. CITY OFFICIALS */}
            <div className="py-24 px-6 max-w-6xl mx-auto">
                <div className="text-center mb-16 flex flex-col items-center">
                    <h3 className="text-3xl font-bold text-red-600 mb-3">
                        City Officials
                    </h3>
                    <div className="flex h-1 w-24">
                        <div className="w-1/3 h-full bg-blue-600"></div>
                        <div className="w-1/3 h-full bg-yellow-400"></div>
                        <div className="w-1/3 h-full bg-red-600"></div>
                    </div>
                </div>

                {/* --- MAYOR CARD --- */}
                <div className="rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative max-w-5xl mx-auto mb-60">
                    <div className="md:w-5/12 bg-[#1e293b] min-h-[450px] md:min-h-[500px] relative overflow-hidden">
                        {/* ACTUAL MAYOR IMAGE */}
                        <img
                            src="/images/mayor.png"
                            alt="Hon. Dennis DenHa Hain"
                            className="absolute inset-0 w-full h-full object-cover object-top"
                            onError={(e) =>
                                (e.target.src =
                                    "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=600")
                            }
                        />
                    </div>
                    <div className="md:w-7/12 bg-red-600 p-10 md:p-16 text-white flex flex-col justify-center">
                        <span className="bg-yellow-400 text-red-900 text-xs font-bold px-4 py-1.5 rounded-full w-fit mb-4 shadow-sm">
                            City Mayor
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6">
                            Hon. Dennis "DenHa" Hain
                        </h2>
                        <p className="text-red-100 mb-8 leading-relaxed text-lg">
                            Leading Cabuyao towards progress and prosperity.
                            Committed to transparent governance and public
                            service.
                        </p>
                        <p className="font-bold text-yellow-400 italic mb-10 text-xl">
                            "Pera ng Bayan, Ibalik sa Mamamayan"
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 px-6 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition w-full sm:w-auto">
                                <MessageCircle size={18} /> @MayorDenHa
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 px-6 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition w-full sm:w-auto">
                                <Mail size={18} /> Contact
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- VICE MAYOR CARD --- */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 px-6 pb-12 pt-8 max-w-3xl mx-auto -mt-24 relative z-10 flex flex-col items-center text-center mb-24">
                    {/* AVATAR WRAPPER (Removed absolute positioning for exact spacing control) */}
                    <div className="w-32 h-32 rounded-full bg-white p-2 shadow-md overflow-hidden mb-4">
                        {/* ACTUAL VICE MAYOR IMAGE */}
                        <img
                            src="/images/vice-mayor.jpg"
                            alt="Hon. Junjun Batallones"
                            className="w-full h-full rounded-full object-cover object-top"
                            onError={(e) =>
                                (e.target.src =
                                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200")
                            }
                        />
                    </div>

                    <span className="bg-red-50 text-red-600 text-xs font-bold px-6 py-2 rounded-full mb-3 inline-block border border-red-100 uppercase tracking-wide">
                        Vice Mayor
                    </span>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Hon. Batallones, Junjun
                    </h3>

                    <p className="text-gray-500 text-base">
                        Presiding Officer, Sangguniang Panlungsod
                    </p>
                </div>

                {/* Councilors */}
                <div className="text-center mb-12 mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 inline-block relative">
                        Sangguniang Panlungsod Members
                        <div className="flex h-1 w-24 absolute -bottom-3 left-1/2 -translate-x-1/2">
                            <div className="w-1/3 h-full bg-blue-600"></div>
                            <div className="w-1/3 h-full bg-yellow-400"></div>
                            <div className="w-1/3 h-full bg-red-600"></div>
                        </div>
                    </h3>
                </div>

                <div className="relative max-w-7xl mx-auto px-12 md:px-16">
                    {/* Left Arrow - Starts hidden because we are at the beginning */}
                    <button
                        id="btn-prev-councilor"
                        onClick={() => {
                            const slider =
                                document.getElementById("councilor-slider");
                            slider.scrollBy({
                                left: -slider.offsetWidth,
                                behavior: "smooth",
                            });
                        }}
                        className="absolute left-0 md:left-2 top-[40%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1e293b] shadow-xl border-2 border-white flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 hover:scale-110 transition-all duration-300 focus:outline-none opacity-0 pointer-events-none"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft
                            size={24}
                            strokeWidth={2.5}
                            className="mr-0.5"
                        />
                    </button>

                    {/* Slider Track */}
                    <div
                        id="councilor-slider"
                        className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory scroll-smooth w-full"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                        onScroll={(e) => {
                            const slider = e.target;
                            const prevBtn =
                                document.getElementById("btn-prev-councilor");
                            const nextBtn =
                                document.getElementById("btn-next-councilor");

                            // 1. Check if we are at the very beginning
                            if (slider.scrollLeft <= 10) {
                                prevBtn.classList.add(
                                    "opacity-0",
                                    "pointer-events-none",
                                );
                            } else {
                                prevBtn.classList.remove(
                                    "opacity-0",
                                    "pointer-events-none",
                                );
                            }

                            // 2. Check if we are at the very end
                            if (
                                slider.scrollLeft + slider.clientWidth >=
                                slider.scrollWidth - 10
                            ) {
                                nextBtn.classList.add(
                                    "opacity-0",
                                    "pointer-events-none",
                                );
                            } else {
                                nextBtn.classList.remove(
                                    "opacity-0",
                                    "pointer-events-none",
                                );
                            }
                        }}
                    >
                        <style
                            dangerouslySetInnerHTML={{
                                __html: `#councilor-slider::-webkit-scrollbar { display: none; }`,
                            }}
                        />

                        {COUNCILORS.map((councilor) => (
                            <div
                                key={councilor.id}
                                className="flex flex-col items-center text-center w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1.2rem)] flex-shrink-0 snap-start group/card cursor-pointer"
                            >
                                <div className="w-28 h-28 rounded-full bg-gray-50 border-2 border-transparent group-hover/card:border-red-500 transition-all p-1.5 mb-4 shadow-md overflow-hidden">
                                    <img
                                        src={councilor.image}
                                        alt={councilor.name}
                                        className="w-full h-full rounded-full object-cover object-top group-hover/card:scale-110 transition-transform duration-500"
                                        onError={(e) =>
                                            (e.target.src =
                                                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150")
                                        }
                                    />
                                </div>
                                <h4 className="font-bold text-gray-900 text-sm leading-tight mb-1 px-2">
                                    {councilor.name}
                                </h4>
                                <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">
                                    Councilor
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow - Starts visible */}
                    <button
                        id="btn-next-councilor"
                        onClick={() => {
                            const slider =
                                document.getElementById("councilor-slider");
                            slider.scrollBy({
                                left: slider.offsetWidth,
                                behavior: "smooth",
                            });
                        }}
                        className="absolute right-0 md:right-2 top-[40%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1e293b] shadow-xl border-2 border-white flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 hover:scale-110 transition-all duration-300 focus:outline-none"
                        aria-label="Scroll right"
                    >
                        <ChevronRight
                            size={24}
                            strokeWidth={2.5}
                            className="ml-0.5"
                        />
                    </button>
                </div>
            </div>

            {/* 7. ABOUT SECTION */}
            <div className="bg-gray-50 pt-24 pb-36 border-t border-gray-200 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* --- LEFT SIDE: SINGLE TALL IMAGE --- */}
                    <div className="rounded-3xl overflow-hidden relative shadow-lg h-[400px] lg:h-[650px] w-full bg-gray-200">
                        {/* ACTUAL ABOUT IMAGE */}
                        <img
                            src="/images/about-cabuyao.jpg"
                            className="w-full h-full object-fill object-center hover:scale-105 transition-transform duration-700"
                            alt="City of Cabuyao Landmarks"
                            onError={(e) =>
                                (e.target.src =
                                    "https://images.unsplash.com/photo-1541888062973-2e061dd31fb8?auto=format&fit=crop&q=80&w=800")
                            }
                        />
                    </div>

                    {/* --- RIGHT SIDE: TEXT & STATS --- */}
                    <div>
                        <span className="bg-red-50 text-red-600 text-xs font-bold px-4 py-1.5 rounded-full mb-6 inline-block">
                            About Cabuyao
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            The City of{" "}
                            <span className="text-red-600">Cabuyao</span>
                        </h2>
                        <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                            Cabuyao is a first-class component city in the
                            province of Laguna, Philippines. Known as the
                            "Gateway to CALABARZON," it is one of the most
                            progressive cities in the region, home to numerous
                            industrial parks and economic zones.
                        </p>
                        <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                            Under the leadership of Mayor Dennis "DenHa" Hain,
                            the city continues to pursue sustainable development
                            while ensuring that the benefits of progress reach
                            every Cabuyeño through the "Pera ng Bayan, Ibalik sa
                            Mamamayan" program.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                                <div className="flex items-center gap-2 text-red-500 mb-2">
                                    <Users size={20} />{" "}
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                        Population
                                    </span>
                                </div>
                                <p className="text-3xl font-black text-gray-900">
                                    355,330+
                                </p>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                                <div className="flex items-center gap-2 text-blue-500 mb-2">
                                    <MapPin size={20} />{" "}
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                        Land Area
                                    </span>
                                </div>
                                <p className="text-3xl font-black text-gray-900">
                                    43.40 km²
                                </p>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                                <div className="flex items-center gap-2 text-green-500 mb-2">
                                    <Building size={20} />{" "}
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                        Barangays
                                    </span>
                                </div>
                                <p className="text-3xl font-black text-gray-900">
                                    18
                                </p>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                                <div className="flex items-center gap-2 text-purple-500 mb-2">
                                    <Mail size={20} />{" "}
                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                        Zip Code
                                    </span>
                                </div>
                                <p className="text-3xl font-black text-gray-900">
                                    4025
                                </p>
                            </div>
                        </div>

                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition shadow-md flex items-center justify-center w-full sm:w-auto gap-2 text-lg">
                            Learn More About Cabuyao <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* 8. CITY INFORMATION OFFICE BANNER */}
            <div className="relative z-20 px-6 -mt-20 mb-24 w-full flex justify-center">
                <div className="w-full max-w-5xl group">
                    <img
                        src="/images/city-office-info.png"
                        alt="City Information Office Banner"
                        className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white object-cover hover:-translate-y-2 transition-transform duration-300 ease-out bg-white"
                        onError={(e) => (e.target.style.display = "none")}
                    />
                </div>
            </div>

            {/* 9. FOOTER */}
            <footer className="bg-[#1E3A5F] text-white pt-16 pb-10 px-6 relative">
                {/* --- FLOATING BANNER LOGOS --- */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            {/* ACTUAL FOOTER LOGO */}
                            <img
                                src="/images/cab.png"
                                alt="Cabuyao Logo"
                                className="w-12 h-12 object-contain rounded-full border-2 border-red-500 p-0.5 bg-white"
                                onError={(e) =>
                                    (e.target.style.display = "none")
                                }
                            />
                            <h2 className="text-xl font-bold">
                                City of
                                <br />
                                Cabuyao
                            </h2>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed mb-6">
                            Province of Laguna. Committed to transparent
                            governance and public service. Building a
                            progressive and sustainable community for every
                            Cabuyeño.
                        </p>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.facebook.com/BagongCabuyao/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 hover:opacity-80 transition overflow-hidden rounded-full"
                            >
                                <img
                                    src="/images/fb-logo.png"
                                    alt="Facebook"
                                    className="w-full h-full object-cover"
                                    onError={(e) =>
                                        (e.target.style.display = "none")
                                    }
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/@mayordenha"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 hover:opacity-80 transition overflow-hidden rounded-full"
                            >
                                <img
                                    src="/images/yout.png"
                                    alt="YouTube"
                                    className="w-full h-full object-cover"
                                    onError={(e) =>
                                        (e.target.style.display = "none")
                                    }
                                />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 hover:opacity-80 transition overflow-hidden rounded-full"
                            >
                                <img
                                    src="/images/x.png"
                                    alt="X/Twitter"
                                    className="w-full h-full object-cover"
                                    onError={(e) =>
                                        (e.target.style.display = "none")
                                    }
                                />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 hover:opacity-80 transition overflow-hidden rounded-full"
                            >
                                <img
                                    src="/images/instagram.png"
                                    alt="Instagram"
                                    className="w-full h-full object-cover"
                                    onError={(e) =>
                                        (e.target.style.display = "none")
                                    }
                                />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {[
                                "Home",
                                "The City",
                                "Departments",
                                "News",
                                "DRRM",
                                "FAQs",
                            ].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-400 hover:text-white transition"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-4">
                            {[
                                "Business Permit",
                                "Real Property Tax",
                                "Job Openings",
                                "Civil Registry",
                                "Health Services",
                                "Social Welfare",
                            ].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-400 hover:text-white transition"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4 text-sm text-gray-400">
                                <MapPin
                                    size={20}
                                    className="text-red-500 mt-0.5 flex-shrink-0"
                                />
                                <span>
                                    City Hall, Cabuyao City
                                    <br />
                                    Province of Laguna, Philippines 4025
                                </span>
                            </li>
                            <li className="flex items-center gap-4 text-sm text-gray-400">
                                <Phone
                                    size={20}
                                    className="text-green-500 flex-shrink-0"
                                />
                                <span>(049) 554 9780 LOC. 303</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm text-gray-400">
                                <Mail
                                    size={20}
                                    className="text-yellow-500 flex-shrink-0"
                                />
                                <span>ciocabuyaoph@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-4 text-sm text-gray-400">
                                <Globe
                                    size={20}
                                    className="text-blue-500 flex-shrink-0"
                                />
                                <span>www.cabuyao.gov.ph</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-700 text-xs text-gray-500">
                    <p className="text-[#60A5FA]">
                        © 2026 City of Cabuyao. All rights reserved.
                    </p>
                    <p className="text-[#60A5FA]">
                        Powered by{" "}
                        <span className="text-red-400 font-medium">
                            City Information Office
                        </span>
                    </p>
                </div>

                {/* Bottom Color Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 flex">
                    <div className="w-1/3 h-full bg-blue-600"></div>
                    <div className="w-1/3 h-full bg-yellow-400"></div>
                    <div className="w-1/3 h-full bg-red-600"></div>
                </div>
            </footer>
        </div>
    );
}
