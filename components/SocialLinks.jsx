// components/SocialLinks.jsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-4">
      <Link href="https://github.com/abdillahi-nur" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="icon">
          <Github className="h-4 w-4" />
          <span className="sr-only">GitHub</span>
        </Button>
      </Link>
      <Link href="https://linkedin.com/in/abdillahi-nur" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="icon">
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">LinkedIn</span>
        </Button>
      </Link>
      <Link href="https://twitter.com/abdillahinur_" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="icon">
          <Twitter className="h-4 w-4" />
          <span className="sr-only">Twitter</span>
        </Button>
      </Link>
    </div>
  );
}

