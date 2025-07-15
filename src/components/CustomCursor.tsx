import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, [role="button"], input, textarea, select');
      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden lg:block">
      {/* Main cursor */}
      <div
        className={`fixed w-4 h-4 rounded-full transition-all duration-200 ease-out ${
          isHidden ? 'opacity-0' : 'opacity-100'
        } ${
          isPointer 
            ? 'bg-primary scale-150 shadow-lg shadow-primary/50' 
            : 'bg-primary/80 scale-100'
        }`}
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `translate(${mousePosition.x - 8}px, ${mousePosition.y - 8}px)`,
        }}
      />
      
      {/* Cursor trail */}
      <div
        className={`fixed w-8 h-8 rounded-full border-2 border-primary/30 transition-all duration-500 ease-out ${
          isHidden ? 'opacity-0' : 'opacity-100'
        } ${
          isPointer ? 'scale-200' : 'scale-100'
        }`}
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`,
        }}
      />
    </div>
  );
};