import { h } from "https://x.lcas.dev/preact@10.5.12/mod.js";
import { renderToString } from "https://x.lcas.dev/preact@10.5.12/ssr.js";

function App() {
  return (
    <html>
      <body>
        <h1>Hello world</h1>
      </body>
    </html>
  );
}

addEventListener("fetch", (event) => {
  const html = renderToString(<App />);
  event.respondWith(
    new Response(html, {
      headers: { "content-type": "text/html; charset=utf-8" },
    }),
  );
});