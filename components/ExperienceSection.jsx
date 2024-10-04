// components/ExperienceSection.jsx

'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

export default function ExperienceSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Experience</h2>
      <div className="space-y-6">
        {/* Canada Revenue Agency Experience */}
        <Card>
          <CardHeader>
            <CardTitle>Software Developer/Analyst</CardTitle>
            <CardDescription>Canada Revenue Agency | February 2020 - Present | Ottawa, Ontario</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Led the development of the Child and Family Benefits Calculator, a tool enabling users to estimate eligibility for government benefits, scaling to over 20,000 daily users.</li>
              <li>Developed a web-based tax benefit estimator used by millions of Canadians to calculate eligibility for new tax benefits like the Canada Dental and Housing Benefits.</li>
              <li>Refactored legacy Java applications into a modern Angular-based architecture, improving scalability and reducing technical debt.</li>
              <li>Identified and resolved performance bottlenecks, improving system efficiency by 15%.</li>
              <li>Collaborated with cross-functional teams to integrate new features into the CRA&apos;s My Account portal, the primary platform for millions of Canadians to access and manage tax information.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Integrated Autonomous Vehicle Experience */}
        <Card>
          <CardHeader>
            <CardTitle>Software Developer Intern</CardTitle>
            <CardDescription>Carleton University - Integrated Autonomous Vehicle | January 2019 - April 2019 | Ottawa, Ontario</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Developed the Integrated Beacon Network for real-time location tracking of autonomous vehicles using Arduino-based systems.</li>
              <li>Improved Bluetooth communication protocols, enhancing network reliability and expanding connection range for more consistent vehicle-beacon interactions.</li>
            </ul>
          </CardContent>
        </Card>

        {/* SQUALL Lab Experience */}
        <Card>
          <CardHeader>
            <CardTitle>Software Test Intern</CardTitle>
            <CardDescription>Carleton University - SQUALL Lab | September 2017 - April 2018 | Ottawa, Ontario</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Authored automated test scripts and conducted clone frequency analysis in test codebases, contributing to a published research study.</li>
              <li>Simulated multi-environment test conditions using Docker, improving testing accuracy and efficiency across various platforms.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
