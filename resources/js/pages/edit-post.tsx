import Editor from '@/components/editor';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Editor de posts',
        href: '/posts',
    },
];

export default function PostEditor({ tinyEditorApiKey }: { tinyEditorApiKey: string }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Editar Post" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <Editor apiKey={tinyEditorApiKey} />
            </div>
        </AppLayout>
    );
}
