'use client';

import { Card } from './card';
import { 
  TrendingUp, 
  Users, 
  MessageSquare, 
  CheckCircle2,
  Clock,
  AlertCircle,
  ArrowUp,
  ArrowDown,
  MoreVertical
} from 'lucide-react';

export function DashboardPreview() {
  const stats = [
    { 
      label: 'Revenue This Month', 
      value: '₦2.4M', 
      change: '+18%', 
      trend: 'up',
      icon: TrendingUp,
      color: 'text-accent-400'
    },
    { 
      label: 'Pipeline Value', 
      value: '₦8.7M', 
      change: '+24%', 
      trend: 'up',
      icon: Users,
      color: 'text-primary-500'
    },
    { 
      label: 'New Leads', 
      value: '147', 
      change: '+12%', 
      trend: 'up',
      icon: MessageSquare,
      color: 'text-accent-400'
    },
    { 
      label: 'Conversion Rate', 
      value: '24.3%', 
      change: '-2%', 
      trend: 'down',
      icon: CheckCircle2,
      color: 'text-primary-500'
    },
  ];

  const recentLeads = [
    { 
      name: 'Adebayo Okonkwo', 
      status: 'Qualified', 
      value: '₦450K', 
      time: '12 min ago',
      intent: 'high',
      action: 'Send quotation'
    },
    { 
      name: 'Sarah Johnson', 
      status: 'In Progress', 
      value: '₦280K', 
      time: '28 min ago',
      intent: 'medium',
      action: 'Follow up call'
    },
    { 
      name: 'Chukwudi Eze', 
      status: 'New Lead', 
      value: '₦680K', 
      time: '1 hour ago',
      intent: 'high',
      action: 'Qualify lead'
    },
    { 
      name: 'Fatima Mohammed', 
      status: 'Quoted', 
      value: '₦320K', 
      time: '2 hours ago',
      intent: 'medium',
      action: 'Awaiting response'
    },
  ];

  const aiActivity = [
    { action: 'Responded to 23 enquiries', time: 'Last hour' },
    { action: 'Qualified 12 new leads', time: 'Last hour' },
    { action: 'Sent 8 follow-up messages', time: 'Last 2 hours' },
    { action: 'Identified 5 high-value opportunities', time: 'Today' },
  ];

  return (
    <div className="relative">
      {/* Browser Chrome */}
      <div className="bg-neutral-100 rounded-t-xl p-3 border-b border-neutral-200">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 ml-4 bg-white rounded px-3 py-1 text-xs text-neutral-300">
            revenue.usebridger.com
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="bg-background-slate rounded-b-xl p-6 border border-t-0 border-neutral-200">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-primary-600 mb-1">Revenue Dashboard</h3>
          <p className="text-sm text-neutral-300">Real-time view of your revenue operation</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 bg-white">
              <div className="flex items-start justify-between mb-2">
                <div className={`w-8 h-8 rounded-lg bg-accent-50 flex items-center justify-center ${stat.color}`}>
                  <stat.icon size={18} />
                </div>
                <div className={`flex items-center gap-1 text-xs font-semibold ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                  {stat.change}
                </div>
              </div>
              <div className="text-2xl font-bold text-primary-600 mb-1">{stat.value}</div>
              <div className="text-xs text-neutral-300">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Leads Requiring Attention */}
          <div className="lg:col-span-2">
            <Card className="p-5 bg-white">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-primary-600">Leads Requiring Attention</h4>
                <button className="text-neutral-300 hover:text-primary-600">
                  <MoreVertical size={18} />
                </button>
              </div>
              <div className="space-y-3">
                {recentLeads.map((lead, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-3 rounded-lg bg-background-slate hover:bg-accent-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                        <Users className="text-primary-600" size={18} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-primary-600 text-sm">{lead.name}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            lead.intent === 'high' 
                              ? 'bg-accent-100 text-accent-600' 
                              : 'bg-neutral-100 text-neutral-400'
                          }`}>
                            {lead.intent === 'high' ? 'High Intent' : 'Medium Intent'}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-neutral-300">
                          <span>{lead.status}</span>
                          <span>•</span>
                          <span className="font-semibold text-primary-600">{lead.value}</span>
                          <span>•</span>
                          <span>{lead.time}</span>
                        </div>
                      </div>
                      <div className="text-xs font-medium text-accent-400 hidden md:block">
                        {lead.action} →
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* AI Activity */}
          <div>
            <Card className="p-5 bg-white">
              <h4 className="text-lg font-semibold text-primary-600 mb-4">AI Activity</h4>
              <div className="space-y-4">
                {aiActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="text-accent-400" size={16} />
                    </div>
                    <div>
                      <p className="text-sm text-primary-600 font-medium mb-1">
                        {activity.action}
                      </p>
                      <p className="text-xs text-neutral-300">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-neutral-100">
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Clock size={14} />
                  <span>System running smoothly</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="mt-6 p-4 bg-accent-50 border-l-4 border-accent-400 rounded-r-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-accent-400 mt-0.5" size={18} />
            <div>
              <p className="text-sm font-semibold text-primary-600 mb-1">
                14 leads need attention today
              </p>
              <p className="text-xs text-neutral-300">
                AI has identified opportunities requiring your team&apos;s review
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
