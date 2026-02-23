import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://www.examresizer.in';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
