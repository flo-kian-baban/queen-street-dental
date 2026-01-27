"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/lib/routes";

interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
}

export default function MainNav() {
    const items = NAV_ITEMS as NavItem[];
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);

    const toggleDropdown = (label: string) => {
        if (activeDropdown === label) {
            setActiveDropdown(null);
            setActiveSubDropdown(null);
        } else {
            setActiveDropdown(label);
            setActiveSubDropdown(null);
        }
    };

    const toggleSubDropdown = (label: string) => {
        if (activeSubDropdown === label) {
            setActiveSubDropdown(null);
        } else {
            setActiveSubDropdown(label);
        }
    };

    return (
        <nav className="border-b-3 border-accent bg-white sticky top-0 z-50 shadow-sm ">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="md:hidden">
                        <Image
                            src="https://s16736.pcdn.co/wp-content/themes/elvisfilo/assets/images/logo-small.png"
                            alt="Logo Small"
                            width={50}
                            height={50}
                            className="h-10 w-auto"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8 w-full justify-center">
                        {items.map((item) => (
                            <div key={item.label} className="relative group">
                                <Link
                                    href={item.href}
                                    className="flex items-center text-gray-700 hover:text-accent font-medium py-8 text-sm uppercase tracking-wide transition-colors"
                                >
                                    {item.label}
                                    {item.children && (
                                        <ChevronDown className="ml-1 w-4 h-4 text-gray-400 group-hover:text-accent" />
                                    )}
                                </Link>

                                {/* Dropdown Menu */}
                                {item.children && (
                                    <div className={`absolute top-full left-1/2 -translate-x-1/2 ${item.label === 'Treatments' ? 'w-[900px]' : 'w-64'} bg-white shadow-xl border-t-2 border-accent opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0`}>
                                        {item.label === 'Treatments' ? (
                                            <div className="p-8 grid grid-cols-4 gap-8">
                                                {item.children.map((category: NavItem) => (
                                                    <div key={category.label} className="space-y-3">
                                                        <Link
                                                            href={category.href}
                                                            className="block text-xs font-bold text-gray-900 border-b border-gray-100 pb-1 hover:text-accent transition-colors tracking-wider uppercase"
                                                        >
                                                            {category.label}
                                                        </Link>
                                                        {category.children && (
                                                            <ul className="space-y-1.5">
                                                                {category.children.slice(0, 4).map((t: NavItem) => (
                                                                    <li key={t.label}>
                                                                        <Link
                                                                            href={t.href}
                                                                            className="text-[11px] text-gray-500 hover:text-accent transition-colors block leading-relaxed"
                                                                        >
                                                                            {t.label}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                                {category.children.length > 4 && (
                                                                    <li>
                                                                        <Link
                                                                            href={category.href}
                                                                            className="text-[10px] text-accent font-semibold hover:underline"
                                                                        >
                                                                            + {category.children.length - 4} more
                                                                        </Link>
                                                                    </li>
                                                                )}
                                                            </ul>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <ul className="py-2">
                                                {item.children.map((child: NavItem) => (
                                                    <li key={child.label}>
                                                        <Link
                                                            href={child.href}
                                                            className="block px-6 py-3 text-sm text-gray-600 hover:bg-off-white hover:text-accent border-b border-gray-50 last:border-b-0"
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Drawer */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 absolute w-full left-0 shadow-lg max-h-[80vh] overflow-y-auto">
                    <ul className="py-4">
                        {items.map((item) => (
                            <li key={item.label} className="border-b border-gray-100 last:border-0">
                                <div className="flex justify-between items-center px-6 py-4">
                                    {item.href && item.href !== "#" ? (
                                        <Link
                                            href={item.href}
                                            className="text-gray-800 font-medium hover:text-accent uppercase text-xs tracking-wider"
                                            onClick={() => !item.children && setIsOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <span className="text-gray-800 font-medium uppercase text-xs tracking-wider">
                                            {item.label}
                                        </span>
                                    )}
                                    {item.children && (
                                        <button
                                            onClick={() => toggleDropdown(item.label)}
                                            className="p-2 text-gray-500"
                                        >
                                            <ChevronDown
                                                className={`w-5 h-5 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                    )}
                                </div>

                                {/* Mobile Submenu */}
                                {item.children && activeDropdown === item.label && (
                                    <ul className="bg-gray-50">
                                        {item.children.map((child: NavItem) => (
                                            <li key={child.label} className="border-t border-gray-100 first:border-t-0">
                                                <div className="flex justify-between items-center px-8 py-3">
                                                    <Link
                                                        href={child.href}
                                                        className="text-sm text-gray-600 hover:text-accent font-medium"
                                                        onClick={() => !child.children && setIsOpen(false)}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                    {child.children && (
                                                        <button
                                                            onClick={() => toggleSubDropdown(child.label)}
                                                            className="p-1 text-gray-400"
                                                        >
                                                            <ChevronDown
                                                                className={`w-4 h-4 transition-transform ${activeSubDropdown === child.label ? "rotate-180" : ""
                                                                    }`}
                                                            />
                                                        </button>
                                                    )}
                                                </div>

                                                {/* Mobile Nested Submenu */}
                                                {child.children && activeSubDropdown === child.label && (
                                                    <ul className="bg-white px-10 py-2 space-y-2">
                                                        {child.children.map((grandchild: NavItem) => (
                                                            <li key={grandchild.label}>
                                                                <Link
                                                                    href={grandchild.href}
                                                                    className="text-xs text-gray-500 hover:text-accent flex items-center py-1"
                                                                    onClick={() => setIsOpen(false)}
                                                                >
                                                                    <div className="w-1 h-1 bg-gray-300 rounded-full mr-2" />
                                                                    {grandchild.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
