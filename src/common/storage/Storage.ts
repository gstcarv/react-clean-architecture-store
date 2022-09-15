export type StorageItem = { [key: string]: any } | any[];

export abstract class Storage {
    abstract getItem<T extends StorageItem>(key: string): T | null;

    abstract setItem(key: string, item: StorageItem): void;

    abstract removeItem(key: string): void;
}
