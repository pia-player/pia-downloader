declare namespace XJ {
  interface APIResponse<T = any> {
    r: number;
    data: T;
  }

  interface BGM {
    id: number;
    name: string;
    duration: number;
    size: number;
    url: string;
    hash: string;
    filepath?: string;
  }
}
