// components/SkillsSection.jsx

'use client';

import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Card, CardContent } from '@/components/ui/Card';

export default function SkillsSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Technical Skills</h2>
      <Tabs.Root defaultValue="languages">
        <Tabs.List className="flex border-b border-gray-200 dark:border-gray-700 space-x-4">
          <Tabs.Trigger
            value="languages"
            className="px-4 py-2 -mb-px border-b-2 font-medium text-sm focus:outline-none border-transparent text-gray-600
            dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 data-[state=active]:
            border-emerald-500 data-[state=active]:text-emerald-600 dark:data-[state=active]:
            text-emerald-400"
          >
            Languages
          </Tabs.Trigger>
          <Tabs.Trigger
            value="frameworks"
            className="px-4 py-2 -mb-px border-b-2 font-medium text-sm focus:outline-none border-transparent text-gray-600
            dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 data-[state=active]:
            border-emerald-500 data-[state=active]:text-emerald-600 dark:data-[state=active]:
            text-emerald-400"
          >
            Frameworks & Libraries
          </Tabs.Trigger>
          <Tabs.Trigger
            value="tools"
            className="px-4 py-2 -mb-px border-b-2 font-medium text-sm focus:outline-none border-transparent text-gray-600
            dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 data-[state=active]:
            border-emerald-500 data-[state=active]:text-emerald-600 dark:data-[state=active]:
            text-emerald-400"
          >
            Tools
          </Tabs.Trigger>
        </Tabs.List>

        {/* Languages Tab */}
        <Tabs.Content value="languages" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <ul className="list-disc pl-6 space-y-2">
                <li>Python</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>C/C++</li>
                <li>SQL</li>
                <li>HTML/CSS</li>
              </ul>
            </CardContent>
          </Card>
        </Tabs.Content>

        {/* Frameworks & Libraries Tab */}
        <Tabs.Content value="frameworks" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <ul className="list-disc pl-6 space-y-2">
                <li>React</li>
                <li>Next.js</li>
                <li>Angular</li>
                <li>Node.js</li>
                <li>Pandas</li>
                <li>NumPy</li>
                <li>scikit-learn</li>
                <li>Matplotlib</li>
                <li>Seaborn</li>
                <li>JUnit</li>
                <li>PyBluez</li>
              </ul>
            </CardContent>
          </Card>
        </Tabs.Content>

        {/* Tools Tab */}
        <Tabs.Content value="tools" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <ul className="list-disc pl-6 space-y-2">
                <li>Git & GitHub</li>
                <li>Docker</li>
                <li>Jupyter Notebook</li>
                <li>VSCode</li>
                <li>Jenkins</li>
                <li>Maven</li>
                <li>Heroku</li>
                <li>PyCharm</li>
              </ul>
            </CardContent>
          </Card>
        </Tabs.Content>
      </Tabs.Root>
    </section>
  );
}
