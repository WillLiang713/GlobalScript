import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const outputDir = path.join(repoRoot, "icons", "zashboard-src");

const utilityIcons = {
  "ai-service": {
    title: "AI Service",
    body: `
      <path d="M12 8V4H8"/>
      <rect width="16" height="12" x="4" y="8" rx="2"/>
      <path d="M2 14h2"/>
      <path d="M20 14h2"/>
      <path d="M15 13v2"/>
      <path d="M9 13v2"/>
    `,
  },
  community: {
    title: "Community",
    body: `
      <path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
      <path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"/>
    `,
  },
  "dev-collab": {
    title: "Developer Collaboration",
    body: `
      <path d="m18 16 4-4-4-4"/>
      <path d="m6 8-4 4 4 4"/>
      <path d="m14.5 4-5 16"/>
    `,
  },
  direct: {
    title: "Direct",
    body: `
      <path d="M5 12h14"/>
      <path d="m12 5 7 7-7 7"/>
    `,
  },
  fallback: {
    title: "Fallback",
    body: `
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
      <path d="M12 8v4"/>
      <path d="M12 16h.01"/>
    `,
  },
  gaming: {
    title: "Gaming",
    body: `
      <line x1="6" x2="10" y1="11" y2="11"/>
      <line x1="8" x2="8" y1="9" y2="13"/>
      <line x1="15" x2="15.01" y1="12" y2="12"/>
      <line x1="18" x2="18.01" y1="10" y2="10"/>
      <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/>
    `,
  },
  "manual-switch": {
    title: "Manual Switch",
    body: `
      <circle cx="9" cy="12" r="3"/>
      <rect width="20" height="14" x="2" y="5" rx="7"/>
    `,
  },
  "native-home": {
    title: "Native Home",
    body: `
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    `,
  },
  other: {
    title: "Other",
    body: `
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
      <path d="M2 12h20"/>
    `,
  },
  "self-hosted": {
    title: "Self Hosted",
    body: `
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
      <line x1="6" x2="6.01" y1="6" y2="6"/>
      <line x1="6" x2="6.01" y1="18" y2="18"/>
    `,
  },
  "smart-select": {
    title: "Smart Select",
    body: `
      <path d="m12 14 4-4"/>
      <path d="M3.34 19a10 10 0 1 1 17.32 0"/>
    `,
  },
  speedtest: {
    title: "Speedtest",
    body: `
      <path d="M12 15.5 16.5 11"/>
      <path d="M19.4 18.2A9.5 9.5 0 1 0 4.6 18.2"/>
      <path d="M8 18h.01"/>
      <path d="M12 18h.01"/>
      <path d="M16 18h.01"/>
    `,
  },
  streaming: {
    title: "Streaming",
    body: `
      <path d="m12.296 3.464 3.02 3.956"/>
      <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z"/>
      <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <path d="m6.18 5.276 3.1 3.899"/>
    `,
  },
};

const flagIcons = {
  "china.svg": "cn",
  "hong-kong.svg": "hk",
  "japan.svg": "jp",
  "korea.svg": "kr",
  "singapore.svg": "sg",
  "usa.svg": "us",
};

const visibleOnDark = "#f8fafc";

const brandIcons = {
  "anthropic.svg": { source: "simple", name: "anthropic", size: 42, color: visibleOnDark },
  "apple.svg": { source: "dashboard", name: "apple", size: 43, color: visibleOnDark },
  "github.svg": { source: "dashboard", name: "github", size: 43, color: visibleOnDark },
  "google.svg": { source: "dashboard", name: "google", size: 46 },
  "microsoft.svg": { source: "dashboard", name: "microsoft", size: 45 },
  "netflix.svg": { source: "dashboard", name: "netflix", size: 43 },
  "openai.svg": { source: "dashboard", name: "openai", size: 45, color: visibleOnDark },
  "telegram.svg": { source: "dashboard", name: "telegram", size: 46 },
  "tiktok.svg": { source: "dashboard", name: "tiktok", size: 45 },
  "x.svg": { source: "dashboard", name: "x", size: 42, color: visibleOnDark },
  "youtube.svg": { source: "dashboard", name: "youtube", size: 46 },
  "zoom.svg": { source: "dashboard", name: "zoom", size: 46 },
};

function extractSvg(svgText) {
  const openTag = svgText.match(/<svg\b([^>]*)>/i)?.[1] ?? "";
  const viewBox = svgText.match(/viewBox="([^"]+)"/)?.[1];
  if (!viewBox) {
    throw new Error("Missing viewBox");
  }

  const outerAttrs = openTag
    .replace(/\s+xmlns(?::\w+)?="[^"]*"/gi, "")
    .replace(/\s+viewBox="[^"]*"/gi, "")
    .replace(/\s+width="[^"]*"/gi, "")
    .replace(/\s+height="[^"]*"/gi, "")
    .replace(/\s+x="[^"]*"/gi, "")
    .replace(/\s+y="[^"]*"/gi, "")
    .replace(/\s+role="[^"]*"/gi, "")
    .trim();

  const inner = svgText
    .replace(/^[\s\S]*?<svg[^>]*>/i, "")
    .replace(/<\/svg>\s*$/i, "")
    .replace(/<title>[\s\S]*?<\/title>/gi, "")
    .trim();

  return { viewBox, inner, outerAttrs };
}

async function fetchSvg(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return extractSvg(await response.text());
}

function nestedSvg({ viewBox, body, x, y, size, extra = "" }) {
  const attrs = [extra].filter(Boolean).join(" ");
  return `<svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="${viewBox}" ${attrs}>${body}</svg>`;
}

function recolorMonochrome(body, color) {
  return body
    .replace(/fill:\s*#[0-9a-fA-F]{3,8}/gi, `fill:${color}`)
    .replace(/stroke:\s*#[0-9a-fA-F]{3,8}/gi, `stroke:${color}`)
    .replace(/\sfill="(?!none|currentColor)[^"]*"/gi, ` fill="${color}"`)
    .replace(/\sstroke="(?!none|currentColor)[^"]*"/gi, ` stroke="${color}"`);
}

function iconCanvas(title, content) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="${title}">
  <title>${title}</title>
  ${content}
</svg>
`;
}

function makeUtilitySvg(name, { title, body }) {
  const content = `
  <svg x="12" y="12" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="${visibleOnDark}" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round">
    ${body}
  </svg>`;

  return [`${name}.svg`, iconCanvas(title, content)];
}

function makeFlagSvg(fileName, { viewBox, inner }) {
  const title = fileName.replace(".svg", "");
  const content = `
  <svg x="8" y="14" width="48" height="36" viewBox="${viewBox}" xmlns:xlink="http://www.w3.org/1999/xlink">${inner}</svg>`;

  return [fileName, iconCanvas(title, content)];
}

function makeBrandSvg(fileName, source) {
  const title = fileName.replace(".svg", "");
  const size = source.size ?? 32;
  const offset = (64 - size) / 2;
  const brandColor = source.color;
  const body = brandColor ? recolorMonochrome(source.regular.inner, brandColor) : source.regular.inner;

  if (source.source === "simple") {
    const simpleAttrs = source.regular.outerAttrs.replace(/\s*fill="[^"]*"/i, "");
    return [
      fileName,
      iconCanvas(
        title,
        nestedSvg({
          viewBox: source.regular.viewBox,
          body,
          x: offset,
          y: offset,
          size,
          extra: `${simpleAttrs} fill="currentColor" color="${brandColor ?? visibleOnDark}"`.trim(),
        }),
      ),
    ];
  }

  return [
    fileName,
    iconCanvas(
      title,
      nestedSvg({
        viewBox: source.regular.viewBox,
        body,
        x: offset,
        y: offset,
        size,
        extra: `${source.regular.outerAttrs} ${brandColor ? `fill="${brandColor}" color="${brandColor}"` : ""}`.trim(),
      }),
    ),
  ];
}

async function loadBrandSource(config) {
  if (config.source === "simple") {
    return {
      ...config,
      regular: await fetchSvg(`https://cdn.simpleicons.org/${config.name}`),
    };
  }

  return {
    ...config,
    regular: await fetchSvg(
      `https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/${config.name}.svg`,
    ),
  };
}

async function main() {
  await mkdir(outputDir, { recursive: true });

  const files = [];

  for (const [name, icon] of Object.entries(utilityIcons)) {
    files.push(makeUtilitySvg(name, icon));
  }

  const flagEntries = await Promise.all(
    Object.entries(flagIcons).map(async ([fileName, code]) => {
      const svg = await fetchSvg(
        `https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/${code}.svg`,
      );
      return makeFlagSvg(fileName, svg);
    }),
  );
  files.push(...flagEntries);

  const brandEntries = await Promise.all(
    Object.entries(brandIcons).map(async ([fileName, config]) => {
      const source = await loadBrandSource(config);
      return makeBrandSvg(fileName, source);
    }),
  );
  files.push(...brandEntries);

  for (const [fileName, contents] of files) {
    await writeFile(path.join(outputDir, fileName), contents, "utf8");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
