class RuntimeException {

    protected message : string;

    constructor(message: string) {
        this.message = message;
    }

    public getError() {
        return { error: true, message: this.message };
    }
}

export { RuntimeException };