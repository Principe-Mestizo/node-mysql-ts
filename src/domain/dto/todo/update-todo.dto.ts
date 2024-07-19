export class UpdateTodoDto {

    private constructor(
        public readonly id: number,
        public readonly text?: string,
        public readonly completedAt?: Date,
    ){}


    get values() {
        const returnObj: {[key: string]: any} = {};
        if (this.text) returnObj.text = this.text;
        if (this.completedAt) returnObj.completedAt = this.completedAt;

        return returnObj;
    }

    static create( props: {[key:string]: any}): [string?, UpdateTodoDto?] {


        const { id,text, completedAt} = props;
        let newCompletedAt = completedAt;

        if (!id || isNaN(Number(id))) {
            return ['Id must be a valid number']
        }

        if (completedAt) {
            newCompletedAt = new Date(completedAt);
            if (completedAt.toString() === 'Invalid date') {
                return ['Complete must be a valida date']
            }
        }
        return [undefined, new UpdateTodoDto(id,text, completedAt)]
    }
}