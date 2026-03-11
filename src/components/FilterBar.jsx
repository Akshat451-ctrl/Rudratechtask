import React from 'react';

const FilterBar = ({ 
  departments, 
  roleTypes, 
  selectedDepartment, 
  selectedRoleType, 
  onDepartmentChange, 
  onRoleTypeChange,
  jobCount 
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Left side - Filters */}
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          {/* Department Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Department
            </label>
            <select
              value={selectedDepartment}
              onChange={(e) => onDepartmentChange(e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer hover:bg-white/15"
            >
              <option value="All" className="bg-gray-900">All Departments</option>
              {departments.map((dept) => (
                <option key={dept} value={dept} className="bg-gray-900">
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* Role Type Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Role Type
            </label>
            <select
              value={selectedRoleType}
              onChange={(e) => onRoleTypeChange(e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer hover:bg-white/15"
            >
              <option value="All" className="bg-gray-900">All Types</option>
              {roleTypes.map((type) => (
                <option key={type} value={type} className="bg-gray-900">
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Right side - Job Count & Reset */}
        <div className="flex items-center gap-4">
          {/* Job Count */}
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg px-4 py-2.5">
            <span className="text-white font-semibold">
              {jobCount} {jobCount === 1 ? 'Job' : 'Jobs'}
            </span>
          </div>

          {/* Reset Filters Button */}
          {(selectedDepartment !== 'All' || selectedRoleType !== 'All') && (
            <button
              onClick={() => {
                onDepartmentChange('All');
                onRoleTypeChange('All');
              }}
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all duration-200 border border-white/10 hover:border-white/20"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Active Filters Pills (Mobile-friendly) */}
      {(selectedDepartment !== 'All' || selectedRoleType !== 'All') && (
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
          {selectedDepartment !== 'All' && (
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
              {selectedDepartment}
              <button
                onClick={() => onDepartmentChange('All')}
                className="hover:text-white transition-colors"
              >
                ×
              </button>
            </span>
          )}
          {selectedRoleType !== 'All' && (
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
              {selectedRoleType}
              <button
                onClick={() => onRoleTypeChange('All')}
                className="hover:text-white transition-colors"
              >
                ×
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterBar;
