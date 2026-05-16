import React, { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Globe,
    Menu,
    X,
    Clock,
    Send,
    ChevronDown,
} from "lucide-react";

export default function Contact() {
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

                {/* DESKTOP MENU */}
                <div className="hidden xl:flex items-center gap-6">
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

                    {/* Dropdown: E-Services */}
                    <div className="relative group py-4">
                        <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-red-600 transition">
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
                                className="block px-4 py-3 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 border-b border-gray-50"
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
                                className="block px-4 py-3 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 border-b border-gray-50"
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
                    {/* ACTIVE STATE: CONTACT */}
                    <a
                        href="/contact"
                        className="text-sm font-semibold text-red-600 bg-red-50 px-4 py-2 rounded-full"
                    >
                        Contact
                    </a>
                </div>

                {/* MOBILE MENU BUTTON */}
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
                                    className={`transition-transform duration-300 ${
                                        openMobileDropdown === "city"
                                            ? "rotate-180 text-red-600"
                                            : "text-gray-400"
                                    }`}
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
                                    className={`transition-transform duration-300 ${
                                        openMobileDropdown === "gov"
                                            ? "rotate-180 text-red-600"
                                            : "text-gray-400"
                                    }`}
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

                        {/* Expandable: E-Services */}
                        <div>
                            <button
                                onClick={() => toggleMobileDropdown("services")}
                                className="w-full px-6 py-4 flex items-center justify-between text-sm font-semibold text-gray-800 hover:text-red-600 transition-colors border-b border-gray-50"
                            >
                                E-Services
                                <ChevronDown
                                    size={18}
                                    className={`transition-transform duration-300 ${
                                        openMobileDropdown === "services"
                                            ? "rotate-180 text-red-600"
                                            : "text-gray-400"
                                    }`}
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
                                        className="px-10 py-3 text-sm text-gray-600 hover:text-red-600 transition-colors"
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
                        {/* ACTIVE STATE: CONTACT */}
                        <a
                            href="/contact"
                            className="px-6 py-4 text-sm font-semibold text-red-600 bg-red-50 border-l-4 border-red-600 transition-colors"
                        >
                            Contact
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
                        backgroundImage: "url('/images/bagong_cabuyao.jpg')",
                    }}
                />

                <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                        Contact Us
                    </h2>
                    <p className="text-lg md:text-xl text-gray-100 max-w-2xl drop-shadow-md leading-relaxed">
                        Get in touch with the City Government of Cabuyao.{" "}
                        <br className="hidden md:block" />
                        We are here to assist you.
                    </p>
                </div>
            </div>

            {/* 4. MAIN CONTENT AREA */}
            <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* LEFT COLUMN: INFO & MAP */}
                    <div className="lg:col-span-1 flex flex-col gap-8">
                        {/* Info Card */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-8">
                                City Hall Information
                            </h3>

                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm mb-1">
                                            Address
                                        </p>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            Cabuyao City Hall
                                            <br />
                                            F.B. Bailon Street, Brgy. Sala
                                            <br />
                                            City of Cabuyao, Laguna 4025
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm mb-1">
                                            Phone
                                        </p>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            (049) 531-2829
                                            <br />
                                            Emergency: (049) 531-2222
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm mb-1">
                                            Email
                                        </p>
                                        <p className="text-blue-600 hover:underline text-sm leading-relaxed cursor-pointer">
                                            info@cabuyao.gov.ph
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm mb-1">
                                            Office Hours
                                        </p>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            Monday - Friday
                                            <br />
                                            8:00 AM - 5:00 PM
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Map Card */}
                        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm relative h-64 group cursor-pointer">
                            <img
                                src="/images/map-placeholder.jpg"
                                alt="Map Location"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                onError={(e) =>
                                    (e.target.src =
                                        "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800")
                                }
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                <button className="bg-white/90 backdrop-blur text-gray-900 font-bold text-sm px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 hover:bg-white transition-colors">
                                    <MapPin
                                        size={18}
                                        className="text-blue-600"
                                    />
                                    View on Map
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: CONTACT FORM */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm h-full">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">
                                Send us a Message
                            </h3>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Full Name */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Juan Dela Cruz"
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm text-gray-800 placeholder-gray-400"
                                            required
                                        />
                                    </div>

                                    {/* Email Address */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="juan@example.com"
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm text-gray-800 placeholder-gray-400"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                                        Subject / Department *
                                    </label>
                                    <select
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm text-gray-800 appearance-none cursor-pointer"
                                        required
                                        defaultValue=""
                                    >
                                        <option
                                            value=""
                                            disabled
                                            className="text-gray-400"
                                        >
                                            Select a subject...
                                        </option>
                                        <option value="general">
                                            General Inquiry
                                        </option>
                                        <option value="mayor">
                                            Office of the Mayor
                                        </option>
                                        <option value="bplo">
                                            Business Permits (BPLO)
                                        </option>
                                        <option value="drrmo">
                                            Disaster Management (CDRRMO)
                                        </option>
                                        <option value="health">
                                            City Health Office
                                        </option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                                        Message *
                                    </label>
                                    <textarea
                                        rows="6"
                                        placeholder="How can we help you?"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm text-gray-800 placeholder-gray-400 resize-none"
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <button
                                        type="button" // Change to submit if wrapping in actual form logic
                                        className="bg-[#0f4a96] hover:bg-[#0c3975] text-white text-sm font-medium px-8 py-3.5 rounded-xl transition-colors duration-200 shadow-sm flex items-center gap-2"
                                    >
                                        Send Message
                                        <Send size={16} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. FOOTER */}
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
                        © 2026 Municipality of Cabuyao. All rights reserved.
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
