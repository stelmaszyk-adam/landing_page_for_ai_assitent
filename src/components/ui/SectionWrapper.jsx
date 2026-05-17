import { motion } from 'framer-motion'

export default function SectionWrapper({ children, id, className = '', dark = false }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-gray-900 text-white' : ''} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  )
}
