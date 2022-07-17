export const fetchHandler = async <T>(url: RequestInfo | URL, options?: RequestInit | undefined) => {
    const rawResponse = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options
    });
    if (!rawResponse.ok) {
        throw new Error(`Fetch failed, because response code is ${rawResponse.status}`);
    }

    const response: T = await rawResponse.json();

    return response;
};