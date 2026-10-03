import React, { useState } from 'react';
import { Sparkles, Terminal, Cpu, Database, Eye, Code, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NodeData {
  id: string;
  label: string;
  subtitle: string;
  x: number;
  y: number;
  color: string;
  gradient: string;
  icon: React.ReactNode;
}

export const AiProfileNetwork: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>('ml');

  const nodes: NodeData[] = [
    {
      id: 'python',
      label: 'Python',
      subtitle: 'Programming & Data Analysis',
      x: 80,
      y: 100,
      color: '#00F2FE',
      gradient: 'from-cyan-400 to-blue-500',
      icon: <Terminal className="w-3.5 h-3.5" />
    },
    {
      id: 'ml',
      label: 'ML',
      subtitle: 'Machine Learning Projects',
      x: 200,
      y: 75,
      color: '#A855F7',
      gradient: 'from-purple-500 to-violet-600',
      icon: <Cpu className="w-3.5 h-3.5" />
    },
    {
      id: 'sql',
      label: 'SQL',
      subtitle: 'Database & Data Skills',
      x: 320,
      y: 100,
      color: '#38BDF8',
      gradient: 'from-sky-400 to-blue-600',
      icon: <Database className="w-3.5 h-3.5" />
    },
    {
      id: 'data',
      label: 'Data',
      subtitle: 'Exploratory Analysis & Visualization',
      x: 70,
      y: 200,
      color: '#00F5A0',
      gradient: 'from-emerald-400 to-teal-500',
      icon: <Layers className="w-3.5 h-3.5" />
    },
    {
      id: 'cv',
      label: 'CV',
      subtitle: 'Computer Vision & Attendance',
      x: 190,
      y: 215,
      color: '#FF0080',
      gradient: 'from-pink-500 to-rose-600',
      icon: <Eye className="w-3.5 h-3.5" />
    },
    {
      id: 'appian',
      label: 'Appian',
      subtitle: 'Low-Code Application Development',
      x: 320,
      y: 205,
      color: '#FB923C',
      gradient: 'from-orange-400 to-amber-500',
      icon: <Code className="w-3.5 h-3.5" />
    },
  ];

  const connections = [
    { from: 'python', to: 'ml' },
    { from: 'ml', to: 'sql' },
    { from: 'python', to: 'data' },
    { from: 'ml', to: 'cv' },
    { from: 'sql', to: 'appian' },
    { from: 'data', to: 'cv' },
    { from: 'cv', to: 'appian' },
    { from: 'ml', to: 'appian' },
  ];

  const activeNodeInfo = nodes.find((n) => n.id === activeNode);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Outer Glow & Gradient Border */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 via-purple-500 to-fuchsia-500 opacity-35 blur-xl animate-pulse" />

      {/* Main Cyber Glass Profile Card */}
      <div className="relative rounded-3xl bg-[#0B0F24]/90 backdrop-blur-xl border border-cyan-500/30 shadow-2xl p-6 sm:p-7 overflow-hidden transition-all duration-300">
        
        {/* Subtle cyber grid pattern background */}
        <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />

        {/* Card Header */}
        <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="text-[11px] font-mono font-bold tracking-wider text-emerald-400 uppercase">
              {PERSONAL_INFO.currentStatus}
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-[11px] font-mono font-bold text-cyan-300">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>AI LAB PROFILE</span>
          </div>
        </div>

        {/* Identity Title */}
        <div className="relative z-10 text-center pt-4 pb-2">
          <h3 className="font-display font-extrabold text-2xl tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
            MOUNIKA.AI
          </h3>
          <p className="text-xs font-mono font-bold text-slate-400 tracking-wider uppercase mt-0.5">
            ARTIFICIAL INTELLIGENCE & DATA SCIENCE
          </p>
        </div>

        {/* Interactive SVG Network Graph */}
        <div className="relative h-64 sm:h-72 my-1">
          <svg className="w-full h-full" viewBox="0 0 400 300">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F2FE" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#818CF8" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FF0080" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="activeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F2FE" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#FF0080" stopOpacity="0.95" />
              </linearGradient>
            </defs>

            {/* Connecting Lines */}
            {connections.map((conn, idx) => {
              const fromNode = nodes.find((n) => n.id === conn.from);
              const toNode = nodes.find((n) => n.id === conn.to);
              if (!fromNode || !toNode) return null;

              const isHighlighted = activeNode === conn.from || activeNode === conn.to;

              return (
                <line
                  key={`line-${idx}`}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke={isHighlighted ? 'url(#activeLineGrad)' : 'url(#lineGrad)'}
                  strokeWidth={isHighlighted ? '2.5' : '1.5'}
                  strokeDasharray={isHighlighted ? 'none' : '4 4'}
                  className="transition-all duration-300"
                />
              );
            })}

            {/* Central convergence node */}
            <circle
              cx="195"
              cy="150"
              r="7"
              fill="#00F2FE"
              opacity="0.9"
              className="animate-pulse"
            />
            <circle
              cx="195"
              cy="150"
              r="18"
              fill="none"
              stroke="#A855F7"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              className="animate-spin origin-center"
              style={{ transformOrigin: '195px 150px' }}
            />

            {/* Interactive Nodes */}
            {nodes.map((node) => {
              const isSelected = activeNode === node.id;
              return (
                <g
                  key={node.id}
                  className="cursor-pointer transition-transform duration-200"
                  onMouseEnter={() => setActiveNode(node.id)}
                  onClick={() => setActiveNode(node.id)}
                >
                  {/* Subtle outer glow ring on active */}
                  {isSelected && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="32"
                      fill={node.color}
                      opacity="0.25"
                      className="animate-pulse"
                    />
                  )}

                  {/* Main Node Circle */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={isSelected ? '24' : '20'}
                    fill={isSelected ? '#0F172A' : '#0B0F24'}
                    stroke={isSelected ? node.color : '#334155'}
                    strokeWidth={isSelected ? '2.5' : '1.5'}
                    className="transition-all duration-200"
                  />

                  {/* Inner Node Accent */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="8"
                    fill={node.color}
                    opacity={isSelected ? '1' : '0.8'}
                  />

                  {/* Node Label */}
                  <text
                    x={node.x}
                    y={node.y + 36}
                    textAnchor="middle"
                    className={`text-xs font-mono font-semibold select-none transition-colors duration-200 ${
                      isSelected ? 'fill-cyan-300 font-bold' : 'fill-slate-400'
                    }`}
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Dynamic Interactive Insight Tooltip */}
        <div className="relative z-10 mt-2 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 transition-all duration-300">
          {activeNodeInfo ? (
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center text-white bg-gradient-to-tr ${activeNodeInfo.gradient} shadow-md shrink-0`}
              >
                {activeNodeInfo.icon}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white">{activeNodeInfo.label}</span>
                  <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950 px-1.5 py-0.5 rounded border border-cyan-800">
                    Interactive Node
                  </span>
                </div>
                <p className="text-xs text-slate-300 truncate mt-0.5">
                  {activeNodeInfo.subtitle}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-xs text-slate-400 text-center">
              Hover over any node above to inspect skills and projects
            </p>
          )}
        </div>

        {/* Bottom micro-bar */}
        <div className="relative z-10 flex items-center justify-between mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono">
          <span>Student AI Core</span>
          <span>Satya Institute · B.Tech</span>
        </div>
      </div>
    </div>
  );
};
