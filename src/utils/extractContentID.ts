export function extractContentId(url: string): string | null {
    const match = url.match(/\/content\/([^/]+)\//)
    return match ? match[1] : null
}