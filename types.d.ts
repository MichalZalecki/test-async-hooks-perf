declare namespace Express {
  export interface Request {
     context: {
       requestId: string;
     }
  }
}
