'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';

export default function TechInsightsSection({ techInsights, setSelectedArticle, setActiveSection }) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Tech Insights</h2>
      <div className="space-y-4">
        {techInsights.map((article) => (
          <Card
            key={article.id}
            className="bg-night-sky-start bg-opacity-60 hover:bg-opacity-80 transition-colors duration-200 cursor-pointer border-gray-700"
            onClick={() => {
              setSelectedArticle(article);
              setActiveSection('article');
            }}
          >
            <CardHeader>
              <CardTitle className="text-white">{article.title}</CardTitle>
              <CardDescription className="text-gray-400">{article.date}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}