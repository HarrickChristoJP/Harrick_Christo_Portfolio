import React, { useState } from 'react';
import { Project } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  X,
  ExternalLink,
  Github,
  Server,
  Database,
  Code2,
  Terminal,
  Activity,
  Layers,
  CheckCircle2,
  Cpu,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'preview' | 'api' | 'database'>('architecture');
  const [simulatedEndpoint, setSimulatedEndpoint] = useState<string>('');
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [isLoadingApi, setIsLoadingApi] = useState(false);

  if (!project) return null;

  const handleTestEndpoint = (path: string, method: string) => {
    setIsLoadingApi(true);
    setSimulatedEndpoint(path);

    setTimeout(() => {
      setIsLoadingApi(false);
      if (project.id === 'erp-platform') {
        if (path.includes('customers')) {
          setApiResponse(
            JSON.stringify(
              {
                status: 'SUCCESS_200',
                totalRecords: 5240,
                page: 0,
                data: [
                  { id: 'CUST-00192', name: 'Apex Industrial Corp', balance: '$14,250.00', status: 'ACTIVE' },
                  { id: 'CUST-00193', name: 'Solaria Tech Ltd', balance: '$0.00', status: 'PAID' },
                  { id: 'CUST-00194', name: 'Vertex Logistics', balance: '$8,940.50', status: 'OVERDUE' },
                ],
              },
              null,
              2
            )
          );
        } else if (path.includes('balance-sheet')) {
          setApiResponse(
            JSON.stringify(
              {
                statement: 'Consolidated Balance Sheet',
                asOf: '2026-08-15',
                assets: { currentAssets: '$480,200.00', nonCurrentAssets: '$1,200,000.00' },
                liabilities: { accountsPayable: '$112,000.00', longTermDebt: '$350,000.00' },
                equity: '$1,218,200.00',
                status: 'BALANCED',
              },
              null,
              2
            )
          );
        } else {
          setApiResponse(
            JSON.stringify(
              {
                status: 'CREATED_201',
                invoiceNumber: 'INV-2026-0841',
                customerId: 'CUST-00192',
                subtotal: 12500.0,
                tax: 1250.0,
                total: 13750.0,
                ledgerEntryId: 'LEDG-99824',
              },
              null,
              2
            )
          );
        }
      } else if (project.id === 'traffic-management') {
        setApiResponse(
          JSON.stringify(
            {
              status: 'OK',
              activeSensors: 128,
              totalLiveVehicles: 10450,
              congestionIndex: 'NORMAL (24%)',
              criticalSectors: [
                { sector: 'Sector 4B - Central Expressway', speedAvg: '18 km/h', signalPhase: 'EXTENDED_GREEN' },
                { sector: 'Sector 9A - Tech Corridor', speedAvg: '44 km/h', signalPhase: 'STANDARD_CYCLE' },
              ],
            },
            null,
            2
          )
        );
      } else {
        setApiResponse(
          JSON.stringify(
            {
              status: 'PROCESSED_200',
              model: 'TensorFlow-CropCNN-v2.1',
              inferenceTimeMs: 82,
              prediction: 'Tomato Early Blight (Alternaria solani)',
              confidence: 0.942,
              prescriptions: ['Copper-based fungicide application', 'Increase plant spacing for ventilation'],
            },
            null,
            2
          )
        );
      }
    }, 400);
  };

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-modal-container"
        className="relative w-full max-w-4xl bg-[#111113] border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-zinc-800 flex items-start justify-between gap-4 bg-[#141417]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium">
                {project.category}
              </span>
              <span className="text-zinc-500 text-xs font-mono">•</span>
              <span className="text-emerald-400 text-xs font-mono">{project.status}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">{project.subtitle}</p>
          </div>

          <button
            id="project-modal-close-btn"
            onClick={onClose}
            aria-label="Close Project Modal"
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-zinc-800 bg-[#111113] overflow-x-auto">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-3 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'architecture'
                ? 'border-blue-500 text-blue-400 font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Architecture & Design</span>
          </button>

          <button
            onClick={() => setActiveTab('preview')}
            className={`pb-3 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'preview'
                ? 'border-blue-500 text-blue-400 font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab('api')}
            className={`pb-3 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'api'
                ? 'border-blue-500 text-blue-400 font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>REST API Explorer</span>
          </button>

          <button
            onClick={() => setActiveTab('database')}
            className={`pb-3 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'database'
                ? 'border-blue-500 text-blue-400 font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Relational Schema</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* Metrics row */}
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-center">
                    <div className="text-base sm:text-lg font-bold text-white font-heading">{m.value}</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Architecture Overview */}
              <div>
                <h4 className="text-xs font-mono uppercase text-blue-400 font-semibold tracking-wider mb-2">
                  System Architecture
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed bg-zinc-900/50 p-4 rounded-lg border border-zinc-800/80">
                  {project.architectureOverview}
                </p>
              </div>

              {/* Bullet points */}
              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 font-semibold tracking-wider mb-3">
                  Key Engineering Contributions
                </h4>
                <div className="space-y-2.5">
                  {project.bulletPoints.map((bp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features Grid */}
              <div>
                <h4 className="text-xs font-mono uppercase text-zinc-400 font-semibold tracking-wider mb-3">
                  Functional Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feat, i) => (
                    <div key={i} className="px-3 py-2 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: INTERACTIVE SIMULATOR */}
          {activeTab === 'preview' && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-850 text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-zinc-500 ml-2">SIMULATED DASHBOARD VIEW</span>
                  </div>
                  <span className="text-emerald-400 font-mono">STATUS: ACTIVE</span>
                </div>

                {project.id === 'erp-platform' && (
                  <div className="pt-4 space-y-4 font-sans">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                        <div className="text-xs text-zinc-400">Total Receivables</div>
                        <div className="text-base font-bold text-white mt-1">$128,450.00</div>
                        <div className="text-[10px] text-emerald-400 mt-0.5">+12.4% vs last month</div>
                      </div>
                      <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                        <div className="text-xs text-zinc-400">Active Invoices</div>
                        <div className="text-base font-bold text-white mt-1">342 Open</div>
                        <div className="text-[10px] text-blue-400 mt-0.5">98% on-time settlement</div>
                      </div>
                      <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                        <div className="text-xs text-zinc-400">Customer Records</div>
                        <div className="text-base font-bold text-white mt-1">5,240 Indexed</div>
                        <div className="text-[10px] text-zinc-400 mt-0.5">PostgreSQL Partitioned</div>
                      </div>
                    </div>

                    <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                      <div className="text-xs font-semibold text-zinc-300 mb-2">Recent General Ledger Transactions</div>
                      <table className="w-full text-xs text-left">
                        <thead>
                          <tr className="text-zinc-500 border-b border-zinc-800">
                            <th className="pb-2">TXN ID</th>
                            <th className="pb-2">ACCOUNT</th>
                            <th className="pb-2">DEBIT</th>
                            <th className="pb-2">CREDIT</th>
                            <th className="pb-2">STATUS</th>
                          </tr>
                        </thead>
                        <tbody className="text-zinc-300 divide-y divide-zinc-800/50">
                          <tr>
                            <td className="py-2 font-mono text-blue-400">TX-9041</td>
                            <td>Accounts Receivable</td>
                            <td className="text-emerald-400">$3,400.00</td>
                            <td>-</td>
                            <td><span className="px-1.5 py-0.5 bg-emerald-950 text-emerald-400 rounded text-[10px]">COMMITTED</span></td>
                          </tr>
                          <tr>
                            <td className="py-2 font-mono text-blue-400">TX-9042</td>
                            <td>Sales Revenue</td>
                            <td>-</td>
                            <td className="text-zinc-400">$3,400.00</td>
                            <td><span className="px-1.5 py-0.5 bg-emerald-950 text-emerald-400 rounded text-[10px]">COMMITTED</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {project.id === 'traffic-management' && (
                  <div className="pt-4 space-y-4 font-sans">
                    <div className="p-4 bg-zinc-900 rounded-lg border border-zinc-800">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-white">Grid Sector Live Stream (10,000+ telemetry events)</span>
                        <span className="text-xs font-mono text-emerald-400 animate-pulse">● 60 FPS STREAM</span>
                      </div>
                      <div className="h-28 bg-zinc-950 rounded border border-zinc-800 relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 opacity-20 bg-grid-pattern" />
                        <div className="text-center z-10 space-y-1">
                          <Activity className="w-6 h-6 text-emerald-400 mx-auto animate-bounce" />
                          <div className="text-xs font-mono text-zinc-300">Live Congestion Density: 34.2% Optimal</div>
                          <div className="text-[10px] font-mono text-zinc-500">Auto-adaptive signal algorithms active</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'agri-platform' && (
                  <div className="pt-4 space-y-3 font-sans">
                    <div className="p-3.5 bg-zinc-900 rounded-lg border border-zinc-800">
                      <div className="text-xs font-bold text-zinc-200 mb-1">TensorFlow Diagnostic Stream</div>
                      <p className="text-xs text-zinc-400">Model accuracy verified at 92.4% on 38 plant pathogen categories.</p>
                      <div className="mt-3 p-3 bg-zinc-950 rounded border border-zinc-800 text-xs font-mono text-emerald-400">
                        ✓ Ingestion pipeline verified • Flask REST endpoint online
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'ewaste-platform' && (
                  <div className="pt-4 space-y-3 font-sans">
                    <div className="p-3.5 bg-zinc-900 rounded-lg border border-zinc-800">
                      <div className="text-xs font-bold text-zinc-200 mb-1">Logistics & Disposal Dispatch Queue</div>
                      <p className="text-xs text-zinc-400">300+ monthly pickup pipeline running automated weight reconciliation.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: REST API EXPLORER */}
          {activeTab === 'api' && (
            <div className="space-y-4">
              <div className="text-xs text-zinc-400">
                Explore and execute simulated REST API requests against the {project.title} backend:
              </div>

              <div className="space-y-2">
                {project.endpoints?.map((ep, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                          ep.method === 'GET'
                            ? 'bg-blue-900/60 text-blue-300 border border-blue-700/50'
                            : 'bg-emerald-900/60 text-emerald-300 border border-emerald-700/50'
                        }`}
                      >
                        {ep.method}
                      </span>
                      <code className="text-xs font-mono text-zinc-200 truncate">{ep.path}</code>
                    </div>

                    <button
                      onClick={() => handleTestEndpoint(ep.path, ep.method)}
                      className="px-3 py-1.5 bg-blue-600/90 hover:bg-blue-600 text-white rounded text-xs font-mono font-medium transition-colors shrink-0 flex items-center gap-1.5 self-start sm:self-auto"
                    >
                      <span>Send Request</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>

              {/* API Response Output */}
              {isLoadingApi && (
                <div className="p-4 bg-zinc-950 rounded-lg border border-zinc-800 text-xs font-mono text-zinc-400 flex items-center gap-2">
                  <div className="w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                  <span>Dispatching REST request to {simulatedEndpoint}...</span>
                </div>
              )}

              {apiResponse && !isLoadingApi && (
                <div className="mt-4">
                  <div className="text-xs font-mono text-zinc-400 mb-1.5 flex items-center justify-between">
                    <span>RESPONSE PAYLOAD (HTTP 200 OK)</span>
                    <span className="text-emerald-400">Content-Type: application/json</span>
                  </div>
                  <pre className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 overflow-x-auto max-h-56">
                    {apiResponse}
                  </pre>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: DATABASE SCHEMA */}
          {activeTab === 'database' && (
            <div className="space-y-4">
              <div className="text-xs text-zinc-400">
                Relational schema architecture designed with primary/foreign keys and ACID guarantees:
              </div>

              <div className="space-y-2.5">
                {project.dbSchemaHighlights?.map((table, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 font-mono text-xs">
                    <div className="flex items-center gap-2 text-blue-400 font-semibold mb-1">
                      <Database className="w-3.5 h-3.5" />
                      <span>{table.split(' ')[0]}</span>
                    </div>
                    <div className="text-zinc-400 text-[11px] pl-5">{table.substring(table.indexOf('('))}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-zinc-800 bg-[#141417] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl || PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 text-xs font-medium hover:bg-zinc-800 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View on GitHub</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
