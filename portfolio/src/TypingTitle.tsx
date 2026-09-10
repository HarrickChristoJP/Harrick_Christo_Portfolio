import React, { useState, useEffect } from 'react';

const DEFAULT_TITLES = [
  'Software Developer',
  'Full Stack Java Developer',
  'Open Source Contributor',
];

interface TypingTitleProps {
  titles?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export const TypingTitle: React.FC<TypingTitleProps> = ({
  titles = DEFAULT_TITLES,
  typingSpeed = 75,
  deletingSpeed = 35,
  pauseDuration = 2000,
  className = '',
}) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, titleIndex, titles, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span
      id="hero-typing-title"
      className={`inline-flex items-center ${className}`}
      aria-label={titles[titleIndex]}
    >
      <span className="tracking-wider uppercase">{currentText}</span>
      <span
        className="inline-block w-2 h-4 sm:h-4.5 ml-1 bg-blue-600 dark:bg-blue-400 animate-pulse align-middle rounded-xs"
        aria-hidden="true"
      />
    </span>
  );
};
