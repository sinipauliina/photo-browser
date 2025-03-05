const getLinks = (response: Response) => {
  // F.ex. <https://picsum.photos/v2/list?page=1>; rel="prev", <https://picsum.photos/v2/list?page=3>; rel="next"
  const linkHeader = response.headers.get('Link')

  if (!linkHeader) return {}

  const links: Record<string, string> = {}

  linkHeader.split(',').forEach(link => {
    const match = link.match(/page=(\d+).*rel="([^"]+)"/)

    if (match) {
      // Skip the first value (the whole match), and keep the url and rel values only
      const [, page, rel] = match

      // F.ex. links["next"] = 3
      links[rel] = page
    }
  })
  
  return links
}

export async function GET(request: Request) {
  try {
    const {searchParams} = new URL(request.url)
    const page = searchParams.get('page') || '1'
  
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}`, {
      headers: {
        // 'Content-Type': 'application/json',
        // 'API-Key': process.env.DATA_API_KEY,
      },
    })
  
    if (!response.ok) {
      throw new Error(`Failed to fetch photos, status: ${response.status}`)
    }
  
    const photos = await response.json()
    const links = getLinks(response)
  
    const data = JSON.stringify({photos, links})
  
    return new Response(data, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error fetching photos:', error)
    const errorData = JSON.stringify({error: 'Failed to fetch photos'})

    return new Response(errorData, {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
