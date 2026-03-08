type ApiOptions = {
	baseURL?: string;
	headers?: Record<string, string>;
	authorization?: string;
};

type ApiMethod = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'head' | 'options';

type ApiRequestParams = {
	method: ApiMethod;
	url: string;
	data?: any;
	params?: any;
	extraHeaders?: Record<string, string>;
	options?: ApiOptions;
};

async function apiRequest<T>({
	method,
	url,
	data,
	params,
	extraHeaders,
	options = {},
}: ApiRequestParams): Promise<T> {
	const baseURL = options.baseURL || process.env.NEXT_PUBLIC_API_BASE_URL || "";
	let headers: Record<string, string> = { ...(options.headers || {}) };

	console.log(method, url, data, params, extraHeaders, options);
	const accessToken = typeof window !== "undefined" ? localStorage.getItem('accessToken') : null;
	if (accessToken) {
		headers['Authorization'] = `Bearer ${accessToken}`;
	}

	let fullUrl = url?.startsWith('http')
		? url
		: baseURL
			? `${baseURL.replace(/\/$/, '')}/${url.replace(/^\//, '')}`
			: url;

	if (params) {
		const search = new URLSearchParams(params).toString();
		fullUrl += (fullUrl.includes('?') ? '&' : '?') + search;
	}

	const finalHeaders = new Headers({
		...headers,
		...(method !== 'get' && method !== 'head' ? { 'Content-Type': 'application/json' } : {}),
		...extraHeaders,
	});

	const requestInit: RequestInit = {
		method: method.toUpperCase(),
		headers: finalHeaders,
	};

	if (data !== undefined && method !== 'get' && method !== 'head') {
		requestInit.body = JSON.stringify(data);
	}

	const response = await fetch(fullUrl, requestInit);

	if (!response.ok) throw new Error(response.statusText);

	const contentType = response.headers.get('content-type');
	if (contentType && contentType.includes('application/json')) {
		return response.json();
	}
	return response.text() as unknown as T;
}

export default apiRequest;