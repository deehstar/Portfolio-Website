export class Tag {

    static readonly ANGULAR = new Tag('Angular', 'Red');
    static readonly JAVA = new Tag('Java', 'royalblue');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
    static readonly ASPNET = new Tag('ASP.NET', 'purple');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');
    static readonly JavaSpring = new Tag('Java Spring', 'springgreen');
    static readonly NODEJS = new Tag('Node.JS', 'brown');

    public constructor(private readonly key: string, public readonly color: string) {

    }
    toString() {
        return this.key;
    }
}