type TParamTypes = Record<string, string | number>;

type TUrlTypes = (param: string | number) => string;

type TEndpoint =
  | {
      url: TUrlTypes | string;
      params?: TParamTypes;
    }
  | string;

type Endpoint = { [key: string]: TEndpoint };

export type IEndpoints = Record<string, Endpoint>;
