import React from 'react';

const JobCard = ({ job }) => {
 
  const getRoleTypeBadge = (roleType) => {
    const badges = {
      'Full-time': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      'Internship': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'Contract': 'bg-purple-500/20 text-purple-300 border-purple-500/30'
    };
    return badges[roleType] || badges['Full-time'];
  };

  return (
    <div className="group relative bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1">
     
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 rounded-xl transition-all duration-300" />
      
      <div className="relative z-10">
       
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
          {job.title}
        </h3>
        
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-300 text-sm">
            <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>{job.department}</span>
          </div>
          
          <div className="flex items-center text-gray-300 text-sm">
            <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{job.location}</span>
          </div>
        </div>
        
        {/* Role Type Badge */}
        <div className="flex items-center justify-between">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getRoleTypeBadge(job.roleType)}`}>
            {job.roleType}
          </span>
          
          {/* Apply Button */}
          <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
