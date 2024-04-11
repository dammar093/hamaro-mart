class ApiError extends  Error{
  constructor(
    statusCode,
    message="Something went wrong",
    error,
    success,
    data=null,
    stack=""
  ){
    super(message)
    this.statusCode
    this.success=success
    this.error=error
    this.data=data
   if(stack){
    this.stack=stack
   }
   else{
    Error.captureStackTrace(this,this.consructor)
   }

  }
}