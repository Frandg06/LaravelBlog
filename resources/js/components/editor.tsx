import { Editor as TinyEditor } from '@tinymce/tinymce-react';

interface EditorProps {
    ref: React.RefObject<any>;
}

export default function Editor({ ref }: EditorProps) {
    return (
        <>
            <TinyEditor
                apiKey={import.meta.env.VITE_TINY_EDITOR_API_KEY}
                onInit={(_evt, editor) => (ref.current = editor)}
                initialValue=""
                init={{
                    height: 800,
                    menubar: false,
                    plugins: [
                        'advlist',
                        'autolink',
                        'lists',
                        'link',
                        'image',
                        'charmap',
                        'preview',
                        'anchor',
                        'searchreplace',
                        'visualblocks',
                        'code',
                        'fullscreen',
                        'insertdatetime',
                        'media',
                        'table',
                        'code',
                        'help',
                        'wordcount',
                        'image',
                        'codesample',
                        'code',
                    ],
                    toolbar:
                        'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'image |' +
                        'codesample code |' +
                        'removeformat | help',
                    codesample_languages: [
                        { text: 'HTML/XML', value: 'markup' },
                        { text: 'JavaScript', value: 'javascript' },
                        { text: 'CSS', value: 'css' },
                        { text: 'PHP', value: 'php' },
                        { text: 'Ruby', value: 'ruby' },
                        { text: 'Python', value: 'python' },
                        { text: 'Java', value: 'java' },
                        { text: 'C', value: 'c' },
                        { text: 'C#', value: 'csharp' },
                        { text: 'C++', value: 'cpp' },
                    ],
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    images_file_types: 'jpg,svg,webp',
                    automatic_uploads: true,
                    file_picker_types: 'image',
                    file_picker_callback: (cb, value, meta) => {
                        const input = document.createElement('input');
                        input.setAttribute('type', 'file');
                        input.setAttribute('accept', 'image/*');

                        input.addEventListener('change', (e) => {
                            const file = e.target.files[0];

                            const reader = new FileReader();
                            reader.addEventListener('load', () => {
                                /*
                        Note: Now we need to register the blob in TinyMCEs image blob
                        registry. In the next release this part hopefully won't be
                        necessary, as we are looking to handle it internally.
                        */
                                const id = 'blobid' + new Date().getTime();
                                const blobCache = tinymce.activeEditor.editorUpload.blobCache;
                                const base64 = reader.result.split(',')[1];
                                const blobInfo = blobCache.create(id, file, base64);
                                blobCache.add(blobInfo);

                                /* call the callback and populate the Title field with the file name */
                                cb(blobInfo.blobUri(), { title: file.name });
                            });
                            reader.readAsDataURL(file);
                        });

                        input.click();
                    },
                }}
            />
        </>
    );
}
