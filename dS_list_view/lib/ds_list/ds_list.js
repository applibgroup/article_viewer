import router from '@system.router';
export default {
    data: {
        container:'',
        img:'',
        text_main_container:"",
        sub_title:"",
        st_author:"",
        base_container:"",
        heading_p:"",
    },
    props:{
        type:'',
        heading:'',
        author:'',
        image:'',
        heading2:'',
        paths:'',


    },
    onInit() {
        if (this.type === "list-item") {
            this.base_container="l-item";
            this.container="list";
            this.img="list-img";
            this.text_main_container="list-main-container";
            this.sub_title="list-sub-title";
            this.st_author="list-st-author";
            this.heading_p=this.heading;
        }
        else if (this.type === "define-item") {
            this.base_container="d-item";
            this.container="define";
            this.img="define-img";
            this.text_main_container="define-main-container";
            this.sub_title="define-sub-title";
            this.st_author="define-st-author";
            this.heading_p=this.heading2;
        }

    },

    explain: function(){
        router.push({
            uri: this.paths
        })
    }


}
