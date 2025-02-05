// types.ts
export interface Project {
    title: string
    description: string
    image: string
  }
  
  export interface Technology {
    name: string
    icon: React.ReactNode
  }
  
  export interface SocialLink {
    name: string
    href: string
    icon: string
  }