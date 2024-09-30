// components/AboutSection.jsx

'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Mail, ChevronRight } from 'lucide-react';
import { SocialLinks } from '@/components/SocialLinks';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

export default function AboutSection({ setActiveSection, techInsights, setSelectedArticle }) {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center">
        Abdillahi Nur
      </h1>
      <div className="mt-4 mb-8">
        <SocialLinks />
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <Button
          variant="outline"
          onClick={() => (window.location.href = 'mailto:abdillahi.mnur@gmail.com')}
        >
          <Mail className="mr-2 h-4 w-4" />
          Contact Me
        </Button>
        <Button
          variant="outline"
          onClick={() => window.open('/AbdillahiNur_Resume.pdf', '_blank')}
        >
          <FileText className="mr-2 h-4 w-4" />
          Resume
        </Button>
      </div>
      <Card className="mt-8">
        <CardContent className="pt-6">
          <p className="text-lg">
            Hello! I'm Abdillahi, a passionate software developer with a keen interest in building scalable and efficient full-stack applications. With experience in both front-end and back-end technologies, I specialize in creating robust solutions that solve real-world problems. My journey in tech has led me from developing meaningful applications that service millions of Canadian taxpayers to exploring the frontiers of AI in software development. When I'm not coding, you can find me writing about the latest tech trends or working on exciting open-source projects. Welcome to my digital space where I share my experiences, insights, and the occasional coding adventure!
          </p>
        </CardContent>
      </Card>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Latest Tech Insights</h2>
        <div className="space-y-4">
          {techInsights.slice(0, 3).map((article) => (
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
        <div className="mt-4">
          <Button variant="outline" onClick={() => setActiveSection('tech-insights')}>
            View All Tech Insights
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
