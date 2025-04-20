import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    return (
        <>
            <Head title="Início" />
            <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            <div className="text-foreground z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center p-6 lg:p-8">
                <header className="z-50 mb-6 flex w-full flex-col justify-between gap-4 text-sm not-has-[nav]:hidden sm:flex-row sm:items-center">
                    <h1 className="text-foreground text-xl font-bold">Fran Diez</h1>
                    <nav className="flex items-center gap-4">
                        {auth.user && (
                            <Link
                                href={route('dashboard')}
                                className="border-border text-foreground inline-block rounded-sm border px-5 py-1.5 text-sm leading-normal hover:border-[#1915014a] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        )}
                        <Link
                            href={route('home')}
                            className="border-border text-foreground inline-block rounded-sm border bg-neutral-200 px-5 py-1.5 text-sm leading-normal duration-200 hover:border-[#1915014a] dark:bg-neutral-800 dark:hover:border-[#62605b] dark:hover:bg-neutral-700"
                        >
                            Posts
                        </Link>
                        <a
                            href="https://frandiez.es"
                            className="border-border text-foreground inline-block rounded-sm border px-5 py-1.5 text-sm leading-normal duration-200 hover:border-[#1915014a] hover:bg-neutral-200 dark:hover:border-[#62605b] dark:hover:bg-neutral-800"
                            target="_blank"
                        >
                            Sobre mi
                        </a>
                    </nav>
                </header>
                <div className="z-10 py-14 md:py-24">
                    <h1 className="text-4xl leading-tight font-bold tracking-tight md:text-5xl">
                        Explorando el desarrollo web con PHP, Laravel, React y más.
                    </h1>
                </div>
                <main className="z-10 w-full">
                    <h2 className="mb-10 text-2xl leading-tight font-semibold tracking-tight">Últimos posts</h2>
                    <article className="border-border relative mb-5 rounded-md border p-2 transition-all duration-300 hover:shadow-md">
                        <div className="flex items-center gap-x-2.5">
                            <a className="font-mono text-xs tracking-tight text-neutral-500 uppercase hover:underline dark:text-neutral-300">PHP</a>
                        </div>

                        <a className="mt-2 inline-block text-xl tracking-tight decoration-neutral-200 transition duration-300 ease-in-out hover:underline">
                            Crea tu propio blog
                        </a>

                        <div className="mt-2 flex items-center gap-x-1.5 font-mono text-xs tracking-tight text-neutral-500 dark:text-neutral-300">
                            <time dateTime="2025-04-20">25 Marzo 2025</time>
                            <span>•</span>
                            <span>2 min de lectura</span>
                        </div>
                    </article>
                    <article className="border-border relative mb-5 rounded-md border p-2 transition-all duration-300 hover:shadow-md">
                        <div className="flex items-center gap-x-2.5">
                            <a className="font-mono text-xs tracking-tight text-neutral-500 uppercase hover:underline dark:text-neutral-300">PHP</a>
                        </div>

                        <a className="mt-2 inline-block text-xl tracking-tight decoration-neutral-200 transition duration-300 ease-in-out hover:underline">
                            Crea tu propio blog
                        </a>

                        <div className="mt-2 flex items-center gap-x-1.5 font-mono text-xs tracking-tight text-neutral-500 dark:text-neutral-300">
                            <time dateTime="2025-04-20">25 Marzo 2025</time>
                            <span>•</span>
                            <span>2 min de lectura</span>
                        </div>
                    </article>
                    <article className="border-border relative mb-5 rounded-md border p-2 transition-all duration-300 hover:shadow-md">
                        <div className="flex items-center gap-x-2.5">
                            <a className="font-mono text-xs tracking-tight text-neutral-500 uppercase hover:underline dark:text-neutral-300">PHP</a>
                        </div>

                        <a className="mt-2 inline-block text-xl tracking-tight decoration-neutral-200 transition duration-300 ease-in-out hover:underline">
                            Crea tu propio blog
                        </a>

                        <div className="mt-2 flex items-center gap-x-1.5 font-mono text-xs tracking-tight text-neutral-500 dark:text-neutral-300">
                            <time dateTime="2025-04-20">25 Marzo 2025</time>
                            <span>•</span>
                            <span>2 min de lectura</span>
                        </div>
                    </article>
                    <article className="border-border relative mb-5 rounded-md border p-2 transition-all duration-300 hover:shadow-md">
                        <div className="flex items-center gap-x-2.5">
                            <a className="font-mono text-xs tracking-tight text-neutral-500 uppercase hover:underline dark:text-neutral-300">PHP</a>
                        </div>

                        <a className="mt-2 inline-block text-xl tracking-tight decoration-neutral-200 transition duration-300 ease-in-out hover:underline">
                            Crea tu propio blog
                        </a>

                        <div className="mt-2 flex items-center gap-x-1.5 font-mono text-xs tracking-tight text-neutral-500 dark:text-neutral-300">
                            <time dateTime="2025-04-20">25 Marzo 2025</time>
                            <span>•</span>
                            <span>2 min de lectura</span>
                        </div>
                    </article>
                </main>
                <footer className="z-10 mx-auto flex w-full max-w-4xl flex-col justify-between gap-y-4 py-4 font-mono text-xs tracking-tight text-neutral-500 md:flex-row md:items-center dark:text-neutral-300">
                    <p>© {new Date().getFullYear()} Fran Diez. Todos los derechos reservados.</p>

                    <div className="flex items-center gap-x-2 md:justify-end">
                        <a
                            href="https://github.com/frandg06"
                            className="text-neutral-500 transition-colors duration-200 ease-in-out hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-100"
                            title="@frandg06 en Github"
                        >
                            GitHub
                        </a>
                        <span>/</span>

                        <a
                            href="https://www.linkedin.com/in/francisco-diez-gutierrez-a238041b0/"
                            className="text-neutral-500 transition-colors duration-200 ease-in-out hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-100"
                            title="@Francisco Diez Gutierrez en Linkedin"
                        >
                            Linkedin
                        </a>
                    </div>
                </footer>
            </div>
        </>
    );
}
