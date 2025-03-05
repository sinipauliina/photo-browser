export async function GET(request: Request) {
  try {
    const response = await fetch('https://zenquotes.io/api/random')
  
    if (!response.ok) {
      throw new Error(`Failed to fetch quote, status: ${response.status}`)
    }

    const responseData = await response.json()
    const author = responseData[0].a
    const quote = responseData[0].q
    const data = JSON.stringify({author: author, quote: quote})
  
    return new Response(data, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error fetching quote:', error)
    const errorData = JSON.stringify({error: 'Failed to fetch quote'})

    return new Response(errorData, {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
