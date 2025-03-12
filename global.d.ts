type ValueOf<T> = T[keyof T];

type Nullable<T> = T | null;

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

type Rls = LcRecord<string>;

type Rsu = Record<string, unknown>;
type Rsa = Record<string, any>;
type Rss = Record<string, string>;

type RgbTuple = [number, number, number];

type Rcp = { children?: React.ReactNode };
type CanBePromise<T> = T | Promise<T>;

type JsxElement = JSX.Element | null;

type AnyOf<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
  ? ElementType
  : never;
