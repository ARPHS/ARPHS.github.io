import MyButton from "../../../components/MyButton/MyButton.js"

const option = {
    data: function () {
        return {
            count: 0
        }
    },
    components:{
        'my-button':MyButton
    },
    methods:{
        clickHandler(){
            alert("被点了");
        }
    },
    template:
`
<div >
    <h3>view 1 </h3>
    <my-button @sonClick="clickHandler" :disabled="false"></my-button>
</div>
`
}

export default option

