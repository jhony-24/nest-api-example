export type ResponsePayload<T> = {
  result: T;
};

export default function Response<T>(result: T): ResponsePayload<T> {
  return {
    result,
  };
}
