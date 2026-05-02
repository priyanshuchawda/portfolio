const indexNowKeyPattern = /^[A-Za-z0-9-]{8,128}$/;

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ indexNowKey: string }> },
) {
  const { indexNowKey } = await params;
  const key = process.env['INDEXNOW_KEY'];
  const requestedKey = indexNowKey.replace(/\.txt$/, '');

  if (!key || !indexNowKeyPattern.test(key) || requestedKey !== key) {
    return new Response('Not Found', { status: 404 });
  }

  return new Response(key, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
