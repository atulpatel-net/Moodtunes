import { motion } from 'framer-motion';
import { FaBrain, FaMusic, FaHeart, FaChartBar, FaLock, FaPuzzlePiece, FaRobot, FaChartLine, FaLightbulb } from 'react-icons/fa';
import FloatingIcons from '../components/FloatingIcons';

function About() {
  const features = [
    {
      icon: FaBrain,
      title: "AI-Powered Mood Analysis",
      description: "Our advanced AI understands your emotions through natural language processing, providing accurate mood detection and emotional insights.",
      color: "blue"
    },
    {
      icon: FaMusic,
      title: "Personalized Music Therapy",
      description: "Experience music that perfectly matches your mood or helps uplift your spirits, curated by our intelligent recommendation system.",
      color: "purple"
    },
    {
      icon: FaHeart,
      title: "Emotional Intelligence",
      description: "Track your emotional patterns over time, gain insights into your mood trends, and understand your emotional journey better.",
      color: "pink"
    },
    {
      icon: FaChartBar,
      title: "Real-Time Feedback",
      description: "Share your experience with each playlist to help our system learn and provide even better recommendations for your future sessions.",
      color: "green"
    },
    {
      icon: FaLock,
      title: "Secure & Private",
      description: "Your journal entries and emotional data are encrypted and protected, ensuring your privacy and security at all times.",
      color: "yellow"
    },
    {
      icon: FaPuzzlePiece,
      title: "Seamless Integration",
      description: "Connect with Spotify to transfer your mood-based playlists directly to your music library for easy access anywhere.",
      color: "indigo"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Floating Musical Icons */}
      <FloatingIcons />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#0f172a,#1e293b,#0f172a)] opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10, 84, 243, 0)_0%,transparent_70%)] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-['Playfair_Display'] tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-purple-100">
            About MoodTunes
          </h1>
          <p className="text-xl text-gray-300 font-['Inter'] leading-relaxed max-w-3xl mx-auto">
            Discover the perfect harmony between your emotions and music. MoodTunes uses advanced AI to analyze your feelings and create personalized musical experiences that resonate with your soul.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 shadow-xl shadow-black/20"
            >
              <div className="flex flex-col h-full">
                <div className={`p-3 rounded-lg bg-${feature.color}-500/10 w-fit mb-4 group-hover:bg-${feature.color}-500/20 transition-colors`}>
                  <feature.icon className={`h-6 w-6 text-${feature.color}-400`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-['Playfair_Display'] tracking-wide text-teal-300">
                  {feature.title}
                </h3>
                <p className="text-gray-100 font-['Inter'] leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose MoodTunes Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-blue-900/10 rounded-xl p-8 border border-gray-800 max-w-4xl mx-auto shadow-xl shadow-black/20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-['Playfair_Display'] tracking-wide text-blue-300">
              Why Choose MoodTunes?
            </h2>
            <p className="text-gray-200 font-['Inter'] font-semibold leading-relaxed">
              Sometimes, you don't know how you feel, who to talk to, or what music might help. 
              MoodTunes understands your emotions through journaling and guides you with personalized playlists 
              — even when you can't put your feelings into words. We help you feel better, one song at a time.
            </p>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-blue-900/10 rounded-xl p-8 border border-gray-800 max-w-4xl mx-auto shadow-xl shadow-black/20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-['Playfair_Display'] tracking-wide text-blue-300">
              Our Mission
            </h2>
            <p className="text-gray-200 font-['Inter'] font-semibold leading-relaxed">
              To create a world where everyone can find their perfect musical companion, 
              where emotions and melodies dance together in perfect harmony, 
              and where technology serves to enhance our emotional well-being through the universal language of music.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;