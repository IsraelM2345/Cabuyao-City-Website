import React, { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Globe,
    Menu,
    X,
    Tag,
    Calendar,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

// --- NEWS DATA ---
const NEWS_ARTICLES = [
    {
        id: 1,
        category: "Technology",
        date: "May 15, 2026",
        title: "City Government Launches New E-Governance Portal",
        excerpt:
            "The City of Cabuyao officially launches its integrated web portal to streamline public services and disaster management operations. The new system aims to provide faster transactions and improved accessibility for all Cabuyeños.",
        image: "/images/news-portal.png",
    },
    {
        id: 2,
        category: "DRRM",
        date: "May 10, 2026",
        title: "Pre-Emptive Evacuation Guidelines Released for Typhoon Season",
        excerpt:
            "CDRRMO releases updated guidelines and designated evacuation centers in preparation for the upcoming typhoon season. Residents in low-lying areas are advised to register their households immediately.",
        image: "/images/news-typhoon.png",
    },
    {
        id: 3,
        category: "Business",
        date: "May 05, 2026",
        title: "Business Permit Renewal Deadline Extended",
        excerpt:
            "The City Mayor has approved the extension of business permit renewals without penalties until the end of the month to accommodate the transition to the new online payment system.",
        image: "/images/news-business.jpg",
    },
    {
        id: 4,
        category: "Health",
        date: "April 28, 2026",
        title: "City Health Office Conducts Free Medical Mission",
        excerpt:
            "Over 500 residents benefited from the free medical and dental mission conducted by the City Health Office in Barangay Banay-Banay last weekend, providing essential care to the community.",
        image: "/images/news-health.jpg",
    },
    {
        id: 5,
        category: "Education",
        date: "April 20, 2026",
        title: "New Scholarship Grants Open for College Students",
        excerpt:
            "The City Government is now accepting applications for the Iskolar ng Cabuyao program for the academic year 2026-2027. Apply online through the E-Governance portal.",
        image: "/images/news-scholarship.jpg",
    },
];

const CATEGORIES = [
    "All",
    "DRRM",
    "Technology",
    "Health",
    "Education",
    "Business",
];

export default function News() {
    // --- STATES ---
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState("All");

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
                    {/* ACTIVE STATE: NEWS */}
                    <a
                        href="/news"
                        className="text-sm font-semibold text-red-600 bg-red-50 px-4 py-2 rounded-full"
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
                            className="text-sm font-semibold text-red-600 bg-red-50 px-6 py-2 rounded-full w-11/12 text-center"
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

            {/* 3. HERO BANNER */}
            <div className="relative w-full h-[250px] md:h-[350px] flex items-center bg-gray-900 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{
                        backgroundImage: "url('/images/news.jpg')",
                    }}
                />

                <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                        News & Announcements
                    </h2>
                    <p className="text-lg md:text-xl text-gray-100 max-w-2xl drop-shadow-md leading-relaxed">
                        Stay updated with the latest official news, advisories,
                        and events from the City Government.
                    </p>
                </div>
            </div>

            {/* 4. MAIN CONTENT AREA */}
            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                {/* Search and Filters */}
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-4 lg:p-6 rounded-2xl shadow-sm border border-gray-100 mb-10">
                    <div className="w-full md:w-1/3">
                        <input
                            type="text"
                            placeholder="Search news..."
                            className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm text-gray-800 placeholder-gray-400"
                        />
                    </div>

                    <div className="w-full md:w-2/3 flex overflow-x-auto gap-2 pb-2 md:pb-0 justify-start md:justify-end no-scrollbar">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                                    activeCategory === cat
                                        ? "bg-[#0f4a96] text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* News List */}
                <div className="space-y-8">
                    {NEWS_ARTICLES.map((article) => (
                        <div
                            key={article.id}
                            className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row group cursor-pointer"
                        >
                            {/* Article Image - FIXED UNIFORM SIZE */}
                            <div className="w-full md:w-[320px] lg:w-[400px] h-60 md:h-[280px] flex-shrink-0 relative overflow-hidden bg-gray-100">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) =>
                                        (e.target.src =
                                            "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=800")
                                    }
                                />
                            </div>

                            {/* Article Content */}
                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 mb-3">
                                    <span className="flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
                                        <Tag size={12} strokeWidth={2.5} />{" "}
                                        {article.category}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                                        <Calendar size={14} /> {article.date}
                                    </span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors leading-tight line-clamp-2">
                                    {article.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {article.excerpt}
                                </p>

                                {/* mt-auto pushes the button to the bottom, ensuring equal alignment */}
                                <div className="mt-auto pt-2">
                                    <a
                                        href="#"
                                        className="text-[#0f4a96] font-bold text-sm flex items-center gap-1.5 group-hover:gap-2 transition-all w-max"
                                    >
                                        Read Full Article{" "}
                                        <ArrowRight
                                            size={16}
                                            strokeWidth={2.5}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-16 flex justify-center items-center gap-2">
                    <button
                        className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-400 hover:bg-gray-100 transition-colors"
                        disabled
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <button className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 font-bold flex items-center justify-center">
                        1
                    </button>
                    <button className="w-10 h-10 rounded-lg text-gray-600 font-medium hover:bg-gray-100 transition-colors flex items-center justify-center">
                        2
                    </button>
                    <button className="w-10 h-10 rounded-lg text-gray-600 font-medium hover:bg-gray-100 transition-colors flex items-center justify-center">
                        3
                    </button>

                    <button className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* 5. FOOTER (Exact copy from previous pages) */}
            <footer className="bg-[#1E3A5F] text-white pt-16 pb-10 px-6 relative mt-10">
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
                                "Department",
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
                        © 2026 Municipality of Cabuyao. All rights reserved.
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
