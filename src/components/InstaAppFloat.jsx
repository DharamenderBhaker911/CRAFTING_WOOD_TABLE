import { motion } from 'framer-motion';

const InstagramFloat = () => {
    const instagramUrl = `https://www.instagram.com/suzerain_epoxysmith?igsh=MXFheGwyNDM5NXc2ag==`;

    return (
        <motion.a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-[9999] group"
            style={{
                bottom: '1.5rem',
                left: '1.5rem',
                position: 'fixed'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {/* Pulsing ring */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0, 0.5],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-full"
            />

            {/* Main Button */}
            <div className="relative bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all">
                <svg
                    className="w-10 h-10 md:w-12 md:h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M7.75 2C4.678 2 2 4.678 2 7.75v8.5C2 19.322 4.678 22 7.75 22h8.5C19.322 22 22 19.322 22 16.25v-8.5C22 4.678 19.322 2 16.25 2h-8.5zm0 2h8.5C18.218 4 20 5.782 20 7.75v8.5C20 18.218 18.218 20 16.25 20h-8.5C5.782 20 4 18.218 4 16.25v-8.5C4 5.782 5.782 4 7.75 4zm8.75 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
            </div>

            {/* Tooltip (Now appears on RIGHT side) */}
            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                <div className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-xl">
                    Follow us on Instagram
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full border-8 border-transparent border-r-gray-800"></div>
                </div>
            </div>
        </motion.a>
    );
};

export default InstagramFloat;