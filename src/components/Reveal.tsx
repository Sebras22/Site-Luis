import { useEffect, useRef, useState, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  fill?: boolean;
}

export default function Reveal({ children, delay = 0, fill }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={shown ? 'reveal in' : 'reveal'} style={{ transitionDelay: `${delay}ms`, height: fill ? '100%' : undefined }}>
      {children}
    </div>
  );
}
