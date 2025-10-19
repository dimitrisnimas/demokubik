import React from 'react';

const Loader: React.FC = () => {
  const letters = ['K', 'U', 'B', 'I', 'K'];

  return (
    <div className="bg-kubik-dark h-screen flex justify-center items-center text-white overflow-hidden">
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-wider" aria-label="KUBIK">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="inline-block opacity-0 animate-letter-reveal"
            style={{ animationDelay: `${index * 150}ms` }}
            aria-hidden="true"
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Loader;