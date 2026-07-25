'use client';

export default function Hero2D5Canvas() {
  return (
    <div className="hero-canvas-container absolute inset-0 w-full h-full overflow-hidden bg-[#070708]">
      <img
        src="/media/images/hero-main-background.png"
        alt="Studio Ayo Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
      />

      {/* bottom gradient — keeps headline/pill-nav legible over the image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(7,7,8,0.65) 0%, rgba(7,7,8,0.2) 32%, transparent 55%)',
        }}
        aria-hidden="true"
      />
    </div>
  );
}
