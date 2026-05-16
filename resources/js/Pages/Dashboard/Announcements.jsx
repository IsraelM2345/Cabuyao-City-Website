import { useState, useEffect } from "react";
import { Layout } from "../../Components/Sidebar";
import {
    Plus,
    Eye,
    Pencil,
    Trash2,
    Search,
    X,
    CheckCircle2,
} from "lucide-react";

// Updated with precise dark mode colors for a premium UI feel
const CATEGORY_COLORS = {
    "Weather Alert":
        "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    "Relief Operations":
        "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    Announcement:
        "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
    Evacuation:
        "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    Infrastructure:
        "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
};

const CATEGORIES = [
    "Weather Alert",
    "Relief Operations",
    "Announcement",
    "Evacuation",
    "Infrastructure",
];

// Initial static data renamed to act as default state
const INITIAL_ANNOUNCEMENTS = [
    {
        id: 1,
        title: "Typhoon Baesyang Update:",
        body: "PAGASA has raised Tropical Cyclone Signal No. 2. All residents are advised to stay indoors.",
        category: "Weather Alert",
        date: "2026-05-15",
        img: "https://images.unsplash.com/photo-1504608524841-42584120d693?w=60&h=60&fit=crop",
    },
    {
        id: 2,
        title: "City Government Distributes Relief",
        body: "Mayor's office spearheaded the distribution of 500 food packs in Barangay Mamatid.",
        category: "Relief Operations",
        date: "2026-05-14",
        img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=60&h=60&fit=crop",
    },
    {
        id: 3,
        title: "Suspension of Classes",
        body: "Due to continuous heavy rains, classes in all levels are suspended tomorrow.",
        category: "Announcement",
        date: "2026-05-14",
        img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=60&h=60&fit=crop",
    },
];

// Helper: Toast Notification Component
function Toast({ message, onClose }) {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed top-6 right-6 z-50 animate-in fade-in slide-in-from-top-5 duration-300">
            <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-xl rounded-xl p-4 flex items-center gap-3">
                <CheckCircle2 className="text-teal-500" size={20} />
                <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
                    {message}
                </p>
                <button
                    onClick={onClose}
                    className="ml-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
}

export default function Announcements() {
    // 1. Data States
    const [announcements, setAnnouncements] = useState(INITIAL_ANNOUNCEMENTS);
    const [search, setSearch] = useState("");

    // 2. UI States
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [viewingAnnouncement, setViewingAnnouncement] = useState(null); // Added state for View Modal

    // 3. Form State
    const defaultForm = {
        title: "",
        category: "Announcement",
        date: new Date().toISOString().split("T")[0],
        img: "",
        body: "",
    };
    const [formData, setFormData] = useState(defaultForm);

    // Filtering Logic
    const filtered = announcements.filter((a) =>
        a.title.toLowerCase().includes(search.toLowerCase()),
    );

    // Form Handlers
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingId(null);
        setFormData(defaultForm);
    };

    const handleEdit = (announcement) => {
        setFormData({
            title: announcement.title,
            category: announcement.category,
            date: announcement.date,
            img: announcement.img,
            body: announcement.body,
        });
        setEditingId(announcement.id);
        setIsModalOpen(true);
    };

    // Action Handlers
    const handleSubmit = (e) => {
        e.preventDefault();

        // Fallback image if user leaves URL blank
        const finalImg =
            formData.img.trim() === ""
                ? "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=60&h=60&fit=crop"
                : formData.img;

        if (editingId) {
            // EDIT EXISTING RECORD
            setAnnouncements(
                announcements.map((a) =>
                    a.id === editingId
                        ? {
                              ...a,
                              title: formData.title,
                              category: formData.category,
                              date: formData.date,
                              img: finalImg,
                              body: formData.body,
                          }
                        : a,
                ),
            );
            setToastMessage("Announcement successfully updated.");
        } else {
            // ADD NEW RECORD
            const newId =
                announcements.length > 0
                    ? Math.max(...announcements.map((a) => a.id)) + 1
                    : 1;
            const newRecord = {
                id: newId,
                title: formData.title,
                category: formData.category,
                date: formData.date,
                img: finalImg,
                body: formData.body,
            };

            setAnnouncements([newRecord, ...announcements]);
            setToastMessage("Announcement successfully published.");
        }

        handleCloseModal();
    };

    const handleDelete = (idToRemove) => {
        if (
            window.confirm("Are you sure you want to delete this announcement?")
        ) {
            setAnnouncements(announcements.filter((a) => a.id !== idToRemove));
            setToastMessage("Announcement deleted successfully.");
        }
    };

    return (
        <Layout
            currentPage="Announcements"
            title="Announcements"
            subtitle="Manage news and public announcements."
        >
            {/* Notification Toast */}
            {toastMessage && (
                <Toast
                    message={toastMessage}
                    onClose={() => setToastMessage(null)}
                />
            )}

            {/* View Modal Overlay */}
            {viewingAnnouncement && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 dark:bg-gray-900/80 backdrop-blur-sm transition-all">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                                View Announcement
                            </h2>
                            <button
                                onClick={() => setViewingAnnouncement(null)}
                                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6">
                            <img
                                src={viewingAnnouncement.img}
                                alt={viewingAnnouncement.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <div className="flex items-center gap-3 mb-3">
                                <span
                                    className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${CATEGORY_COLORS[viewingAnnouncement.category] || CATEGORY_COLORS["Announcement"]}`}
                                >
                                    {viewingAnnouncement.category}
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Published: {viewingAnnouncement.date}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {viewingAnnouncement.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap text-sm">
                                {viewingAnnouncement.body}
                            </p>
                        </div>
                        <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-700 flex justify-end">
                            <button
                                onClick={() => setViewingAnnouncement(null)}
                                className="px-5 py-2.5 rounded-lg text-sm font-medium bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Add / Edit Modal overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 dark:bg-gray-900/80 backdrop-blur-sm transition-all">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                                {editingId
                                    ? "Edit Announcement"
                                    : "Create New Announcement"}
                            </h2>
                            <button
                                onClick={handleCloseModal}
                                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                                        Announcement Title
                                    </label>
                                    <input
                                        required
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-100 dark:bg-gray-700 border-transparent text-gray-900 dark:text-white rounded-lg px-4 py-2.5 text-sm focus:bg-white dark:focus:bg-gray-800 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                                        placeholder="e.g. Evacuation Center Update"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                                        Category
                                    </label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-100 dark:bg-gray-700 border-transparent text-gray-900 dark:text-white rounded-lg px-4 py-2.5 text-sm focus:bg-white dark:focus:bg-gray-800 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                                    >
                                        {CATEGORIES.map((cat) => (
                                            <option key={cat} value={cat}>
                                                {cat}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                                        Date Published
                                    </label>
                                    <input
                                        required
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-100 dark:bg-gray-700 border-transparent text-gray-900 dark:text-white dark:[color-scheme:dark] rounded-lg px-4 py-2.5 text-sm focus:bg-white dark:focus:bg-gray-800 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                                        Image URL (Optional)
                                    </label>
                                    <input
                                        type="url"
                                        name="img"
                                        value={formData.img}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-100 dark:bg-gray-700 border-transparent text-gray-900 dark:text-white rounded-lg px-4 py-2.5 text-sm focus:bg-white dark:focus:bg-gray-800 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                                        placeholder="https://images.unsplash.com/..."
                                    />
                                </div>

                                <div className="md:col-span-2 mb-2">
                                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                                        Announcement Content
                                    </label>
                                    <textarea
                                        required
                                        name="body"
                                        rows="4"
                                        value={formData.body}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-100 dark:bg-gray-700 border-transparent text-gray-900 dark:text-white rounded-lg px-4 py-2.5 text-sm focus:bg-white dark:focus:bg-gray-800 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all resize-none"
                                        placeholder="Enter the full details of the announcement here..."
                                    ></textarea>
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="px-5 py-2.5 rounded-lg text-sm font-medium bg-red-500 hover:bg-red-600 text-white transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2.5 rounded-lg text-sm font-medium bg-teal-500 hover:bg-teal-600 text-white transition-colors"
                                >
                                    {editingId ? "Save Changes" : "Publish"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition-colors">
                {/* Toolbar */}
                <div className="flex flex-col sm:flex-row items-center justify-between p-5 border-b border-gray-100 dark:border-gray-700 gap-4 transition-colors">
                    <div className="relative w-full sm:w-auto">
                        <Search
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                            size={15}
                        />
                        <input
                            type="text"
                            placeholder="Search announcements..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full sm:w-72 pl-9 pr-4 py-2.5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                        />
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-white text-sm font-medium transition-all hover:opacity-90 active:scale-[0.98] w-full sm:w-auto shadow-sm"
                        style={{
                            background:
                                "linear-gradient(90deg, #0d9488, #0f766e)",
                        }}
                    >
                        <Plus size={16} />
                        New Announcement
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto min-h-[400px]">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-gray-900/50 text-left transition-colors">
                                <th className="px-5 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                    Title
                                </th>
                                <th className="px-5 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                    Category
                                </th>
                                <th className="px-5 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                    Date Published
                                </th>
                                <th className="px-5 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-gray-700/60 transition-colors">
                            {filtered.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan="4"
                                        className="px-5 py-10 text-center text-gray-500 dark:text-gray-400"
                                    >
                                        No announcements found.
                                    </td>
                                </tr>
                            ) : (
                                filtered.map((a) => (
                                    <tr
                                        key={a.id}
                                        className="hover:bg-gray-50/60 dark:hover:bg-gray-700/50 transition-colors"
                                    >
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={a.img}
                                                    alt=""
                                                    className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                                                />
                                                <div>
                                                    <p className="font-medium text-gray-800 dark:text-gray-100 text-sm transition-colors">
                                                        {a.title}
                                                    </p>
                                                    <p className="text-xs text-gray-400 dark:text-gray-500 truncate max-w-xs transition-colors">
                                                        {a.body}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4">
                                            <span
                                                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${CATEGORY_COLORS[a.category] || CATEGORY_COLORS["Announcement"]}`}
                                            >
                                                {a.category}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-gray-500 dark:text-gray-400 text-sm transition-colors">
                                            {a.date}
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-1.5">
                                                {/* TRIGGER VIEW ACTION */}
                                                <button
                                                    onClick={() =>
                                                        setViewingAnnouncement(
                                                            a,
                                                        )
                                                    }
                                                    className="p-1.5 rounded hover:bg-teal-50 dark:hover:bg-teal-900/30 text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                                                >
                                                    <Eye size={15} />
                                                </button>
                                                {/* TRIGGER EDIT ACTION */}
                                                <button
                                                    onClick={() =>
                                                        handleEdit(a)
                                                    }
                                                    className="p-1.5 rounded hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                >
                                                    <Pencil size={15} />
                                                </button>
                                                {/* TRIGGER DELETE ACTION */}
                                                <button
                                                    onClick={() =>
                                                        handleDelete(a.id)
                                                    }
                                                    className="p-1.5 rounded hover:bg-red-50 dark:hover:bg-red-900/30 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                                                >
                                                    <Trash2 size={15} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="px-5 py-3 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 transition-colors">
                    <span>
                        Showing {filtered.length} of {announcements.length}{" "}
                        entries
                    </span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1.5 rounded border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            Previous
                        </button>
                        <button className="px-3 py-1.5 rounded border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
