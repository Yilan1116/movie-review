package com.yilan.movies;


public class ResultUtil {
    /**
     * 成功且带数据
     **/
    public static Result success(Object object) {
        Result result = new Result();
        result.setCode(result.getCode());
        result.setMsg(result.getMsg());
        result.setData(object);
        return result;
    }

    /**
     * 成功但不带数据
     **/
    public static Result success() {

        return success(null);
    }

    /**
     * 失败
     **/
    public static Result error(Object object) {
        Result result = new Result();
        result.setCode(result.getCode());
        result.setMsg(result.getMsg());
        result.setData(object);
        return result;
    }
}
