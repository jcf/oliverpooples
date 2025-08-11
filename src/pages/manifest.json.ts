import icon192 from "../assets/icons/android-chrome-192x192.png";
import icon512 from "../assets/icons/android-chrome-512x512.png";

const name = "Oliver Pooples";

export async function GET() {
  return new Response(
    JSON.stringify({
      name,
      short_name: name,
      icons: [
        {
          src: icon192.src,
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: icon512.src,
          sizes: "512x512",
          type: "image/png",
        },
      ],
      theme_color: "#ffffff",
      background_color: "#ffffff",
      display: "standalone",
    }),
  );
}
