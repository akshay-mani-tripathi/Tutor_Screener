"use client";
// GrainOverlay — persistent fixed div with noise texture SVG
// Gives the matte black background a cinematic film grain feel

export function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.15]"
      style={{
        backgroundImage: `url("bg.jpg")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
    />
  );
}
