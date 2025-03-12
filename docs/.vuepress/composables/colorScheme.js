import { ref, onMounted } from "vue";

function useColorScheme() {
    const colorScheme = ref("");

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === "attributes") {
                colorScheme.value = document.getElementsByTagName("html")[0].dataset.theme;
            }
        });
    });

    onMounted(() => {
        colorScheme.value = document.getElementsByTagName("html")[0].dataset.theme;
        observer.observe(document.getElementsByTagName("html")[0], {
            attributes: true
        });
    });

    return { colorScheme };
}

export { useColorScheme };
