module.exports = {
    databaseUrl: {
        production: "mongodb://---your database url---/stickynotes",
        development: "mongodb://localhost:27017/stickyNotes",
        test: "#",
    },
    getDatabase:function(){
        return this.databaseUrl["production"];
    }
};
