import slides from "./data";

export default {
    slides,
    getStepFromPath(path) {
        return slides.findIndex(slide => slide.path === path);
    },
    getPreviousPath(current) {
        const step = this.getStepFromPath(current);
        if (step === 0) {
            return;
        }
        const slide = this.slides[step - 1];
        return slide.path;
    },
    getNextPath(current) {
        const step = this.getStepFromPath(current);
        if (step === this.slides.length - 1) {
            return;
        }
        const slide = this.slides[step + 1];
        return slide.path;
    }
}
