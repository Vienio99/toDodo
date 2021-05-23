class Todo {

    constructor(title, branch, priority, status) {
        this.title = title;
        this.branch = branch;
        this.priority = priority;
        this.status = status;
    };

    get name() {
        return this.name;
    };

    set name(value) {
        this.name = value;
    };
};

export default Todo;