// components/EducationSection.jsx

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';

export default function EducationSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Education</h2>
      <Card>
        <CardHeader>
          <CardTitle>Bachelor of Engineering in Software Engineering</CardTitle>
          <CardDescription>Carleton University | Ottawa, Ontario </CardDescription>
        </CardHeader>
      </Card>
    </section>
  );
}
