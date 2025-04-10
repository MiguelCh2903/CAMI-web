interface headerProps {
    href: string;  // URL or anchor for the navigation item
    label: string; // Translation key for the navigation label
}

export const navItems: headerProps[] = [
    { href: '#hero', label: 'nav.home' },
    { href: '#projects', label: 'nav.projects' },
    { href: '#blog', label: 'nav.blog' },
    { href: '#about', label: 'nav.about' },
]