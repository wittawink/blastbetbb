import localFont from "next/font/local";

export const geomGraphic = localFont({
  src: [
    {
      path: "./Geom Graphic W03 Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Geom Graphic W03 Light Italic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./Geom Graphic W03 Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Geom Graphic W03 Regular Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Geom Graphic W03 SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Geom Graphic W03 SemiBold It.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./Geom Graphic W03 Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Geom Graphic W03 Bold Italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  fallback: ["sans-serif", "system-ui"],
  variable: "--font-geom-graphic",
});
