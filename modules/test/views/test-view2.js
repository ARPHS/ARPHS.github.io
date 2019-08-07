import ParentButton from "../../../components/ParentButton/ParentButton.js"

const option = {
    data: function () {
        return {
            count: 0
        }
    },
    components:{
        'parent-button':ParentButton
    },
    methods:{

    },
    template:
`
<div >
    <h3>view 2 </h3>
    <parent-button></parent-button>
</div>
`
}

export default option

