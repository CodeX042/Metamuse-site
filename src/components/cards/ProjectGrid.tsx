import React from 'react';
import Card from './OngoingProjectCard';

const projectData = [
  {
    title: 'Surreal Cityscapes',
    description: 'Exploring surreal landscapes...',
    progress: '75% Complete',
    update: 'Updated 1 day ago',
    activities: [
      'Added new cityscape renderings',
      'Improved color grading',
      'Incorporated user feedback'
    ],
  },
  {
    title: 'Dream in Abstract',
    description: 'Pushing boundaries of abstraction...',
    progress: '50% Complete',
    update: 'Updated 2 days ago',
    activities: [
      'Experimented with new color palette',
      'Completed initial drafts',
      'Brainstormed with design team'
    ],
  },
  {
    title: 'Dream in Abstract',
    description: 'Pushing boundaries of abstraction...',
    progress: '50% Complete',
    update: 'Updated 2 days ago',
    activities: [
      'Experimented with new color palette',
      'Completed initial drafts',
      'Brainstormed with design team'
    ],
  },
  // ...add more project data here
];

const ProjectGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 w-full overflow-hidden p-2">
      {projectData.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          description={project.description}
          progress={project.progress}
          update={project.update}
          activities={project.activities}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
