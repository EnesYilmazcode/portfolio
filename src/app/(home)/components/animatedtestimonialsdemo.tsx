import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface ExtendedTestimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
  github?: string;
  website?: string;
  certificate?: string; // Added for PDF link (e.g., certificate)
  poster?: string; // Added for PDF link (e.g., research poster)
}

export function AnimatedTestimonialsDemo() {
  const testimonials: ExtendedTestimonial[] = [
    {
      quote:
        "Chrome extension with JavaScript and Selenium to extract Amazon product data directly to Excel format. Reduced collection time by 12,500%, cutting tasks from hours to seconds. Gained 120+ users and ranked in the top 5 Amazon scrapers on Chrome Web Store.",
      name: "Pro Scan",
      designation: "",
      src: "/images/proscan.png",
      github: "https://github.com/EnesYilmazcode/AmazonSellerScraper",
      website: "https://chromewebstore.google.com/detail/proscan-amazon-product-sc/bikgignfnljpbmchlemkbbpboigodgap",
    },
    {
      quote:
        "Under the guidance of Columbia University & NSDC, Analyzed 2,000,000+ traffic accidents and 3,300+ NYC bus stops to identify urban safety risks. Created visualizations of collision hotspots using GeoPandas and Folium",
      name: "NYC Safety Analysis",
      designation: "",
      src: "/images/heatmap.png",
      certificate: "/images/NSDC Certificate.pdf",
      poster: "/images/NSDC Research Poster.pdf",
    },
    {
      quote:
        "Flask app that analyzes facial images for skin conditions with MediaPipe and OpenCV. Achieved sub-2-second response times through optimized image compression, and 94% classification accuracy across 10 common skin conditions using Facial Landmarking and TensorFlow.",
      name: "Derm AI",
      designation: "",
      src: "/images/dermai.jpg",
      github: "https://github.com/burhansenh/DermAINew",
    },
  ];

  return (
    <div>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  );
}