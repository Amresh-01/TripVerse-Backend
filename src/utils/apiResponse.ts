class Apiresponse<T = any> {
  success: boolean;
  statusCode: number;
  message: String;
  data: T;

  constructor(statusCode: number, data: T, message: string = "Successful"){
    this.success = statusCode < 400;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
}
}

export default Apiresponse;