const option = {
  data: function () {
    return {
      count: 0
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
  },
  methods:{
    btnClick(){
      this.count++
      this.$emit("sonClick")
    }
  },
  template:
`
<span>
<button v-on:click.stop="btnClick" :disabled="disabled">
You clicked me {{ count }} times.
</button>
<slot name="btnText"></slot>
</span>
`
}

export default option

