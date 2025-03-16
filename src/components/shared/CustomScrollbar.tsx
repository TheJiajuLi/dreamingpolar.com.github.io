import React, {
  forwardRef,
  ReactNode,
  useEffect,
  useState,
  useCallback,
} from "react";
import styled from "styled-components";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface CustomScrollbarProps {
  children: ReactNode;
  className?: string;
  height?: string;
  style?: React.CSSProperties;
}

const CustomScrollbar = forwardRef<HTMLDivElement, CustomScrollbarProps>(
  ({ children, className, height, style }, forwardedRef) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [thumbHeight, setThumbHeight] = useState(40);
    const [dragStartY, setDragStartY] = useState(0);
    const [startScrollTop, setStartScrollTop] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Optimized scroll monitoring
    const { scrollYProgress } = useScroll({
      container: containerRef,
      smooth: true,
      layoutEffect: false,
    });

    // Enhanced spring animation
    const smoothProgress = useSpring(scrollYProgress, {
      damping: 25,
      stiffness: 250,
      mass: 0.5,
      restSpeed: 0.001,
    });

    // Optimized thumb size calculation
    const updateThumbSize = useCallback(() => {
      if (containerRef.current) {
        const { clientHeight, scrollHeight } = containerRef.current;
        const ratio = clientHeight / scrollHeight;
        const size = Math.max(ratio * clientHeight, 40);
        setThumbHeight(size);
      }
    }, []);

    // Improved scroll handling
    const handleScroll = useCallback(() => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => setIsScrolling(false), 100);
    }, []);

    let scrollTimeout: number;

    // Enhanced drag handling
    const handleDrag = useCallback(
      (e: MouseEvent) => {
        if (!isDragging || !containerRef.current) return;

        const deltaY = e.clientY - dragStartY;
        const container = containerRef.current;
        const scrollRatio = container.scrollHeight / container.clientHeight;
        const scrollSpeed = 1.2; // Adjust for faster/slower scrolling

        const newScrollTop =
          startScrollTop + deltaY * scrollRatio * scrollSpeed;
        container.scrollTop = Math.max(
          0,
          Math.min(
            container.scrollHeight - container.clientHeight,
            newScrollTop
          )
        );
      },
      [isDragging, dragStartY, startScrollTop]
    );

    // Use effects for event listeners
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const resizeObserver = new ResizeObserver(updateThumbSize);
      resizeObserver.observe(container);

      container.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", updateThumbSize, { passive: true });

      return () => {
        resizeObserver.disconnect();
        container.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", updateThumbSize);
      };
    }, [updateThumbSize, handleScroll]);

    // Add this useEffect to handle the forwarded ref
    useEffect(() => {
      if (!containerRef.current) return;

      if (typeof forwardedRef === "function") {
        forwardedRef(containerRef.current);
      } else if (forwardedRef) {
        forwardedRef.current = containerRef.current;
      }
    }, [forwardedRef]);

    return (
      <ScrollbarContainer
        ref={forwardedRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ScrollableContent
          ref={containerRef}
          className={className}
          $height={height}
          style={style}
        >
          {children}
        </ScrollableContent>

        <ScrollbarTrack
          animate={{
            opacity: isHovered || isScrolling || isDragging ? 1 : 0.3,
          }}
          transition={{ duration: 0.2 }}
        >
          <ScrollbarThumb
            as={motion.div}
            style={{
              height: thumbHeight,
              y: useTransform(
                smoothProgress,
                [0, 1],
                [
                  0,
                  containerRef.current
                    ? containerRef.current.clientHeight - thumbHeight
                    : 0,
                ]
              ),
            }}
            animate={{
              opacity: isScrolling || isDragging || isHovered ? 1 : 0.7,
              scale: isScrolling || isDragging ? 1.1 : 1,
            }}
            transition={{
              opacity: { duration: 0.15 },
              scale: {
                type: "spring",
                stiffness: 400,
                damping: 30,
                mass: 0.8,
              },
            }}
            whileHover={{ scale: 1.15 }}
            $isDragging={isDragging}
            $isHovered={isHovered}
          />
        </ScrollbarTrack>
      </ScrollbarContainer>
    );
  }
);

const ScrollbarContainer = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`;

const ScrollableContent = styled.div<{ $height?: string }>`
  height: ${(props) => props.$height || "100%"};
  overflow-y: auto;
  padding-right: 12px;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollbarTrack = styled(motion.div)`
  position: absolute;
  top: 4px;
  right: 4px;
  bottom: 4px;
  width: 8px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transition: width 0.2s ease;

  &:hover {
    width: 10px;
  }
`;

const ScrollbarThumb = styled(motion.div)<{
  $isDragging?: boolean;
  $isHovered?: boolean;
}>`
  position: absolute;
  width: 100%;
  border-radius: inherit;
  background: ${(props) =>
    props.$isDragging || props.$isHovered
      ? "linear-gradient(180deg, #4caf50 0%, #388e3c 100%)"
      : "linear-gradient(180deg, rgba(76, 175, 80, 0.8) 0%, rgba(56, 142, 60, 0.9) 100%)"};
  cursor: grab;
  touch-action: none;
  will-change: transform, opacity;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:active {
    cursor: grabbing;
    background: linear-gradient(180deg, #4caf50 0%, #388e3c 100%);
  }
`;

CustomScrollbar.displayName = "CustomScrollbar";

export default CustomScrollbar;
