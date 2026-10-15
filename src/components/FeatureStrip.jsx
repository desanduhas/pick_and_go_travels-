import React from 'react';
import { Compass, DollarSign, Award, Train } from 'lucide-react';

export default function FeatureStrip() {
  const features = [
    {
      icon: <Compass size={24} />,
      title: 'Feel the Freedom',
      desc: 'From seaside highways to highland mud tracks and hidden villages, enjoy zero boundaries.'
    },
    {
      icon: <DollarSign size={24} />,
      title: 'Save Big Money',
      desc: 'Skip expensive private drivers and taxi waits. One predictable daily rate with no hidden fees.'
    },
    {
      icon: <Award size={24} />,
      title: 'Legal License Endorsement',
      desc: 'We process your official Sri Lankan AAC Driving Permit in advance before you land.'
    },
    {
      icon: <Train size={24} />,
      title: 'Kandy to Ella Train Transfer',
      desc: 'Ride the world-famous blue train while we safely transfer your Tuk Tuk to Ella station!'
    }
  ];

  return (
    <section className="features-strip">
      <div className="container">
        <div className="features-grid">
          {features.map((item, idx) => (
            <div key={idx} className="feature-item">
              <div className="feature-icon-box">{item.icon}</div>
              <div className="feature-text">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
