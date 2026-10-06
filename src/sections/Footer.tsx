import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"

const footerLinks = [
  {
    title: 'GitHub',
    href: 'https://github.com/Chuda-Mani',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/chuda_mani_05/',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/chudamanikakarla/',
  },
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100084113611972',
  },
]

export const Footer = () => {
  return <footer className="relative">
  
    <div className="container">
      <div className="border-t border-white/15 py-6  flex flex-col items-center gap-8">
        <div className="text-white/40">&copy; {new Date().getFullYear()} Chuda Mani Kakarla. All rights reserved.</div>
        <div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map(link => (
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition duration-300"
                key={link.title}
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  </footer>;
};
