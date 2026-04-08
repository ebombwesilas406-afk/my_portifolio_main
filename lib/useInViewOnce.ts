import { RefObject, useEffect, useState } from "react";

type Options = IntersectionObserverInit & {
  once?: boolean;
};

export default function useInViewOnce<T extends Element>(
  ref: RefObject<T | null>,
  { once = true, root = null, rootMargin = "0px 0px -15% 0px", threshold = 0.12 }: Options = {}
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (once && inView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [inView, once, ref, root, rootMargin, threshold]);

  return inView;
}

