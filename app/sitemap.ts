import { MetadataRoute } from 'next';
import { EXAMS } from '@/lib/exam-config';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.sarkariphoto.in';

    // 1. Static Routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/privacy-policy',
        '/terms', // Added terms
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // 2. Dynamic Exam Routes
    const examRoutes = Object.keys(EXAMS).map((examId) => ({
        url: `${baseUrl}/resize/${examId}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...routes, ...examRoutes];
}
