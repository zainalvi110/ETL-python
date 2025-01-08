import React from 'react';
import { ArrowRight, Database, Cog, BarChart3, Globe, FileText, FileSpreadsheet } from 'lucide-react';

const ETLPipeline = () => {
  const mainStages = [
    { 
      icon: Globe, 
      title: 'API', 
      color: 'bg-blue-500',
      description: 'Data Source'
    },
    { 
      icon: FileText, 
      title: 'Extraction', 
      color: 'bg-green-500',
      description: 'Python'
    },
    { 
      icon: Cog, 
      title: 'Transform', 
      color: 'bg-yellow-500',
      description: 'Data Processing'
    },
    { 
      icon: Database, 
      title: 'Load', 
      color: 'bg-purple-500',
      description: 'Database'
    },
    { 
      icon: BarChart3, 
      title: 'Analytics', 
      color: 'bg-red-500',
      description: 'Visualization'
    }
  ];

  // Python logo SVG as a component
  const PythonLogo = () => (
    <svg className="w-6 h-6" viewBox="0 0 256 255" xmlns="http://www.w3.org/2000/svg">
      <path d="M126.916 0c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S0 61.338 0 126.915c0 65.577 36.288 63.313 36.288 63.313h21.71v-30.463s-1.165-36.288 35.632-36.288h61.362s34.475.557 34.475-33.319V33.97S194.67 0 126.916 0zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" fill="#004C97"/>
      <path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.128h-61.868v-8.745h86.441s41.631 4.65 41.631-60.927c0-65.577-36.288-63.313-36.288-63.313h-21.71v30.463s1.165 36.288-35.632 36.288h-61.362s-34.475-.557-34.475 33.319v56.188s-5.203 33.97 62.551 33.97zM162.871 234.466a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" fill="#FFD642"/>
    </svg>
  );

  return (
    <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-8 text-center">Project 1: ETL With Python</h2>
      
      {/* Main Pipeline Flow */}
      <div className="relative mb-16">
        <div className="flex flex-wrap justify-between items-center gap-4">
          {mainStages.map((stage, index) => (
            <React.Fragment key={stage.title}>
              <div className="flex flex-col items-center group relative">
                <div className={`p-6 rounded-lg ${stage.color} shadow-lg group-hover:scale-105 transition-transform duration-200`}>
                  <stage.icon className="w-12 h-12 text-white" />
                </div>
                <span className="mt-2 font-bold text-gray-700">{stage.title}</span>
                <span className="text-sm text-gray-500">{stage.description}</span>
                
                {/* CSV flow for API */}
                {stage.title === 'API' && (
                  <div className="absolute -top-12 right-0 flex items-center">
                    <div className="flex items-center">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <FileSpreadsheet className="w-6 h-6 text-green-600" />
                      </div>
                      <ArrowRight className="w-6 h-6 text-gray-400 ml-2" />
                    </div>
                  </div>
                )}
              </div>
              
              {index < mainStages.length - 1 && (
                <div className="flex flex-col items-center gap-1 flex-shrink-0">
                  <div className="bg-white rounded-full p-1 shadow-sm mb-1">
                    <PythonLogo />
                  </div>
                  <ArrowRight className="w-8 h-8 text-gray-400" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Log File System with Feedback Arrows */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-center">
            <div className="relative">
              <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200">
                <Database className="w-12 h-12 text-gray-600" />
              </div>
              <span className="mt-2 block text-center font-bold text-gray-700">Logs</span>
              
              {/* Animated feedback lines */}
              <div className="absolute -top-8 left-1/2 w-px h-8 bg-gradient-to-b from-green-500 to-gray-400"></div>
              <div className="absolute -top-8 -left-32 w-px h-8 bg-gradient-to-b from-yellow-500 to-gray-400"></div>
              <div className="absolute -top-8 -right-32 w-px h-8 bg-gradient-to-b from-purple-500 to-gray-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Panel */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="p-4 bg-green-100 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-green-700 font-medium">Pipeline Active</span>
          </div>
        </div>
        <div className="p-4 bg-blue-100 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-blue-700 font-medium">Processing Status</span>
          </div>
        </div>
        <div className="p-4 bg-purple-100 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="text-purple-700 font-medium">Log Status</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ETLPipeline;
