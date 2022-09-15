export class FakeLocalStorage implements Storage {
    storage: { [key: string]: string } = {};

    length = 0;

    clear(): void {
        this.storage = {};
    }

    getItem(key: string): string | null {
        return this.storage[key];
    }

    key(index: number): string | null {
        return Object.keys(this.storage)[index];
    }

    removeItem(key: string): void {
        delete this.storage[key];
    }

    setItem(key: string, value: string): void {
        this.storage[key] = value;
    }
}
