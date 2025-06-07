import { motion } from 'framer-motion';
import {  FaHeadphones, FaPlay, FaRobot, FaChartLine, FaHeart,FaPen, FaChartBar, FaMusic, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Particles from '../components/Particles';
import FeatureCard from '../components/FeatureCard';
import { useAuth } from '../context/AuthContext';
import FloatingIcons from '../components/FloatingIcons';
import { useState, useEffect } from 'react';

function Home() {
  const { user } = useAuth();
  const [text, setText] = useState('');
  const firstLine = "Let Your Feelings Flow —";
  const fullText = "Let Music Heal You";
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let timeout;

    const animate = () => {
      if (!isDeleting) {
        // Typing
        if (currentIndex <= fullText.length) {
          setText(fullText.slice(0, currentIndex));
          currentIndex++;
          timeout = setTimeout(animate, 200);
        } else {
          // Wait before starting to delete
          timeout = setTimeout(() => {
            setIsDeleting(true);
            animate();
          }, 3000); // Wait 2 seconds before starting to delete
        }
      } else {
        // Deleting
        if (currentIndex > 0) {
          setText(fullText.slice(0, currentIndex - 1));
          currentIndex--;
          timeout = setTimeout(animate, 150); // Faster deletion speed
        } else {
          setIsDeleting(false);
          // Wait before starting to type again
          timeout = setTimeout(animate, 1000); // Wait 1 second before retyping
        }
      }
    };

    // Start the animation
    animate();

    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearTimeout(timeout);
      clearInterval(cursorInterval);
    };
  }, [isDeleting]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white relative overflow-hidden font-['Lora']">
      {/* Background Particles */}
      <Particles className="absolute inset-0" />
      
      {/* Floating Musical Icons */}
      <FloatingIcons />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl font-bold text-blue-100 font-['Lora']"
            >
              <div className="inline-block">
                {firstLine}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3"
              >
                <span className="inline-block">
                  {text}
                  <span className={`inline-block w-2 h-8 bg-blue-100 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                </span>
              </motion.div>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-2xl mx-auto text-lg sm:text-xl font-bolder text-yellow-200 font-['Lora']"
            >
              Track your emotional well-being, express your feelings through journaling, and discover personalized music that resonates with your mood. Your path to better mental health starts here.<br></br>
              <div className='text-green-300  mt-3'>"We Are Here To Make You Feel Better"</div>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {user ? (
                <Link
                  to="/dashboard/new-journal"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg font-semibold border-white/20 bg-gradient-to-r from-purple-700 to-blue-700 hover:from-blue-600 hover:to-purple-600 transition-all duration-200 text-center font-['Lora']"
                >
                  Share How You Feel  🖊️
                </Link>
              ) : (
                <>
                  <Link
                    to="/signup"
                    className="w-full sm:w-auto px-4 py-3 rounded-lg font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 transition-all duration-200 text-black text-center font-['Lora']"
                  >
                    Begin Your Mood Journey
                  </Link>
                  <Link
                    to="/login"
                    className="w-full sm:w-auto px-4  py-3 text-xl rounded-lg font-bold bg-white/5 hover:bg-white/10 transition-all duration-200 text-center font-['Lora']"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 sm:px-6 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-['Lora']">
              Express, Analyze, and Listen
            </h2>
            <p className="mt-4 text-lg text-gray-400 font-['Lora']">
              Discover how your words can transform into the perfect playlist
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
            <FeatureCard 
              icon={FaPen}
              title="Journal Your Feelings"
              description="Write freely about your day, emotions, and experiences in a safe, private space."
              delay={0.4}
            />
            <FeatureCard 
              icon={FaChartBar}
              title="Mood Analysis"
              description="Our AI analyzes your entries to understand your emotional state and energy levels."
              delay={0.5}
            />
            <FeatureCard 
              icon={FaMusic}
              title="Music Recommendations"
              description="Get personalized song suggestions that match your current mood and help you feel better."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-r from-blue-900/20 to-purple-800 rounded-2xl p-8 sm:p-12 border border-white/10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-['Lora']">
              Moodtunes: Your Mental Health Companion
            </h2>
            <p className="text-gray-300 mb-8 font-['Lora']">
              Join thousands of users who have discovered the perfect soundtrack for their emotions.
            </p>
            {user ? (
              <Link
                to="/dashboard/new-journal"
                className="inline-block text-black px-8 py-3 text-xl rounded-lg font-bold border border-white/50  bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-600 transition-all duration-200 font-['Lora']"
              >
                Start Journaling
              </Link>
            ) : (
              <Link
                to="/signup"
                className="inline-block px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-['Lora']"
              >
                Create Free Account
              </Link>
            )}
          </motion.div>
        </div>
      </section>

      {/* Privacy Note */}
      <section className="relative py-12 px-4 sm:px-6 bg-black/40">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white"
          >
            <FaLock className="text-xl" />
            <p className="text-m font-['Lora']">
              Your privacy is our priority. All journal entries are encrypted and securely stored.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;