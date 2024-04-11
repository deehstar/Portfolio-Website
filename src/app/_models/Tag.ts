export class Tag {

    static readonly ANGULAR = new Tag('Angular', 'bg-red-500');
    static readonly JAVA = new Tag('Java', 'bg-cyan-400');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'bg-red-700');
    static readonly ASPNET = new Tag('ASP.NET', 'bg-violet-600');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'bg-amber-500');
    static readonly JAVASPRING = new Tag('Java Spring', 'bg-green-400');
    static readonly NODEJS = new Tag('Node.JS', 'bg-yellow-900');

    private constructor(private readonly key: string, public readonly color: string) {

    }
    toString() {
        return this.key;
    }
}