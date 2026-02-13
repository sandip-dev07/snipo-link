"use client";

import CarouselGallery from "@/components/web/carousel-gallery";
import Contact from "@/components/web/contact";
import Container from "@/components/web/container";
import Feature from "@/components/web/feature";
import Footer from "@/components/web/footer";
import HeroSection from "@/components/web/hero";
import LinkCard from "@/components/web/link-card";
import SocialGrid from "@/components/web/social-grid";
import { BIO_DATA } from "@/constants/bio-data";
import { motion } from "motion/react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, delay },
});

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div
        className="fixed inset-0 scale-110 bg-cover bg-center blur-3xl"
        style={{ backgroundImage: `url('${BIO_DATA.hero.image}')` }}
      />
      <div className="absolute inset-0 bg-black/15" />

      <Container>
        <HeroSection image={BIO_DATA.hero.image} />

        <motion.div {...fadeUp(0.05)}>
          <SocialGrid />
        </motion.div>

        <motion.div {...fadeUp(0.1)}>
          <Feature />
        </motion.div>

        <motion.div {...fadeUp(0.15)}>
          <CarouselGallery />
        </motion.div>

        <motion.div {...fadeUp(0.2)}>
          <LinkCard />
        </motion.div>

        <motion.div {...fadeUp(0.25)}>
          <Contact />
        </motion.div>

        <motion.div {...fadeUp(0.3)}>
          <Footer />
        </motion.div>
      </Container>
    </main>
  );
}
