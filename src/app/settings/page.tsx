'use client';

import { Settings, Moon, Sun, Volume2, Download, Bell, Globe, Shield, HelpCircle } from 'lucide-react';

export default function SettingsPage() {
  const settingsSections = [
    {
      title: 'Appearance',
      items: [
        { icon: Moon, label: 'Dark Mode', value: 'Enabled' },
        { icon: Volume2, label: 'Audio Quality', value: 'High' },
      ]
    },
    {
      title: 'Downloads',
      items: [
        { icon: Download, label: 'Download Quality', value: 'High' },
        { icon: Download, label: 'Auto Download', value: 'Off' },
      ]
    },
    {
      title: 'Notifications',
      items: [
        { icon: Bell, label: 'Push Notifications', value: 'Enabled' },
        { icon: Bell, label: 'Email Notifications', value: 'Disabled' },
      ]
    },
    {
      title: 'General',
      items: [
        { icon: Globe, label: 'Language', value: 'English' },
        { icon: Shield, label: 'Privacy', value: 'Manage' },
        { icon: HelpCircle, label: 'Help & Support', value: 'Contact' },
      ]
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Settings className="w-8 h-8 text-purple-500" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">
          Settings
        </h1>
      </div>

      <div className="max-w-3xl space-y-8">
        {settingsSections.map((section, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-100">{section.title}</h2>
            <div className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-200">{item.label}</span>
                  </div>
                  <span className="text-gray-400">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 