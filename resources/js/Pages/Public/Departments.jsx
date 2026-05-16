import React, { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Globe,
    Menu,
    X,
    Landmark,
    Shield,
    HeartPulse,
    Users,
    Briefcase,
    HardHat,
    Leaf,
    FileText,
    Scale,
} from "lucide-react";

// --- DEPARTMENTS DATA ---
const DEPARTMENTS = [
    {
        id: "ocm",
        badge: "OCM",
        title: "Office of the City Mayor",
        desc: "Serves as the chief executive office of the city government, overseeing all administrative and executive functions.",
        email: "mayor@cabuyao.gov.ph",
        icon: Landmark,
    },
    {
        id: "cdrrmo",
        badge: "CDRRMO",
        title: "City Disaster Risk Reduction and Management Office",
        desc: "Responsible for setting the direction, development, implementation and coordination of disaster risk management programs.",
        email: "cdrrmo@cabuyao.gov.ph",
        icon: Shield,
    },
    {
        id: "cho",
        badge: "CHO",
        title: "City Health Office",
        desc: "Provides comprehensive public health services, medical care, and implements health programs for the community.",
        email: "health@cabuyao.gov.ph",
        icon: HeartPulse,
    },
    {
        id: "cswdo",
        badge: "CSWDO",
        title: "City Social Welfare and Development Office",
        desc: "Formulates and implements social welfare programs for marginalized and vulnerable sectors of the city.",
        email: "cswdo@cabuyao.gov.ph",
        icon: Users,
    },
    {
        id: "bplo",
        badge: "BPLO",
        title: "Business Permits and Licensing Office",
        desc: "Processes and issues business permits, licenses, and ensures compliance with local business regulations.",
        email: "bplo@cabuyao.gov.ph",
        icon: Briefcase,
    },
    {
        id: "ceo",
        badge: "CEO",
        title: "City Engineering Office",
        desc: "Manages public infrastructure projects, building permits, and maintains city-owned facilities and roads.",
        email: "engineering@cabuyao.gov.ph",
        icon: HardHat,
    },
    {
        id: "cenro",
        badge: "CENRO",
        title: "City Environment and Natural Resources Office",
        desc: "Implements solid waste management, environmental protection, and conservation programs.",
        email: "cenro@cabuyao.gov.ph",
        icon: Leaf,
    },
    {
        id: "cto",
        badge: "CTO",
        title: "City Treasurer's Office",
        desc: "Collects local taxes, fees, and charges, and manages the financial resources of the city government.",
        email: "treasury@cabuyao.gov.ph",
        icon: FileText,
    },
    {
        id: "clo",
        badge: "CLO",
        title: "City Legal Office",
        desc: "Provides legal counsel, drafts ordinances, and represents the city government in legal matters.",
        email: "legal@cabuyao.gov.ph",
        icon: Scale,
    },
];

export default function Departments() {
    // --- STATES ---
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                    {/* ACTIVE STATE: DEPARTMENTS */}
                    <a
                        href="/departments"
                        className="text-sm font-semibold text-red-600 bg-red-50 px-4 py-2 rounded-full"
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
                            className="text-sm font-medium text-gray-600 hover:text-red-600 transition"
                        >
                            About
                        </a>
                        <a
                            href="/departments"
                            className="text-sm font-semibold text-red-600 bg-red-50 px-6 py-2 rounded-full w-11/12 text-center"
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

            {/* 3. HERO BANNER */}
            <div className="relative w-full h-[300px] md:h-[400px] flex items-center bg-gray-900 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{
                        backgroundImage: "url('/images/cabuyao_disaster.jpg')",
                    }}
                />

                <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                        City Departments
                    </h2>
                    <p className="text-lg md:text-xl text-gray-100 max-w-2xl drop-shadow-md leading-relaxed">
                        Directory of local government offices dedicated to
                        serving the citizens of Cabuyao.
                    </p>
                </div>
            </div>

            {/* 4. DEPARTMENTS GRID */}
            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {DEPARTMENTS.map((dept) => (
                        <div
                            key={dept.id}
                            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
                        >
                            {/* Card Header (Icon & Badge) */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                                    <dept.icon size={24} strokeWidth={2} />
                                </div>
                                <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                                    {dept.badge}
                                </span>
                            </div>

                            {/* Card Body */}
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                                    {dept.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {dept.desc}
                                </p>
                            </div>

                            {/* Card Footer (Email Link) */}
                            <div className="mt-auto">
                                <a
                                    href={`mailto:${dept.email}`}
                                    className="text-blue-600 text-sm font-medium hover:underline truncate block"
                                >
                                    {dept.email}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 5. FOOTER (Exact copy from Home/About) */}
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
