import cheerio from 'cheerio';

export async function GET(request) {
  const url = new URL(request.url);
  const targetUrl = url.searchParams.get('url');

  if (!targetUrl) {
    return new Response(JSON.stringify({ error: 'No URL provided' }), { status: 400 });
  }

  try {
    const response = await fetch(targetUrl);
    const html = await response.text();
    const $ = cheerio.load(html);

    const metaTags = {
      title: $('meta[property="og:title"]').attr('content') || $('title').text(),
      description: $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content'),
      image: $('meta[property="og:image"]').attr('content'),
      domain: new URL(targetUrl).hostname
    };

    return new Response(JSON.stringify(metaTags), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch the URL' }), { status: 500 });
  }
}
