module.exports = {
    databaseUrl: {
        production: "mongodb://----Database Key---------/stickynotes",
        development: "mongodb://localhost:27017/stickyNotes",
        test: "#",
    },
    getDatabase:function(){
        return this.databaseUrl["production"];
    }
};
