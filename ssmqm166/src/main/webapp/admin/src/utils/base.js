const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmqm166/",
            name: "ssmqm166",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmqm166/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "健身小程序"
        } 
    }
}
export default base
