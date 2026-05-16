import React, { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Globe,
    Menu,
    X,
    Map,
    Eye,
    Target,
    Clock,
} from "lucide-react";

export default function About() {
    // --- STATES ---
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                        href="/"
                        className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
                    >
                        Home
                    </a>
                    {/* ACTIVE STATE: ABOUT */}
                    <a
                        href="/about"
                        className="text-sm font-semibold text-red-600 bg-red-50 px-4 py-2 rounded-full"
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
                            className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            className="text-sm font-semibold text-red-600 bg-red-50 px-6 py-2 rounded-full w-11/12 text-center"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
                        >
                            Departments
                        </a>
                        <a
                            href="#"
                            className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
                        >
                            News
                        </a>
                        <a
                            href="#"
                            className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
                        >
                            DRRM
                        </a>
                        <a
                            href="#"
                            className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
                        >
                            FAQs
                        </a>
                        <a
                            href="#"
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

            {/* 3. ABOUT HERO BANNER */}
            <div className="relative w-full h-[300px] md:h-[400px] flex items-center bg-gray-900 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{
                        backgroundImage: "url('/images/cab-church.jpg')",
                    }}
                />
                <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
                        About Cabuyao
                    </h2>
                    <p className="text-lg md:text-xl text-gray-100 max-w-2xl drop-shadow-sm leading-relaxed">
                        Discover the rich history, vibrant culture, and
                        strategic vision of the Enterprise City of the
                        Philippines.
                    </p>
                </div>
            </div>

            {/* 4. CITY PROFILE SECTION */}
            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left side: Big Logo */}
                    <div className="flex justify-center order-2 lg:order-1">
                        <img
                            src="/images/cab.png"
                            alt="City of Cabuyao Seal"
                            className="w-72 h-72 lg:w-96 lg:h-96 object-contain rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white p-4"
                            onError={(e) =>
                                (e.target.src =
                                    "https://via.placeholder.com/400?text=LOGO")
                            }
                        />
                    </div>

                    {/* Right side: Profile Text */}
                    <div className="order-1 lg:order-2">
                        <div className="flex items-center gap-3 mb-6">
                            <Map
                                className="text-blue-700"
                                size={36}
                                strokeWidth={2}
                            />
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#0f172a]">
                                City Profile
                            </h2>
                        </div>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                Cabuyao, officially the City of Cabuyao, is a
                                1st class component city in the province of
                                Laguna, Philippines. According to the 2020
                                census, it has a population of 354,495 people.
                            </p>
                            <p>
                                Known as the "Enterprise City of the
                                Philippines," Cabuyao is home to a large
                                populace of migrants working in the city's
                                industrial estates. It houses several major
                                industrial parks, making it a vital economic hub
                                in the CALABARZON region.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. VISION & MISSION SECTION */}
            <div className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Vision Card */}
                    <div className="bg-[#f0f5ff] rounded-3xl p-10 lg:p-12 relative overflow-hidden">
                        {/* Large faded icon in background */}
                        <Eye
                            className="absolute -right-8 -bottom-8 text-blue-600 opacity-10"
                            size={200}
                            strokeWidth={1}
                        />
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-[#0e4b95] rounded-xl flex items-center justify-center mb-8 shadow-sm">
                                <Eye
                                    className="text-white"
                                    size={28}
                                    strokeWidth={2}
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Our Vision
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                "A globally competitive, resilient, and
                                sustainable Enterprise City of the Philippines,
                                governed by transparent, accountable, and
                                dynamic leaders, with God-loving, empowered, and
                                healthy citizenry living in a safe and
                                ecologically-balanced environment."
                            </p>
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div className="bg-[#fff1f2] rounded-3xl p-10 lg:p-12 relative overflow-hidden">
                        {/* Large faded icon in background */}
                        <Target
                            className="absolute -right-8 -bottom-8 text-red-600 opacity-10"
                            size={200}
                            strokeWidth={1}
                        />
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-[#e11d48] rounded-xl flex items-center justify-center mb-8 shadow-sm">
                                <Target
                                    className="text-white"
                                    size={28}
                                    strokeWidth={2}
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Our Mission
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                "To provide effective and efficient public
                                services, promote inclusive economic growth,
                                ensure environmental sustainability, and build
                                disaster-resilient communities through active
                                citizen participation and digital innovation."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 6. HISTORY SECTION */}
            <div className="max-w-7xl mx-auto px-6 pb-32">
                <div className="flex items-center gap-3 mb-8">
                    <Clock
                        className="text-blue-700"
                        size={32}
                        strokeWidth={2}
                    />
                    <h2 className="text-3xl font-bold text-[#0f172a]">
                        History of Cabuyao
                    </h2>
                </div>
                <div className="text-gray-600 text-lg leading-relaxed space-y-6">
                    <p>
                        The town of Cabuyao was once the center of the province
                        of Laguna. It was formerly known as "Tabuco," a large
                        territory that included the present-day cities of San
                        Pedro, Biñan, Santa Rosa, and Calamba.
                    </p>
                    <p>
                        The name "Cabuyao" is derived from the "Kabuyao" tree
                        (Citrus macroptera), a citrus tree whose fruit was used
                        by the natives as shampoo. Franciscan priests who
                        arrived in the area noticed the abundance of these trees
                        and eventually named the place after it.
                    </p>
                    <p>
                        On August 4, 2012, Cabuyao was converted into a
                        component city by virtue of Republic Act No. 10163,
                        ratified through a plebiscite. Today, it stands as a
                        testament to rapid urbanization and industrialization
                        while maintaining its rich cultural heritage.
                    </p>
                </div>
            </div>

            {/* 7. FOOTER (Exact copy from Home) */}
            <footer className="bg-[#1E3A5F] text-white pt-16 pb-10 px-6 relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
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
                                href="#"
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
                                href="#"
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
