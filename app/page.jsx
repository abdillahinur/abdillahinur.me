'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Mail, Menu, X } from 'lucide-react'; // Add Menu and X icons for the mobile view toggle
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/Button';
import { SocialLinks } from '@/components/SocialLinks';
import { ArticleContent } from '@/components/ArticleContent';

import AboutSection from '@/components/AboutSection';
import TechInsightsSection from '@/components/TechInsightsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';


// Updated techInsights data
const techInsights = [
  {
    id: 2,
    title: "Building MealLens: Exploring New Frontiers in Health-Tech Innovation",
    date: "2024-10-05",
    content: `
  In a world where health and technology increasingly intersect, I set out to create **MealLens 📸**, a project born from my enthusiasm for fitness and innovation. As someone who values staying fit and maintaining good nutrition, I wanted to build a solution that could make managing these aspects of life easier and more efficient. MealLens aims to simplify meal tracking, offering insights through AI, image recognition, and predictive analytics, all while keeping the user experience engaging and personalized. As I work through its development, it’s clear that this app reflects my own goals and passion for maintaining a balanced, health-conscious lifestyle.

  ### The Inspiration Behind MealLens

  As a fitness enthusiast, nutrition plays a critical role in my personal routine. Yet, tracking meals manually, measuring nutrients, and staying on top of health data can be time-consuming. That’s where the idea for MealLens was born—an app that simplifies the way people track their meals, monitor their health, and make informed dietary choices using AI, image recognition, and predictive analytics.

  With a vision to create a product that not only streamlines meal tracking but also provides insights and personalized recommendations, I embarked on developing MealLens. This project aligns with my long-standing passion for health and fitness, and I can envision myself using the app daily to maintain a balanced, mindful lifestyle.

  ### Key Features and Technologies

  - **Food Image Recognition:** Users can snap a photo of their meals, and the app instantly identifies food items and provides a comprehensive nutritional breakdown.
  - **Blood Sugar Prediction:** Based on meals, the app predicts potential blood sugar levels, making it particularly useful for individuals monitoring diabetes or aiming for optimal blood sugar control.
  - **Nutritional Breakdown:** The app displays a detailed analysis of calories, carbs, fats, and proteins to help users stay on track with their dietary goals.
  - **Community Features:** Users can engage with like-minded individuals, share meals, and participate in challenges to stay motivated.
  - **Barcode Scanner:** Easily scan packaged foods for quick nutritional information.
  - **AR Meal Visualizer:** Future plans for incorporating augmented reality to help visualize portion sizes and nutritional content in real time.

  ### The Development Process and Technologies Used

  **MealLens** is still a work in progress, with a web landing page and iOS app mockups already created. The tech stack driving MealLens includes the following:

  - **Frontend (Web and Mobile):** I used React Native with TypeScript for the mobile app, allowing for efficient cross-platform development. The UI integrates libraries like React Native Paper for sleek, Material Design-compliant components, while Styled Components ensure dynamic styling across different themes.
  
  - **Augmented Reality (AR):** Integrating ARKit and ViroReact is part of the roadmap, which will add an immersive AR experience where users can visualize their meals and understand their nutritional content in real-time.

  - **Machine Learning & AI:** On the backend, TensorFlow.js will power the food recognition system, enabling accurate and real-time analysis of meal images. For blood sugar prediction, machine learning models will be deployed using Google Cloud's AI services to process and predict blood sugar spikes based on meal intake.

  - **Backend:** The backend for MealLens is built using Node.js and NestJS, with Firebase Firestore managing real-time data synchronization. This stack ensures the app is scalable and can handle large datasets efficiently, while offering real-time updates for features like community interactions and live feedback on meals.

  - **Database and Storage:** MealLens uses Firebase for storage, handling user-uploaded meal photos and data, while ensuring scalability and security through Google Cloud infrastructure.

  - **User Authentication and Payments:** Secure user authentication is handled through Firebase Authentication, and payment processing for premium features is integrated via the Stripe API.

  ### Overcoming Challenges and Moving Forward

  While developing MealLens, there have been several challenges. One of the biggest has been ensuring the accuracy of image recognition and nutritional data retrieval, given the vast range of food types and preparation methods. Training and fine-tuning the machine learning models will be a continuous process, requiring regular updates and improvements.

  Another challenge has been designing the AR features, especially ensuring they are user-friendly and accurate when visualizing portion sizes and nutritional data. However, AR is a feature I’m excited to see fully implemented, as I believe it will greatly enhance the app's usability and provide a unique experience.

  ### The Passion Driving Development

  What makes working on MealLens exciting is that it is more than just a tech project for me—it is something I believe in and can see myself using. The fitness and health industry is undergoing rapid changes, with people increasingly seeking ways to monitor and improve their well-being. MealLens fits right into this trend, offering users an easy and interactive way to take charge of their nutrition and health.

  Creating an app that can be part of someone's health journey keeps me motivated to overcome the technical challenges and make it the best it can be. My personal connection to the fitness world fuels my drive to build an app that will help others achieve their health goals as well.

  ### What’s Next for MealLens

  Looking forward, I aim to complete the mobile app development and launch it to a wider audience. Future features include personalized nutrition coaching, AI-driven insights for optimizing health, and more advanced gamification to make meal tracking and health management engaging and rewarding.

  I’m also planning to explore integrations with other health platforms like Apple Health to provide users with a comprehensive health overview that ties together fitness, diet, and biometric data.

  In conclusion, **MealLens** is still evolving, but I am excited about its potential to simplify health management and empower users to live healthier lives. This project not only merges my passion for fitness and health with my interest in technology, but it also serves as a reflection of how personal interests can drive innovative solutions.
 
    `,
  },
  {
    id: 1,
    title: "Building an NFL Game Predictor API: A Newcomer's Passionate Journey into Data Science",
    date: "2024-09-20",
    content: `
As someone new to the world of data science, I found myself eager to apply my budding skills to a field I am deeply passionate about—the NFL. This enthusiasm led me to embark on creating an **NFL Game Predictor API**, a project that not only served as a practical learning experience but also allowed me to merge my love for football with my newfound interest in data science.

### The Inspiration Behind the Project

Being a newcomer, I was keen to find a project that could both challenge me and keep me motivated. The idea of predicting NFL game outcomes was thrilling; it combined complex data analysis with the excitement of sports. This passion project became the perfect avenue to immerse myself in data science concepts while working on something I genuinely cared about.

### Navigating Data Acquisition and Processing

Starting out, I realized the importance of data in any machine learning endeavor. I delved into the \`nfl_data_py\` library, which provided extensive play-by-play and schedule data essential for my model.

\`\`\`python
# Import necessary libraries
import nfl_data_py as nfl
import pandas as pd

# Define the seasons to include
seasons = [2021, 2021, 2023]

# Load play-by-play data for the specified seasons
print("Loading play-by-play data...")
pbp_data = nfl.import_pbp_data(seasons)

# Load schedule data for the specified seasons
print("Loading schedule data...")
schedule_data = nfl.import_schedules(seasons)
\`\`\`

Handling such large datasets was initially overwhelming. However, by focusing on recent seasons, I managed to keep the data manageable while ensuring it was relevant for current team dynamics.

### Overcoming Challenges in Data Preprocessing

As a beginner, data preprocessing presented a steep learning curve. Cleaning the data and engineering features required meticulous attention. I learned to aggregate play-by-play data to compute meaningful team statistics per game.

One of the significant hurdles was calculating cumulative statistics correctly. I had to ensure that for each game, only the data from prior games was used, to prevent any data leakage—a concept I grasped during this project.

\`\`\`python
# Compute cumulative stats for each team up to each game (excluding the current game)
for col in stats_cols:
    team_game_stats[col + '_cum'] = team_game_stats.groupby('team')[col].cumsum().shift(1)
\`\`\`

This step was crucial in mimicking how predictions would work in a real-world scenario, using only past information to forecast future outcomes.

### Building the Prediction Model from Scratch

With limited experience, selecting the right machine learning algorithm was daunting. After researching, I chose the **Random Forest Classifier** for its simplicity and effectiveness, especially for classification problems like predicting game winners.

\`\`\`python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier

# Initialize the pipeline with a scaler and a random forest classifier
pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('model', RandomForestClassifier(n_estimators=100, random_state=42))
])

# Fit the model on the training data
pipeline.fit(X_train, y_train)
\`\`\`

Implementing the pipeline taught me the importance of data scaling and model encapsulation, concepts that were new to me but proved invaluable.

### Learning Through Evaluation and Iteration

Evaluating the model's performance was both exciting and educational. Using metrics like accuracy and ROC AUC score, I could quantify how well the model was performing and identify areas for improvement.

\`\`\`python
from sklearn.metrics import accuracy_score, roc_auc_score

# Make predictions on the test set
y_pred = pipeline.predict(X_test)
y_pred_proba = pipeline.predict_proba(X_test)[:, 1]

# Calculate evaluation metrics
accuracy = accuracy_score(y_test, y_pred)
roc_auc = roc_auc_score(y_test, y_pred_proba)

# Print evaluation results
print(f"\\nModel Performance on Test Set:")
print(f"Accuracy: {accuracy:.4f}")
print(f"ROC AUC Score: {roc_auc:.4f}")
\`\`\`

Each iteration of testing and refining the model deepened my understanding of machine learning principles and how they apply in practice.

### The Impact of Being a Newcomer

Embarking on this project as a newcomer had its challenges, but it also brought unique advantages. My fresh perspective allowed me to question assumptions and approach problems creatively. Whenever I hit a roadblock—whether in coding syntax or understanding a statistical concept—I turned it into a learning opportunity.

For instance, I initially struggled with feature engineering. Understanding how to create meaningful features from raw data was a significant learning point. By experimenting with different approaches and consulting online resources and communities, I gradually built my competence.

### Passion Driving Learning and Growth

My passion for the NFL was the catalyst that kept me engaged throughout the project. This personal connection made the learning process enjoyable rather than tedious. It motivated me to delve deeper into data science topics that I might have found dry in a different context.

Integrating advanced metrics like **Expected Points Added (EPA)** into my model was a direct result of this enthusiasm. I was eager to explore how such nuanced statistics could enhance the predictive power of the model.

### Reflections and Future Aspirations

This journey has been transformative. Starting from scratch, I developed a functional NFL Game Predictor API and, along the way, built a solid foundation in data science. The project demonstrated that with passion and perseverance, it's possible to overcome the challenges of being a newcomer.

Looking ahead, I'm excited to continue refining the model, perhaps integrating real-time data feeds or exploring other machine learning algorithms. I also hope to expand my knowledge and tackle more complex projects, further bridging my interests in sports and data science.

### Encouragement for Fellow Beginners

To anyone new to data science and considering a passion project, I say go for it. Choose a topic that excites you; it makes all the difference. The combination of personal interest and professional growth can lead to rewarding outcomes and set the stage for continuous learning.
    `,
  },

];


export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('about');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(true); // For mobile
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition-colors duration-300 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-100 dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Mobile menu toggle (visible only on mobile) */}
          <button
            className="sm:hidden" // Hidden on desktop
            onClick={() => setIsHeaderCollapsed(!isHeaderCollapsed)}
            aria-label="Toggle header"
          >
            {isHeaderCollapsed ? <Menu className="h-6 w-6" /> : <X className="h-6 w-6" />}
          </button>

          {/* Navigation menu (collapsed on mobile, expanded on desktop) */}
          <nav
            className={`${
              isHeaderCollapsed ? 'hidden sm:flex' : 'flex flex-col'
            } sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 items-center transition-all duration-300 ${
              !isHeaderCollapsed ? 'justify-center items-center w-full' : ''
            }`}
          >
            {[
              ['about', 'About'],
              ['experience', 'Experience'],
              ['projects', 'Projects'],
              ['skills', 'Skills'],
              ['education', 'Education'],
              ['tech-insights', 'Tech Insights'],
            ].map(([key, label]) => (
              <Button
                key={key}
                variant="ghost"
                className={`text-sm font-bold ${
                  activeSection === key ? 'bg-gray-200 dark:bg-gray-700' : ''
                }`}
                onClick={() => {
                  setActiveSection(key);
                  setSelectedArticle(null);
                  setIsHeaderCollapsed(true); // Collapse the header on mobile after selection
                }}
              >
                {label}
              </Button>
            ))}
          </nav>

          {/* Dark Mode Toggle (always on the right) */}
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto sm:ml-0"
            onClick={toggleDarkMode}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span className="sr-only">Toggle dark mode</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection + (selectedArticle ? selectedArticle.id : '')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeSection === 'about' && (
              <AboutSection
                setActiveSection={setActiveSection}
                techInsights={techInsights}
                setSelectedArticle={setSelectedArticle}
              />
            )}

            {activeSection === 'tech-insights' && !selectedArticle && (
              <TechInsightsSection
                techInsights={techInsights}
                setSelectedArticle={setSelectedArticle}
                setActiveSection={setActiveSection}
              />
            )}

            {activeSection === 'article' && selectedArticle && (
              <ArticleContent
                article={selectedArticle}
                setSelectedArticle={setSelectedArticle}
                setActiveSection={setActiveSection}
              />
            )}

            {activeSection === 'experience' && <ExperienceSection />}

            {activeSection === 'projects' && <ProjectsSection />}

            {activeSection === 'skills' && <SkillsSection />}

            {activeSection === 'education' && <EducationSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 px-4 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto text-center">
          <SocialLinks />
          <Button
            variant="ghost"
            size="icon"
            className="mt-4"
            onClick={() => (window.location.href = 'mailto:abdillahi.mnur@gmail.com')}
          >
            <Mail className="h-4 w-4" />
            <span className="sr-only">Email</span>
          </Button>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            © 2024 Abdillahi Nur. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}