'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { ChevronLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function ArticleContent({ article, setSelectedArticle, setActiveSection }) {
  return (
    <div className="bg-night-sky-start bg-opacity-80 rounded-lg shadow-lg p-6 mt-4">
      <article className="space-y-6">
        <Button
          variant="ghost"
          onClick={() => {
            setSelectedArticle(null);
            setActiveSection('tech-insights');
          }}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Tech Insights
        </Button>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">{article.title}</h1>
          <p className="text-sm text-gray-400">
            {article.date} {article.author && ` • ${article.author}`}
          </p>
        </div>
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={materialDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}