import MyButton from "../MyButton/MyButton.js"

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
            alert("子元素被点了");
        }
    },
    template:
`
<div >
    <h3>Who is Dad ?</h3>
    <my-button @sonClick="clickHandler" :disabled="false">
        <template slot="btnText">嘿嘿</template>
    </my-button>
    <my-button @sonClick="clickHandler" :disabled="true">
        <template slot="btnText">哈哈</template>
    </my-button>
</div>
`
}

export default option

