const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmh27ly/",
            name: "ssmh27ly",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmh27ly/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "农产品自主供销小程序"
        } 
    }
}
export default base
