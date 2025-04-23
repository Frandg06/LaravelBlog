import Editor from '@/components/editor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { $ } from '@/lib/utils';
import { PageEditPostProps, type BreadcrumbItem } from '@/types';
import { Head, router, usePage } from '@inertiajs/react';
import { SaveIcon } from 'lucide-react';
import { useRef } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Editor de posts',
        href: '/posts',
    },
];

export default function PostEditor() {
    const page = usePage<PageEditPostProps>();
    const { tags, posts } = page.props;
    const editorRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = $('#title').value;
        const tag = $('#tags').value;
        console.log(title, tag, editorRef.current.getContent());

        router.post('/posts', {
            title,
            tag,
            content: editorRef.current.getContent(),
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Editar Post" />
            {posts.map((post) => (
                <div key={post.id} className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                    <Button onClick={() => router.delete(`/posts/${post.id}`)}>Eliminar</Button>
                </div>
            ))}
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex flex-row-reverse items-end justify-between gap-10">
                    <Button onClick={handleSubmit}>
                        <SaveIcon />
                        Guardar
                    </Button>
                    <div className="w-full max-w-72">
                        <Label htmlFor="title" className="flex-1 text-sm font-medium">
                            Título
                        </Label>
                        <Input type="text" name="title" id="title" />
                    </div>
                </div>
                <div className="w-full max-w-72">
                    <Label htmlFor="title" className="text-sm font-medium">
                        Etiquetas
                    </Label>
                    <select
                        name="tags"
                        id="tags"
                        className="border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
                    >
                        {tags.map((tag) => (
                            <option key={tag.id} value={tag.id}>
                                {tag.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <Label htmlFor="title" className="text-sm font-medium">
                        Contenido
                    </Label>
                    <Editor ref={editorRef} />
                </div>
            </div>
        </AppLayout>
    );
}
