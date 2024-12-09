import { motion, AnimatePresence, useSpring, MotionValue } from "framer-motion";
import { projects } from "@/utils/links";
import Image from "next/image";
function Modal({
  x,
  y,
  modalOpen,
  hoveredProjectIndex,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  modalOpen: boolean;
  hoveredProjectIndex: number;
}) {
  const animatedX = useSpring(x, { stiffness: 300, damping: 20 });
  const animatedY = useSpring(y, { stiffness: 300, damping: 20 });

  const animatedButtonX = useSpring(x, { stiffness: 300, damping: 10 });
  const animatedButtonY = useSpring(y, { stiffness: 300, damping: 10 });

  console.log('rendering modal');
  return (
    <>
      {/* MODAL */}
      <AnimatePresence mode="wait">
        {modalOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              translateX: "-50%",
              translateY: "-50%",
            }}
            style={{
              top: animatedY,
              left: animatedX,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute xl:w-[500px] xl:h-[400px] w-[400px] h-[270px] pointer-events-none overflow-hidden"
          >
            <motion.div
              animate={{
                x: `-${hoveredProjectIndex}00%`,
                transition: { type: "spring", duration: 0.5 },
              }}
              className="flex w-full h-full"
            >
              {projects.map((project) => (
                <div
                  key={project.index}
                  style={{ background: project.primaryColor }}
                  className="w-full h-full shrink-0 grid place-items-center"
                >
                  <Image
                    src={project.image}
                    width={500 - 30}
                    height={400}
                    alt={project.label}
                    className="xl:w-[calc(100%-1rem)] lg:w-[calc(100%-0.5rem)]"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* VIEW BUTTON */}
      <AnimatePresence mode="wait">
        {modalOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              translateX: "-50%",
              translateY: "-50%",
            }}
            style={{
              top: animatedButtonY,
              left: animatedButtonX,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              background: projects[hoveredProjectIndex].primaryColor,
            }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute xl:size-24 size-20 z-20 pointer-events-none rounded-full font-bold text-white grid place-items-center"
          >
            View
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Modal;
