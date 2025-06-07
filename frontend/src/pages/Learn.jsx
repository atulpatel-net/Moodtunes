import { motion } from 'framer-motion';
import { FaPen, FaRobot, FaMusic, FaChartLine, FaLightbulb, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FloatingIcons from '../components/FloatingIcons';

function Learn() {
  const steps = [
    {
      icon: FaPen,
      title: "Express Your Feelings",
      description: "Write freely in your journal about your day, emotions, and experiences. Be as detailed as you'd like - the more you share, the better we can understand your mood.",
      color: "blue"
    },
    {
      icon: FaRobot,
      title: "AI Mood Analysis",
      description: "Our advanced AI analyzes your journal entry to understand your emotional state. It identifies key emotions and energy levels to provide the most relevant music recommendations.",
      color: "purple"
    },
    {
      icon: FaMusic,
      title: "Choose Your Music",
      description: "Based on your mood, you'll receive two options: music that matches your current mood or uplifting music to help shift your emotional state. Select what feels right for you.",
      color: "pink"
    },
    {
      icon: FaChartLine,
      title: "Track Your Journey",
      description: "After listening to your recommended playlists, provide feedback on how the music made you feel. This helps us improve our recommendations for your future sessions.",
      color: "green"
    }
  ];

  const proTips = [
    "Be specific about your emotions - it helps our AI understand you better",
    "Try both matching and uplifting playlists to discover what works best for you",
    "Regular journaling helps track your emotional patterns over time",
    "Don't hesitate to express complex or mixed emotions - our AI can handle it"
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Floating Musical Icons */}
      <FloatingIcons />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#0f172a,#1e293b,#0f172a)] opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(92, 10, 243, 0.97)_0%,transparent_70%)] opacity-50"></div>
      
      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-['Playfair_Display'] tracking-wide text-white">
            Learn to Use MoodTunes
          </h1>
          <p className="text-xl text-blue-100 font-['Inter'] leading-relaxed">
            Discover how to make the most of your musical journey with our simple guide
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-lg rounded-xl p-6 border border-white/25 hover:border-white/35 hover:bg-black/60 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-${step.color}-500/30`}>
                  <step.icon className={`h-6 w-6 text-${step.color}-500`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-['Playfair_Display'] tracking-wide text-blue-300">
                    {step.title}
                  </h3>
                  <p className="text-blue-50 font-['Inter'] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pro Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-blue-900/50 to-purple-900/30 rounded-xl p-8 border border-white/25 mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaLightbulb className="h-6 w-6 text-yellow-500" />
            <h2 className="text-2xl font-bold font-['Playfair_Display'] tracking-wide text-white">
              Pro Tips
            </h2>
          </div>
          <ul className="space-y-4">
            {proTips.map((tip, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-3 font-['Inter'] leading-relaxed"
              >
                <span className="text-blue-400 mt-1">•</span>
                <span className="text-blue-50">{tip}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link
            to="/dashboard/new-journal"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-900 to-purple-900 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-['Inter']"
          >
            Start Your Journey
            <FaArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Learn;   