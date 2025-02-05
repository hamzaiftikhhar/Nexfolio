
// components/layouts/Header.tsx
export default function Header() {
  return (
    <header className="flex justify-between items-center p-6">
      <div className="text-2xl font-bold">τ</div>
      <nav className="space-x-6">
        <a href="/" className="text-gray-200 hover:text-purple-400">Home</a>
        <a href="/about" className="text-gray-200 hover:text-purple-400">About</a>
        <a href="/lab" className="text-gray-200 hover:text-purple-400">Lab</a>
      </nav>
    </header>
  )
}
// import Link from 'next/link';
// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navigationItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Lab', path: '/lab' },
//   ];

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A0B2E]/80 backdrop-blur-sm">
//       <nav className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <Link href="/" className="text-2xl font-bold">
//             ℥
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navigationItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.path}
//                 className="text-white hover:text-purple-400 transition-colors"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-white"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden absolute top-full left-0 right-0 bg-[#1A0B2E]/95 backdrop-blur-sm">
//             <div className="px-6 py-4 space-y-3">
//               {navigationItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.path}
//                   className="block text-white hover:text-purple-400 transition-colors"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;