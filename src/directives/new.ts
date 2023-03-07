/*
import { ref, onMounted, DirectiveBinding } from "vue";

export default {
  name: "LazyLoadingDirective",
  setup() {
    const lazyImageObserver = ref<IntersectionObserver | null>(null);

    const lazyLoad = (el: HTMLImageElement) => {
      const lazyImageObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.src = el.dataset.src!;
              el.classList.remove("lazy");
              lazyImageObserver.unobserve(el);
            }
          });
        },
        { rootMargin: "0px", threshold: 0.1 }
      );

      lazyImageObserver.observe(el);
    };

    const lazyDirective = {
      mounted(el: HTMLImageElement, binding: DirectiveBinding<string>) {
        const spinnerClass = binding.value || "loading";
        el.classList.add("lazy");
        el.classList.add(spinnerClass);
        el.addEventListener("load", () => {
          el.classList.remove("lazy");
          el.classList.remove(spinnerClass);
        });
        if ("IntersectionObserver" in window) {
          lazyLoad(el);
        } else {
          el.src = el.dataset.src!;
        }
      },
    };

    onMounted(() => {
      const lazyImages = document.querySelectorAll(".lazy");
      lazyImages.forEach((lazyImage) => {
        lazyDirective.mounted(lazyImage as HTMLImageElement, {
          value: "loading",
        });
      });
    });

    return {
      lazyImageObserver,
      lazyDirective,
    };
  },
};
*/
