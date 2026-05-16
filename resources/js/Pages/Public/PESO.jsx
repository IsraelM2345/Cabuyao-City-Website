import React, { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Globe,
    Menu,
    X,
    ChevronDown,
    Briefcase,
    Users,
    GraduationCap,
    Building2,
    Search,
    Calendar,
    ArrowRight,
} from "lucide-react";

// --- PESO DATA ---
const PESO_SERVICES = [
    {
        id: 1,
        title: "For Job Seekers",
        desc: "Access local job listings, employment coaching, and career guidance to help you land the right opportunity.",
        icon: Users,
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        id: 2,
        title: "For Employers",
        desc: "Partner with us to host local job fairs, post your company's vacancies, and find qualified Cabuyeño talents.",
        icon: Building2,
        color: "text-red-600",
        bg: "bg-red-50",
    },
    {
        id: 3,
        title: "Youth & Students (SPES)",
        desc: "Apply for the Special Program for Employment of Students to earn income during summer or holiday breaks.",
        icon: GraduationCap,
        color: "text-yellow-600",
        bg: "bg-yellow-50",
    },
    {
        id: 4,
        title: "Skills Training",
        desc: "Enroll in our free livelihood and technical skills training programs in partnership with TESDA.",
        icon: Briefcase,
        color: "text-green-600",
        bg: "bg-green-50",
    },
];

const JOB_OPENINGS = [
    {
        id: 1,
        title: "Production Operator",
        company: "Nestlé Philippines, Inc.",
        type: "Full-Time",
        location: "Cabuyao Light Industry Park",
        posted: "2 days ago",
    },
    {
        id: 2,
        title: "Customer Service Representative",
        company: "Morphling Solutions",
        type: "Full-Time",
        location: "Brgy. Sala, Cabuyao",
        posted: "3 days ago",
    },
    {
        id: 3,
        title: "IT Support Staff",
        company: "Ttech (Santa Rosa/Cabuyao Boundary)",
        type: "Full-Time",
        location: "Technopark",
        posted: "1 week ago",
    },
    {
        id: 4,
        title: "Admin Assistant",
        company: "Cabuyao City Hall",
        type: "Contractual",
        location: "Brgy. Poblacion Uno",
        posted: "1 week ago",
    },
    {
        id: 5,
        title: "Delivery Driver",
        company: "Logistics Hub PH",
        type: "Full-Time",
        location: "Pulo, Cabuyao",
        posted: "2 weeks ago",
    },
    {
        id: 6,
        title: "Sales Associate",
        company: "Centro Mall Cabuyao",
        type: "Part-Time",
        location: "Brgy. Pulo",
        posted: "2 weeks ago",
    },
];

export default function PESO() {
    // --- STATES ---
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // State to track which mobile dropdown is currently open
    const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

    // --- HELPER FUNCTION FOR MOBILE ACCORDION ---
    const toggleMobileDropdown = (menuName) => {
        setOpenMobileDropdown((prev) => (prev === menuName ? null : menuName));
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
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
                    <img
                        src="/images/cab.png"
                        alt="City Logo"
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

                {/* DESKTOP MENU */}
                <div className="hidden xl:flex items-center gap-8">
                    <a
                        href="/"
                        className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
                    >
                        Home
                    </a>

                    {/* Dropdown: The City */}
                    <div className="relative group py-4">
                        <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-red-600 transition">
                            The City <ChevronDown size={14} />
                        </button>
                        <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                            <a
                                href="/about"
                                className="block px-4 py-3 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 border-b border-gray-50"
                            >
                                About Cabuyao
                            </a>
                            <a
                                href="/accomplishments"
                                className="block px-4 py-3 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 border-b border-gray-50"
                            >
                                Accomplishments
                            </a>
                            <a
                                href="/tourism"
                                className="block px-4 py-3 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 border-b border-gray-50"
                            >
                                Tourism & Landmarks
                            </a>
                            <a
                                href="/gallery"
                                className="block px-4 py-3 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600"
                            >
                                City Gallery
                            </a>
                        </div>
                    </div>

                    {/* Dropdown: Government */}
                    <div className="relative group py-4">
                        <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-red-600 transition">
                            Government <ChevronDown size={14} />
                        </button>
                        <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                            <a
                                href="/mayor"
                                className="block px-4 py-3 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 border-b border-gray-50"
                            >
                                Office of the Mayor
                            </a>
                            <a
                                href="/council"
                                className="block px-4 py-3 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 border-b border-gray-50"
                            >
                                Sangguniang Panlungsod
                            </a>
                            <a
                                href="/departments"
                                className="block px-4 py-3 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 border-b border-gray-50"
                            >
                                City Departments
                            </a>
                            <a
                                href="/transparency"
                                className="block px-4 py-3 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600"
                            >
                                Transparency Seal
                            </a>
                        </div>
                    </div>

                    {/* Dropdown: E-Services (ACTIVE STATE) */}
                    <div className="relative group py-4">
                        <button className="flex items-center gap-1 text-sm font-bold text-red-600 transition">
                            E-Services <ChevronDown size={14} />
                        </button>
                        <div className="absolute top-full left-0 mt-0 w-52 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                            <a
                                href="/bplo"
                                className="block px-4 py-3 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 border-b border-gray-50"
                            >
                                Business Permits (BPLO)
                            </a>
                            <a
                                href="/peso"
                                className="block px-4 py-3 text-sm font-bold text-red-600 bg-red-50 border-b border-gray-50"
                            >
                                Job Openings (PESO)
                            </a>
                            <a
                                href="/registry"
                                className="block px-4 py-3 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 border-b border-gray-50"
                            >
                                Civil Registry
                            </a>
                            <a
                                href="/health"
                                className="block px-4 py-3 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600"
                            >
                                Health Services
                            </a>
                        </div>
                    </div>

                    <a
                        href="/drrm"
                        className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
                    >
                        DRRM
                    </a>
                    <a
                        href="/news"
                        className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
                    >
                        News
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
                </div>

                {/* MOBILE MENU BUTTON (Hidden on desktop) */}
                <div className="xl:hidden flex items-center">
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

                {/* MOBILE MENU DROPDOWN (ACCORDION STYLE) */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col xl:hidden z-50 max-h-[85vh] overflow-y-auto">
                        <a
                            href="/"
                            className="px-6 py-4 text-sm font-semibold text-gray-800 hover:text-red-600 border-b border-gray-50 transition-colors"
                        >
                            Home
                        </a>

                        {/* Expandable: The City */}
                        <div>
                            <button
                                onClick={() => toggleMobileDropdown("city")}
                                className="w-full px-6 py-4 flex items-center justify-between text-sm font-semibold text-gray-800 hover:text-red-600 transition-colors border-b border-gray-50"
                            >
                                The City
                                <ChevronDown
                                    size={18}
                                    className={`transition-transform duration-300 ${openMobileDropdown === "city" ? "rotate-180 text-red-600" : "text-gray-400"}`}
                                />
                            </button>
                            {openMobileDropdown === "city" && (
                                <div className="bg-gray-50 flex flex-col py-2 border-b border-gray-100 shadow-inner">
                                    <a
                                        href="/about"
                                        className="px-10 py-3 text-sm text-gray-600 hover:text-red-600 transition-colors"
                                    >
                                        About Cabuyao
                                    </a>
                                    <a
                                        href="/accomplishments"
                                        className="px-10 py-3 text-sm text-gray-600 hover:text-red-600 transition-colors"
                                    >
                                        Accomplishments
                                    </a>
                                    <a
                                        href="/tourism"
                                        className="px-10 py-3 text-sm text-gray-600 hover:text-red-600 transition-colors"
                                    >
                                        Tourism & Landmarks
                                    </a>
                                    <a
                                        href="/gallery"
                                        className="px-10 py-3 text-sm text-gray-600 hover:text-red-600 transition-colors"
                                    >
                                        City Gallery
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* Expandable: Government */}
                        <div>
                            <button
                                onClick={() => toggleMobileDropdown("gov")}
                                className="w-full px-6 py-4 flex items-center justify-between text-sm font-semibold text-gray-800 hover:text-red-600 transition-colors border-b border-gray-50"
                            >
                                Government
                                <ChevronDown
                                    size={18}
                                    className={`transition-transform duration-300 ${openMobileDropdown === "gov" ? "rotate-180 text-red-600" : "text-gray-400"}`}
                                />
                            </button>
                            {openMobileDropdown === "gov" && (
                                <div className="bg-gray-50 flex flex-col py-2 border-b border-gray-100 shadow-inner">
                                    <a
                                        href="/mayor"
                                        className="px-10 py-3 text-sm text-gray-600 hover:text-red-600 transition-colors"
                                    >
                                        Office of the Mayor
                                    </a>
                                    <a
                                        href="/council"
                                        className="px-10 py-3 text-sm text-gray-600 hover:text-red-600 transition-colors"
                                    >
                                        Sangguniang Panlungsod
                                    </a>
                                    <a
                                        href="/departments"
                                        className="px-10 py-3 text-sm text-gray-600 hover:text-red-600 transition-colors"
                                    >
                                        City Departments
                                    </a>
                                    <a
                                        href="/transparency"
                                        className="px-10 py-3 text-sm text-gray-600 hover:text-red-600 transition-colors"
                                    >
                                        Transparency Seal
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* Expandable: E-Services (ACTIVE) */}
                        <div>
                            <button
                                onClick={() => toggleMobileDropdown("services")}
                                className="w-full px-6 py-4 flex items-center justify-between text-sm font-semibold text-red-600 bg-red-50 border-l-4 border-red-600 transition-colors"
                            >
                                E-Services
                                <ChevronDown
                                    size={18}
                                    className={`transition-transform duration-300 ${openMobileDropdown === "services" ? "rotate-180 text-red-600" : "text-red-600"}`}
                                />
                            </button>
                            {openMobileDropdown === "services" && (
                                <div className="bg-gray-50 flex flex-col py-2 border-b border-gray-100 shadow-inner">
                                    <a
                                        href="/bplo"
                                        className="px-10 py-3 text-sm text-gray-600 hover:text-red-600 transition-colors"
                                    >
                                        Business Permits (BPLO)
                                    </a>
                                    <a
                                        href="/peso"
                                        className="px-10 py-3 text-sm font-bold text-red-600 transition-colors"
                                    >
                                        Job Openings (PESO)
                                    </a>
                                    <a
                                        href="/registry"
                                        className="px-10 py-3 text-sm text-gray-600 hover:text-red-600 transition-colors"
                                    >
                                        Civil Registry
                                    </a>
                                    <a
                                        href="/health"
                                        className="px-10 py-3 text-sm text-gray-600 hover:text-red-600 transition-colors"
                                    >
                                        Health Services
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* Standalone Links */}
                        <a
                            href="/drrm"
                            className="px-6 py-4 text-sm font-semibold text-gray-800 hover:text-red-600 border-b border-gray-50 transition-colors"
                        >
                            DRRM
                        </a>
                        <a
                            href="/news"
                            className="px-6 py-4 text-sm font-semibold text-gray-800 hover:text-red-600 border-b border-gray-50 transition-colors"
                        >
                            News
                        </a>
                        <a
                            href="/faqs"
                            className="px-6 py-4 text-sm font-semibold text-gray-800 hover:text-red-600 border-b border-gray-50 transition-colors"
                        >
                            FAQs
                        </a>
                        <a
                            href="/contact"
                            className="px-6 py-4 text-sm font-semibold text-gray-800 hover:text-red-600 transition-colors"
                        >
                            Contact
                        </a>
                    </div>
                )}
            </nav>

            {/* 3. HERO BANNER */}
            <div className="relative w-full h-[250px] md:h-[350px] flex items-center bg-gray-900 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{
                        backgroundImage: "url('/images/peso.jpg')",
                    }}
                />
                <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
                    <div className="flex items-center gap-4 mb-4">
                        <Briefcase
                            className="text-yellow-400"
                            size={44}
                            strokeWidth={2.5}
                        />
                        <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">
                            Public Employment Service
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl text-gray-100 max-w-2xl drop-shadow-sm leading-relaxed ml-[60px]">
                        Connecting Cabuyeños to the right opportunities. Explore
                        local job openings, training programs, and career
                        guidance.
                    </p>
                </div>
            </div>

            {/* 4. MAIN CONTENT AREA */}
            <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
                {/* Introduction & Services Grid */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-3 relative inline-block">
                            Our Core Services
                            <div className="flex h-1 w-24 absolute -bottom-4 left-1/2 -translate-x-1/2">
                                <div className="w-1/3 h-full bg-blue-600"></div>
                                <div className="w-1/3 h-full bg-yellow-400"></div>
                                <div className="w-1/3 h-full bg-red-600"></div>
                            </div>
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PESO_SERVICES.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300"
                            >
                                <div
                                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${service.bg} ${service.color}`}
                                >
                                    <service.icon size={32} strokeWidth={2} />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Job Openings Section */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="p-8 md:p-10 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Latest Job Openings
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Updated weekly in partnership with local
                                employers.
                            </p>
                        </div>
                        <div className="w-full md:w-auto flex items-center bg-gray-50 rounded-xl border border-gray-200 px-4 py-2">
                            <Search className="text-gray-400 mr-3" size={20} />
                            <input
                                type="text"
                                placeholder="Search roles or companies..."
                                className="w-full md:w-64 outline-none text-gray-700 bg-transparent py-2 text-sm"
                            />
                        </div>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {JOB_OPENINGS.map((job) => (
                            <div
                                key={job.id}
                                className="p-6 md:p-8 hover:bg-gray-50 transition-colors flex flex-col lg:flex-row justify-between lg:items-center gap-6 group"
                            >
                                <div className="flex gap-5 items-start">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                        <Briefcase size={24} strokeWidth={2} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
                                            {job.title}
                                        </h4>
                                        <p className="text-gray-600 font-medium mb-3">
                                            {job.company}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-3 md:gap-5 text-sm text-gray-500">
                                            <span className="flex items-center gap-1.5">
                                                <MapPin size={16} />{" "}
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={16} /> Posted{" "}
                                                {job.posted}
                                            </span>
                                            <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-auto w-full pt-4 lg:pt-0">
                                    <button className="w-full lg:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition shadow-sm flex items-center justify-center gap-2">
                                        Apply Now <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 bg-gray-50 text-center border-t border-gray-100">
                        <button className="text-blue-600 font-bold hover:underline">
                            View All Job Openings
                        </button>
                    </div>
                </div>
            </div>

            {/* 5. FOOTER */}
            <footer className="bg-[#1E3A5F] text-white pt-16 pb-10 px-6 relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <img
                                src="/images/cab.png"
                                alt="Logo"
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

                    {/* Contact Us Section */}
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

                {/* Bottom Copyright Bar */}
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

                <div className="absolute bottom-0 left-0 w-full h-1.5 flex">
                    <div className="w-1/3 h-full bg-blue-600"></div>
                    <div className="w-1/3 h-full bg-yellow-400"></div>
                    <div className="w-1/3 h-full bg-red-600"></div>
                </div>
            </footer>
        </div>
    );
}
