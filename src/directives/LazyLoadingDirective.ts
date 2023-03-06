import { DirectiveBinding } from "vue";

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target instanceof HTMLImageElement) {
        const img = new Image();
        img.src = entry.target.dataset.src!;
        img.onload = () => {
          // @ts-ignore
          entry.target.src = entry.target.dataset.src!;
          entry.target.classList.remove("lazy");
          observer.unobserve(entry.target);
        };
      }
    });
  },
  { rootMargin: "0px", threshold: 0.1 }
);

const lazyImageDirective = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    el.classList.add("lazy");
    el.dataset.src = binding.value;
    observer.observe(el);
  },
  beforeUnmount(el: HTMLElement) {
    observer.unobserve(el);
  },
};

export default lazyImageDirective;
