// components/ProjectsSection.jsx

'use client';

import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/Card';

export default function ProjectsSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>NFL Game Predictor</CardTitle>
            <CardDescription>Machine Learning Model for NFL Game Outcome Prediction</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Developed a predictive model using Python and scikit-learn to forecast NFL game outcomes. The project involved data acquisition with `nfl_data_py`, data preprocessing, feature engineering, and training a Random Forest Classifier to achieve accurate predictions.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>GetawayGenius</CardTitle>
            <CardDescription>AI-Powered Vacation Itinerary Planner</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Developed an AI-powered web application using React and Google Generative AI API to generate personalized, real-time vacation itineraries based on user preferences.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>DuaConnect</CardTitle>
            <CardDescription>Islamic Platform for Shared Prayers</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Developed a platform enabling users to request and offer prayers in a supportive community, utilizing Next.js for optimized performance and seamless user experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
