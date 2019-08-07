
const option = {
    data: function () {
        return {
            userName:'',
        }
    },
    methods:{

    },
    computed:{
      homeRoute(){
          let userName = this.userName
          return `/view/${userName}/home`
      },
        helpRoute(){
            let userName = this.userName
            return `/view/${userName}/help`
        },
        helpELRoute(){
            let userName = this.userName
            return `/view/${userName}/helpEL`
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            // 通过 `vm` 访问组件实例
            vm.userName = vm.$route.params.userName
        })
    },
    template:
`
<div>
    <h4>User {{ $route.params.userName }}</h4>
    <router-link :to="homeRoute">Home</router-link>
    <router-link :to="helpRoute">Help</router-link>
    <router-link :to="helpELRoute">Help-EL</router-link>
    <router-view></router-view>
</div>
`
}

export default option

