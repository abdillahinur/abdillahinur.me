// components/TechInsightsSection.jsx

'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function TechInsightsSection({ techInsights, setSelectedArticle, setActiveSection }) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Tech Insights</h2>
      <div className="space-y-4">
        {techInsights.map((article) => (
          <Card
            key={article.id}
            className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
            onClick={() => {
              setSelectedArticle(article);
              setActiveSection('article');
            }}
          >
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
              <CardDescription>{article.date}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
