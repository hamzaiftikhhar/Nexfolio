
// components/layouts/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', href: '#', icon: 'github' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  ]

  return (
    <footer className="max-w-4xl mx-auto py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="mb-6">
        I'm currently looking to join a cross-functional team that values improving people's lives
        through accessible design, or have a project in mind? Let's connect!
      </p>
      <a 
        href="mailto:Stefanospelgroms32@gmail.com" 
        className="text-purple-400 hover:text-purple-300 transition-colors"
      >
        Stefanospelgroms32@gmail.com
      </a>
      
      <div className="flex justify-center space-x-6 mt-8">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <span className="sr-only">{link.name}</span>
            {/* Add your social icons here */}
          </Link>
        ))}
      </div>
      
      <div className="mt-8 text-gray-400 text-sm">
        <p>© 2024. All rights reserved.</p>
      </div>
    </footer>
  )
}