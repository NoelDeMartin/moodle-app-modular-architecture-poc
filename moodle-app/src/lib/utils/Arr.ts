export class Arr {

    static flatten<T>(arr: T[][]): T[] {
        if ('flat' in arr) {
            return (arr as any).flat();
        }

        return [].concat(...arr as any);
    }

}
