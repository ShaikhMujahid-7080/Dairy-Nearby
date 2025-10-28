import { useState } from 'react'

const FALLBACK = 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop'

export default function Img({ src, alt, className, ...rest }) {
	const [error, setError] = useState(false)
	return (
		<img
			src={error ? FALLBACK : src}
			alt={alt}
			loading="lazy"
			decoding="async"
			referrerPolicy="no-referrer"
			onError={() => setError(true)}
			className={className}
			{...rest}
		/>
	)
}
