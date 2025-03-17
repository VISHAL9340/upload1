import React from 'react';
import { Shield, Database, Lock, FileText, Share2, History, Code, Server, HardDrive, Link, KeyRound, Bell } from 'lucide-react';

export function Hero() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Your Files, <span className="text-blue-600">Decentralized</span><br />
            Your Data, <span className="text-blue-600">Secured</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Store, manage, and share your files securely on the blockchain with DecentraVault. 
            Military-grade encryption meets the power of decentralization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:scale-105 transition-all">
              Watch Demo
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mb-20">
            {[
              { label: 'Active Users', value: '10K+' },
              { label: 'Files Stored', value: '1M+' },
              { label: 'Data Secured', value: '500TB' },
              { label: 'Uptime', value: '99.9%' }
            ].map((stat, index) => (
              <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div id="features" className="scroll-mt-20 grid md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {[
            {
              icon: <Shield className="h-8 w-8 text-blue-600" />,
              title: "Military-Grade Security",
              description: "End-to-end encryption with AES-256 ensures your files remain completely private and secure."
            },
            {
              icon: <Database className="h-8 w-8 text-blue-600" />,
              title: "Decentralized Storage",
              description: "Files are distributed across a global network of nodes, ensuring 100% uptime and availability."
            },
            {
              icon: <Lock className="h-8 w-8 text-blue-600" />,
              title: "Complete Control",
              description: "You own your encryption keys. Only you decide who can access your data."
            },
            {
              icon: <FileText className="h-8 w-8 text-blue-600" />,
              title: "Smart File Management",
              description: "Powerful search, tagging, and organization tools to manage your digital assets."
            },
            {
              icon: <Share2 className="h-8 w-8 text-blue-600" />,
              title: "Secure Sharing",
              description: "Share files with customizable permissions and expiring links."
            },
            {
              icon: <History className="h-8 w-8 text-blue-600" />,
              title: "Version Control",
              description: "Track changes and restore previous versions of your files at any time."
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 p-3 bg-blue-50 dark:bg-gray-700 rounded-lg inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Technology Stack Section */}
        <div id="tech-stack" className="scroll-mt-20 py-16 md:py-24 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Powered by Modern Technology
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge tools and frameworks to deliver a secure, scalable, and efficient platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Frontend",
                icon: <Code className="h-8 w-8 text-blue-600" />,
                technologies: [
                  "React.js – Interactive UI",
                  "Tailwind CSS – Modern Design",
                  "React Router – Navigation",
                  "Axios – API Communication"
                ]
              },
              {
                title: "Backend",
                icon: <Server className="h-8 w-8 text-blue-600" />,
                technologies: [
                  "Node.js + Express.js",
                  "JWT Authentication",
                  "Bcrypt.js Security",
                  "Multer File Handling"
                ]
              },
              {
                title: "Storage",
                icon: <HardDrive className="h-8 w-8 text-blue-600" />,
                technologies: [
                  "MongoDB Atlas",
                  "IPFS Decentralized Storage",
                  "Firebase Integration",
                  "Distributed Systems"
                ]
              },
              {
                title: "Blockchain",
                icon: <Link className="h-8 w-8 text-blue-600" />,
                technologies: [
                  "Ethereum Smart Contracts",
                  "Solidity Development",
                  "Web3.js Integration",
                  "Multi-Chain Support"
                ]
              },
              {
                title: "Security",
                icon: <KeyRound className="h-8 w-8 text-blue-600" />,
                technologies: [
                  "End-to-End Encryption",
                  "Two-Factor Auth (2FA)",
                  "Advanced Encryption",
                  "Secure Key Management"
                ]
              },
              {
                title: "Features",
                icon: <Bell className="h-8 w-8 text-blue-600" />,
                technologies: [
                  "Real-time Updates",
                  "Activity Logging",
                  "Email Notifications",
                  "Analytics Dashboard"
                ]
              }
            ].map((stack, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4 p-3 bg-blue-50 dark:bg-gray-700 rounded-lg inline-block">
                  {stack.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {stack.title}
                </h3>
                <ul className="space-y-3">
                  {stack.technologies.map((tech, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="scroll-mt-20 text-center py-16 md:py-24 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Basic",
                price: "$9.99",
                features: ["10GB Storage", "Basic Encryption", "Email Support"]
              },
              {
                name: "Pro",
                price: "$19.99",
                features: ["100GB Storage", "Advanced Encryption", "24/7 Support", "Version History"]
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Unlimited Storage", "Custom Solutions", "Dedicated Support", "API Access"]
              }
            ].map((plan, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300">{feature}</li>
                  ))}
                </ul>
                <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="scroll-mt-20 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About DecentraVault
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              DecentraVault is revolutionizing file storage by combining blockchain technology
              with military-grade encryption. Our mission is to provide the most secure and
              decentralized storage solution for individuals and businesses alike.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 md:py-24 bg-blue-50 dark:bg-gray-800 rounded-2xl mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Secure Your Data?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust DecentraVault with their valuable data.
            Start your free trial today.
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}