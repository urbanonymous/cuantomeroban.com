import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPostBySlug, blogPosts, BlogContentBlock } from '@/content/blogPosts';

type BlogPostPageProps = {
  params: { slug: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Cuanto me roban`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`
    }
  };
}

const renderBlock = (block: BlogContentBlock, index: number) => {
  if (block.type === 'heading') {
    return (
      <h2
        key={`heading-${index}`}
        className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4"
      >
        {block.text}
      </h2>
    );
  }

  if (block.type === 'list') {
    return (
      <ul key={`list-${index}`} className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
        {block.items.map((item, itemIndex) => (
          <li key={`${item}-${itemIndex}`}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <p key={`paragraph-${index}`} className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
      {block.text}
    </p>
  );
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Cuanto me roban'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `/blog/${post.slug}`
    },
    keywords: post.keywords.join(', ')
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link
          href="/blog"
          className="text-sm text-indigo-600 dark:text-indigo-300 font-semibold hover:underline"
        >
          ← Volver al blog
        </Link>

        <article className="mt-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-indigo-100 dark:border-gray-700">
          <header className="mb-6">
            <p className="text-xs uppercase tracking-widest text-indigo-500 font-semibold mb-3">
              {post.readingMinutes} min · {new Date(post.date).toLocaleDateString('es-ES')}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">{post.hero}</p>
          </header>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            {post.content.map((block, index) => renderBlock(block, index))}
          </div>

          <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Ciudades y zonas mencionadas
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.cityMentions.map((city) => (
                <span
                  key={city}
                  className="text-xs bg-indigo-50 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200 px-2 py-1 rounded-full"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Calcula tu neto real en España
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Usa la calculadora para estimar IRPF, Seguridad Social e IVA segun tu salario neto.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
            >
              Ir a la calculadora
            </Link>
          </div>
        </article>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
