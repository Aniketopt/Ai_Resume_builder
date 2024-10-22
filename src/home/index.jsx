import React from 'react'
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom' // Import useNavigate hook
import { FileText, Zap, Globe, ArrowRight, FileSpreadsheet, Clock, Cog, BarChart3 } from 'lucide-react'
import Header from '@/components/custom/Header';

function Home() {
  const navigate = useNavigate(); // Create navigate function
  
  const handleStartNowClick = () => {
    navigate('/auth/sign-in'); // Navigate to /auth/sign-in on button click
  };

  return (
    <div className="min-h-screen text-white">
    
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .meteor {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, #ffffff, rgba(255,255,255,0));
          animation: meteor 6s linear infinite;
        }
        @keyframes meteor {
          0% { transform: translateX(0) translateY(0); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateX(-500px) translateY(500px); opacity: 0; }
        }
        .planet {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #6b46c1, #2c1a4d);
          box-shadow: 0 0 20px rgba(107, 70, 193, 0.5);
        }
      `}</style>
      <Header/>

      <div className="relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #2a0845 0%, #1a1f3c 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
      }}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className="meteor" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 100 + 50}px`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${Math.random() * 2 + 4}s`,
          }} />
        ))}

        <div className="planet" style={{
          top: '10%',
          right: '5%',
          width: '100px',
          height: '100px',
        }} />

        <div className="planet" style={{
          bottom: '15%',
          left: '10%',
          width: '150px',
          height: '150px',
        }} />

        <div className="relative z-10 container mx-auto px-6 py-12 text-center">
          <div className="mb-2">
            <span className="bg-white/10 text-blue-200 py-1 px-3 rounded-full text-sm">🚀 Trusted by Over 1 Million Users Worldwide</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Revolutionize Your<br />
            <span className="text-blue-300">Resume Creation</span> Experience
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Unlock seamless, AI-powered resume building. Create, customize, and optimize your resume effortlessly, with the ability to tailor for any job application.
          </p>
          <div className="flex justify-center mb-12">
            <Button 
              className="bg-purple-400 text-white hover:bg-white hover:text-purple-700 px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300"
              onClick={handleStartNowClick} // Call handleStartNowClick on click
            >
              Start Now <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Updated background for Key Features section */}
      <div className="py-20" style={{
        background: 'linear-gradient(135deg, #2a0845 0%, #1a1f3c 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
      }}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-200">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FileText className="w-8 h-8 text-blue-300" />}
              title="AI-Powered Templates"
              description="Our AI analyzes job descriptions to create tailored resume templates for maximum impact."
            />
            <FeatureCard 
              icon={<Zap className="w-8 h-8 text-blue-300" />}
              title="Instant Optimization"
              description="Get real-time suggestions to improve your resume's content and formatting."
            />
            <FeatureCard 
              icon={<Globe className="w-8 h-8 text-blue-300" />}
              title="Multi-Format Export"
              description="Export your resume in various formats, ensuring compatibility with all application systems."
            />
          </div>
        </div>
      </div>

      {/* Updated background for How the AI Resume Builder Works section */}
      <div className="py-16" style={{
        background: 'linear-gradient(135deg, #2a0845 0%, #1a1f3c 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
      }}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-200">How the AI Resume Builder Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ProcessStep 
              icon={<FileSpreadsheet className="w-8 h-8 text-purple-600" />}
              title="Input Information"
              description="Enter your professional details and experiences into our user-friendly interface."
            />
            <ProcessStep 
              icon={<Clock className="w-8 h-8 text-yellow-600" />}
              title="AI Analysis"
              description="Our AI analyzes your input and job market trends to optimize your resume."
            />
            <ProcessStep 
              icon={<Cog className="w-8 h-8 text-blue-600" />}
              title="Customize Template"
              description="Choose from AI-recommended templates or customize your own to stand out."
            />
            <ProcessStep 
              icon={<BarChart3 className="w-8 h-8 text-green-600" />}
              title="Optimize & Export"
              description="Receive suggestions for improvements and export your polished resume."
            />
          </div>
        </div>
      </div>

      <div className="bg-blue-900 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4 text-white">Why You Need AI Resume Builder</h2>
              <p className="text-blue-200 mb-4">
                Our AI-powered tool revolutionizes the resume creation process, providing intelligent insights and optimizations to help you stand out in today's competitive job market. With tailored templates and real-time suggestions, we ensure your resume showcases your best professional self.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg transform rotate-6"></div>
                <div className="relative bg-blue-800 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-200">Our Aim</h3>
                  <p className="text-blue-100">
                    To empower job seekers with cutting-edge AI technology, making the resume creation process effortless, efficient, and effective. We strive to bridge the gap between your skills and your dream job opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white/5 p-6 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/10">
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-blue-200 mb-2">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  )
}

function ProcessStep({ icon, title, description }) {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="bg-white p-4 rounded-full mb-4 inline-block group-hover:shadow-lg transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-blue-700">{description}</p>
    </div>
  )
}

export default Home
