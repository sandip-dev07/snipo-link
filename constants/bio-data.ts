export const BIO_DATA = {
  hero: {
    name: "Sandip Sarkar",
    image: "https://res.cloudinary.com/dcsouj6ix/image/upload/v1771001422/Generated_Image_December_06_2025_-_12_40AM_rgusne.webp",
    description: "I'm a full stack developer",
    totalFollowers: "",
    scrollThreshold: 0.1,
    socials: [
      { name: "YouTube", icon: "youtube", href: "#youtube" },
      { name: "Instagram", icon: "instagram", href: "#instagram" },
      { name: "Snapchat", icon: "snapchat", href: "#snapchat" },
      { name: "Facebook", icon: "facebook", href: "#facebook" },
      { name: "X", icon: "x", href: "#x" },
      { name: "TikTok", icon: "tiktok", href: "#tiktok" },
    ],
  },
  // SOCIAL GRID
  socialGrid: [
    {
      title: "Snapchat",
      image:
        "https://res.cloudinary.com/dcsouj6ix/image/upload/v1770805910/slugy_npzdqi.png",
      icon: "snapchat",
      iconClassName: "text-yellow-400",
      href: "#snapchat",
    },
    {
      title: "X",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop",
      icon: "x",
      href: "#x",
    },
    {
      title: "Instagram",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
      icon: "instagram",
      iconClassName: "text-pink-500",
      href: "#instagram",
    },
    {
      title: "Facebook",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop",
      icon: "facebook",
      iconClassName: "text-blue-600",
      href: "#facebook",
    },
    {
      title: "TikTok",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop",
      icon: "tiktok",
      href: "#tiktok",
    },
    {
      title: "Buy Merch Here",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
      icon: "link",
      href: "#merch",
    },
  ],
  // FEATURE
  feature: [
    {
      title: "IShowSpeed Learns Hockey with Cole Caufield",
      image:
        "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=1400&auto=format&fit=crop",
      href: "#hockey",
    },
    {
      title: "SPEED India VS Pakistan Cricket Match!",
      image:
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1400&auto=format&fit=crop",
      href: "#cricket",
    },
  ],
  // GALLERY
  gallery: [
    {
      alt: "Speed selfie with fans",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
    },
    {
      alt: "Speed with performers in black suits",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    },
    {
      alt: "Speed on football field",
      image:
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop",
    },
    {
      alt: "Speed posing with a friend outdoors",
      image:
        "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1200&auto=format&fit=crop",
    },
    {
      alt: "Speed posing with a friend indoors",
      image:
        "https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?q=80&w=687&auto=format&fit=crop",
    },
  ],
  // LINK CARD
  linkCard: [
    {
      title: "Sign up for Linkme",
      href: "https://linkme.example/signup",
      label: "linkme.example/signup",
      icon: "userPlus",
    },
    {
      title: "Watch latest YouTube video",
      href: "https://youtube.com/@speed",
      label: "youtube.com/@speed",
      icon: "youtube",
    },
    {
      title: "Shop official merch",
      href: "https://shop.example/official",
      label: "shop.example/official",
      icon: "shoppingBag",
    },
  ],
  // CONTACT
  contact: [
    {
      label: "Phone",
      value: "123456789",
      href: "tel:123456789",
      icon: "phone",
    },
    {
      label: "Website",
      value: "https://devalphaspace.in/",
      href: "https://devalphaspace.in/",
      icon: "globe",
    },
    {
      label: "Email",
      value: "sarkarsandip611@gmail.com",
      href: "mailto:sarkarsandip611@gmail.com",
      icon: "mail",
    },
  ],
  // FOOTER
  footer: {
    text: "Create Your Profile On",
    brand: "Slugy",
  },
} as const;
