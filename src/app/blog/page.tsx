import Link from 'next/link';
import { blogPosts } from '@/content/blogPosts';

export const metadata = {
  title: 'Blog de impuestos en España para expats | Cuanto me roban',
  description:
    'Articulos sobre impuestos en España para expats: IRPF, Seguridad Social, IVA y comparativas fiscales para decidir donde vivir.',
  alternates: {
    canonical: '/blog'
  }
};

export default function BlogIndexPage() {
  const sortedPosts = [...blogPosts].sort((a, b) =>
    a.date < b.date ? 1 : -1
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <header className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-indigo-500 font-semibold mb-3">
            Blog fiscal para expats
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Impuestos en España, explicados sin humo
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Guia clara sobre IRPF, Seguridad Social, IVA y decisiones de mudanza.
            Pensado para expats que viven o estan llegando a España.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {sortedPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-indigo-100 dark:border-gray-700"
            >
              <p className="text-xs text-indigo-500 font-semibold mb-2">
                {post.readingMinutes} min · {new Date(post.date).toLocaleDateString('es-ES')}
              </p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.cityMentions.slice(0, 4).map((city) => (
                  <span
                    key={city}
                    className="text-xs bg-indigo-50 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200 px-2 py-1 rounded-full"
                  >
                    {city}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="text-indigo-600 dark:text-indigo-300 font-semibold hover:underline"
              >
                Leer articulo
              </Link>
            </article>
          ))}
        </section>

        <section className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center border border-indigo-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Calcula tu salario neto en España
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Usa nuestra calculadora para estimar impuestos, Seguridad Social e IVA.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
          >
            Ir a la calculadora
          </Link>
        </section>
      </div>
    </main>
  );
}
