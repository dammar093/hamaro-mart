class ApiResponse {
  constructor(statusCode, message, error, success,data){
    this.statusCode=statusCode
    this.message=message
    this.error=error
    this.success=success
    this.data=data
  }
}

export default ApiResponse