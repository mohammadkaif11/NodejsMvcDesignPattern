class ApiResponse{
    constructor(code,message,data){
      this.code=code;
      this.message=message;
      this.data=data;
    }
    static SuccessResponse(msg){
      return new ApiError(code,message,data);
    }
}
  module.exports=ApiResponse;