import { PagePostProps } from '@/types';
import { usePage } from '@inertiajs/react';

export default function Post() {
    const page = usePage<PagePostProps>();
    const { post } = page.props;
    return (
        <div>
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            alsjkdalkjsdh
        </div>
    );
}
