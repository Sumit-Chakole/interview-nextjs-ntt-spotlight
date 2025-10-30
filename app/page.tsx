// 'use client';

import Icon from './components/Icon';

export default function Home() {
  const spotlightCards = [
    {
      type: 'Guide',
      title: 'NTT DATA and Cisco partner to power networking for the AI era',
      backgroundImage: 'sl1.jpg',
    },
    {
      type: 'Service',
      title: 'Generative AI',
      backgroundImage: 'sl6.jpg',
    },
    {
      type: 'Article',
      title: 'Empower your workforce with AI in manufacturing operations',
      backgroundImage: 'sl2.jpg',
    },
    {
      type: 'Article',
      title:
        'Measuring customer loyalty in the age on AI needs a fresh take on NPS',
      backgroundImage: 'sl3.jpg',
    },
    {
      type: 'Article',
      title: 'Honoring our planet, one action at a time',
      backgroundImage: 'sl4.jpg',
    },
    {
      type: 'Article',
      title:
        'Setting sail for future: Agentic AI charts a new course for business',
      backgroundImage: 'sl5.jpg',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Section Wrapper */}
      <section>
        <div className="my-5">
          <h2 className="mb-5">Spotlight</h2>
          Build here <Icon name="ArrowRight" />
        </div>
      </section>
    </main>
  );
}
