import { defineComponent } from "vue";

export default defineComponent(<T,>(props: { msg: T }) => {
  return () => <div> {props.msg}</div>;
});
