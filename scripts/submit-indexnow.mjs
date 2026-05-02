const siteUrl = process.env.SITE_URL ?? 'https://priyanshuworks.tech';
const indexNowKey = process.env.INDEXNOW_KEY;
const indexNowEndpoint =
  process.env.INDEXNOW_ENDPOINT ?? 'https://api.indexnow.org/indexnow';

const keyPattern = /^[A-Za-z0-9-]{8,128}$/;

if (!indexNowKey) {
  throw new Error('INDEXNOW_KEY is required to submit URLs to IndexNow.');
}

if (!keyPattern.test(indexNowKey)) {
  throw new Error(
    'INDEXNOW_KEY must be 8-128 characters and contain only letters, numbers, or hyphens.',
  );
}

const origin = new URL(siteUrl).origin;
const sitemapUrl = new URL('/sitemap.xml', origin).toString();
const keyLocation =
  process.env.INDEXNOW_KEY_LOCATION ??
  new URL(`/${indexNowKey}.txt`, origin).toString();

const sitemapResponse = await fetch(sitemapUrl);

if (!sitemapResponse.ok) {
  throw new Error(
    `Could not fetch sitemap at ${sitemapUrl}: ${sitemapResponse.status}`,
  );
}

const sitemapXml = await sitemapResponse.text();
const urlList = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  (match) => match[1],
);

if (urlList.length === 0) {
  throw new Error(`No URLs found in sitemap at ${sitemapUrl}.`);
}

const response = await fetch(indexNowEndpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify({
    host: new URL(origin).host,
    key: indexNowKey,
    keyLocation,
    urlList,
  }),
});

if (!response.ok) {
  const body = await response.text();

  throw new Error(
    `IndexNow submission failed with ${response.status}: ${body}`,
  );
}

process.stdout.write(`Submitted ${urlList.length} URLs to IndexNow.\n`);
