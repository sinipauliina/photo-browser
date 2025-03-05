export async function GET(request: Request) {
  try {
    // E.g. http://localhost:3000/photos/0
    const {pathname} = new URL(request.url)
    const id = pathname.split('/').pop()

    if (!id || Number.isNaN(id)) {
      console.error('Error fetching photo info: Invalid ID')
      const errorData = JSON.stringify({error: 'Failed to fetch photo info: Invalid ID'})
    
      return new Response(errorData, {
        status: 400, // Bad request
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }

    const response = await fetch(`https://picsum.photos/id/${id}/info`)
  
    if (!response.ok) {
      throw new Error(`Failed to fetch photo info, status: ${response.status}`)
    }
  
    const photoInfo = await response.json()
    const data = JSON.stringify({photoInfo})
  
    return new Response(data, {
      status: 200, // Ok
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error fetching photo info:', error)
    const errorData = JSON.stringify({error: 'Failed to fetch photo info'})

    return new Response(errorData, {
      status: 500, // Internal server error
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
