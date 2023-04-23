type IsTuple<T extends ReadonlyArray<any>> = number extends T['length'] ? false : true;
type TupleKey<T extends ReadonlyArray<any>> = Exclude<keyof T, keyof any[]>;
type ArrayKey = number;

type PathImpl<K extends string | number, V> = V extends PropertyKey ? `${K}` : `${K}` | `${K}.${OjectKeys<V>}`;

export type OjectKeys<T> = T extends ReadonlyArray<infer V>
    ? IsTuple<T> extends true
        ? {
              [K in TupleKey<T>]-?: PathImpl<K & string, T[K]>;
          }[TupleKey<T>]
        : PathImpl<ArrayKey, V>
    : {
          [K in keyof T]-?: PathImpl<K & string, T[K]>;
      }[keyof T];
