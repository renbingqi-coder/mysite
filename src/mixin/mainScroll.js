export default function (refValue) {
  return {
    mounted() {
      this.$bus.$on("setMainScroll", this.setMainScroll);
      this.$refs[refValue].addEventListener("scroll", this.eventScroll);
    },
    beforeDestroy() {
      this.$refs[refValue].removeEventListener("scroll", this.eventScroll);
      this.$bus.$off("setMainScroll", this.setMainScroll);
    },
    destroyed() {
      this.$bus.$emit("mainScroll");
    },
    methods: {
      eventScroll(e) {
        this.$bus.$emit("mainScroll", this.$refs[refValue]);
      },
      setMainScroll(top, back) {
        this.$refs[refValue].scrollTop = top;
        setTimeout(() => {
          if (back)
            back();
        }, 1000);
      }
    },
  };
}
